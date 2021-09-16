import { React, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { } from '@dataesr/react-dsfr';

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";
import { STORAGE_GENRE_PATIENT, STORAGE_NOM_PATIENT, STORAGE_PRENOM_PATIENT, EpdsGender } from "../src/constants/constants";

const Pourquoi = ({ translation }) => (
    <div style={{ textAlign: "justify" }}>
        <p>
            {translation("introduction.invitation")}<span className="font-weight-bold">EPDS</span>
        </p>
        <p>
            <span className="font-weight-bold">{translation("introduction.explication.partie1")} </span>
            {translation("introduction.explication.partie2")}
        </p>
        <p>
            {translation("introduction.diagnostic.partie1")}
            <span className="font-weight-bold">{translation("introduction.diagnostic.partie2")}</span>
            {translation("introduction.diagnostic.partie3")}
            <span className="font-weight-bold">{translation("introduction.diagnostic.partie4")}</span>
        </p>
    </div >
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
                        <option value={EpdsGender.inconnu.strapiLibelle}>{props.translation("hint-genre")}</option>
                        <option value={EpdsGender.feminin.strapiLibelle}>{props.translation("common:" + EpdsGender.feminin.key)}</option>
                        <option value={EpdsGender.masculin.strapiLibelle}>{props.translation("common:" + EpdsGender.masculin.key)}</option>
                        <option value={EpdsGender.nonBinaire.strapiLibelle}>{props.translation("common:" + EpdsGender.nonBinaire.key)}</option>
                    </select>
                </div>
                <Row>
                    <Col className={`form-group fr-input-group input-name ${isLastnameValid ? "fr-input-group--valid" : ""}`}>
                        <label className="fr-label" for="text-input-valid">{props.translation("prenom")}</label>
                        <input type="text"
                            className={`form-control fr-input custom-input ${isLastnameValid ? "custom-input-valid" : ""}`}
                            id="inputLastname"
                            name="inputLastname"
                            onChange={handleChange}
                            required />

                    </Col>
                    <Col className={`form-group fr-input-group input-name ${isNameValid ? "fr-input-group--valid" : ""}`}>
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
    const { t } = useTranslation(['comprendre-test', 'common']);
    const router = useRouter();

    const nextPage = async event => {
        event.preventDefault()

        localStorage.setItem(STORAGE_GENRE_PATIENT, event.target.genderSelect.value);
        localStorage.setItem(STORAGE_PRENOM_PATIENT, event.target.inputLastname.value);
        localStorage.setItem(STORAGE_NOM_PATIENT, event.target.inputName.value);

        router.push({
            pathname: "/questionnaire-epds"
        })
    }

    return (
        <ContentLayout title={t("comprendre-test")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("comprendre-test")} />

            <Col className="page-content" style={{ alignItems: "center" }}>
                <h3 className="page-title">{t("comprendre-test")}</h3>
                <Pourquoi translation={t} />

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
    <style jsx="true">{`
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

    .input-name {
        min-width: fit-content;
    }
    `}</style>
);
