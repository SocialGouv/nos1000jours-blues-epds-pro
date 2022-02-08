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

  const BuildDetailScore = ({ data, dataTranslated }) => (
    <tr key={data.question}>
      <td>
        {dataTranslated &&
        locale &&
        locale.identifiant != LOCAL_IDENTIFIANT_FRANCAIS ? (
          <div>
            <span
              className={`${isRTL ? "tab-rtl" : ""}`}
              style={{ display: "flex" }}
            >
              {dataTranslated.question}
            </span>
            -----
          </div>
        ) : null}
        {data.question}
      </td>
      <td>
        {dataTranslated &&
        locale &&
        locale.identifiant != LOCAL_IDENTIFIANT_FRANCAIS ? (
          <div>
            <span
              className={`${isRTL ? "tab-rtl" : ""}`}
              style={{ display: "flex" }}
            >
              {dataTranslated.response}
            </span>
            -----
          </div>
        ) : null}
        {data.response}
      </td>
      <td>{data.points}</td>
    </tr>
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
    .tab-rtl {
      direction: rtl;
      text-align: start;
      font-size: 20px;
    }
  `}</style>
)
