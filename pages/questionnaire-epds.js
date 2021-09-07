import { React, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { } from '@dataesr/react-dsfr';
import { useMutation } from "@apollo/client";
import { Carousel, Col, ProgressBar, Row } from "react-bootstrap";

import { client, EPDS_ADD_RESPONSE, QUESTIONNAIRE_EPDS } from "../apollo-client";
import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";
import { EpdsQuestion } from "../src/components/EpdsQuestion";
import { STORAGE_GENRE_PATIENT, STORAGE_TOTAL_SCORE } from "../src/constants/constants";

export default function QuestionnaireEPDS({ questionsEpds, scoreBoard }) {
    const { t } = useTranslation('questionnaire-epds');
    const router = useRouter();
    const ref = useRef(null);

    const [actualIndex, setActualIndex] = useState(1);
    const [isEnabledNextButton, setEnabledNextButton] = useState(false);
    const [sendScore, setSendScore] = useState(false);

    const [addReponseQuery] = useMutation(EPDS_ADD_RESPONSE, {
        client: client,
        onError: (err) => {
            console.log(err);
        },
    });

    const nextPage = async event => {
        event.preventDefault();
        setSendScore(true)

        localStorage.setItem(STORAGE_TOTAL_SCORE, scoreBoard.reduce((a, b) => a + b, 0));

        router.push({
            pathname: "/resultats"
        })
    }

    useEffect(() => {
        const saveEpdsResults = async () => {
            if (sendScore) {
                const result = scoreBoard.reduce((a, b) => a + b, 0);
                const newCounter = 1;
                const genderValue = localStorage.getItem(STORAGE_GENRE_PATIENT);

                await addReponseQuery({
                    variables: {
                        compteur: newCounter,
                        genre: genderValue,
                        reponseNum1: scoreBoard[0],
                        reponseNum10: scoreBoard[9],
                        reponseNum2: scoreBoard[1],
                        reponseNum3: scoreBoard[2],
                        reponseNum4: scoreBoard[3],
                        reponseNum5: scoreBoard[4],
                        reponseNum6: scoreBoard[5],
                        reponseNum7: scoreBoard[6],
                        reponseNum8: scoreBoard[7],
                        reponseNum9: scoreBoard[8],
                        score: result,
                    },
                });
            }
        };

        saveEpdsResults();
    }, [sendScore]);

    useEffect(() => {
        setEnabledNextButton(scoreBoard[actualIndex - 1] != null);
    }, [actualIndex]);

    const onPreviousQuestion = () => {
        ref.current.prev();
        setActualIndex(actualIndex - 1);
    };

    const onNextQuestion = () => {
        ref.current.next();
        setActualIndex(actualIndex + 1);
    };

    return (
        <ContentLayout title={t("questionnaire-epds")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("questionnaire-epds")} />

            <div className="page-content" style={{ alignItems: "center" }}>
                <div className="questionnaire">
                    {t("introduction1")}
                    <span className="font-weight-bold">{t("introduction2")}</span>
                    {t("introduction3")}
                </div>

                <QuestionsCarousel
                    questions={questionsEpds}
                    refForOnClick={ref}
                    scoreBoard={scoreBoard}
                    setEnabledNextButton={setEnabledNextButton} />
                <PreviousAndNextButton translation={t}
                    onPrevious={onPreviousQuestion}
                    onNext={onNextQuestion}
                    showPrevious={actualIndex > 1}
                    isEnabledNext={isEnabledNextButton}
                    showNext={actualIndex < questionsEpds.length}
                    nextPage={nextPage} />
                <QuestionsProgressBar indexNow={actualIndex} size={questionsEpds.length} />
            </div>

            <ComprendreTestStyle />
        </ContentLayout >
    );
}

const QuestionsCarousel = ({ questions, refForOnClick, scoreBoard, setEnabledNextButton }) => (
    <Carousel interval={null} controls={false} indicators={false} ref={refForOnClick}>
        {questions.map((question, index) => {
            return (
                <Carousel.Item key={question.ordre}>
                    <EpdsQuestion className="d-block w-100"
                        question={question}
                        scoreBoard={scoreBoard}
                        setEnabledNextButton={setEnabledNextButton} />
                </Carousel.Item>
            )
        })}
    </Carousel >
);

const PreviousAndNextButton = (props) => (
    <div className="questionnaire-buttons" style={{ justifyContent: props.showPrevious ? "space-between" : "flex-end" }}>
        <button className="fr-btn fr-btn--secondary"
            onClick={props.onPrevious}
            style={{ display: props.showPrevious ? "block" : "none" }}>
            <img src="/img/icone-precedent.svg" height={10} style={{ marginRight: 10 }} />
            {props.translation("precedent")}
        </button>

        <button className="fr-btn fr-btn--secondary"
            onClick={props.onNext}
            disabled={!props.isEnabledNext}
            style={{ display: props.showNext ? "block" : "none" }}>
            <img src="/img/icone-suivant.svg" height={10} style={{ marginRight: 10 }} />
            {props.translation("suivant")}
        </button>

        <button className="fr-btn"
            style={{ display: props.showNext ? "none" : "block" }}
            disabled={!props.isEnabledNext}
            onClick={props.nextPage}>
            {props.translation("terminer")}
        </button>
    </div>
);

const QuestionsProgressBar = ({ indexNow, size }) => (
    <div>
        <ProgressBar variant="warning" max={size} now={indexNow} />
        <Row>
            {Array(size + 1).fill(size, 1, 11).map((x, index) => {
                return <Col key={index}
                    className={`${index != indexNow && index != size ? "white-number" : "yellow-number"} `}>{index}</Col>;
            })}
        </Row>
    </div>
);

export const getStaticProps = async ({ locale }) => {
    const { data } = await client.query({
        query: QUESTIONNAIRE_EPDS,
    });

    return ({
        props: {
            ...await serverSideTranslations(locale, ['common', 'footer', 'questionnaire-epds']),
            questionsEpds: data.questionnaireEpds.slice().sort((a, b) => a.ordre - b.ordre),
            scoreBoard: new Array(data.questionnaireEpds.length),
        },
    })
}

const ComprendreTestStyle = () => (
    <style jsx="true">{`
    .questionnaire {
        margin-top: 20px;
        font-style: italic;
        font-size: 13px;
    }

    .questionnaire-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px; 
    }

    .white-number {
        color: white
    }
    .yellow-number {
        color: var(--jaune);
    }
    `}</style>
);