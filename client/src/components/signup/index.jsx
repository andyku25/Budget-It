import React from "react"
import SignupForm from "./SignupForm"

const Signup = (props) => {
  return (
    <>
    <div className="form-login-container" >
      <h1>Start Today! </h1>
      <SignupForm {...props} />
    </div>
    </>
  )
}

export default Signup