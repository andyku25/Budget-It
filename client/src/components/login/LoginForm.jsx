import React from "react";

import { FormControl, TextField, Button } from "@material-ui/core"


const LoginForm = () => {
  return (
    <>
      <FormControl>
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button type="submit" variant="contained" color="primary" >Login</Button>

      </FormControl>
    </>
  )
}

export default LoginForm