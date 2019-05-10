import axios from "axios"

export const fetchData = () => dispatch => {
  axios.get("https://haekal-todo-list-api.herokuapp.com/todos").then(response =>
    dispatch({
      type: "FETCH DATA",
      payload: response.data
    }).catch(err => console.log(err))
  )
}

// alternatif 2 using non-arrow function

/*
export function fetchData() {
  return function(dispatch){
    axios
      .get("https://haekal-todo-list-api.herokuapp.com/todos")
      .then(response =>
        dispatch({
          type: "FETCH DATA",
          payload: response.data
        }).catch(err => console.log(err))
        )
  }
}
*/
