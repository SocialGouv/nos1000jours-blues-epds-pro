import React from "react"
import { LOCAL_IDENTIFIANT_FRANCAIS } from "../constants/constants"

/**
 * @param {*} translation
 * @param {*} resultsId : ID des résulats
 * @param {*} locale : Locale FR, DE ...
 * @param {*} resultsBoard : Tableau des résulats en FR
 * @param {*} resultsBoardTranslated : Tableau des résulats si différent de FR
 * @returns Un tableau contenant les questions et réponses du questionnaire EPDS en FR et dans l'autre langue (si pas effectué en FR)
 */
export function ResultsTab({
  translation,
  resultsId,
  locale,
  resultsBoard,
  resultsBoardTranslated,
}) {
  const BuildDetailScore = ({ data, dataTranslated }) => (
    <tr key={data.question}>
      <td>
        {dataTranslated &&
        locale &&
        locale.identifiant != LOCAL_IDENTIFIANT_FRANCAIS ? (
          <div>
            {dataTranslated.question}
            <br />
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
            {dataTranslated.response}
            <br />
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
    </div>
  )
}
