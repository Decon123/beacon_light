import React, { useState } from "react";
import "./Button.css";

const Button = ({ toggleLight }) => {
  return (
    <button className="button" onClick={toggleLight}>
      Switch
    </button>
  );
};

export default Button;
