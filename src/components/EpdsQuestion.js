import React from "react"

export function EpdsQuestion({
  question,
  resultsBoard,
  setEnabledNextButton,
  isRTL = false,
}) {
  const prefix = "q" + question.ordre
  const radio1Id = prefix + "-radio1"
  const radio2Id = prefix + "-radio2"
  const radio3Id = prefix + "-radio3"
  const radio4Id = prefix + "-radio4"

  const readingDirection = isRTL ? "rtl" : "ltr"

  const arrayResponses = [
    { libelle: question.reponse_1_libelle, points: question.reponse_1_points },
    { libelle: question.reponse_2_libelle, points: question.reponse_2_points },
    { libelle: question.reponse_3_libelle, points: question.reponse_3_points },
    { libelle: question.reponse_4_libelle, points: question.reponse_4_points },
  ]

  function handleChange(e) {
    const responseIndex = Number(e.target.id.split(prefix + "-radio")[1])

    resultsBoard[question.ordre - 1] = {
      order: question.ordre,
      points: arrayResponses[responseIndex - 1].points,
      question: question.libelle,
      response: arrayResponses[responseIndex - 1].libelle,
    }

    setEnabledNextButton(true)
  }

  return (
    <div
      style={{ marginTop: 50, textAlign: isRTL ? "right" : "left" }}
      dir={readingDirection}
    >
      <form className="fr-form-group">
        <fieldset className="fr-fieldset">
          <legend
            className={`fr-fieldset__legend fr-text--regular epds-question ${
              isRTL ? "font-size-rtl" : ""
            }`}
            id="radio-legend"
          >
            {question.libelle}
          </legend>
          <div
            className={`fr-fieldset__content ${isRTL ? "input-revert" : ""}`}
            style={{ marginTop: "10px" }}
            onChange={handleChange}
          >
            <div className="fr-radio-group">
              <input type="radio" id={radio1Id} name="radio" />
              <label
                className={`fr-label ${isRTL ? "font-size-rtl" : ""}`}
                htmlFor={radio1Id}
              >
                {question.reponse_1_libelle}
              </label>
            </div>
            <div className="fr-radio-group">
              <input type="radio" id={radio2Id} name="radio" />
              <label
                className={`fr-label ${isRTL ? "font-size-rtl" : ""}`}
                htmlFor={radio2Id}
              >
                {question.reponse_2_libelle}
              </label>
            </div>
            <div className="fr-radio-group">
              <input type="radio" id={radio3Id} name="radio" />
              <label
                className={`fr-label ${isRTL ? "font-size-rtl" : ""}`}
                htmlFor={radio3Id}
              >
                {question.reponse_3_libelle}
              </label>
            </div>
            <div className="fr-radio-group">
              <input type="radio" id={radio4Id} name="radio" />
              <label
                className={`fr-label ${isRTL ? "font-size-rtl" : ""}`}
                htmlFor={radio4Id}
              >
                {question.reponse_4_libelle}
              </label>
            </div>
          </div>
        </fieldset>
      </form>

      <EpdsStyle />
    </div>
  )
}

const EpdsStyle = () => (
  <style jsx="true">{`
    .epds-question {
      color: var(--bleu-france);
      font-size: 16px;
      line-height: 24px;
    }

    .input-revert .fr-radio-group input[type="radio"] + label:before {
      position: revert !important;
      margin: 0 0 0 20px !important;
    }
  `}</style>
)
