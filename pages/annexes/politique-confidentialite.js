import React from "react";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { } from '@dataesr/react-dsfr';

import { ContentLayout } from "../../src/components/Layout";

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation('politique-confidentialite');

  return (
    <ContentLayout title={t("politique-confidentialite")}>
      <div className="cgu-title">
        <h1>{t("politique-confidentialite")}</h1>
      </div>

      <div className="cgu-content">
        <h3 id="traitement-des-donn-es-caract-re-personnel">
          Traitement des données à caractère personnel
        </h3>
        <p>
          Le présent site 1000 premiers jours est à l&#39;initiative de la Direction
          Générale de la Cohésion Sociale au sein de la Fabrique numérique des ministères
          sociaux.
        </p>

        <h3>Finalité</h3>
        <p>
          Le présent site vise à présenter l&#39;application « 1000 premiers jours
          » et son fonctionnement.
        </p>
        <h3>Données à caractère personnel traitées</h3>
        <p>Sont traitées les données suivantes :</p>
        <ul>
          <li>
            Données de connexion (et notamment, les identifiants de connexion,
            nature des opérations, date et heure de l&#39;opération)
          </li>
          <li>Cookies.</li>
        </ul>

        <h3>Base juridique du traitement de données</h3>
        <p>
          Les données traitées à l&#39;occasion de ces traitements ont plusieurs
          fondements juridiques :
        </p>
        <ul>
          <li>
            L&#39;obligation légale à laquelle est soumise le responsable de
            traitements au sens de l&#39;article 6-c du RGPD ;
          </li>
        </ul>
        <blockquote>
          <p>
            <strong>Ces fondements sont précisés ci-dessous</strong> :
          </p>
        </blockquote>
        <p>
          a. <strong>Données de connexion</strong>
        </p>
        <p>
          Ce traitement est nécessaire au respect d&#39;une obligation légale à
          laquelle le responsable de traitement est soumis au sens de
          l&#39;article 6-c du Règlement (UE) 2016/679 du Parlement européen et du
          Conseil du 27 avril 2016 relatif à la protection des personnes physiques
          à l&#39;égard du traitement des données à caractère personnel et à la
          libre circulation de ces données.
        </p>
        <p>
          L&#39;obligation légale est posée par la loi LCEN n° 2004-575 du 21 juin
          2004 pour la confiance dans l&#39;économie numérique et par les articles
          1 et 3 du décret n°2011-219 du 25 février 2011.
        </p>
        <p>
          b. <strong>Cookies</strong>
        </p>
        <p>
          En application de l&#39;article 5(3) de la directive 2002/58/CE modifiée
          concernant le traitement des données à caractère personnel et la
          protection de la vie privée dans le secteur des communications
          électroniques, transposée à l&#39;article 82 de la loi n°78-17 du 6
          janvier 1978 relative à l&#39;informatique, aux fichiers et aux
          libertés, les traceurs ou cookies suivent deux régimes distincts.
        </p>
        <p>
          Les cookies strictement nécessaires au service ou ayant pour finalité
          exclusive de faciliter la communication par voie électronique sont
          dispensés de consentement préalable au titre de l&#39;article 82 de la
          loi n°78-17 du 6 janvier 1978.
        </p>
        <p>
          Les cookies n&#39;étant pas strictement nécessaires au service ou
          n&#39;ayant pas pour finalité exclusive de faciliter la communication
          par voie électronique doivent être consenti par l&#39;utilisateur.
        </p>
        <p>
          Ce consentement de la personne concernée pour une ou plusieurs finalités
          spécifiques constitue une base légale au sens du RGPD et doit être
          entendu au sens de l&#39;article 6-a du Règlement (UE) 2016/679 du
          Parlement européen et du Conseil du 27 avril 2016 relatif à la
          protection des personnes physiques à l&#39;égard du traitement des
          données à caractère personnel et à la libre circulation de ces données.
        </p>
        <h3>Durée de conservation</h3>
        <p>Les données à caractère personnel sont conservées :</p>
        <ul>
          <li>
            Données de connexion : 12 mois (article 3 du Décret n° 2011-219 du
            25 février 2011).
          </li>
          <li>
            Cookies : 13 mois maximum, ou jusqu&#39;au retrait du consentement
            de la personne.
          </li>
        </ul>

        <h3>Droit des personnes concernées</h3>
        <p>
          Vous disposez des droits suivants concernant vos données à caractère
          personnel :
        </p>
        <ul>
          <li>
            Droit d&#39;information et droit d&#39;accès des données ;
          </li>
          <li>
            Droit de rectification et le cas échéant de suppression des données.
          </li>
        </ul>
        <p>
          Pour les exercer, faites-nous parvenir une demande en précisant la date
          et l&#39;heure précise de la requête - ces éléments sont indispensables
          pour nous permettre de retrouver votre recherche :
        </p>
        <ul>
          <li>
            par voie électronique à l&#39;adresse suivante :{" "}
            <a href="mailto:contact-nos1000jours@fabrique.social.gouv.fr">
              contact-nos1000jours@fabrique.social.gouv.fr
            </a>
          </li>
          <li>
            par voie postale : Fabrique numérique des ministères sociaux
          </li>
        </ul>
        <blockquote style={{ marginLeft: 50 }}>
          Ministère des solidarités et de la santé<br />
          39-43 Quai André Citroën<br />
          75015 PARIS<br />
        </blockquote >
        <p>
          En raison de l&#39;obligation de sécurité et de confidentialité dans le
          traitement des données à caractère personnel qui incombe au responsable
          de traitement, votre demande ne sera traitée que si vous apportez la
          preuve de votre identité.
        </p>
        <p>
          Pour vous aider dans votre démarche, vous trouverez ici{" "}
          <a href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces">
            https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces , un
            modèle de courrier élaboré par la Cnil.
          </a>
        </p>
        <p>Nous nous engageons à ne jamais céder ces informations à des tiers.</p>
        <p>
          <strong>Délais de réponse</strong>
        </p>
        <p>
          Le responsable de traitement s&#39;engage à répondre dans un délai
          raisonnable qui ne saurait dépasser 1 mois à compter de la réception de
          votre demande.
        </p>
        <p>
          <strong>Destinataires des données</strong>
        </p>
        <p>
          Le responsable de traitement s&#39;engage à ce que les données à
          caractères personnels soient traitées par les seules personnes
          autorisées.
        </p>
        <p>
          <strong>Sous-traitants</strong>
        </p>
        <p>
          Certaines des données sont envoyées à des sous-traitants pour réaliser
          certaines missions. Le responsable de traitement s&#39;est assuré de la
          mise en œuvre par ses sous-traitants de garanties adéquates et du
          respect de conditions strictes de confidentialité, d&#39;usage et de
          protection des données.
        </p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <strong>Partenaire</strong>
              </th>
              <th>
                <strong>Pays destinataire</strong>
              </th>
              <th>
                <strong>Traitement réalisé</strong>
              </th>
              <th>
                <strong>Garanties</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Microsoft Azure</td>
              <td>France</td>
              <td>Hébergement du site</td>
              <td>
                <a href="https://privacy.microsoft.com/fr-fr/privacystatement">
                  https://privacy.microsoft.com/fr-fr/privacystatement
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Sécurité et confidentialité des données</strong>
        </p>
        <p>
          Le responsable de traitements ne conserve pas de données à caractère
          personnel sur le réseau. Elles sont conservées sur la machine locale de
          l&#39;utilisateur. Dès lors il en a la maîtrise, et est le seul à même
          d&#39;en garantir la sécurité et confidentialité.
        </p>

        <h3 id="utilisation-de-t-moins-de-connexion-cookies-">
          Utilisation de témoins de connexion (« cookies »)
        </h3>
        <p>
          Un cookie est un fichier déposé sur votre terminal lors de la visite
          d&#39;un site. Il a pour but de collecter des informations relatives à
          votre navigation et de vous adresser des services adaptés à votre
          terminal (ordinateur, mobile ou tablette).
        </p>
        <p>
          Nous collectons donc des données par l&#39;intermédiaire de dispositifs
          appelés &quot;cookies&quot; permettant d&#39;établir des mesures
          statistiques.
        </p>
        <p>
          Le site dépose des cookies de mesure d&#39;audience (nombre de visites,
          pages consultées), respectant les conditions d&#39;exemption du
          consentement de l&#39;internaute définies par la recommandation «
          Cookies » de la Commission nationale informatique et libertés (CNIL).
          Cela signifie, notamment, que ces cookies ne servent qu&#39;à la
          production de statistiques anonymes et ne permettent pas de suivre la
          navigation de l&#39;internaute sur d&#39;autres sites. Le site dépose
          également des cookies de navigation, aux fins strictement techniques,
          qui ne sont pas conservés. La consultation du site n&#39;est pas
          affectée lorsque les utilisateurs utilisent des navigateurs désactivant
          les cookies.
        </p>
        <p>
          <strong>Nous utilisons pour cela Matomo</strong>, un outil de mesure
          d&#39;audience web libre, paramétré pour être en conformité avec la
          recommandation « Cookies » de la CNIL. Cela signifie que votre adresse
          IP, par exemple, est anonymisée avant d&#39;être enregistrée. Il est
          donc impossible d&#39;associer vos visites sur ce site à votre personne.
        </p>
        <p>Il convient d&#39;indiquer que :</p>
        <ul>
          <li>
            Les données collectées ne sont pas recoupées avec d&#39;autres
            traitements.
          </li>
          <li>
            Les cookies ne permettent pas de suivre la navigation de
            l&#39;internaute sur d&#39;autres sites.
          </li>
        </ul>
        <p>
          <iframe
            title="matomo optout"
            style={{ border: 0, width: "100%" }}
            src="https://matomo.fabrique.social.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=2f3b6c&fontSize=16px&fontFamily=sans-serif"
          />
        </p>
        <p>
          À tout moment, vous pouvez refuser l&#39;utilisation des cookies et
          désactiver le dépôt sur votre ordinateur en utilisant la fonction dédiée
          de votre navigateur (fonction disponible notamment sur Microsoft
          Internet Explorer 11, Google Chrome, Mozilla Firefox, Apple Safari et
          Opera).
        </p>
        <p>
          Pour aller plus loin, vous pouvez consulter les fiches proposées par la
          Commission Nationale de l&#39;Informatique et des Libertés (CNIL) :
        </p>
        <p>
          <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi">
            Cookies &amp; traceurs : que dit la loi ?
          </a>
        </p>
        <p>
          <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser">
            Cookies : les outils pour les maîtriser
          </a>
        </p>
      </div >
    </ContentLayout >
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer', 'politique-confidentialite']),
  },
})

