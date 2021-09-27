import React from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AccordionItem, Accordion } from '@dataesr/react-dsfr';

import { ContentLayout } from "../../src/components/Layout";
import {
  epdsContact,
  epdsLignes,
  epdsProfessionnelsSante,
  epdsRessourcesPremiersMois,
  epdsSitesInformation
} from "../../src/constants/epdsResultInformation";


export default function RessourcesParents() {
  const { t } = useTranslation('ressources-parents');

  return (
    <ContentLayout title={t("ressources-parents")} >
      <div className="cgu-title">
        <h1>{t("ressources")}</h1>
      </div>

      <AccordionResources translation={t}
        sendEmailOnClick={() => router.push(`mailto:${epdsContact.mailContact}&subject=${epdsContact.mailSubject}`)} />

      <RessourcesParentsStyle />
    </ContentLayout>
  );
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
  </Accordion >
)

const ItemProfessionnelsSante = ({ translation }) => (
  <div>
    {epdsProfessionnelsSante.map((resource, index) =>
      <div className={`ressources-item ${index > 0 ? "ressources-item-border" : ""}`} key={index} >
        <b>{resource.name}</b>
        <br />{resource.description}
        <br />{resource.url ? showUrl(resource.url, translation("consulter-document")) : ''}
      </div>
    )}
  </div>
)

const showUrl = (url, text) => (
  <a href={url} target="_blank" style={{ textDecoration: "underline" }}>{text}</a>
)

const ItemSitesInformation = () => (
  <div>
    {epdsSitesInformation.map((site, index) =>
      <div key={index}>
        {showUrl(site.url, site.url)}<br />
      </div>
    )}
  </div >
)

const ItemLignesTelephoniques = () => (
  <div style={{ fontSize: 14 }}>
    <div className="ressources-contact-item" >
      {epdsLignes.map((contact, index) => {
        return <div style={{ marginBottom: 30 }} key={index}>
          <div className="ressources-contact-title">{contact.contactName}</div>
          <div>{contact.thematic}</div>
          <div className="font-weight-bold">{contact.openingTime}</div>
          <div style={{ display: "-webkit-inline-box" }}>
            <img src="/img/icone-telephone.svg" height={17} style={{ marginRight: 10 }} />
            <div className="font-weight-bold">{contact.phoneNumber}</div>
          </div>
        </div>
      })}
    </div>
  </div >
)

const ItemResources = () => (
  <div>
    {epdsRessourcesPremiersMois.map((resource, index) => {
      return <div className={`ressources-item ${index > 0 ? "ressources-item-border" : ""}`} key={index} >
        <b>{resource.name}</b>
        {resource.description}
      </div>
    })}
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
      border-top: 2px solid var(--gris)
  }

  `}</style>
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer', 'ressources-parents']),
  },
})