import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: "" //key name should be same as input name
    }
  }

  handleOnChange = event => {
    console.log(event.target.name, event.target.value)
    this.setState({
      /* nulisnya harusnya seperti ini: 

          description : event.target.value
          
         tapi, kita ga mau hardcode, jadinya gini:
      */
      [event.target.name]: event.target.value //harus pakai kurung siku karena mau nama key-nya ga hardcode, harus fleksibel sesuai input name
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Todo"
          name="description"
          onChange={this.handleOnChange}
        />
        <button>Submit</button>
      </div>
    )
  }
}

export default Form
