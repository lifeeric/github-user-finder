// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../components/DarkTheme/DarkTheme"
import { GlobalStyle } from "../components/DarkTheme/globalStyle"
import SEO from "../components/SEO/SEO"
import { useDarkModeStatus } from "../components/DarkModeStatus/DarkModeStatus"
import Lottie from "react-lottie"
import notFoundUser from "../components/NotFoundUser/NotFoundUser.json"

const UsingTypescript: React.FC = () => {
  /** Dark theme */
  const isDark = useSelector(state => state.isDark)
  const [getMode] = useDarkModeStatus()
  const dispatch = useDispatch()

  /** Get the Saved theme ( Dark or light) from browser */
  useEffect(() => {
    const value = getMode()
    dispatch({ type: "INITIAL_MODE", value })
  }, [])

  /** Not Found Page Animation */
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundUser,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle theme={isDark} />
      <SEO title="Github User Finder" lang="en-US" />
      <Lottie options={defaultOptions} height={350} width={500} />
    </ThemeProvider>
  )
}
export default UsingTypescript