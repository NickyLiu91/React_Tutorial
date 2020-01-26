import React from "react";

const Sample1 = (props) => {
  return(
    <div>
      <p>props.name</p>
      <p>props.submittedName</p>
      <p>{props.name}</p>
      <p>{props.submittedName}</p>
    </div>
  )
}

export default Sample1;
