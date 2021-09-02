import { React, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AccordionItem, Accordion } from '@dataesr/react-dsfr';

import { ContentLayout } from "../src/components/Layout";
import { HeaderImage } from "../src/components/HeaderImage";
import { PATTERN_EMAIL, URL_1000J } from "../src/constants/constants";
import { epdsContact, epdsSitesEtLignes } from "../src/constants/epdsResultInformation";

export default function Resultats() {
    const { t } = useTranslation('resultats');

    function sendResultsByEmail() {
        // TODO: send email
    }

    return (
        <ContentLayout title={t("header")}>
            <HeaderImage image="/img/bg-espace-pro.png" title={t("header")} />

            <Col className="page-content" style={{ alignItems: "center" }}>
                <h3 className="page-title">{t("resultat")}</h3>

                <Row style={{ diplay: "flex" }}>
                    <Col>
                        <p className="font-weight-bold resultats-text">{t("oser-parler")}</p>
                        <p className="resultats-text">{t("les-changements")}</p>
                        <p className="font-weight-bold resultats-text">{t("invitation-a-refaire")}</p>
                    </Col>
                    <Col>
                        <FormContact translation={t} onclick={sendResultsByEmail} />
                    </Col>
                </Row>

                <AccordionResources translation={t} />
                <AdsForApp translation={t} />
            </Col >

            <ComprendreTestStyle />
        </ContentLayout >
    );
}

function FormContact(props) {
    const [canSend, setCanSend] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPhoneValid, setPhoneValid] = useState(false);
    const [isEmailProValid, setEmailProValid] = useState(false);

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
            <div className="font-weight-bold" style={{ fontSize: 13, marginBottom: 20 }}>{props.translation("form.intro-contact")}</div>
            <form onSubmit={props.onclick}>
                <div className={`form-group fr-input-group ${isEmailValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="text-input-valid">{props.translation("form.email")}</label>
                    <input type="email"
                        className={`form-control fr-input custom-input ${isEmailValid ? "custom-input-valid" : ""}`}
                        id="inputEmail"
                        name="inputEmail"
                        pattern={PATTERN_EMAIL}
                        onChange={handleChange}
                        required />
                </div>
                <div className={`form-group fr-input-group ${isPhoneValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="text-input-valid">{props.translation("form.telephone")}</label>
                    <input type="tel"
                        className={`form-control fr-input custom-input ${isPhoneValid ? "custom-input-valid" : ""}`}
                        id="inputTel"
                        name="inputTel"
                        pattern="[0-9]{10}"
                        onChange={handleChange} />
                </div>
                <div className={`form-group fr-input-group ${isEmailProValid ? "fr-input-group--valid" : ""}`}>
                    <label className="fr-label" for="text-input-valid">{props.translation("form.email-pro")}</label>
                    <input type="email"
                        className={`form-control fr-input custom-input ${isEmailProValid ? "custom-input-valid" : ""}`}
                        id="inputEmailPro"
                        name="inputEmailPro"
                        pattern={PATTERN_EMAIL}
                        onChange={handleChange} />
                </div>

                <div className="champs-obligatoires" style={{ fontSize: 13 }}>{props.translation("form.email-pro-existe")}</div>
                <button type="submit"
                    className="fr-btn"
                    disabled={!canSend}
                    style={{ marginTop: "23px" }}>{props.translation("form.envoyer")}</button>
            </form>
        </div>
    )
}

const AccordionResources = ({ translation }) => (
    <Accordion>
        <AccordionItem title={translation("accordion.professionnels-sante")}>
            <ItemSante />
        </AccordionItem>
        <AccordionItem title={translation("accordion.sites-information-orientation")}>
            <ItemSiteInformationOrientation translation={translation} />
        </AccordionItem>
        <AccordionItem title={translation("accordion.ressouces")}>
            <ItemResources />
        </AccordionItem>
        <AccordionItem title={translation("accordion.contacter")}>
            <ItemContacter />
        </AccordionItem>
    </Accordion >
)

const ItemSante = () => (
    <div>Accordion Item #1</div>
)

const ItemSiteInformationOrientation = ({ translation }) => (
    <div className="resultats-contact">
        <p className="font-weight-bold">{translation("accordion.sites-lignes-telephoniques")}</p>
        <div div className="resultats-contact-item" >
            {
                epdsSitesEtLignes.map((contact, index) => {
                    return (
                        <div style={{ marginBottom: 30 }} key={index}>
                            <div className="resultats-contact-title">{contact.contactName}</div>
                            <div>{contact.thematic}</div>
                            <div className="font-weight-bold">{contact.openingTime}</div>
                            <div className="font-weight-bold">{contact.phoneNumber}</div>
                        </div>
                    )
                })
            }
        </div>
    </div >
)

const ItemResources = () => (
    <div>Accordion Item #3</div>
)

const ItemContacter = () => (
    <div>
        <b>{epdsContact.title}</b>
        <p style={{ textAlign: "justify" }}>{epdsContact.content}</p>
    </div>
)

const AdsForApp = ({ translation }) => (
    <div className="resultats-appl-bloc">
        <span className="font-weight-bold" style={{ fontSize: 24 }}>{translation("appli.app-1000j")}</span>
        <p style={{ paddingTop: 10, lineHeight: "32px" }}>{translation("appli.app-1000j-content")}</p>
        <div>{translation("appli.telecharger")}
            <a href={URL_1000J} target="_blank" style={{ textDecoration: "underline" }}>{URL_1000J}</a>
        </div>
        <table style={{ marginTop: 15 }}>
            <tr>
                <td><img src="/img/icone-playstore.svg" height={35} style={{ marginRight: 20 }} /></td>
                <td><img src="/img/icone-appstore.svg" height={35} /></td>
            </tr>
            <tr>
                <td><img src="/img/QR_google.png" height={96} style={{ marginTop: 10, marginRight: 20 }} /></td>
                <td><img src="/img/QR_apple.png" height={96} style={{ marginTop: 10 }} /></td>
            </tr>
        </table>

    </div >
)

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
    <style jsx="true">{`
    .resultats-text {
        font-size: 13px;
    }

    .resultats-appl-bloc {
        margin-top: 60px;
        padding:20px 30px 20px 30px;
        background-color: var(--gris);
        border-left: 4px solid var(--bleu-france);
    }

    .resultats-contact {
        font-size: 14px;
    }

    .resultats-contact-title {
        color: var(--jaune-courant);
        font-weight: bold;
        line-height: 19px;
    }

    .resultats-contact-item {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .resultats-contact-item div {
        padding-right: 10px;
    }
    `}</style>
);
