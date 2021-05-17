import React from "react"

import { TextField, Button } from "@material-ui/core";

import "./styles.scss";

const Login = () => {

  return (
    <>
      <div className="form-login-container">
        <h1>Budget-It</h1>

        <form action="" method="POST" >
          <TextField label="Email" type="email" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
          <Button type="submit" variant="contained" color="primary" >Login</Button>
        </form>
      </div>
    </>
  )
}

export default Login