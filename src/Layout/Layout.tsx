import * as React from "react"
import { Component } from "react"
import "./Layout.scss"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import SearchBar from "../components/SearchBar/SearchBar"
import { UserProfile } from "../components/UserProfile/UserProfile"
import axios from "axios"

interface Props {
  buildTimeData?: any
}

interface State {
  inputValue: string
  userFetched: any
  isLoading: boolean
  defaultUser: any
}

export class Layout extends Component<Props, State> {
  state = {
    inputValue: "",
    userFetched: this.props.buildTimeData,
    isLoading: false,
    defaultUser: this.props.buildTimeData,
  }

  /** Find User and update State */
  inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    /** if no input, show the default profile */
    if (!value.trim()) {
      /** on empty input value, show the deafult username which was created on builtime */
      this.setState({ userFetched: this.state.defaultUser, inputValue: "" })
      return
    }

    this.setState({ inputValue: value })

    this.fetchUser(value).then(({ user }) => {
      this.setState({ userFetched: user })
    })
  }

  /** Fetching User */
  fetchUser = async value => {
    /** Start Loading */
    this.setState({ isLoading: true })

    // Client-side Runtime Data Fetching
    const { data } = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `
        query($user: String!) {
          user(login: $user) {
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
     `,
        variables: {
          user: value.trim(),
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_GITHUB_API}`,
        },
      }
    )
    this.setState({ isLoading: false })
    return data.data
  }

  /** When Click on The Search Icon Button */
  searchButtonHandler = (): void => {
    if(!this.state.inputValue) return;
    this.fetchUser(this.state.inputValue).then(({ user }) => {
      this.setState({ userFetched: user })
    })
  }

  render() {
    const { inputValue, userFetched, isLoading } = this.state
    return (
      <>
        <Header />
        <SearchBar
          inputElement={inputValue}
          onChange={this.inputValueHandler}
          onClick={this.searchButtonHandler}
        />
        <UserProfile isLoading={isLoading} userFetchedData={userFetched} />
        <Footer />
      </>
    )
  }
}
