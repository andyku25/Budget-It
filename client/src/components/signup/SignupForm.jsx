import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { TextField, Button } from "@material-ui/core";


const SignupForm = (props) => {

  const history = useHistory();

  if (props.user.isLoggedIn) {
    console.log(props)
    history.push("/");
  }


  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const resetSignupForm = () => {
    setNewUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
  }

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

    axios.post("/api/v1/users", newUser, { withCredentials: true })
      .then((res) => {
        console.log("user Created, response: ", res);
        resetSignupForm();
      })
      .catch(err => console.error("User creation error ", err))
  }

  return (
    <>
      <form onSubmit={handleSignup} >
        <TextField label="First Name" type="text" variant="outlined" name="first_name" value={newUser.first_name} onChange={handleInput} required />
        <TextField label="Last Name" type="text" variant="outlined" name="last_name" value={newUser.last_name} onChange={handleInput} required />
        <TextField label="Email" type="email" variant="outlined" name="email" value={newUser.email} onChange={handleInput} required />
        <TextField label="Password" type="password" variant="outlined" name="password" value={newUser.password} onChange={handleInput} required />
        <TextField label="Password Confirmation" type="password" variant="outlined" name="password_confirmation" value={newUser.password_confirmation} onChange={handleInput} required />
        <Button type="submit" variant="contained" color="primary" >Create</Button>

      </form>
    </>
  )
}

export default SignupForm