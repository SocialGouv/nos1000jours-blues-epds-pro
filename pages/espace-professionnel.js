import { React, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { } from '@dataesr/react-dsfr';


import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";


export default function EspaceProfessionnel() {
    const { t } = useTranslation('espace-professionnel');
    const router = useRouter()

    const [canValidate, setCanValidate] = useState(false);
    const [isNameValid, setNameValid] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);

    const nextPage = async event => {
        event.preventDefault()

        localStorage.setItem("emailPro", event.target.inputEmail.value);
        localStorage.setItem("nomPro", event.target.inputName.value);

        router.push({
            pathname: "/comprendre-test"
        })
    }

    useEffect(() => {
        setCanValidate(isNameValid && isEmailValid);
    }, [isNameValid, isEmailValid]);

    function handleChange(e) {
        if (e.target.id == "inputName") {
            setNameValid(e.target.validity.valid)
        } else if (e.target.id == "inputEmail") {
            setEmailValid(e.target.validity.valid)
        }
    }

    return (
        <ContentLayout title={t("espace-pro")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("espace-pro")} />
            <Col className="page-content">
                <h3 className="page-title">{t("acces-a-l-espace")}</h3>
                <label className="espace-pro-texte-explicatif">{t("texte-explicatif")}</label>
                <label className="espace-pro-informations page-subtitle">{t("vos-informations")}</label>

                <form onSubmit={nextPage}>
                    <div className={`form-group custom-input-row fr-input-group ${isNameValid ? "fr-input-group--valid" : ""}`}>
                        <label className="fr-label" for="text-input-valid">{t("nom")}</label>
                        <div className="col-sm-6" style={{ paddingLeft: "0" }}>
                            <input type="text"
                                className={`form-control fr-input custom-input ${isNameValid ? "custom-input-valid" : ""}`}
                                id="inputName"
                                name="inputName"
                                onChange={handleChange}
                                required />
                        </div>
                    </div>
                    <div className={`form-group custom-input-row fr-input-group ${isEmailValid ? "fr-input-group--valid" : ""}`}>
                        <label className="fr-label" for="text-input-valid">{t("email")}</label>
                        <div className="col-sm-8" style={{ paddingLeft: "0" }}>
                            <input type="email"
                                className={`form-control fr-input custom-input ${isEmailValid ? "custom-input-valid" : ""}`}
                                pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
                                id="inputEmail"
                                name="inputEmail"
                                onChange={handleChange}
                                required />
                        </div>
                    </div>

                    <div className="champs-obligatoires">{t("champs-obligatoire")}</div>
                    <button type="submit"
                        className="fr-btn"
                        disabled={!canValidate}
                        style={{ marginTop: "23px" }}>{t("me-connecter")}</button>
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
    `}</style>
);
