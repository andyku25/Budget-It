import React from "react";

import { TextField, Button } from "@material-ui/core"


const LoginForm = () => {
  return (
    <>
      <form action="/sessions" method="POST" >
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button type="submit" variant="contained" color="primary" >Login</Button>

      </form>
    </>
  )
}

export default LoginForm