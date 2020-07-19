export const useDarkModeStatus = () => {
  const setMode = (mode): void => {
    console.log(mode, " setMode")
    typeof window !== "undefined" &&
      window.localStorage.setItem("theme", JSON.stringify(mode))
  }

  const getMode = () =>
    typeof window !== "undefined" &&
    JSON.parse(window.localStorage.getItem("theme"))
  return [getMode, setMode] as const
}
