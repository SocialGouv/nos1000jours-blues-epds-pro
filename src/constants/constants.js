export const STORAGE_EMAIL_PRO = "emailPro"
export const STORAGE_NOM_PRO = "nomPro"

export const STORAGE_NOM_PATIENT = "nomPatient"
export const STORAGE_PRENOM_PATIENT = "prenomPatient"
export const STORAGE_GENRE_PATIENT = "genrePatient"
export const STORAGE_TOTAL_SCORE = "totalScore"
export const STORAGE_RESULTS_BOARD = "resultsBoard"
export const STORAGE_RESULTS_ID = "resultsId"
export const STORAGE_RESULTS_LOCALE = "resultsLocale"

export const PATTERN_EMAIL = "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"

export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const URL_1000J = "https://1000jours.fabrique.social.gouv.fr"
export const EPDS_SOURCE = "SiteWebPro"

export const LOCAL_IDENTIFIANT_FRANCAIS = "FR"

export const EpdsGender = {
  masculin: {
    key: "gender.masculin",
    strapiLibelle: "Masculin",
  },
  feminin: {
    key: "gender.feminin",
    strapiLibelle: "Feminin",
  },
  nonBinaire: {
    key: "gender.nonbinaire",
    strapiLibelle: "Nonbinaire",
  },
  inconnu: {
    key: "gender.inconnu",
    strapiLibelle: "Inconnu",
  },
}
