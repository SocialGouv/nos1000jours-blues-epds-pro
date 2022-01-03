import {
  checkQuestionsOrder,
  resultsBoardInFrench,
} from "../pages/questionnaire-epds"

describe("Questionnaire", () => {
  describe("Vérification de l'ordre des questions", () => {
    const questionsEpdsValid = [
      { ordre: 1 },
      { ordre: 2 },
      { ordre: 3 },
      { ordre: 4 },
      { ordre: 5 },
      { ordre: 6 },
      { ordre: 7 },
      { ordre: 8 },
      { ordre: 9 },
      { ordre: 10 },
    ]

    test("Les questions ne changent pas d'ordre", () => {
      const questionsEpds = [
        { ordre: 1 },
        { ordre: 2 },
        { ordre: 3 },
        { ordre: 4 },
        { ordre: 5 },
        { ordre: 6 },
        { ordre: 7 },
        { ordre: 8 },
        { ordre: 9 },
        { ordre: 10 },
      ]

      expect(checkQuestionsOrder(questionsEpds)).toEqual(questionsEpdsValid)
    })

    test("Les questions sont mises dans le bon ordre", () => {
      const questionsEpds = [
        { ordre: 1 },
        { ordre: 2 },
        { ordre: 3 },
        { ordre: 4 },
        { ordre: 5 },
        { ordre: 6 },
        { ordre: 7 },
        { ordre: 8 },
        { ordre: 10 },
        { ordre: 9 },
      ]

      expect(checkQuestionsOrder(questionsEpds)).toEqual(questionsEpdsValid)
    })
  })

  test("Récupération des questions en français si le test est passé dans une autre langue", () => {
    const frenchQuestions = [
      {
        libelle: "J’ai pu rire et prendre les choses du bon côté",
        ordre: 1,
        locale: "FR",
        reponse_1_libelle: "Aussi souvent que d’habitude",
        reponse_1_points: 0,
        reponse_2_libelle: "Pas tout-à-fait autant",
        reponse_2_points: 1,
        reponse_3_libelle: "Vraiment beaucoup moins souvent ces jours-ci",
        reponse_3_points: 2,
        reponse_4_libelle: "Absolument pas",
        reponse_4_points: 3,
      },
      {
        libelle:
          "Je me suis senti(e) confiant(e) et joyeux(se), en pensant à l’avenir",
        ordre: 2,
        locale: "FR",
        reponse_1_libelle: "Autant que d’habitude",
        reponse_1_points: 0,
        reponse_2_libelle: "Plutôt moins que d’habitude",
        reponse_2_points: 1,
        reponse_3_libelle: "Vraiment moins que d’habitude",
        reponse_3_points: 2,
        reponse_4_libelle: "Pratiquement pas",
        reponse_4_points: 3,
      },
      {
        libelle:
          "Je me suis reprochée, sans raisons, d’être responsable quand les choses allaient mal",
        ordre: 3,
        locale: "FR",
        reponse_1_libelle: "Oui, la plupart du temps",
        reponse_1_points: 3,
        reponse_2_libelle: "Oui, parfois",
        reponse_2_points: 2,
        reponse_3_libelle: "Pas très souvent",
        reponse_3_points: 1,
        reponse_4_libelle: "Non, jamais",
        reponse_4_points: 0,
      },
      {
        libelle: "Je me suis senti(e) inquiet(e) ou soucieux(se) sans motifs",
        ordre: 4,
        locale: "FR",
        reponse_1_libelle: "Non, pas du tout",
        reponse_1_points: 0,
        reponse_2_libelle: "Presque jamais",
        reponse_2_points: 1,
        reponse_3_libelle: "Oui, parfois",
        reponse_3_points: 2,
        reponse_4_libelle: "Oui, très souvent",
        reponse_4_points: 3,
      },
      {
        libelle:
          "Je me suis senti(e) effrayé(e) ou paniqué(e) sans vraiment de raisons",
        ordre: 5,
        locale: "FR",
        reponse_1_libelle: "Oui, vraiment souvent",
        reponse_1_points: 3,
        reponse_2_libelle: "Oui, parfois",
        reponse_2_points: 2,
        reponse_3_libelle: "Non, pas très souvent",
        reponse_3_points: 1,
        reponse_4_libelle: "Non, pas du tout",
        reponse_4_points: 0,
      },
      {
        libelle: "J’ai eu tendance à me sentir dépassé(e) par les évènements",
        ordre: 6,
        locale: "FR",
        reponse_1_libelle:
          "Oui, la plupart du temps, je me suis sentie incapable de faire face aux situations",
        reponse_1_points: 3,
        reponse_2_libelle:
          "Oui, parfois, je ne me suis pas sentie aussi capable de faire face que d’habitude",
        reponse_2_points: 2,
        reponse_3_libelle:
          "Non, j’ai pu faire face à la plupart des situations",
        reponse_3_points: 1,
        reponse_4_libelle:
          "Non, je me suis sentie aussi efficace que d’habitude",
        reponse_4_points: 0,
      },
      {
        libelle:
          "Je me suis senti(e) si malheureux(se) que j’ai eu des problèmes de sommeil",
        ordre: 7,
        locale: "FR",
        reponse_1_libelle: "Oui, la plupart du temps",
        reponse_1_points: 3,
        reponse_2_libelle: "Oui, parfois",
        reponse_2_points: 2,
        reponse_3_libelle: "Pas très souvent",
        reponse_3_points: 1,
        reponse_4_libelle: "Non, pas du tout",
        reponse_4_points: 0,
      },
      {
        libelle: "Je me suis senti(e) triste ou peu heureux(se)",
        ordre: 8,
        locale: "FR",
        reponse_1_libelle: "Oui, la plupart du temps",
        reponse_1_points: 3,
        reponse_2_libelle: "Oui, très souvent",
        reponse_2_points: 2,
        reponse_3_libelle: "Pas très souvent",
        reponse_3_points: 1,
        reponse_4_libelle: "Non, pas du tout",
        reponse_4_points: 0,
      },
      {
        libelle: "Je me suis senti(e) si malheureux(se) que j’en ai pleuré",
        ordre: 9,
        locale: "FR",
        reponse_1_libelle: "Oui, la plupart du temps",
        reponse_1_points: 3,
        reponse_2_libelle: "Oui, très souvent",
        reponse_2_points: 2,
        reponse_3_libelle: "Seulement de temps en temps",
        reponse_3_points: 1,
        reponse_4_libelle: "Non, jamais",
        reponse_4_points: 0,
      },
      {
        libelle: "Il m’est arrivé de penser à me faire du mal",
        ordre: 10,
        locale: "FR",
        reponse_1_libelle: "Oui, très souvent",
        reponse_1_points: 3,
        reponse_2_libelle: "Parfois",
        reponse_2_points: 2,
        reponse_3_libelle: "Presque jamais",
        reponse_3_points: 1,
        reponse_4_libelle: "Jamais",
        reponse_4_points: 0,
      },
    ]

    const deutchResults = [
      {
        order: 1,
        points: 3,
        question:
          "konnte ich lachen und das Leben von der sonnigen Seite sehen",
        response: "überhaupt nicht",
      },
      {
        order: 2,
        points: 3,
        question: "konnte ich mich so richtig auf etwas freuen",
        response: "deutlich weniger als frühe",
      },
      {
        order: 3,
        points: 0,
        question:
          "fühlte ich mich unnötigerweise schuldig, wenn etwas schief lief",
        response: "nein, niemals",
      },
      {
        order: 4,
        points: 3,
        question: "war ich ängstlich und besorgt aus nichtigen Gründen",
        response: "ja, häufig",
      },
      {
        order: 5,
        points: 0,
        question:
          "erschrak ich leicht bzw. reagierte panisch aus unerfindlichen Gründen",
        response: "nein, überhaupt nicht",
      },
      {
        order: 6,
        points: 0,
        question: "überforderte mich verschiedenste Umstände",
        response: "nein, ich wurde so gut wie immer damit fertig",
      },
      {
        order: 7,
        points: 0,
        question: "war ich so unglücklich, dass ich nicht schlafen konnte",
        response: "nein, überhaupt nicht",
      },
      {
        order: 8,
        points: 0,
        question: "habe ich mich traurig und schlecht gefühlt",
        response: "nein, überhaupt nicht",
      },
      {
        order: 9,
        points: 0,
        question: "war ich so unglücklich, dass ich geweint habe",
        response: "nein, niemals",
      },
      {
        order: 10,
        points: 0,
        question: "überkam mich der Gedanke, mir selbst Schaden zuzufügen",
        response: "niemals",
      },
    ]

    const frenchResults = [
      {
        order: 1,
        question: "J’ai pu rire et prendre les choses du bon côté",
        response: "Absolument pas",
      },
      {
        order: 2,
        question:
          "Je me suis senti(e) confiant(e) et joyeux(se), en pensant à l’avenir",
        response: "Pratiquement pas",
      },
      {
        order: 3,
        question:
          "Je me suis reprochée, sans raisons, d’être responsable quand les choses allaient mal",
        response: "Non, jamais",
      },
      {
        order: 4,
        question: "Je me suis senti(e) inquiet(e) ou soucieux(se) sans motifs",
        response: "Oui, très souvent",
      },
      {
        order: 5,
        question:
          "Je me suis senti(e) effrayé(e) ou paniqué(e) sans vraiment de raisons",
        response: "Non, pas du tout",
      },
      {
        order: 6,
        question: "J’ai eu tendance à me sentir dépassé(e) par les évènements",
        response: "Non, je me suis sentie aussi efficace que d’habitude",
      },
      {
        order: 7,
        question:
          "Je me suis senti(e) si malheureux(se) que j’ai eu des problèmes de sommeil",
        response: "Non, pas du tout",
      },
      {
        order: 8,
        question: "Je me suis senti(e) triste ou peu heureux(se)",
        response: "Non, pas du tout",
      },
      {
        order: 9,
        question: "Je me suis senti(e) si malheureux(se) que j’en ai pleuré",
        response: "Non, jamais",
      },
      {
        order: 10,
        question: "Il m’est arrivé de penser à me faire du mal",
        response: "Jamais",
      },
    ]

    expect(resultsBoardInFrench(frenchQuestions, deutchResults)).toEqual(
      frenchResults
    )
  })
})
