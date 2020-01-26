import React from "react";

export default class Sample2 extends React.Component {

  render() {
    return(
      <div>
        <p>this.props.name</p>
        <p>this.props.submittedName</p>
        <p>{this.props.name}</p>
        <p>{this.props.submittedName}</p>
      </div>
    )
  }
}
