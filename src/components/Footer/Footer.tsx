import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

interface Props {}

/** Style */
const Footer = styled.footer`
  margin: 30px auto 0;
  text-align: center;
  color: #bbb;
`

const Span = styled.span`
  color: #fabd22;
  border-bottom: 1px dotted #fabd22;
  text-decoration: none;
`

const FooterComp: React.FC<Props> = () => {
  return (
    <Footer>
      Build with <Span>React</Span> and <Span>Gatsby</Span> available on{" "}
      <Span as={Link} to="/">
        Github
      </Span>
      .
    </Footer>
  )
}

export default React.memo(FooterComp)
