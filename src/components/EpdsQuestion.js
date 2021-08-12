import React from "react";

export function EpdsQuestion({ question, scoreBoard, setEnabledNextButton }) {
    const prefix = "q" + question.ordre;
    const radio1Id = prefix + "-radio1";
    const radio2Id = prefix + "-radio2";
    const radio3Id = prefix + "-radio3";
    const radio4Id = prefix + "-radio4";

    const arrayRespones = [question.reponse_1_points,
    question.reponse_2_points,
    question.reponse_3_points,
    question.reponse_4_points];

    function handleChange(e) {
        const responseIndex = Number(e.target.id.split(prefix + "-radio")[1]);

        const point = arrayRespones[responseIndex - 1];
        scoreBoard[question.ordre - 1] = point;

        setEnabledNextButton(true);
        console.log("scoreBoard : " + scoreBoard)
    }

    return (
        <div style={{ marginTop: 50 }}>
            <form className="fr-form-group">
                <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend fr-text--regular epds-question" id="radio-legend">
                        {question.libelle}
                    </legend>
                    <div className="fr-fieldset__content" style={{ marginTop: "10px" }} onChange={handleChange} >
                        <div className="fr-radio-group">
                            <input type="radio" id={radio1Id} name="radio" />
                            <label className="fr-label" for={radio1Id} >{question.reponse_1_libelle}</label>
                        </div>
                        <div className="fr-radio-group">
                            <input type="radio" id={radio2Id} name="radio" />
                            <label className="fr-label" for={radio2Id}>{question.reponse_2_libelle}</label>
                        </div>
                        <div className="fr-radio-group">
                            <input type="radio" id={radio3Id} name="radio" />
                            <label className="fr-label" for={radio3Id}>{question.reponse_3_libelle}</label>
                        </div>
                        <div className="fr-radio-group">
                            <input type="radio" id={radio4Id} name="radio" />
                            <label className="fr-label" for={radio4Id}>{question.reponse_4_libelle}</label>
                        </div>
                    </div>
                </fieldset>
            </form>

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
