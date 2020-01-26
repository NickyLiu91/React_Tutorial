import React from "react";
import Sample1 from "./sample1.js";
import Sample2 from "./sample2.js";

export default class Form extends React.Component {

  state = {
    name: '',
    submittedName: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  submit = (event) => {
    this.setState({
      submittedName: this.state.name
    })
    event.preventDefault()
  }

  render() {
    return(
      <div>
        <p>Hello, {this.state.submittedName}!</p>
        <form onSubmit={(event) => {this.submit(event)}}>
          Name: <input type="text" value={this.state.value} onChange={event => {this.handleChange(event)}} />
          <input type="submit" value="Submit" />
        </form>
        <Sample1 name={this.state.name} submittedName={this.state.submittedName}/>
        <Sample2 name={this.state.name} submittedName={this.state.submittedName}/>
      </div>
    )
  }

}
