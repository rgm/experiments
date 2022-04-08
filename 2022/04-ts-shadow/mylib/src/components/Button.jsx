import React, { useState } from "react";
import PropTypes from 'prop-types';

const initialCount = 0;

export default function Button({ label, backgroundColor, onClick }) {
  console.log("RUNNING BUTTON");
  // const [count, setCount] = useState(initialCount);
  return (
    <button onClick={onClick}
    style={backgroundColor && { backgroundColor }}>
      {label}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
