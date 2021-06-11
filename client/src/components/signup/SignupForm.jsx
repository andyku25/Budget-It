import React, { useState } from "react";
import Axios from "axios";

import { TextField, Button } from "@material-ui/core";


const SignupForm = () => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setNewUser({
      ...newUser,
      [name]: value
    })
  }

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <>
      <form onSubmit={handleSignup} >
        <TextField label="First Name" type="text" variant="outlined" name="first_name" value={newUser.first_name} onChange={handleInput} required />
        <TextField label="Last Name" type="text" variant="outlined" name="last_name" value={newUser.last_name} onChange={handleInput} />
        <TextField label="Email" type="email" variant="outlined" name="email" value={newUser.email} onChange={handleInput} />
        <TextField label="Password" type="password" variant="outlined" name="password" value={newUser.password} onChange={handleInput} />
        <TextField label="Password Confirmation" type="password" variant="outlined" name="password_confirmation" value={newUser.password_confirmation} onChange={handleInput} />
        <Button type="submit" variant="contained" color="primary" >Create</Button>

      </form>
    </>
  )
}

export default SignupForm