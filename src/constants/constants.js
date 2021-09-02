export const STORAGE_EMAIL_PRO = "emailPro";
export const STORAGE_NOM_PRO = "nomPro";

export const STORAGE_NOM_PATIENT = "nomPatient";
export const STORAGE_PRENOM_PATIENT = "prenomPatient";
export const STORAGE_GENRE_PATIENT = "genrePatient";
export const STORAGE_TOTAL_SCORE = "totalScore";
export const STORAGE_SCORE_BOARD = "scoreBoard";
export const STORAGE_RESPONSES_BOARD = "responsesBoard";

export const PATTERN_EMAIL = "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}";

export const API_URL = process.env.API_URL || "https://backoffice-develop-dev-les1000jours.dev.fabrique.social.gouv.fr";
export const URL_1000J = "https://1000jours.fabrique.social.gouv.fr";
export const EPDS_SOURCE = "SiteWebPro"

export const EpdsGender = {
  masculin: {
    key: "gender.masculin",
    strapiLibelle: "Masculin"
  },
  feminin: {
    key: "gender.feminin",
    strapiLibelle: "Feminin"
  },
  nonBinaire: {
    key: "gender.nonbinaire",
    strapiLibelle: "Nonbinaire"
  },
  inconnu: {
    key: "gender.inconnu",
    strapiLibelle: "Inconnu"
  }
}