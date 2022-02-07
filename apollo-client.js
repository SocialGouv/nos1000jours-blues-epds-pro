import { ApolloClient, gql, InMemoryCache, HttpLink } from "@apollo/client"

import { API_URL } from "./src/constants/constants"
import fetch from "cross-fetch"

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: { "content-type": "application/json" },
  link: new HttpLink({ uri: `${API_URL}/graphql?nocache`, fetch }),
})

export const QUESTIONNAIRE_EPDS = gql`
  query QuestionnaireEpds {
    questionnaireEpds {
      libelle
      ordre
      locale
      reponse_1_libelle
      reponse_1_points
      reponse_2_libelle
      reponse_2_points
      reponse_3_libelle
      reponse_3_points
      reponse_4_libelle
      reponse_4_points
    }
  }
`

export const QUESTIONNAIRE_EPDS_TRADUCTION = gql`
  query QuestionnaireEpdsTraductions($locale: String) {
    questionnaireEpdsTraductions(where: { langue: { identifiant: $locale } }) {
      libelle
      ordre
      langue {
        identifiant
      }
      reponse_1_libelle
      reponse_1_points
      reponse_2_libelle
      reponse_2_points
      reponse_3_libelle
      reponse_3_points
      reponse_4_libelle
      reponse_4_points
    }
  }
`

export const LABELS_EPDS_TRADUCTION = gql`
  query LabelsEpdsTraductions($locale: String) {
    labelsEpdsTraductions(where: { langue: { identifiant: $locale } }) {
      langue {
        identifiant
      }
      labels {
        label
        texte
      }
    }
  }
`

export const GET_LOCALES = gql`
  query Locales {
    locales {
      id
      identifiant
      libelle_francais
      libelle_langue
      drapeau {
        url
      }
      sens_lecture_droite_vers_gauche
    }
  }
`

export const EPDS_ADD_RESPONSE = gql`
  mutation (
    $genre: ENUM_REPONSESEPDS_GENRE!
    $compteur: Int!
    $score: Int!
    $source: ENUM_REPONSESEPDS_SOURCE!
    $reponseNum1: Int!
    $reponseNum2: Int!
    $reponseNum3: Int!
    $reponseNum4: Int!
    $reponseNum5: Int!
    $reponseNum6: Int!
    $reponseNum7: Int!
    $reponseNum8: Int!
    $reponseNum9: Int!
    $reponseNum10: Int!
    $langue: ID
  ) {
    createReponsesEpd(
      input: {
        data: {
          genre: $genre
          compteur: $compteur
          score: $score
          source: $source
          reponse_1: $reponseNum1
          reponse_2: $reponseNum2
          reponse_3: $reponseNum3
          reponse_4: $reponseNum4
          reponse_5: $reponseNum5
          reponse_6: $reponseNum6
          reponse_7: $reponseNum7
          reponse_8: $reponseNum8
          reponse_9: $reponseNum9
          reponse_10: $reponseNum10
          langue: $langue
        }
      }
    ) {
      reponsesEpd {
        id
        created_at
      }
    }
  }
`

export const EPDS_PARTAGE_INFORMATION = gql`
  mutation (
    $email: String
    $email_pro: String!
    $email_pro_secondaire: String
    $telephone: String
    $prenom: String
    $nom: String
    $score: String
    $detail_questions: [String]
    $detail_score: [String]
    $detail_reponses: [String]
    $id_reponses: String
  ) {
    epdsPartage(
      email: $email
      email_pro: $email_pro
      email_pro_secondaire: $email_pro_secondaire
      telephone: $telephone
      prenom: $prenom
      nom: $nom
      score: $score
      detail_questions: $detail_questions
      detail_score: $detail_score
      detail_reponses: $detail_reponses
      id_reponses: $id_reponses
    )
  }
`
