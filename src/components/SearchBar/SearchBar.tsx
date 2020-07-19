import * as React from "react"
import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"

interface Props {
  inputElement: string | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

const Div = styled.div`
  margin: 140px auto 0;
  max-width: 500px;
  background: ${({ theme }) => theme.surface};
  height: 40px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: 600px) {
    margin: 100px auto 0;
  }
`

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px 18px;
  font-size: 20px;
  flaot: left;
  width: 88%;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.font};
  background: transparent;
  @media (max-width: 600px) {
    width: 80%;
  }
`

const Button = styled.button`
  line-height: 45px;
  font-size: 20px;
  padding-right: 18px;
  box-sizing: border-box;
  float: right;
  color: #fabd22;
  height: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`

const SearchBar: React.FC<Props> = ({ inputElement, onChange, onClick }) => {
  return (
    <Div>
      <Input
        id="search"
        value={inputElement}
        onChange={onChange}
        type="text"
        placeholder="Eric ..."
      />
      <Button onClick={onClick}>
        <RiSearchLine />
      </Button>
    </Div>
  )
}

export default React.memo(SearchBar)
