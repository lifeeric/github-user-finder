import { createStore } from "redux"

type state = {
  isDark: boolean
}

const initialState: state = {
  isDark: false,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "THEME_TOGGLER":
      return {
        ...state,
        isDark: !state.isDark,
      }
    case "INITIAL_MODE":
      return {
        ...state,
        isDark: action.value,
      }
  }

  return state
}

// preloadedState will be passed in by the plugin
export default () => {
  return createStore(reducer)
}
