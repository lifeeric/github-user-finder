import { configure } from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import configureStore from "redux-mock-store" //ES6 modules
import React from "react"
import { shallow, mount } from "enzyme"
import Input from "../components/SearchBar/SearchBar"
import { Provider } from "react-redux"
import action from "../state/createStore"

const middlewares = []
const mockStore = configureStore(middlewares)

configure({ adapter: new EnzymeAdapter() })
// You would import the action from your codebase in a real scenario
describe("SearchBox", () => {
  let state
  beforeEach(
    () =>
      (state = {
        inputElement: "life",
        onChange: () => {},
        onClick: jest.fn(),
      })
  )
  test("Should render True when clicked", () => {
    const wrapper = mount(<Input {...state} />)
    wrapper.find("button").simulate("click")
    expect(state.onClick.mock.calls.length).toEqual(1)
  })

  test('should render input value', () => {
      const wrapper = mount(<Input {...state} />);
      console.log(wrapper.find('input').debug());
      expect(wrapper.find('input').get(0).props.value).toEqual('life')
  });
})
