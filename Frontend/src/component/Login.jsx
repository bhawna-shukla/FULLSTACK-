import React from 'react'
import {useFormik}from 'formik'
import * as Yup from 'Yup'
import { enqueueSnackbar } from 'notistack'







const Login = () => {
  return (
    
    <div>
        <div className="container">
  <div className="card">
    <div className="card_title">
      <h1>Create Account</h1>
      <span>
        Already have an account? <a href="login">Sign In</a>
      </span>
    </div>
    <div className="form">
      <form action="/register" method="post">
        <input
          type="text"
          name="username"
          id="username"
          placeholder=" Enter UserName"
        />
        <input type="email" name="email" placeholder="Enter Your Email" id="email" />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          id="password"
        />
        <button>Login</button>
      </form>
    </div>
    <div className="card_terms">
      <input type="checkbox" name="" id="terms" />{" "}
      <span>
        I have read and agree to the <a href="">Terms of Service</a>
      </span>
    </div>
  </div>
</div>

    </div>
  )
}




export default Login