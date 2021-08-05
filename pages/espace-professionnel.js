import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";


export default function EspaceProfessionnel() {
    const { t } = useTranslation('espace-professionnel');
    const router = useRouter()

    const nextStep = async event => {
        event.preventDefault()

        router.push({
            pathname: "/pourquoi-test",
            query: {
                email: event.target.inputEmail.value,
                name: event.target.inputName.value
            }
        })
    }

    return (
        <ContentLayout title={t("espace-pro")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("espace-pro")} />
            <Col className="espace-pro-content">
                <h3 className="espace-pro-title">{t("acces-a-l-espace")}</h3>
                <label className="espace-pro-texte-explicatif">{t("texte-explicatif")}</label>
                <label className="espace-pro-informations">{t("vos-informations")}</label>

                <form onSubmit={nextStep}>
                    <div className="form-group espace-pro-row">
                        <label className="espace-pro-labels">{t("nom")}</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control espace-pro-input"
                                placeholder={t("hint-nom")}
                                id="inputName"
                                name="inputName"
                                required />
                        </div>
                    </div>
                    <div className="form-group espace-pro-row">
                        <label className="espace-pro-labels">{t("email")}</label>
                        <div className="col-sm-8">
                            <input type="email"
                                className="form-control espace-pro-input"
                                aria-describedby="emailHelp"
                                placeholder={t("hint-email")}
                                id="inputEmail"
                                name="inputEmail"
                                required />
                        </div>
                    </div>

                    <div className="espace-pro-obligatoire">{t("champs-obligatoire")}</div>
                    <button type="submit" className="btn btn-primary espace-pro-button" style={{ marginTop: "23px" }}>{t("me-connecter")}</button>
                </form>
            </Col>

            <EspaceProStyle />
        </ContentLayout >
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer', 'espace-professionnel']),
    },
})

const EspaceProStyle = () => (
    <style jsx>{`
    .espace-pro-content {
        margin-left: 15%;
        margin-right: 15%;
    }

    .espace-pro-title {
        color: var(--bleu-courant);
        text-align: center;
        margin-top: 40px;
    }

    .espace-pro-texte-explicatif {
        text-align: justify;
        margin-top: 38px;
        font-size: 13px;
        line-height: 26px;
    }

    .espace-pro-informations {
        font-family: Comfortaa;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
        color: var(--bleu-texte);
        margin-top: 55px;
        margin-bottom: 25px;
    }

    .espace-pro-labels {
        font-size: 13px;
        line-height: 26px;
        color: var(--gris-texte);
        margin-bottom: 0;
        align-self: center;
    }

    .espace-pro-obligatoire {
        font-size: 10px;
        color: var(--gris-texte);
        font-style: italic;
    }

    .espace-pro-row {
        margin-letf: 0;
        display: flex;
        flex-wrap: wrap;
    }

    .espace-pro-input {
        border: none;
        border-bottom: 1px solid var(--bleu-courant);
        background-color: var(--bleu-clair);
        color: var(--bleu-texte);
        font-family: Marianne;
        font-size: 12px;
        line-height: 17px;
    }
    .espace-pro-input::placeholder {
        color: var(--bleu-courant);
    }
    .espace-pro-input:focus {
        color: var(--bleu-texte);
    }

    .espace-pro-button {
        border-radius: 30px;
        height: 40px;
        text-transform: uppercase;
        font-family: Comfortaa;
        font-size: 16px;
        line-height: 18px;
        color: var(--bleu-clair);
        font-weight: bold;
        padding-left: 20px;
        padding-right: 20px;
    }
    `}</style>
);
