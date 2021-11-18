import {} from "@dataesr/react-dsfr"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import React from "react"

import { ContentLayout } from "../../src/components/Layout"

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation("politique-confidentialite")

  return (
    <ContentLayout title={t("politique-confidentialite")}>
      <div className="cgu-title">
        <h1>{t("politique-confidentialite")}</h1>
      </div>

      <div className="cgu-content">
        <h3>Traitement des données à caractère personnel</h3>
        <p>
          Le présent site « Nos 1000 jours» est développée au sein de la
          Fabrique numérique des ministères sociaux.
          <br /> <br /> Le responsable de traitement des données à caractère
          personnel collectées par l’application « Nos 1000 jours » est la
          Direction générale de la Cohésion sociale, représentée par Madame
          Virginie Lasserre, Directrice générale.
        </p>

        <h3>Finalités</h3>
        <p>
          L’application « Nos 1000 jours » est un outil qui participe du
          parcours 1000 jours de soutien à la parentalité. Elle peut traiter des
          données à caractère personnelles pour les finalités suivantes :
          <ul>
            <li>
              Visualiser dans le territoire de vie du parent, les services, les
              interlocuteurs et les structures pouvant aider les parents ;
            </li>
            <li>
              Informer les parents et les futurs parents selon leur parcours
              parental et l’âge de l’enfant ;
            </li>
            <li>
              Permettre une évaluation de l’état de la mère après son
              accouchement.
            </li>
          </ul>
        </p>

        <h3>Données à caractère personnel traitées</h3>
        <p>
          L’application peut traiter les données à caractère personnel
          suivantes :
          <ul>
            <li>
              Données relatives au questionnaire (identifiant, genre, score du
              questionnaire, date du questionnaire ; données du questionnaire) ;
            </li>
            <li>
              Données de contact d’un professionnel (adresse e-mail
              professionnelle) ;
            </li>
            <li>Données de contact de la personne (adresse e-mail) ;</li>
            <li>Données d’hébergeur/de connexion ;</li>
          </ul>
        </p>

        <h3>Bases juridiques des traitements de données</h3>
        <div>
          Les données traitées par l’application ont plusieurs fondements
          juridiques :
          <ul>
            <li>
              L’exécution d’une mission d’intérêt public ou relevant de
              l’exercice de l’autorité publique dont est investi le responsable
              de traitement au sens de l’article 6-e du RPGD ;
            </li>
            <li>
              L’obligation légale à laquelle est soumise le responsable de
              traitements au sens de l’article 6-c du RGPD ;
            </li>
          </ul>
          <h6 style={{ marginTop: 30, marginBottom: 30 }}>
            Ces fondements sont précisés ci-dessous :
          </h6>
          <div>
            <strong>a) Données de connexion</strong>
            <p>
              Ce traitement est nécessaire à l’exécution d’une mission d’intérêt
              public ou relevant de l’exercice de l’autorité publique dont est
              investi le responsable de traitement au sens de l’article 6-e du
              règlement (UE) 2016/679 du Parlement européen et du Conseil du 27
              avril 2016 relatif à la protection des personnes physiques à
              l’égard du traitement des données à caractère personnel et à la
              libre circulation de ces données.
            </p>
          </div>
          <div>
            <strong>b) Données d’hébergeur ou de connexion</strong>
            <p>
              Ce traitement est nécessaire au respect d’une obligation légale à
              laquelle le responsable de traitement est soumis au sens de
              l’article 6-c du Règlement (UE) 2016/679 du Parlement européen et
              du Conseil du 27 avril 2016 relatif à la protection des personnes
              physiques à l’égard du traitement des données à caractère
              personnel et à la libre circulation de ces données.
              <br />
              <br />
              Lobligation légale est posée par la loi LCEN n° 2004-575 du 21
              juin 2004 pour la confiance dans l’économie numérique et par les
              articles 1 et 3 du décret n°2011-219 du 25 février 2011.
            </p>
          </div>
          <div>
            <strong>c) Cookies</strong>
            <p>
              En application de l’article 5(3) de la directive 2002/58/CE
              modifiée concernant le traitement des données à caractère
              personnel et la protection de la vie privée dans le secteur des
              communications électroniques, transposée à l’article 82 de la loi
              n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers
              et aux libertés, les traceurs ou cookies suivent deux régimes
              distincts.
              <br />
              <br />
              Les cookies strictement nécessaires au service, ceux de publicité
              non personnalisée ou ayant pour finalité exclusive de faciliter la
              communication par voie électronique sont dispensés de consentement
              préalable au titre de l’article 82 de la loi n°78-17 du 6 janvier
              1978.
              <br />
              <br />
              Les autres cookies n’étant pas strictement nécessaires au service
              ou n’ayant pas pour finalité exclusive de faciliter la
              communication par voie électronique doivent être consenti par
              l’utilisateur.
              <br />
              <br />
              Ce consentement de la personne concernée pour une ou plusieurs
              finalités spécifiques constitue une base légale au sens du RGPD et
              doit être entendu au sens de l’article 6-a du Règlement (UE)
              2016/679 du Parlement européen et du Conseil du 27 avril 2016
              relatif à la protection des personnes physiques à l’égard du
              traitement des données à caractère personnel et à la libre
              circulation de ces données.
            </p>
          </div>
        </div>

        <h3>Durée de conservation</h3>
        <p>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Types de données</th>
                <th>Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Données relatives au questionnaire</td>
                <td>
                  à compter de l’utilisation du droit d’opposition lors du
                  contact par mail ou <strong>1 an</strong>, à compter de la
                  réalisation du questionnaire.
                </td>
              </tr>
              <tr>
                <td>Données d’hébergeur</td>
                <td>
                  <strong>1 an</strong>, conformément au décret n°2011-219 du 25
                  février 2011.
                </td>
              </tr>
            </tbody>
          </table>
        </p>

        <h3>Droit des personnes concernées</h3>
        <p>
          Vous disposez des droits suivants concernant vos données à caractère
          personnel :
          <ul>
            <li>Droit d’information et droit d’accès aux données</li>
            <li>
              Droit de rectification et le cas échéant de suppression des
              données
            </li>
          </ul>
          <br />
          Pour les exercer, faites-nous parvenir une demande en précisant la
          date et l’heure précise de la requête – ces éléments sont
          indispensables pour nous permettre de retrouver votre recherche – par
          voie électronique à l’adresse suivante :&nbsp;
          <strong>
            <a href="mailto:contact-nos1000jours@fabrique.social.gouv.fr">
              contact-nos1000jours@fabrique.social.gouv.fr
            </a>
          </strong>
          <br /> <br />
          En raison de l’obligation de sécurité et de confidentialité dans le
          traitement des données à caractère personnel qui incombe au
          responsable de traitement, votre demande ne sera traitée que si vous
          apportez la preuve de votre identité. Pour vous aider dans votre
          démarche, vous trouverez ici :&nbsp;
          <a href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces">
            https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces, un
            modèle de courrier élaboré par la CNIL.
          </a>
          <br /> <br />
          Le responsable de traitement s’engage à répondre dans un délai
          raisonnable qui ne saurait dépasser 1 mois à compter de la réception
          de votre demande.
        </p>

        <h3>Destinataires des données</h3>
        <p>
          Le responsable de traitement s’engage à ce que les données à
          caractères personnels soient traitées par les seules personnes
          autorisées.
          <br /> Le responsable de traitement s’engage à transférer à un
          professionnel de santé de votre choix, les données relatives au
          questionnaire dans l’unique cas où vous l’avez autorisé.
        </p>

        <h3>Sécurité et confidentialité des données</h3>
        <p>
          Les mesures techniques et organisationnelles de sécurité adoptées pour
          assurer la confidentialité, l’intégrité et protéger l’accès des
          données sont notamment :
          <ul>
            <li>Anonymisation </li>
            <li>Stockage des données en base de données</li>
            <li>Stockage des mots de passe en base sont hâchés</li>
            <li>Cloisonnement des données</li>
            <li>Mesures de traçabilité</li>
            <li>Surveillance</li>
            <li>Protection contre les virus, malwares et logiciels espions</li>
            <li>Protection des réseaux</li>
            <li>Sauvegarde</li>
            <li>
              Mesures restrictives limitant l’accès physiques aux données à
              caractère personnel
            </li>
          </ul>
        </p>

        <h3>Sous-traitants</h3>
        <p>
          Certaines des données sont envoyées à des sous-traitants pour réaliser
          certaines missions. Le responsable de traitement s’est assuré de la
          mise en œuvre par ses sous-traitants de garanties adéquates et du
          respect de conditions strictes de confidentialité, d’usage et de
          protection des données.
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Partenaire</th>
                <th>Pays destinataire</th>
                <th>Traitement réalisé</th>
                <th>Garanties</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microsoft Azure</td>
                <td>France</td>
                <td>Hébergement</td>
                <td>
                  <a href="https://privacy.microsoft.com/fr-fr/privacystatement">
                    https://privacy.microsoft.com/fr-fr/privacystatement
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </p>

        <h3>Cookies</h3>
        <p>
          Un cookie est un fichier déposé sur votre terminal lors de la visite
          d’un site. Il a pour but de collecter des informations relatives à
          votre navigation et de vous adresser des services adaptés à votre
          terminal (ordinateur, mobile ou tablette).
          <br />
          <br />
          Le site dépose des cookies de mesure d’audience (nombre de visites,
          pages consultées), respectant les conditions d’exemption du
          consentement de l’internaute définies par la recommandation
          « Cookies » de la Commission nationale informatique et libertés
          (CNIL). Cela signifie, notamment, que ces cookies ne servent qu’à la
          production de statistiques anonymes et ne permettent pas de suivre la
          navigation de l’internaute sur d’autres sites.
          <br />
          <br />
          <strong>Nous utilisons pour cela Matomo</strong>, un outil de mesure
          d’audience web libre, paramétré pour être en conformité avec la
          recommandation « Cookies » de la CNIL. Cela signifie que votre adresse
          IP, par exemple, est anonymisée avant d’être enregistrée. Il est donc
          impossible d’associer vos visites sur ce site à votre personne.
          <br />
          <br />
          Il convient d’indiquer que :
          <ul>
            <li>
              Les données collectées ne sont pas recoupées avec d’autres
              traitements
            </li>
            <li>
              Les cookies ne permettent pas de suivre la navigation de
              l’internaute sur d’autres sites
            </li>
          </ul>
          <iframe
            title="matomo optout"
            style={{ border: 0, width: "100%" }}
            src="https://matomo.fabrique.social.gouv.fr/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=2f3b6c&fontSize=16px&fontFamily=sans-serif"
          />
          À tout moment, vous pouvez refuser l’utilisation des cookies et
          désactiver le dépôt sur votre ordinateur en utilisant la fonction
          dédiée de votre navigateur (fonction disponible notamment sur
          Microsoft Internet Explorer 11, Google Chrome, Mozilla Firefox, Apple
          Safari et Opera).
          <br />
          <br />
          Pour aller plus loin, vous pouvez consulter les fiches proposées par
          la Commission Nationale de l’Informatique et des Libertés (CNIL) :
          <ul>
            <li>
              <a href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi">
                Cookies &amp; traceurs : que dit la loi ?
              </a>
            </li>
            <li>
              <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser">
                Cookies : les outils pour les maîtriser
              </a>
            </li>
          </ul>
        </p>
      </div>
      <PolitiqueConfidentialiteStyle />
    </ContentLayout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "footer",
      "politique-confidentialite",
    ])),
  },
})

const PolitiqueConfidentialiteStyle = () => (
  <style jsx="true">{`
    thead {
      background-color: #dee2e6;
    }

    td {
      text-align: start;
    }
  `}</style>
)
