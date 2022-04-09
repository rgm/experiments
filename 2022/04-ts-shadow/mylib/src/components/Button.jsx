import React, { useState } from "react";
import PropTypes from "prop-types";

const initialCount = 0;

export default function Button({ label, backgroundColor, onClick }) {
  const [count, setCount] = useState(initialCount);
  console.log("RUNNING BUTTON");
  return (
    <div>
      Count is: {count}
      <button onClick={onClick} style={backgroundColor && { backgroundColor }}>
        {label}
      </button>
    </div>
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
