import { useLazyQuery, useMutation } from "@apollo/client"
import {} from "@dataesr/react-dsfr"
import { useRouter } from "next/router"
import * as React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import {
  Carousel,
  Col,
  Modal,
  ProgressBar,
  Row,
  Spinner,
} from "react-bootstrap"
import { Check2Circle } from "react-bootstrap-icons"

import {
  client,
  EPDS_ADD_RESPONSE,
  QUESTIONNAIRE_EPDS,
  QUESTIONNAIRE_EPDS_TRADUCTION,
} from "../apollo-client"
import { EpdsQuestion } from "../src/components/EpdsQuestion"
import { HeaderImage } from "../src/components/HeaderImage"
import { ContentLayout } from "../src/components/Layout"
import {
  EPDS_SOURCE,
  EpdsGender,
  STORAGE_GENRE_PATIENT,
  STORAGE_RESULTS_BOARD,
  STORAGE_TOTAL_SCORE,
  STORAGE_RESULTS_ID,
  LOCAL_IDENTIFIANT_FRANCAIS,
  STORAGE_RESULTS_LOCALE,
  STORAGE_RESULTS_BOARD_TRANSLATED,
} from "../src/constants/constants"
import { ChooseEpdsLocale } from "../src/modal/ChooseEpdsLocale"

export default function QuestionnaireEPDS({ questionsEpds, resultsBoard }) {
  const { t } = useTranslation("questionnaire-epds")
  const router = useRouter()
  const ref = React.useRef(null)

  const [actualIndex, setActualIndex] = React.useState(1)
  const [isEnabledNextButton, setEnabledNextButton] = React.useState(false)
  const [sendScore, setSendScore] = React.useState(false)
  const [isIdReturned, setIdReturned] = React.useState(false)

  const [showSelectLocal, setShowSelectLocal] = React.useState(true)
  const [localeSelected, setLocaleSelected] = React.useState()
  const [updatedQuestionsEpds, setUpdatedQuestionsEpds] =
    React.useState(questionsEpds)
  const [resultsBoardTranslated, setResultsBoardTranslated] =
    React.useState(resultsBoard)
  const [isFR, setFR] = React.useState(true)

  checkQuestionsOrder(questionsEpds)

  const [addReponseQuery] = useMutation(EPDS_ADD_RESPONSE, {
    client: client,
    onError: (err) => {
      console.warn(err)
    },
    onCompleted: (data) => {
      localStorage.setItem(
        STORAGE_RESULTS_ID,
        data.createReponsesEpd.reponsesEpd.id
      )
      buildResultsBoardInFrench(
        questionsEpds,
        resultsBoardTranslated,
        localeSelected
      )
      setIdReturned(true)
    },
  })

  const [getTranslationsQuery] = useLazyQuery(QUESTIONNAIRE_EPDS_TRADUCTION, {
    client: client,
    onCompleted: (data) => {
      const dataSorted = checkQuestionsOrder([
        ...data.questionnaireEpdsTraductions,
      ])
      setUpdatedQuestionsEpds(dataSorted)
    },
    onError: (err) => {
      console.warn(err)
    },
  })

  const nextPage = async (event) => {
    localStorage.setItem(
      STORAGE_TOTAL_SCORE,
      resultsBoard.map((data) => data.points).reduce((a, b) => a + b, 0)
    )
    localStorage.setItem(
      STORAGE_RESULTS_BOARD_TRANSLATED,
      JSON.stringify(resultsBoard)
    )
    localStorage.setItem(STORAGE_RESULTS_LOCALE, JSON.stringify(localeSelected))

    router.push({
      pathname: "/resultats",
    })
  }

  React.useEffect(() => {
    const saveEpdsResults = async () => {
      if (sendScore) {
        const result = resultsBoard
          .map((data) => data.points)
          .reduce((a, b) => a + b, 0)
        const newCounter = 1

        let genderValue = localStorage.getItem(STORAGE_GENRE_PATIENT)
        if (!genderValue) genderValue = EpdsGender.inconnu.strapiLibelle

        // TODO: ajouter la locale (STORAGE_RESULTS_LOCALE)
        await addReponseQuery({
          variables: {
            compteur: newCounter,
            genre: genderValue,
            reponseNum1: resultsBoard[0].points,
            reponseNum10: resultsBoard[9].points,
            reponseNum2: resultsBoard[1].points,
            reponseNum3: resultsBoard[2].points,
            reponseNum4: resultsBoard[3].points,
            reponseNum5: resultsBoard[4].points,
            reponseNum6: resultsBoard[5].points,
            reponseNum7: resultsBoard[6].points,
            reponseNum8: resultsBoard[7].points,
            reponseNum9: resultsBoard[8].points,
            score: result,
            source: EPDS_SOURCE,
          },
        })
      }
    }

    saveEpdsResults()
  }, [sendScore])

  React.useEffect(() => {
    setEnabledNextButton(resultsBoard[actualIndex - 1] != null)
  }, [actualIndex])

  React.useEffect(() => {
    const translationsQuery = async () => {
      if (!showSelectLocal && localeSelected) {
        if (localeSelected.identifiant == LOCAL_IDENTIFIANT_FRANCAIS) {
          setUpdatedQuestionsEpds(questionsEpds)
          setFR(true)
        } else {
          setFR(false)
          await getTranslationsQuery({
            variables: { locale: localeSelected.identifiant },
          })
        }
      }
    }

    translationsQuery()
  }, [showSelectLocal])

  const onPreviousQuestion = () => {
    ref.current.prev()
    setActualIndex(actualIndex - 1)
  }

  const onNextQuestion = () => {
    ref.current.next()
    setActualIndex(actualIndex + 1)
  }

  return (
    <ContentLayout title={t("questionnaire-epds")}>
      <HeaderImage
        image="/img/bg-espace-pro.png"
        title={t("questionnaire-epds")}
      />

      <ChooseEpdsLocale
        show={showSelectLocal}
        setShow={setShowSelectLocal}
        setLocaleSelected={setLocaleSelected}
      />

      <div
        className="page-content questionnaire-content"
        style={{ alignItems: "center" }}
      >
        <div className="questionnaire">
          {t("introduction1")}
          <span className="font-weight-bold">{t("introduction2")}</span>
          {t("introduction3")}
        </div>

        <QuestionsCarousel
          questions={updatedQuestionsEpds}
          refForOnClick={ref}
          resultsBoard={isFR ? resultsBoard : resultsBoardTranslated}
          setEnabledNextButton={setEnabledNextButton}
        />
        <PreviousAndNextButton
          translation={t}
          onPrevious={onPreviousQuestion}
          onNext={onNextQuestion}
          showPrevious={actualIndex > 1}
          isEnabledNext={isEnabledNextButton}
          showNext={actualIndex < updatedQuestionsEpds.length}
          nextPage={nextPage}
          sendScore={setSendScore}
          isIdReturned={isIdReturned}
        />
        <QuestionsProgressBar
          indexNow={actualIndex}
          size={updatedQuestionsEpds.length}
        />
      </div>

      <ComprendreTestStyle />
    </ContentLayout>
  )
}

