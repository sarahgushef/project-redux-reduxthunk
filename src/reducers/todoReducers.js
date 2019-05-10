const initialState = {
  todo_List: [],
  new_todo: {}
}

export default (state = initialState, action) => {
  console.log(action)

  return state
}
