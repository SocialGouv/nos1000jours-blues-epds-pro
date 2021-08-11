import { React } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { } from '@dataesr/react-dsfr';
import { gql } from "@apollo/client";
import client from "../apollo-client";

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";
import { EpdsQuestion } from "../src/components/epdsQuestion";

export default function QuestionnaireEPDS({ questionsEpds }) {
    const { t } = useTranslation('questionnaire-epds');
    const router = useRouter();

    const nextPage = async event => {
        event.preventDefault()

        router.push({
            // TODO:
        })
    }

    return (
        <ContentLayout title={t("questionnaire-epds")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("questionnaire-epds")} />

            <div className="page-content" style={{ alignItems: "center" }}>
                <div className="questionnaire">
                    {t("introduction1")}
                    <span className="font-weight-bold">{t("introduction2")}</span>
                    {t("introduction3")}
                </div>

                <EpdsQuestion question={questionsEpds[0]} />
            </div>

            <ComprendreTestStyle />
        </ContentLayout >
    );
}


export const getStaticProps = async ({ locale }) => {
    const { data } = await client.query({
        query: gql`
          query QuestionnaireEpds {
            questionnaireEpds {
                libelle, 
                ordre,
                locale,
                reponse_1_libelle,
                reponse_1_points,
                reponse_2_libelle,
                reponse_2_points,
                reponse_3_libelle,
                reponse_3_points,
                reponse_4_libelle,
                reponse_4_points,
              }
          }
        `,
    });

    return ({
        props: {
            ...await serverSideTranslations(locale, ['common', 'footer', 'questionnaire-epds']),
            questionsEpds: data.questionnaireEpds,
        },
    })
}

const ComprendreTestStyle = () => (
    <style jsx>{`
    .questionnaire {
        margin-top: 20px;
        font-style: italic;
        font-size: 13px;
    }
    `}</style>
);