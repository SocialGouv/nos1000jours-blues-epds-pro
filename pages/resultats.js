import { useMutation } from "@apollo/client"
import {} from "@dataesr/react-dsfr"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { React, useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"

import { client, EPDS_PARTAGE_INFORMATION } from "../apollo-client"
import { HeaderImage } from "../src/components/HeaderImage"
import { ContentLayout } from "../src/components/Layout"
import { ResultsTab } from "../src/components/ResultsTab"
import {
  LOCAL_IDENTIFIANT_FRANCAIS,
  PATTERN_EMAIL,
  STORAGE_NOM_PATIENT,
  STORAGE_PRENOM_PATIENT,
  STORAGE_RESULTS_BOARD,
  STORAGE_RESULTS_BOARD_TRANSLATED,
  STORAGE_RESULTS_ID,
  STORAGE_RESULTS_LOCALE,
  STORAGE_TOTAL_SCORE,
  URL_1000J,
} from "../src/constants/constants"
import { getInLocalStorage, jsonParse } from "../src/constants/utils"

export default function Resultats() {
  const { t } = useTranslation("resultats")

  return (
    <ContentLayout title={t("header")}>
      <HeaderImage image="/img/bg-espace-pro.png" title={t("header")} />

      <Col className="page-content" style={{ alignItems: "center" }}>
        <h3 className="page-title">{t("resultat")}</h3>
        <FormContact translation={t} />
        <AdsForApp translation={t} />
      </Col>

      <ComprendreTestStyle />
    </ContentLayout>
  )
}

const FormContact = (props) => {
  const [canSend, setCanSend] = useState(false)
  const [isEmailValid, setEmailValid] = useState(false)
  const [isPhoneValid, setPhoneValid] = useState(false)
  const [isEmailProValid, setEmailProValid] = useState(false)
  const [isEmailProSecondaireValid, setEmailProSecondaireValid] =
    useState(false)
  const [queryShareResponses, setQueryShareResponses] = useState()

  const score = getInLocalStorage(STORAGE_TOTAL_SCORE)
  const resultsId = getInLocalStorage(STORAGE_RESULTS_ID)
  const resultsBoard = jsonParse(getInLocalStorage(STORAGE_RESULTS_BOARD))
  const resultsBoardTranslated = jsonParse(
    getInLocalStorage(STORAGE_RESULTS_BOARD_TRANSLATED)
  )
  const resultsLocale = jsonParse(getInLocalStorage(STORAGE_RESULTS_LOCALE))

  const [sendEmailReponseQuery] = useMutation(EPDS_PARTAGE_INFORMATION, {
    client: client,
    onCompleted: () => {
      setQueryShareResponses(props.translation("query-success"))
    },
    onError: (err) => {
      console.warn(err)
      setQueryShareResponses(err.toString())
    },
  })

  const shareEpdsResults = async (inputs) => {
    if (canSend) {
      const name = localStorage.getItem(STORAGE_NOM_PATIENT)
      const surname = localStorage.getItem(STORAGE_PRENOM_PATIENT)

      // TODO: revoir les Questions/Réponses envoyées par mail si besoin d'une traduction
      await sendEmailReponseQuery({
        variables: {
          detail_questions: resultsBoard.map((data) => data.question),
          detail_reponses: resultsBoard.map((data) => data.response),
          detail_score: resultsBoard.map((data) => data.points).map(String),
          email: inputs.inputEmail.value,
          email_pro: inputs.inputEmailPro.value,
          email_pro_secondaire: inputs.inputEmailProSecondaire.value,
          nom: name,
          prenom: surname,
          score: score,
          telephone: inputs.inputTel.value,
          id_reponses: resultsId,
        },
      })
    }
  }

  const send = async (event) => {
    event.preventDefault()
    shareEpdsResults(event.target)
  }

  useEffect(() => {
    setCanSend(isEmailProValid)
  }, [isEmailProValid])

  function handleChange(e) {
    switch (e.target.id) {
      case "inputEmail":
        setEmailValid(e.target.validity.valid)
        break
      case "inputTel":
        setPhoneValid(e.target.validity.valid)
        break
      case "inputEmailPro":
        setEmailProValid(e.target.validity.valid)
        break
      case "inputEmailProSecondaire":
        setEmailProSecondaireValid(e.target.validity.valid)
        break
    }
  }

  return (
    <div>
      <div className="font-weight-bold resultats-score">
        {props.translation("tab.score")} {score} / 30
      </div>
      <p>
        {resultsLocale &&
        resultsLocale.identifiant != LOCAL_IDENTIFIANT_FRANCAIS
          ? `Le test a été passé dans la langue : ${resultsLocale.libelle_francais}`
          : null}
      </p>
      <ResultsTab
        translation={props.translation}
        resultsBoard={resultsBoard}
        resultsId={resultsId}
        locale={resultsLocale}
        resultsBoardTranslated={resultsBoardTranslated}
      />

      <div className="font-weight-bold" style={{ marginBottom: 20 }}>
        {props.translation("form.email-pro1-intro")}
      </div>
      <form onSubmit={send}>
        <div
          className={`form-group fr-input-group resultats-form-input ${
            isEmailProValid ? "fr-input-group--valid" : ""
          }`}
        >
          <label>{props.translation("form.email-pro1")}</label>
          <input
            type="email"
            className={`form-control fr-input custom-input ${
              isEmailProValid ? "custom-input-valid" : ""
            }`}
            id="inputEmailPro"
            name="inputEmailPro"
            pattern={PATTERN_EMAIL}
            onChange={handleChange}
            placeholder={props.translation("form.email-pro1-hint")}
            required
          />
        </div>
        <div
          className={`form-group fr-input-group resultats-form-input ${
            isEmailProSecondaireValid ? "fr-input-group--valid" : ""
          }`}
        >
          <label>{props.translation("form.email-pro2")}</label>
          <input
            type="email"
            className={`form-control fr-input custom-input ${
              isEmailProSecondaireValid ? "custom-input-valid" : ""
            }`}
            id="inputEmailProSecondaire"
            name="inputEmailProSecondaire"
            pattern={PATTERN_EMAIL}
            onChange={handleChange}
            placeholder={props.translation("form.email-pro2-hint")}
          />
        </div>
        <div
          className={`form-group fr-input-group resultats-form-input ${
            isEmailValid ? "fr-input-group--valid" : ""
          }`}
        >
          <label>{props.translation("form.email")}</label>
          <input
            type="email"
            className={`form-control fr-input custom-input ${
              isEmailValid ? "custom-input-valid" : ""
            }`}
            id="inputEmail"
            name="inputEmail"
            pattern={PATTERN_EMAIL}
            onChange={handleChange}
            placeholder={props.translation("form.email-hint")}
          />
        </div>
        <div
          className={`form-group fr-input-group resultats-form-input ${
            isPhoneValid ? "fr-input-group--valid" : ""
          }`}
        >
          <label>{props.translation("form.telephone")}</label>
          <input
            type="tel"
            className={`form-control fr-input custom-input ${
              isPhoneValid ? "custom-input-valid" : ""
            }`}
            id="inputTel"
            name="inputTel"
            pattern="[0-9]{10}"
            onChange={handleChange}
            placeholder={props.translation("form.telephone-hint")}
          />
        </div>

        <Col style={{ marginBottom: 20 }}>
          <Row style={{ justifyContent: "center" }}>
            <button
              type="submit"
              className="fr-btn"
              disabled={!canSend}
              style={{ marginTop: 23 }}
            >
              {props.translation("form.envoyer")}
            </button>
          </Row>
          <Row style={{ justifyContent: "center" }}>{queryShareResponses}</Row>
        </Col>
      </form>
    </div>
  )
}

const AdsForApp = ({ translation }) => (
  <div className="resultats-appl-bloc">
    <span className="font-weight-bold" style={{ fontSize: 24 }}>
      {translation("appli.app-1000j")}
    </span>
    <p style={{ lineHeight: "32px", paddingTop: 10 }}>
      {translation("appli.app-1000j-content")}
    </p>
    <div>
      {translation("appli.telecharger")}
      <a
        href={URL_1000J}
        target="_blank"
        style={{ textDecoration: "underline" }}
        rel="noreferrer"
      >
        {URL_1000J}
      </a>
    </div>
    <table style={{ marginTop: 15 }}>
      <tbody>
        <tr>
          <td>
            <img
              alt=""
              src="/img/icone-playstore.svg"
              height={35}
              style={{ marginRight: 20 }}
            />
          </td>
          <td>
            <img alt="" src="/img/icone-appstore.svg" height={35} />
          </td>
        </tr>
        <tr>
          <td>
            <img
              alt=""
              src="/img/QR_google.png"
              height={96}
              style={{ marginRight: 20, marginTop: 10 }}
            />
          </td>
          <td>
            <img
              alt=""
              src="/img/QR_apple.png"
              height={96}
              style={{ marginTop: 10 }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "footer",
      "resultats",
    ])),
  },
})

const ComprendreTestStyle = () => (
  <style jsx="true">{`
    .resultats-form-input {
      max-width: 400px;
    }

    .resultats-score {
      margin-bottom: 40px;
      text-align: center;
      font-size: 24px;
    }

    .resultats-appl-bloc {
      margin-top: 60px;
      padding: 20px 30px 20px 30px;
      background-color: var(--gris);
      border-left: 4px solid var(--bleu-france);
    }
  `}</style>
)
