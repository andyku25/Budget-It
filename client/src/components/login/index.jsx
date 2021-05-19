import React from "react"

import { TextField, Button } from "@material-ui/core";

import LoginForm from "./LoginForm";
import "./styles.scss";

const Login = () => {

  return (
    <>
      <div className="form-login-container">
        <h1>Budget-It</h1>

        <LoginForm />
      </div>
    </>
  )
}

export default Login