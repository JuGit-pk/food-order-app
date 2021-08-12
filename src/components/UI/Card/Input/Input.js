import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <form className="input">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </form>
  );
};

export default Input;
