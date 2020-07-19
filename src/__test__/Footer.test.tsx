import { configure } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import configureStore from "redux-mock-store" //ES6 modules
import React from "react"
import { shallow, mount } from "enzyme"
import Footer from "../components/Footer/Footer"
import { Provider } from "react-redux"
import action from "../state/createStore"

const middlewares = []
const mockStore = configureStore(middlewares)

configure({ adapter: new EnzymeAdapter() })
// You would import the action from your codebase in a real scenario
describe("Navba test", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      startup: { complete: false },
    })
  })

  test("Should render true", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test("Should render true matching text", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    )
    expect(wrapper.text()).toBe(
      "Build with React and Gatsby available on Github."
    )
  })
})
