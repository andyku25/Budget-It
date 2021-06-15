import React, { useState } from "react";
import axios from "axios";

import { TextField, Button } from "@material-ui/core"


const LoginForm = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const resetForm = () => {
    setLoginData({
      email: "",
      password: ""
    })
  }

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()

    axios.post("/sessions", loginData)
      .then((res) => {
        console.log(res.data)
        resetForm()
      })
  }

  return (
    <>
      <form onSubmit={handleLogin} >
        <TextField label="Email" type="email" variant="outlined" name="email" value={loginData.email} onChange={handleInput} />
        <TextField label="Password" type="password" variant="outlined" name="password" value={loginData.password} onChange={handleInput} />
        <Button type="submit" variant="contained" color="primary" >Login</Button>

      </form>
    </>
  )
}

export default LoginForm