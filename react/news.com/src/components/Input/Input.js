import React from "react";
import "./input.css";

const Input = props => (
  <div>
    <input className="input" type={props.type} value={props.value}/>
  </div>
)

export default Input;