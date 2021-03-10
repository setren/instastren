import { createStore } from "redux";

const initialState = {
  background: "white",
  color: "black"
};

function rootReducer(state = initialState, action) {
  if (action.type === "SWITCH_DARK") {
    return { ...state, background: action.background, color: action.color }
  }
  // default state
  return state;
}

const isDev = process.env.NODE_ENV === 'development'
export const store = createStore(rootReducer, isDev ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '')