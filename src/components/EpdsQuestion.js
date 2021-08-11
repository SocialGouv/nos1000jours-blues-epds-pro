import React from "react";

export function EpdsQuestion(questionObject) {
    const nextQuestion = async event => {
        event.preventDefault()
        // TODO:
    }

    function handleChange(e) {
        console.log(e.target)
        // TODO:
    }

    return (
        <div style={{ marginTop: 50 }}>
            <div class="fr-form-group">
                <fieldset class="fr-fieldset">
                    <legend class="fr-fieldset__legend fr-text--regular epds-question" id='radio-legend'>
                        {questionObject.question.libelle}
                    </legend>
                    <div class="fr-fieldset__content" onChange={handleChange}>
                        <div class="fr-radio-group">
                            <input type="radio" id="radio-1" name="radio" />
                            <label class="fr-label" for="radio-1">{questionObject.question.reponse_1_libelle}</label>
                        </div>
                        <div class="fr-radio-group">
                            <input type="radio" id="radio-2" name="radio" />
                            <label class="fr-label" for="radio-2">{questionObject.question.reponse_2_libelle}</label>
                        </div>
                        <div class="fr-radio-group">
                            <input type="radio" id="radio-3" name="radio" />
                            <label class="fr-label" for="radio-3">{questionObject.question.reponse_3_libelle}</label>
                        </div>
                        <div class="fr-radio-group">
                            <input type="radio" id="radio-4" name="radio" />
                            <label class="fr-label" for="radio-4">{questionObject.question.reponse_4_libelle}</label>
                        </div>
                    </div>
                </fieldset>
            </div>

            <button className="fr-btn fr-btn--secondary"
                onClick={nextQuestion}
                style={{ marginTop: "23px", float: "right" }}>
                <img src="/img/icone-suivant.svg" height={10} style={{ marginRight: 10 }} fill={'red'} />
                Suivant
            </button>

            <EpdsStyle />
        </div >
    );
}

const EpdsStyle = () => (
    <style jsx>{`
    .epds-question {
        color: var(--bleu-france);
        font-size: 16px;
        line-height: 24px;
    }
  `}</style>
);
