import {} from "@dataesr/react-dsfr"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"

import { ContentLayout } from "../../src/components/Layout"

export default function Mentions() {
  const { t } = useTranslation("mentions-legales")

  return (
    <ContentLayout title={t("mentions-legales")}>
      <div className="cgu-title">
        <h1>{t("mentions-legales")}</h1>
      </div>

      <div className="cgu-content">
        <h3>Éditeur du site</h3>
        <p>
          L’application 1000 premiers jours est éditée par la Direction Générale
          de la Santé au sein de la Fabrique numérique des Ministères sociaux
          située :
        </p>
        <p>
          Tour Mirabeau
          <br />
          39-43 Quai André Citroën
          <br />
          75015 PARIS
          <br />
          Tél. : 01 40 56 60 00
          <br />
        </p>
        <p>
          <b>Directeur de la publication</b>
          <br />
          Madame Virginie Lassère, Directrice générale de le Cohésion Sociale
        </p>

        <h3>Hébergement du site</h3>
        <p>
          Cette application est hébergée par Microsoft Azure France (région
          France centre) :
        </p>
        <p>
          Microsoft France
          <br />
          37 Quai du Président Roosevelt
          <br />
          92130 ISSY-LES-MOULINEAUX
        </p>

        <h3>Accessibilité</h3>
        <p>
          La conformité aux normes d’accessibilité numérique est un objectif
          ultérieur mais nous tâchons de rendre cette application accessible à
          toutes et à tous.
        </p>

        <h3> Signaler un dysfonctionnement</h3>
        <p>
          Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder
          à un contenu ou une fonctionnalité du site, merci de nous en faire
          part. Si vous n’obtenez pas de réponse rapide de notre part, vous êtes
          en droit de faire parvenir vos doléances ou une demande de saisine au
          Défenseur des droits.
        </p>

        <h3> En savoir plus</h3>
        <p>
          Pour en savoir plus sur la politique d’accessibilité numérique de
          l’État
          : http://references.modernisation.gouv.fr/accessibilite-numerique
        </p>

        <h3>Sécurité</h3>
        <p>
          L’application est protégée par un certificat électronique, matérialisé
          pour la grande majorité des navigateurs par un cadenas. Cette
          protection participe à la confidentialité des échanges. En aucun cas
          les services associés à au site ne seront à l’origine d’envoi de
          courriels pour demander la saisie d’informations personnelles.
        </p>
      </div>
    </ContentLayout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "footer",
      "mentions-legales",
    ])),
  },
})
