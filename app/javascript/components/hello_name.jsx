/* eslint-disable react/prop-types */
// eslint-disable-next-line no-use-before-define
import React from "react";
function HelloName (props) {
  const name = props.name;
  console.log(props.name);
  return (
    <div>
        <h1>Hello {name}!</h1>
    </div>
  );
}

export default HelloName;
