// import '../login.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
function Login(){
    const [password ,setpassword ]=useState("")
    const [username,setuserName]=useState("")
    const [err, setErr] = useState(null);

    const navigate = useNavigate()
    // useEffect(()=>{
    //  fetch().
    //  then()   
    
    // },[password])
    const checkuser=async()=>{
        // e.preventDefault();
    try {      
      const res = await axios.post("http://localhost:5000/api/auth/login",  { username, password});
      console.log(res.data)
      localStorage.setItem("token", JSON.stringify(res.data.accessToken));
      navigate("/Personal area/Personal_area")
    } catch (err) {
      setErr(err.response.data?.message);
    }
    //     console.log(password ,username)
    //     const res = await fetch("http://localhost:3000/api/auth/register",
    //     {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },  
    //         body:JSON.stringify({username,password})
    //     })
    //     const responddata=res.json()
    //     const ressocket=responddata.accessToken
    
    //    console.log(ressocket)
    
   
        
        return( 
            <div className="login-page"><label>user name</label><br>
            </br><input type={"text"} onChange={(e)=>{setpassword(e.target.value)}}></input>
            <br></br><label>password</label><br></br>
        <input type={"password"}  onChange={(e)=>{setuserName(e.target.value)}}></input><br></br>
            <button onClick={checkuser}>login</button>
            
         </div> 
        //  <button onClick={()=>{this.signIn()}}>signIn</button>
        //   <button onClick={()=>{this.signUp()}}>signUp</button>:<SignUp></SignUp>
            )
    
    
}}
 export default Login;