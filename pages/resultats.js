import { React, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { } from '@dataesr/react-dsfr';

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";
import { PATTERN_EMAIL, STORAGE_EMAIL_PRO } from ".";

export default function Resultats() {
    const { t } = useTranslation('resultats');
    const router = useRouter()

    const nextPage = async event => {
        event.preventDefault()

        router.push({
            // TODO:
        })
    }

    function sendResults() {
        // TODO:
    }

    return (
        <ContentLayout title={t("header")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("header")} />

            <Col className="page-content" style={{ alignItems: "center" }}>
                <h3 className="page-title">{t("resultat")}</h3>

                <Row style={{ diplay: "flex" }}>
                    <Col>
                        <p className="font-weight-bold">{t("oser-parler")}</p>
                        <p>{t("les-changements")}</p>
                        <p className="font-weight-bold">{t("invitation-a-refaire")}</p>
                    </Col>
                    <Col>
                        <FormContact translation={t} onclick={sendResults} />
                    </Col>
                </Row>
            </Col >

            <ComprendreTestStyle />
        </ContentLayout >
    );
}

function FormContact(props) {
    const emailPro = getInLocalStorage(STORAGE_EMAIL_PRO);

    const [canSend, setCanSend] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPhoneValid, setPhoneValid] = useState(false);
    const [isEmailProValid, setEmailProValid] = useState(emailPro);

    useEffect(() => {
        setCanSend(isEmailValid);
    }, [isEmailValid]);

    function handleChange(e) {
        switch (e.target.id) {
            case "inputEmail":
                setEmailValid(e.target.validity.valid);
                break;
            case "inputTel":
                setPhoneValid(e.target.validity.valid);
                break;
            case "inputEmailPro":
                setEmailProValid(e.target.validity.valid);
                break;
        }
    }

    return (
        <div>
            <div className="font-weight-bold" style={{ fontSize: 13, marginBottom: 20 }}>{props.translation("intro-contact")}</div>
            <form onSubmit={props.onclick}>
                <div className={`form-group fr-input-group ${isEmailValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="text-input-valid">{props.translation("email")}</label>
                    <input type="email"
                        className={`form-control fr-input custom-input ${isEmailValid ? "custom-input-valid" : ""}`}
                        id="inputEmail"
                        name="inputEmail"
                        pattern={PATTERN_EMAIL}
                        onChange={handleChange}
                        required />
                </div>
                <div className={`form-group fr-input-group ${isPhoneValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="text-input-valid">{props.translation("telephone")}</label>
                    <input type="tel"
                        className={`form-control fr-input custom-input ${isPhoneValid ? "custom-input-valid" : ""}`}
                        id="inputTel"
                        name="inputTel"
                        pattern="[0-9]{10}"
                        onChange={handleChange} />
                </div>
                <div className={`form-group fr-input-group ${isEmailProValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="text-input-valid">{props.translation("email-pro")}</label>
                    <input type="email"
                        className={`form-control fr-input custom-input ${isEmailProValid ? "custom-input-valid" : ""}`}
                        id="inputEmailPro"
                        name="inputEmailPro"
                        pattern={PATTERN_EMAIL}
                        defaultValue={emailPro}
                        onChange={handleChange} />
                </div>

                <div className="champs-obligatoires" style={{ fontSize: 13 }}>{props.translation("email-pro-existe")}</div>
                <button type="submit"
                    className="fr-btn"
                    disabled={!canSend}
                    style={{ marginTop: "23px" }}>{props.translation("envoyer")}</button>
            </form>
        </div>
    )
}

function getInLocalStorage(key) {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'footer', 'resultats']),
    },
})

const ComprendreTestStyle = () => (
    <style jsx>{`
    
    `}</style>
);
