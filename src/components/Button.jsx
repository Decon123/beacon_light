import React from "react";
import "./Button.css";

const Button = ({ toggleLight, text }) => {
  return (
    <button className="button" onClick={toggleLight}>
      {text}
    </button>
  );
};

export default Button;
