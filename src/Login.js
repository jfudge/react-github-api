import React from "react";
import TextField from "./TextField.js";
import Button from "./Button.js";
const Login = props => (
  <div>
    <h2>please enter your github username to login</h2>
    <TextField
      value={props.username}
      handleChange={props.handleChange}
      name="username"
      id="github_username"
      label="Your Github Username"
      
    />
    <Button handleClick={props.handleLogin} value="login" />
  </div>
);

export default Login;
