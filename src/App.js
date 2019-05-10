import React from "react"
import { Provider } from "react-redux"
import store from "./store"

import Form from "./components/Form"
import List from "./components/List"

function App() {
  return (
    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  )
}

export default App
