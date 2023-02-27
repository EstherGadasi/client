import '../login.css';
import React, { useEffect, useState } from "react";
// import React from "react";
import { Link } from "react-router-dom";
function Login(){
    const [password ,setpassword ]=useState("")
    const [username,setuserName]=useState("")

    // useEffect(()=>{
    //  fetch().
    //  then()   
    
    // },[password])
    const checkuser=async()=>{
        console.log(password ,username)
        const res = await fetch("http://localhost:5000/api/auth/login",
        {
            method: 'POST',
    
            headers: { 'Content-Type': 'application/json' },  
            body: JSON.stringify({username:username,password:password})
        })
        console.log(res)
        const responddata=await res.json()
        const ressocket=responddata.accessToken
    
       console.log(ressocket)
    }
   
        
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
    
    
}
export default Login;