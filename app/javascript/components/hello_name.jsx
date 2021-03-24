import * as React from "react";
import PropTypes from "prop-types";

function HelloName (props) {
  const name = props.name;
  return (
    <div>
        <h1>Hello {name}!</h1>
    </div>
  );
}

HelloName.propTypes = {
  name: PropTypes.string.isRequired
};

export default HelloName;
