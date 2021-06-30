import React, { useState } from "react";
import axios from "axios";

import { TextField, Button } from "@material-ui/core"


const LoginForm = (props) => {

  // const isLoggedIn = props.user.isLoggedIn;
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
        if (res.data.status !== 401) {
          props.setUser({
            ...props.user,
            isLoggedIn: true,
            userInfo: res.data.user
          })
          console.log(props.user.userInfo)
          resetForm()
        } else {
          console.log(`Error status ${res.data.status}: ${res.data.message}`)
        }
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