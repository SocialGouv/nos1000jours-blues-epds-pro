import {} from "@dataesr/react-dsfr"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"

import { ContentLayout } from "../../src/components/Layout"

export default function CGU() {
  const { t } = useTranslation("cgu")

  return (
    <ContentLayout title={t("cgu")}>
      <div className="cgu-title">
        <h1>{t("cgu")}</h1>
      </div>

      <div className="cgu-content">
        <h3>Présentation</h3>
        <p>
          1000 premiers jours est un outil qui participe du parcours 1000 jours
          de soutien à la parentalité. Elle peut traiter des données à caractère
          personnelles pour les finalités suivantes :
        </p>
        <ul>
          <li>
            Visualiser dans le territoire de vie du parent, les services, les
            interlocuteurs et les structures pouvant aider les parents ;
          </li>
          <li>
            Informer les parents et les futurs parents selon leur parcours
            parental et l’âge de l’enfant ;
          </li>
          <li>
            Permettre une évaluation de l’état de la mère après son
            accouchement.
          </li>
        </ul>
        <p>
          Le code du logiciel est libre, et peut donc être vérifié et amélioré
          par toutes et tous.
        </p>

        <h3> Vocabulaire</h3>
        <p>
          <li>« Nous » se réfère à l’éditeur de 1000 premiers jours. </li>
          <li>« Vous » se réfère à un·e usager de 1000 premiers jours.</li>
          <li>
            « Partenaires » se réfère aux organismes responsables d’attribuer
            les aides calculées par 1000 premiers jours.{" "}
          </li>
        </p>

        <h3>Absence de garantie</h3>
        <p>
          Les résultats fournis par ce service ont une valeur informative et ne
          représentent en aucun cas un diagnostic médical.Nous ne garantissons
          pas l’exactitude du contenu des sites externes vers lesquels nous
          redirigeons la navigation.Ces sites ne sont pas non plus régis par les
          mêmes conditions d’utilisation, notamment en ce qui concerne leur
          traitement des données à caractère personnel.Nous mettons 1000
          premiers jours à disposition sans garantie sur sa disponibilité, en «
          best effort ».Cela signifie que d’éventuelles indisponibilités
          n’ouvriront pas droit à compensation financière.
        </p>

        <h3> Vos données</h3>
        <p>
          1000 premiers jours ne vous demande ni ne stocke d’information
          nominative telle que nom, prénoms ou adresse. Pour autant, lorsque
          vous que vous demanderez à être contacté, vous nous transmettrez des
          coordonnées nécessaires à la prise de contact par nos services. Ces
          coordonnées sont des données personnelles et nous en avons donc
          déclaré le traitement auprès de la CNIL. Nous conservons ces données
          pendant deux ans à compter de la première saisie pour analyser les
          usages, mesurer l’impact et la diffusion territoriale de 1000 premiers
          jours, et améliorer le service. Vous avez un droit d’accès, de
          rectification et de suppression de vos données. Pour l’exercer,
          envoyez-nous un courriel à l’adresse à compléter en précisant les
          coordonnées transmises. Comme nous n’enregistrons pas d’éléments
          nominatifs, seuls ces éléments peuvent nous permettre de retrouver
          votre utilisation.{" "}
        </p>
        <p>
          Nous nous engageons à ne jamais exploiter les informations que vous
          nous transmettrez dans un but commercial ou publicitaire. De manière
          générale, 1000 premiers jours n’accepte aucune forme de publicité
          autre que celle que constitue la présentation des aides des
          partenaires. Nous collectons également des données anonymes
          d’audience, indépendamment des suivis de consommation effectués. Cela
          nous permet par exemple de déterminer la durée d’un suivi et les pages
          à améliorer en priorité. Nous nous engageons à prendre toutes les
          mesures nécessaires pour garantir la sécurité et la confidentialité
          des informations que vous nous fournissez. Les situations enregistrées
          sont enregistrées dans un centre de données sécurisé. Seules nos
          équipes techniques et celles de nos partenaires peuvent y accéder.
        </p>

        <h3>Évolutions</h3>
        <p>
          Nous pouvons faire évoluer 1000 premiers jours sans information
          préalable. Nous ajoutons régulièrement des aides, améliorons
          l’interface et modifions des formulations sur la base de vos retours
          et des évolutions règlementaires. Nous pouvons suspendre l’accès à
          1000 premiers jours sans information préalable, notamment pour des
          raisons de maintenance. Nous mettons l’application à jour plusieurs
          fois par semaine. L’indisponibilité ne dépasse généralement pas une
          dizaine de secondes. Nous pouvons amender ces conditions
          d’utilisation. En cas de changement significatif, une notification
          s’affichera lors de l’accès à Mon suivi psy au moins 30 jours avant
          l’entrée en vigueur des nouvelles conditions. Tout l’historique de ces
          conditions est librement accessible.
        </p>

        <h3>Utilisation</h3>
        <p>
          1000 premiers jours est en téléchargement libre sur les plateformes
          Apple App Store et Google Play. Son utilisation est gratuite et
          facultative. Si vous effectuez un suivi de votre consommation, vous
          acceptez ces conditions d’utilisation. Comme indiqué dans l’article L.
          112-9 du code des relations entre le public et l’administration.
          L’utilisation de 1000 premiers jours requiert une connexion internet
          et un smartphone récent. Nous nous réservons le droit de bloquer, sans
          information préalable ni compensation financière, les usages mettant
          en péril l’utilisation du logiciel par d’autres usagers. Cela nous
          permet d’anticiper d’éventuelles attaques par déni de service.
        </p>
      </div>
    </ContentLayout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer", "cgu"])),
  },
})
