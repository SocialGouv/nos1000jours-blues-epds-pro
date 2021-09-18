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
import {
    API_URL,
    STORAGE_TOTAL_SCORE,
    EPDS_SOURCE,
    EpdsGender,
    STORAGE_RESULTS_BOARD,
    STORAGE_GENRE_PATIENT
} from "../src/constants/constants";
console.log("API_URL:", API_URL);
console.log("process.env.NEXT_PUBLIC_API_URL:", process.env.NEXT_PUBLIC_API_URL);
export default function QuestionnaireEPDS({ questionsEpds, resultsBoard }) {
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

        localStorage.setItem(STORAGE_TOTAL_SCORE,
            resultsBoard
                .map((data) => data.points)
                .reduce((a, b) => a + b, 0)
        );
        localStorage.setItem(STORAGE_RESULTS_BOARD, JSON.stringify(resultsBoard));

        router.push({
            pathname: "/resultats"
        })
    }

    useEffect(() => {
        const saveEpdsResults = async () => {
            if (sendScore) {
                const result = resultsBoard.map((data) => data.points).reduce((a, b) => a + b, 0);
                const newCounter = 1;

                let genderValue = localStorage.getItem(STORAGE_GENRE_PATIENT);
                if (!genderValue) genderValue = EpdsGender.inconnu.strapiLibelle;

                await addReponseQuery({
                    variables: {
                        compteur: newCounter,
                        genre: genderValue,
                        reponseNum1: resultsBoard[0].points,
                        reponseNum2: resultsBoard[1].points,
                        reponseNum3: resultsBoard[2].points,
                        reponseNum4: resultsBoard[3].points,
                        reponseNum5: resultsBoard[4].points,
                        reponseNum6: resultsBoard[5].points,
                        reponseNum7: resultsBoard[6].points,
                        reponseNum8: resultsBoard[7].points,
                        reponseNum9: resultsBoard[8].points,
                        reponseNum10: resultsBoard[9].points,
                        score: result,
                        source: EPDS_SOURCE
                    },
                });
            }
        };

        saveEpdsResults();
    }, [sendScore]);

    useEffect(() => {
        setEnabledNextButton(resultsBoard[actualIndex - 1] != null);
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

            <div className="page-content questionnaire-content" style={{ alignItems: "center" }}>
                <div className="questionnaire">
                    {t("introduction1")}
                    <span className="font-weight-bold">{t("introduction2")}</span>
                    {t("introduction3")}
                </div>

                <QuestionsCarousel
                    questions={questionsEpds}
                    refForOnClick={ref}
                    resultsBoard={resultsBoard}
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

const QuestionsCarousel = ({ questions, refForOnClick, resultsBoard, setEnabledNextButton }) => (
    <Carousel interval={null} controls={false} indicators={false} ref={refForOnClick} touch={false}>
        {questions.map((question, index) => {
            return (
                <Carousel.Item key={question.ordre}>
                    <EpdsQuestion className="d-block w-100"
                        question={question}
                        resultsBoard={resultsBoard}
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
                    className={`progress-number ${index != indexNow && index != size ? "white-number" : "yellow-number"} `}>{index}</Col>;
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
            resultsBoard: new Array(data.questionnaireEpds.length)
        },
    })
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
        color: white
    }
    .yellow-number {
        color: var(--jaune);
    }

    @media screen and (max-width: 450px){
        .progress-number {
            padding-right: 0px;
        }

        .questionnaire-content {
            margin-left: 15px;
            margin-right: 15px;
        }
    }
    `}</style>
);