import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { ContentLayout } from "../src/components/Layout";


export default function EspaceProfessionnel() {

    return (
        <ContentLayout title="Mon suivi">
            <PourquoiTestStyle />
        </ContentLayout >
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer', 'espace-professionnel']),
    },
})

const PourquoiTestStyle = () => (
    <style jsx>{`

    `}</style>
);
