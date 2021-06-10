import React from "react"

import LoginForm from "./LoginForm";
import "./styles.scss";

const Login = () => {

  return (
    <>
      <div className="form-login-container">
        <h1>Login</h1>

        <LoginForm />
      </div>
    </>
  )
}

export default Login