import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchData } from "../actions/todoAction"

class List extends Component {
  componentDidMount() {}

  render() {
    return <div>To do list</div>
  }
}

export default connect(
  null,
  fetchData
)(List)
