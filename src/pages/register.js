import React, { useEffect, useState } from "react";
// import React from "react";
import { Link } from "react-router-dom";
function Register() {
    const [password ,setpassword ]=useState("")
    const [username,setuserName]=useState("")
    const [email ,setmail ]=useState("")
    //  fetch().username, email, password
    //  then()   
    
    // },[password])
    const  registeruser=async()=>{
       
        const res = await fetch("http://localhost:5000/api/auth/register",
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          
            mode:'no-cors',
            body:JSON.stringify({email,username,password})
        })
        console.log(res);
        const responddata=await res.json()
       console.log(responddata)
    }
   
        
        return( 
            <div className="login-page"><label>user name</label><br></br>
            <input type={"text"} onChange={(e)=>{setpassword(e.target.value)}}></input><br></br>
            <br></br><label>password</label><br></br>
        <input type={"password"}  onChange={(e)=>{setuserName(e.target.value)}}></input><br></br>
        <br></br><label>mail</label><br></br>
        <input type={"mail"}  onChange={(e)=>{setmail(e.target.value)}}></input><br></br>
            <button onClick={registeruser}>register</button>
            
         </div> 
        //  <button onClick={()=>{this.signIn()}}>signIn</button>
        //   <button onClick={()=>{this.signUp()}}>signUp</button>:<SignUp></SignUp>
            )
}

export default Register