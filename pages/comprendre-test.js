import { React, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { } from '@dataesr/react-dsfr';

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";

const Pourquoi = ({ translation }) => (
    <div style={{ textAlign: "justify" }}>
        <p>
            <span className="comprendre-test-label">{translation("constat")}</span>
            {translation("constat-content1")}
            <span className="font-weight-bold">{translation("constat-content2")} </span>
        </p>
        <p>
            <span className="comprendre-test-label">{translation("objectif")}</span>
            <span className="font-weight-bold">{translation("objectif-content1")}</span>
            {translation("objectif-content2")}
        </p>
        <p>
            <span className="comprendre-test-label">{translation("comment")}</span>
            {translation("comment-content1")}
            <span className="font-weight-bold">{translation("comment-content2")}</span>
            {translation("comment-content3")}
        </p>
        <p>
            <span className="comprendre-test-label">{translation("informations")}</span>
            {translation("informations-content1")}
            <span className="font-weight-bold">{translation("informations-content2")}</span>
            {translation("informations-content3")}
            <span className="font-weight-bold">{translation("informations-content4")}</span>
        </p>
        <p>
            <span className="comprendre-test-label">{translation("recommandations")}</span>
            {translation("recommandations-content1")}
            <span className="font-weight-bold">{translation("recommandations-content2")}</span>
        </p>
        <span className="font-weight-bold">{translation("conclusion")}</span>
    </div >
);

const Step = ({ number, title, image }) => (
    <Row style={{ width: "fit-content", marginLeft: "10px !important", marginRight: "10px !important" }}>
        <div className="comprendre-test-step-number">{number}</div>
        <Col style={{ padding: "0px" }}>
            <img src={image} className="comprendre-test-step-image" />
            <div className="text-center comprendre-test-step-text" >{title}</div>
        </Col>
    </Row>
);

function FormInformations(props) {
    const [canValidate, setCanValidate] = useState(false);
    const [isNameValid, setNameValid] = useState(false);
    const [isLastnameValid, setLastnameValid] = useState(false);
    const [isGenderValid, setGenderValid] = useState(false);

    useEffect(() => {
        setCanValidate(isNameValid & isLastnameValid);
    }, [isNameValid, isLastnameValid]);

    function handleChange(e) {
        switch (e.target.id) {
            case "inputName":
                setNameValid(e.target.validity.valid);
                break;
            case "inputLastname":
                setLastnameValid(e.target.validity.valid)
                break;
            case "genderSelect":
                setGenderValid(e.target.selectedIndex > 0)
                break;
        }
    }

    return (
        <div>
            <div className="page-subtitle comprendre-test-informations">Informations</div>
            <form onSubmit={props.onclick}>
                <div className={`form-group fr-input-group ${isGenderValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="genderSelect text-input-valid">{props.translation("genre")}</label>
                    <select className="form-control custom-select col-sm-5"
                        id="genderSelect"
                        name="genderSelect"
                        onChange={handleChange}
                        required>
                        <option>{props.translation("hint-genre")}</option>
                        <option>{props.translation("genre-femme")}</option>
                        <option>{props.translation("genre-homme")}</option>
                    </select>
                </div>
                <Row>
                    <Col className={`form-group fr-input-group ${isLastnameValid ? "fr-input-group--valid" : ""}`}>
                        <label className="fr-label" for="text-input-valid">{props.translation("prenom")}</label>
                        <input type="text"
                            className={`form-control fr-input custom-input ${isLastnameValid ? "custom-input-valid" : ""}`}
                            id="inputLastname"
                            name="inputLastname"
                            onChange={handleChange}
                            required />

                    </Col>
                    <Col className={`form-group fr-input-group ${isNameValid ? "fr-input-group--valid" : ""}`}>
                        <label className="fr-label" for="text-input-valid">{props.translation("nom")}</label>
                        <input type="text"
                            className={`form-control fr-input custom-input ${isNameValid ? "custom-input-valid" : ""}`}
                            id="inputName"
                            name="inputName"
                            onChange={handleChange}
                            required />
                    </Col>
                </Row>

                <div className="champs-obligatoires">{props.translation("champs-obligatoire")}</div>
                <button type="submit"
                    className="fr-btn"
                    disabled={!canValidate}
                    style={{ marginTop: "23px" }}>{props.translation("commencer")}</button>
            </form>
        </div>
    )
}

export default function ComprendreTest() {
    const { t } = useTranslation('comprendre-test');
    const router = useRouter()

    const nextPage = async event => {
        event.preventDefault()

        localStorage.setItem("genrePatient", event.target.genderSelect.value);
        localStorage.setItem("prenomPatient", event.target.inputLastname.value);
        localStorage.setItem("nomPatient", event.target.inputName.value);

        router.push({
            pathname: "/questionnaire-epds"
        })
    }

    return (
        <ContentLayout title={t("comprendre-test")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("comprendre-test")} />

            <Col className="page-content" style={{ alignItems: "center" }}>
                <h3 className="page-title">{t("pourquoi-test")}</h3>
                <Pourquoi translation={t} />

                <div style={{ marginTop: "15px" }}>
                    <div className="comprendre-test-label" style={{ marginBottom: "10px" }}>{t("etapes")}</div>
                    <Row>
                        <Step number="1" title={t("etape-questionner")} image="./img/icone-questionner.svg" />
                        <Step number="2" title={t("etape-ressources")} image="./img/icone-ressources.svg" />
                        <Step number="3" title={t("etape-aide")} image="./img/icone-aide.svg" />
                        <Step number="4" title={t("etape-planning")} image="./img/icone-planning.svg" />
                    </Row>
                </div>

                <FormInformations
                    translation={t}
                    onclick={nextPage} />
            </Col >

            <ComprendreTestStyle />
        </ContentLayout >
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer', 'comprendre-test']),
    },
})

const ComprendreTestStyle = () => (
    <style jsx>{`
    .comprendre-test-label {
        font-weight: bold;
        line-height: 18px;
        color: var(--bleu-courant);
    }

    .comprendre-test-informations {
        font-size: 18px;
        margin-top: 35px;
        margin-bottom: 25px;
    }

    .comprendre-test-step-number {
        font-weight: 900;
        font-size: 35px;
        color: var(--bleu-clair);
        margin-bottom: -3px;
        display: flex;
        align-items: flex-end;
    }

    .comprendre-test-step-image {
        height: 54px;
        width: inherit;
    }

    .comprendre-test-step-text {
        margin-left: -7px !important;
        width: fit-content;
        color: var(--bleu-texte);
        font-size: 12px;
    }
    `}</style>
);
