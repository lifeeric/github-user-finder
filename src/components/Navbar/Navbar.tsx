import * as React from "react"
import { lazy } from "react"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { DarkToggler } from "react-darkmode-toggler"
import { useDarkModeStatus } from "../DarkModeStatus/DarkModeStatus"

import { FiGithub } from "react-icons/fi"

/** Style */

const Nav = styled.nav`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const headerStyle = `
  color: #fabd22;
  font-family: risque;
  letter-spacing: 2px;
  text-decoration: none;
  display: none;
`

const H3 = styled(props => <Link {...props} />)`
  ${headerStyle}
  @media (min-width: 600px) {
    ${({ bigLogo }) =>
      bigLogo &&
      css`
        display: block;
      `}
  }
  @media (max-width: 600px) {
    ${({ smallLogo }) =>
      smallLogo &&
      css`
        display: block;
      `}
  }
`

const Center = styled.div`
  margin-left: -70px;

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`

const Button = styled.a`
  color: #fabd22;
  line-height: 10px;
  display: block;
`

const Navbar: React.FC = () => {
  // True: Dark mode is on, False: light Mode is on
  const isDark = useSelector(state => state.isDark, shallowEqual)
  const dispatch = useDispatch()
  const [_, setMode] = useDarkModeStatus()

  // toggling button handler
  const darkModeTogger = () => {
    dispatch({ type: "THEME_TOGGLER" })
    setMode(!isDark)
  }

  return (
    <Nav>
      <H3 to="/" bigLogo>
        Github User Finder
      </H3>
      <H3 smallLogo to="/">
        GUF
      </H3>
      <Center>
        <DarkToggler
          onClick={darkModeTogger}
          isDark={isDark}
          size="small"
          border={isDark ? "#D1D1D1" : "#2A292E"}
        />
      </Center>
      <Button
        target="_blank"
        href="https://github.com/lifeeric"
        rel="noreferrer"
      >
        <FiGithub />
      </Button>
    </Nav>
  )
}

export default Navbar
