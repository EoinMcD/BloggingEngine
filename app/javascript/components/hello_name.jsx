import React from "react";

function HelloName (props) {
  const name = props.name;
  console.log(name);
  return (
    <div>
        <h1>Hello {name}!</h1>
    </div>
  );
}

export default HelloName;
