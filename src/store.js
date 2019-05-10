import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

const initialState = {}
const middleware = [thunk]

const store = createStore(
  () => {},
  initialState,
  compose(
    applyMiddleware(...middleware), //ini salah satu isinya redux thunk
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //format dari chrome dev tools, harus download redux devtools dulu di chrome
  )
)

export default store
