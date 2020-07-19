import { configure } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import configureStore from "redux-mock-store" //ES6 modules
import React from "react"
import { shallow, mount } from "enzyme"
import { UserProfileInfo } from "../components/UserProfile/UserProfileInfo/UserProfileInfo"
import { Provider } from "react-redux"
import action from "../state/createStore"

const middlewares = []
const mockStore = configureStore(middlewares)

configure({ adapter: new EnzymeAdapter() })
// You would import the action from your codebase in a real scenario
describe("SearchBox", () => {
  let state
  let store
  let wrapper
  beforeEach(() => {
    state = {
      userInfo: {
        name: "eric",
        bio: "enthusiast",
        followers: { totalCount: 0 },
        following: { totalCount: 5 },
        starredRepositories: { totalCount: 4 },
      },
    }
    store = mockStore({
      startup: { complete: false },
    })
    wrapper = mount(
      <Provider store={store}>
        <UserProfileInfo {...state} />
      </Provider>
    )
  })
  test("Should render True when clicked", () => {
    expect(wrapper.find("h2").text()).toEqual("ericenthusiast")
  })

  test("Should render user data", () => {
    // console.log(wrapper.find('[className="profile__follow__number"]').get(1).debug())

    expect(wrapper.find('[className="profile__follow__number"]').first().text()).toEqual("0")
    expect(wrapper.find('[className="profile__follow__number"]').get(1).props.children).toEqual(5)
    expect(wrapper.find('[className="profile__follow__number"]').get(2).props.children).toEqual(4)
  })
})
