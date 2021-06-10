import React from "react";

import { TextField, Button } from "@material-ui/core";


const SignupForm = () => {
  return (
    <>
      <form action="" method="POST" >
        <TextField label="First Name" type="text" variant="outlined" />
        <TextField label="Last Name" type="text" variant="outlined" />
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <TextField label="Password Confirmation" type="password" variant="outlined" />
        <Button type="submit" variant="contained" color="primary" >Create</Button>

      </form>
    </>
  )
}

export default SignupForm