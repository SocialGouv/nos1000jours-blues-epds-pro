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
        <h3>Éditeur</h3>
        <p>
          Ce site est édité par la Direction générale de la Cohésion sociale au
          sein de la Fabrique numérique des ministères sociaux :
          <br />
          <br />
          18 place des 5-Martyrs-du-Lycée-Buffon <br />
          75014 Paris
        </p>

        <h3>Directeur de la publication</h3>
        <p>
          Monsieur Jean-Benoît DUJOL, Directeur général de la cohésion sociale
        </p>

        <h3>Hébergement de l’application</h3>
        <p>
          Ce site est hébergé par :
          <br />
          <a target="_blank" href="https://www.ovh.com" rel="noreferrer">
            OVH SAS
          </a>
          <br />
          Siège social : 2 rue Kellermann - 59100 Roubaix - France.
          <br />
        </p>

        <h3>Accessibilité</h3>
        <p>
          La conformité aux normes d’accessibilité numérique est un objectif
          ultérieur mais nous tâchons de rendre ce site accessible à toutes et à
          tous.
        </p>

        <h3>Signaler un dysfonctionnement</h3>
        <p>
          Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder
          à un contenu ou une fonctionnalité du site, merci de nous en faire
          part. <br />
          Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
          droit de faire parvenir vos doléances ou une demande de saisine au
          Défenseur des droits.
          <br />
          <br />
          En savoir plus <br />
          Pour en savoir plus sur la politique d’accessibilité numérique de
          l’État :&nbsp;
          <a href="https://references.modernisation.gouv.fr/accessibilite-numerique">
            https://references.modernisation.gouv.fr/accessibilite-numerique
          </a>
        </p>

        <h3>Sécurité</h3>
        <p>
          L’application est protégée par un certificat électronique, matérialisé
          pour la grande majorité des navigateurs par un cadenas. Cette
          protection participe à la confidentialité des échanges.
          <br />
          En aucun cas les services associés à la plateforme ne seront à
          l’origine d’envoi de courriels pour demander la saisie d’informations
          personnelles.
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
