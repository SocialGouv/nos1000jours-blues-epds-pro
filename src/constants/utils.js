export function getInLocalStorage(key) {
  if (typeof window !== "undefined") return localStorage.getItem(key)
}

export function jsonParse(data) {
  if (typeof data !== "undefined") return JSON.parse(data)
}

export function convertArrayLabelsToObject(data) {
  const labels = {}
  data?.forEach((item) => (labels[item.label.toLowerCase()] = item.texte))
  return labels
}
