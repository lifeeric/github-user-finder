// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { useEffect } from "react"
import { Layout } from "../Layout/Layout"
import { useSelector, useDispatch } from "react-redux"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../components/DarkTheme/DarkTheme"
import { GlobalStyle } from "../components/DarkTheme/globalStyle"
import SEO from "../components/SEO/SEO"
import { useDarkModeStatus } from "../components/DarkModeStatus/DarkModeStatus"
import { graphql, StaticQuery } from "gatsby"

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

  return (
    <StaticQuery
      query={graphql`
        query {
          github {
            user(login: "lifeEric") {
              name
              avatarUrl
              bio
              followers {
                totalCount
              }
              following {
                totalCount
              }
              starredRepositories {
                totalCount
              }
            }
          }
        }
      `}
      render={({ github }) => (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <GlobalStyle theme={isDark} />
          <SEO title="Github User Finder" lang="en-US" />
          <Layout buildTimeData={github.user} />
        </ThemeProvider>
      )}
    />
  )
}
export default UsingTypescript
