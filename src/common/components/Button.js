import React from "react";

const Button = ({ attribute, getFilter }) => {
  return (
    <div>
      <button
        className="btn btn-secondary btn-sm m-1"
        onClick={() => {
          getFilter(attribute.toString().toLowerCase());
        }}
      >
        {attribute}
      </button>
    </div>
  );
};

export default Button;
