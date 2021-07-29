import React from "react"

import LoginForm from "./LoginForm";
import "./styles.scss";

const Login = (props) => {

  return (
    <>
      <div className="form-login-container">
        <h1>Login</h1>

        <LoginForm {...props} />
      </div>
    </>
  )
}

export default Login