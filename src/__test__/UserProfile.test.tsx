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
        userFetchedData: {},
        isLoading: true
    }
    store = mockStore({
      startup: { complete: false },
    })
    wrapper = shallow(
      <Provider store={store}>
        <UserProfileInfo {...state} />
      </Provider>
    )
  })
  test("Should render full", () => {
      console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot('hello')
  })

})