export const checkQuestionsOrder = (questionsEpds) => {
  for (const [index, value] of questionsEpds.entries()) {
    if (value.ordre != index + 1) {
      return questionsEpds.sort((a, b) => a.ordre - b.ordre)
    }
  }

  return questionsEpds
}

const QuestionsCarousel = ({
  questions,
  refForOnClick,
  resultsBoard,
  setEnabledNextButton,
}) => (
  <Carousel
    interval={null}
    controls={false}
    indicators={false}
    ref={refForOnClick}
    touch={false}
  >
    {questions.map((question) => {
      return (
        <Carousel.Item key={question.ordre}>
          <EpdsQuestion
            className="d-block w-100"
            question={question}
            resultsBoard={resultsBoard}
            setEnabledNextButton={setEnabledNextButton}
          />
        </Carousel.Item>
      )
    })}
  </Carousel>
)

/**
 * @param {*} questionsEpds : Questions en FR
 * @param {*} results : Resultats dans la langue passée
 * @param {*} localeSelected : Locale de la langue utilisée
 */
const buildResultsBoardInFrench = async (
  questionsEpds,
  results,
  localeSelected
) => {
  /* Lorsque l'on utilisera uniiquement la collection Question_EPDS_Traduction, 
  il faudra adapter la fonction de récupération du questionnaire en français */

  if (
    localeSelected &&
    localeSelected.identifiant != LOCAL_IDENTIFIANT_FRANCAIS
  ) {
    const resultsInFrench = resultsBoardInFrench(questionsEpds, results)
    localStorage.setItem(STORAGE_RESULTS_BOARD, JSON.stringify(resultsInFrench))
  }
}

/**
 * @param {*} questionsEpds : Questions en FR
 * @param {*} results : Resultats dans la langue passée
 * @returns Les questions et réponses du résultat en FR
 */
