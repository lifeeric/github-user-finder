import * as React from "react"
import styled, { css } from "styled-components"

interface Props {}

/** Style */
const Footer = styled.footer`
  margin: 30px auto 0;
  text-align: center;
  color: #bbb;
`

const basestyle = css`
  color: #fabd22;
  border-bottom: 1px dotted #fabd22;
  text-decoration: none;
`
const Span = styled.span`
  ${basestyle}
`

const ALink = styled.a`
  ${basestyle}
`

const FooterComp: React.FC<Props> = () => {
  return (
    <Footer>
      Build with <Span>React</Span> and <Span>Gatsby</Span> available on{" "}
      <ALink
        target="_blank"
        href="https://github.com/lifeeric/github-user-finder"
      >
        Github
      </ALink>
      .
    </Footer>
  )
}

export default React.memo(FooterComp)
