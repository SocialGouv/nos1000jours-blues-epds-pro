import { Accordion, AccordionItem } from "@dataesr/react-dsfr"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"
import { Col } from "react-bootstrap"

import { ContentLayout } from "../../src/components/Layout"
import {
  epdsContact,
  epdsLignes,
  epdsProfessionnelsSante,
  epdsRessourcesPremiersMois,
  epdsSitesInformation,
} from "../../src/constants/epdsResultInformation"

export default function RessourcesParents() {
  const { t } = useTranslation("ressources-parents")
  const router = useRouter()

  return (
    <ContentLayout title={t("ressources-parents")} style={{ marginInline: 20 }}>
      <div className="container-small-screen">
        <div className="cgu-title">
          <h1>{t("ressources")}</h1>
        </div>

        <Col>
          <span className="font-weight-bold">{t("oser-parler")}</span>
          <br />
          <br />
          <p>{t("les-changements")}</p>
        </Col>

        <AccordionResources
          translation={t}
          sendEmailOnClick={() =>
            router.push(
              `mailto:${epdsContact.mailContact}&subject=${epdsContact.mailSubject}`
            )
          }
        />
      </div>
      <RessourcesParentsStyle />
    </ContentLayout>
  )
}

const AccordionResources = ({ translation, sendEmailOnClick }) => (
  <Accordion className="accordion-smallscreen">
    <AccordionItem title={translation("professionnels-sante")}>
      <ItemProfessionnelsSante translation={translation} />
    </AccordionItem>
    <AccordionItem title={translation("lignes-telephoniques")}>
      <ItemLignesTelephoniques />
    </AccordionItem>
    <AccordionItem title={translation("sites-information")}>
      <ItemSitesInformation />
    </AccordionItem>
    <AccordionItem title={translation("ressouces")}>
      <ItemResources />
    </AccordionItem>
    <AccordionItem title={translation("contacter")}>
      <ItemContacter sendEmailOnClick={sendEmailOnClick} />
    </AccordionItem>
  </Accordion>
)

const ItemProfessionnelsSante = ({ translation }) => (
  <div>
    {epdsProfessionnelsSante.map((resource, index) => (
      <div
        className={`ressources-item ${
          index > 0 ? "ressources-item-border" : ""
        }`}
        key={index}
      >
        <b>{resource.name}</b>
        <br />
        {resource.description}
        <br />
        {resource.url
          ? showUrl(resource.url, translation("consulter-document"))
          : ""}
      </div>
    ))}
  </div>
)

const showUrl = (url, text) => (
  <a
    href={url}
    target="_blank"
    style={{ textDecoration: "underline" }}
    rel="noreferrer"
  >
    {text}
  </a>
)

const ItemSitesInformation = () => (
  <div>
    {epdsSitesInformation.map((site, index) => (
      <div key={index}>
        {showUrl(site.url, site.url)}
        <br />
      </div>
    ))}
  </div>
)

const ItemLignesTelephoniques = () => (
  <div style={{ fontSize: 14 }}>
    <div className="ressources-contact-item">
      {epdsLignes.map((contact, index) => (
        <div style={{ marginBottom: 30 }} key={index}>
          <div className="ressources-contact-title">{contact.contactName}</div>
          <div>{contact.thematic}</div>
          <div className="font-weight-bold">{contact.openingTime}</div>
          <div style={{ display: "-webkit-inline-box" }}>
            <img
              alt=""
              height={17}
              style={{ marginRight: 10 }}
              src="/img/icone-telephone.svg"
            />
            <div className="font-weight-bold">{contact.phoneNumber}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ItemResources = () => (
  <div>
    {epdsRessourcesPremiersMois.map((resource, index) => (
      <div
        className={`ressources-item ${
          index > 0 ? "ressources-item-border" : ""
        }`}
        key={index}
      >
        <b>{resource.name}</b>
        {resource.description}
      </div>
    ))}
  </div>
)

const ItemContacter = ({ sendEmailOnClick }) => (
  <div style={{ textAlign: "center" }}>
    <p style={{ textAlign: "justify" }}>{epdsContact.content}</p>
    <button className="fr-btn" onClick={sendEmailOnClick}>
      {epdsContact.button}
    </button>
  </div>
)

const RessourcesParentsStyle = () => (
  <style jsx="true">{`
    .ressources-contact-title {
      color: var(--jaune-courant);
      font-weight: bold;
      line-height: 19px;
    }

    .ressources-contact-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .ressources-contact-item div {
      padding-right: 10px;
    }

    .ressources-item {
      text-align: justify;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .ressources-item-border {
      border-top: 2px solid var(--gris);
    }

    @media screen and (max-width: 450px) {
      .container-small-screen {
        margin-inline: 20px;
      }

      .ressources-contact-item {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `}</style>
)

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "footer",
      "ressources-parents",
    ])),
  },
})