export const resultsBoardInFrench = (questionsEpds, results) =>
  results.map((question) => {
    const frenchQuestion = questionsEpds.find((element) => {
      return question.order === element.ordre
    })

    let frenchResponse = ""
    switch (question.points) {
      case frenchQuestion.reponse_1_points:
        frenchResponse = frenchQuestion.reponse_1_libelle
        break
      case frenchQuestion.reponse_2_points:
        frenchResponse = frenchQuestion.reponse_2_libelle
        break
      case frenchQuestion.reponse_3_points:
        frenchResponse = frenchQuestion.reponse_3_libelle
        break
      case frenchQuestion.reponse_4_points:
        frenchResponse = frenchQuestion.reponse_4_libelle
        break
      default:
        frenchResponse = "error"
        break
    }

    return {
      order: frenchQuestion.ordre,
      points: question.points,
      question: frenchQuestion.libelle,
      response: frenchResponse,
    }
  })

const PreviousAndNextButton = (props) => (
  <div
    className="questionnaire-buttons"
    style={{
      justifyContent: props.showPrevious ? "space-between" : "flex-end",
    }}
  >
    <button
      className="fr-btn fr-btn--secondary"
      onClick={props.onPrevious}
      style={{ display: props.showPrevious ? "block" : "none" }}
    >
      <img
        alt=""
        src="/img/icone-precedent.svg"
        height={10}
        style={{ marginRight: 10 }}
      />
      {props.translation("precedent")}
    </button>

    <button
      className="fr-btn fr-btn--secondary"
      onClick={props.onNext}
      disabled={!props.isEnabledNext}
      style={{ display: props.showNext ? "block" : "none" }}
    >
      <img
        alt=""
        src="/img/icone-suivant.svg"
        height={10}
        style={{ marginRight: 10 }}
      />
      {props.translation("suivant")}
    </button>

    <ModalEndOfQuestionnaire
      translation={props.translation}
      nextPage={props.nextPage}
      isEnabledNext={props.isEnabledNext}
      showNext={props.showNext}
      sendScore={props.sendScore}
      isIdReturned={props.isIdReturned}
    />
  </div>
)

const QuestionsProgressBar = ({ indexNow, size }) => (
  <div>
    <ProgressBar variant="warning" max={size} now={indexNow} />
    <Row>
      {Array(size + 1)
        .fill(size, 1, 11)
        .map((x, index) => {
          return (
            <Col
              key={index}
              className={`progress-number ${
                index != indexNow && index != size
                  ? "white-number"
                  : "yellow-number"
              } `}
            >
              {index}
            </Col>
          )
        })}
    </Row>
  </div>
)

const ModalEndOfQuestionnaire = (props) => {
  const [show, setShow] = React.useState(false)

  const handleClose = () => setShow(false)
  const handleConfirm = () => {
    props.nextPage()
  }

  return (
    <>
      <button
        className="fr-btn"
        onClick={() => {
          props.sendScore(true)
          setShow(true)
        }}
        style={{ display: props.showNext ? "none" : "block" }}
        disabled={!props.isEnabledNext}
      >
        {props.translation("terminer")}
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="fr-modal__header"
          style={{ borderBottom: "none" }}
        />
        <Modal.Body style={{ textAlign: "center" }}>
          <Check2Circle className="check-icon" /> <br />
          {props.translation("modal.content1")} <br />
          {props.translation("modal.content2")}
        </Modal.Body>
        <Modal.Footer style={{ alignSelf: "center", borderTop: "none" }}>
          <Spinner animation="border" hidden={props.isIdReturned} />
          <button
            variant="primary"
            className="fr-btn"
            disabled={!props.isIdReturned}
            onClick={handleConfirm}
          >
            {props.translation("modal.button")}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  const { data } = await client.query({
    query: QUESTIONNAIRE_EPDS,
  })

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "footer",
        "questionnaire-epds",
      ])),
      questionsEpds: data.questionnaireEpds
        .slice()
        .sort((a, b) => a.ordre - b.ordre),
      resultsBoard: new Array(data.questionnaireEpds.length),
    },
  }
}

const ComprendreTestStyle = () => (
  <style jsx="true">{`
    .questionnaire {
      margin-top: 20px;
      font-style: italic;
    }

    .questionnaire-buttons {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
    }

    .white-number {
      color: white;
    }
    .yellow-number {
      color: var(--jaune);
    }

    .check-icon {
      width: auto;
      height: 100px;
      color: green;
      margin-bottom: 15px;
    }

    @media screen and (max-width: 450px) {
      .progress-number {
        padding-right: 0px;
      }

      .questionnaire-content {
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  `}</style>
)
