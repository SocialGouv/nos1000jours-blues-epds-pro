import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";


export default function EspaceProfessionnel() {
    const { t } = useTranslation('espace-professionnel');
    const router = useRouter()

    const nextPage = async event => {
        event.preventDefault()

        localStorage.setItem("emailPro", event.target.inputEmail.value);
        localStorage.setItem("nomPro", event.target.inputName.value);

        router.push({
            pathname: "/comprendre-test"
        })
    }

    return (
        <ContentLayout title={t("espace-pro")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("espace-pro")} />
            <Col className="page-content">
                <h3 className="page-title">{t("acces-a-l-espace")}</h3>
                <label className="espace-pro-texte-explicatif">{t("texte-explicatif")}</label>
                <label className="espace-pro-informations page-subtitle">{t("vos-informations")}</label>

                <form onSubmit={nextPage}>
                    <div className="form-group custom-input-row">
                        <label className="custom-input-label ">{t("nom")}</label>
                        <div className="col-sm-8">
                            <input type="text"
                                className="form-control custom-input"
                                placeholder={t("hint-nom")}
                                id="inputName"
                                name="inputName"
                                required />
                        </div>
                    </div>
                    <div className="form-group custom-input-row">
                        <label className="custom-input-label">{t("email")}</label>
                        <div className="col-sm-8">
                            <input type="email"
                                className="form-control custom-input"
                                aria-describedby="emailHelp"
                                placeholder={t("hint-email")}
                                id="inputEmail"
                                name="inputEmail"
                                required />
                        </div>
                    </div>

                    <div className="champs-obligatoires">{t("champs-obligatoire")}</div>
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
    .espace-pro-texte-explicatif {
        text-align: justify;
        font-size: 13px;
        line-height: 26px;
    }

    .espace-pro-informations {
        font-size: 22px;
        margin-top: 55px;
        margin-bottom: 25px;
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
