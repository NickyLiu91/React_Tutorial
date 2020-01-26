import React from "react";

export default class Number extends React.Component {

  state = {
    number: 0
  }

  printNumber = (event) => {
    console.log(this.state.number)
    console.log(event)
    console.log(event.target)
    console.log(event.target.id)
  }

  addOne = () => {
    this.setState({
      number: this.state.number + 1
    }, () => {
      console.log(this.state.number)
    })
  }

  funkyState = () => {
    this.setState({
      number: 999
    })
  }

  componentDidMount(){
    this.funkyState()
  }

  numberFunction = () => {
    return (9 + 9)
  }

  render() {
    return(
      <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <button id="button" onClick={(event) => {this.printNumber(event)}}>Print State</button>
        <button id="button" onClick={(event) => {this.addOne(event)}}>Add Number</button>
        <p>5 + 5</p>
        <p>{5 + 5}</p>
        <p>{this.numberFunction()}</p>
      </div>
    )
  }
}
