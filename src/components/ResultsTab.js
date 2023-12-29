import React from "react"
import { LOCAL_IDENTIFIANT_FRANCAIS } from "../constants/constants"

/**
 * @param {*} translation
 * @param {String} resultsId : ID des résulats
 * @param {Object} locale : Locale FR, DE ...
 * @param {Array} resultsBoard : Tableau des résulats en FR
 * @param {Array} resultsBoardTranslated : Tableau des résulats si différent de FR
 * @returns Un tableau contenant les questions et réponses du questionnaire EPDS en FR et dans l'autre langue (si pas effectué en FR)
 */
export function ResultsTab({
  translation,
  resultsId,
  locale,
  resultsBoard,
  resultsBoardTranslated,
}) {
  const isRTL = locale?.sens_lecture_droite_vers_gauche
  const rtlClassName = isRTL ? "tab-rtl" : ""
  const BuildDetailScore = ({ data, dataTranslated }) => (
    <>
      {dataTranslated &&
      locale &&
      locale.identifiant != LOCAL_IDENTIFIANT_FRANCAIS ? (
        <>
          <tr className={`tab-no-border ${rtlClassName}`}>
            <td>{dataTranslated.question}</td>
            <td>{dataTranslated.response}</td>
            <th rowSpan="2">{data.points}</th>
          </tr>
          <tr>
            <td>{data.question}</td>
            <td>{data.response}</td>
          </tr>
        </>
      ) : (
        <tr>
          <td>{data.question}</td>
          <td>{data.response}</td>
          <td rowSpan="1">{data.points}</td>
        </tr>
      )}
    </>
  )

  return (
    <div className="fr-table fr-table--bordered">
      <table>
        <thead>
          <tr>
            <th scope="col">{translation("tab.question")}</th>
            <th scope="col">{translation("tab.reponse")}</th>
            <th scope="col">{translation("tab.point")}</th>
          </tr>
        </thead>
        <tbody>
          {typeof resultsBoard == "object"
            ? resultsBoard.map((data, index) => (
                <BuildDetailScore
                  key={index}
                  data={data}
                  dataTranslated={
                    resultsBoardTranslated
                      ? resultsBoardTranslated[index]
                      : null
                  }
                />
              ))
            : ""}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              <i>
                {translation("tab.id")} {resultsId}
              </i>
            </td>
          </tr>
        </tfoot>
      </table>

      <ResultTabStyle />
    </div>
  )
}

const ResultTabStyle = () => (
  <style jsx="true">{`
    .tab-rtl td {
      direction: rtl;
      text-align: start;
      font-size: 20px;
    }

    .tab-no-border td {
      border-style: dashed !important;
    }
    .tab-no-border th {
      font-weight: normal;
      text-align: center;
    }
  `}</style>
)
