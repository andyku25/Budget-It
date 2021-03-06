import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { TextField, Button } from "@material-ui/core"


const LoginForm = (props) => {

  const history = useHistory();

  if (props.user.isLoggedIn) {
    history.push("/")
  }

  // const isLoggedIn = props.user.isLoggedIn;
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  // reset form data to empty form
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
        if (res.data.status === "created") {
          props.setUser({
            ...props.user,
            isLoggedIn: true,
            userInfo: res.data.user
          })
          console.log(props.user.userInfo)
          resetForm()
        } else {
          // Todo: Send an alert message for unsuccessful login
          console.log(`Error status ${res.data.status}: ${res.data.message}`);
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