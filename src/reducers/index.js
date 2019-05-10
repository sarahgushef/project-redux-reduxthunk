import { combineReducers } from "redux"
import todoReducer from "./todoReducers"

const rootReducers = combineReducers({
  todo: todoReducer
})

export default rootReducers
