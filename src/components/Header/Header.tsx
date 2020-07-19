import React from "react"
import Navbar from "../Navbar/Navbar"
import styled, { css } from "styled-components"

interface Props {}

/** Style */
const RoundShape = styled.div`
  width: 406px;
  height: 406px;
  background: ${({ theme }) => theme.topbar};
  border-radius: 50%;
  position: absolute;
  top: -277px;
  left: -100px;
  z-index: -1;
  overflow: hidden;

  @media (max-width: 600px) {
    top: -300px;
    left: -250px;
  }
`

const Header = styled.header`
  margin: 26px auto;
  @media (max-width: 600px) {
    margin: 20px auto;
  }
`

const HeaderComp = (props: Props) => {
  return (
    <>
      <RoundShape />
      {/* <RoundShape yellow /> */}
      <Header>
        <Navbar />
      </Header>
    </>
  )
}

export default HeaderComp
