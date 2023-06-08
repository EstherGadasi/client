// import '../login.css';
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import './login.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { AuthContext } from "../../context/authContext"
import Register from '../register';
import { Box } from '@mui/material';
function Login() {
  const [password, setpassword] = useState("")
  const [username, setuserName] = useState("")
  const [err1, setErr] = useState(null);
  const [flag, setflag] = useState(true);
  const { login, err } = useContext(AuthContext)
  const navigate = useNavigate()

  const checkuser = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password })
      if (err == "Unauthorizedtf")
        alert("שם משתמש או סיסמא אינם נכונים")
      if (err == "all fileds arr required")
        alert("all fileds arr required")
      else { navigate("/myTrips", { replace: false }) }
    } catch (err1) {
      //   setErr(err.response.data?.message);
    }
  };

  function register() {
    navigate("/register", { replace: false })
  }

  return (
    <Box textAlign={"center"} borderTop style={{
      margin: "auto", innerWidth: "25vw", display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      position: "relative",

      background: "linear-gradient(135deg,rgba($left-color, .9),rgba($right-color, .9))",
      fontFamily: "'Roboto', helvetica, arial, sans-serif",
      fontSize: "1.5em"
    }}>
      <div className="login-page" style={{ margin: "auto", alignItems: "center" }}>
        <form className="login-form" borderColor={"GrayText"} style={{ width: "25vw", margin: "auto", marginTop: "10vw", padding: "2em", position: "relative", background: "rgba(black, .15)" }}>
          <div className="text-center">
            Not registered yet?{" "}
            <a className="link-primary" style={{ marginTop: "1em", color: "$green-light", fontSize: ".65em", textAlign: "center", position: "relative" }} onClick={register}>
              Sign Up
            </a>
          </div>
          <div className="login-form-content">
            <h3 className="login-form-title">Sing In</h3>
            <div style={{ display: "flex", marginBottom: "1em" }}>
              <label for="username" style={{ width: "2em", display: "flex", alignItems: "center", justifyContent: "center", background: " $gray-light", cursor: "pointer" }}><svg x="0px" y="0px" width="12px" height="13px">
                <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z" />
              </svg></label>
              <input className="form-control mt-1" type={"text"} placeholder="user name" style={{ flex: 1, padding: "1em", border: 0, color: "$gray", fontSize: "1rem" }} onChange={(e) => { setuserName(e.target.value) }}></input>
            </div>
            <div style={{ display: "flex", marginBottom: "1em" }}>
              <label style={{ width: "2em", display: "flex", alignItems: "center", justifyContent: "center", background: " $gray-light", cursor: "pointer" }}> <svg x="0px" y="0px" width="15px" height="5px">
                <g>
                  <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z" />
                </g>
              </svg></label>
              <input className="form-control mt-1" type={"password"} placeholder="password" style={{ flex: 1, padding: "1em", border: 0, color: "$gray", fontSize: "1rem" }} onChange={(e) => { setpassword(e.target.value) }}></input>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn-btn-primary" onClick={checkuser} style={{
                display: "block",
                padding: "1em",
                width: "100%",
                cursor: "pointer",
                fontSize: ".75em",
                textShadow: "0 1px 0 rgba(black, .2)"
              }}>login</button>
            </div>

          </div>
        </form>
      </div></Box>
  )
}
export default Login;