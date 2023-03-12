import React, { useEffect, useState } from "react";
// import React from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
    const [password ,setpassword ]=useState("")
    const [username,setuserName]=useState("")
    const [email ,setmail ]=useState("")
    const [err, setErr] = useState(null);
    const navigate = useNavigate()

    //  fetch().username, email, password
    //  then()   
    
    // },[password])
    const  registeruser=async()=>{

        try {
         const res=  await axios.post("http://localhost:4000/api/auth/register", { username, password, email});
             navigate("/login")
             console.log(res.data)
          } catch (err) {
        //    setErr(err.response.data?.message);
            
          }
          
    //     const res = await fetch("http://localhost:3000/api/auth/register",
    //     {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
          
            
    //         body:JSON.stringify({email,username,password})
    //     })
    //     const responddata=res.json()
    //    console.log(responddata)

       
    //     const res = await fetch("http://localhost:5000/api/auth/register",
    //     {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
          
    //         mode:'no-cors',
    //         body:JSON.stringify({email,username,password})
    //     })
    //     console.log(res);
    //     const responddata=await res.json()
    //    console.log(responddata)

    }
   
        
        return( 
            <div className="login-page"><label>user name</label><br></br>
            <input type={"text"} onChange={(e)=>{setuserName(e.target.value)}}></input><br></br>
            <br></br><label>password</label><br></br>
        <input type={"password"}  onChange={(e)=>{setpassword(e.target.value)}}></input><br></br>
        <br></br><label>mail</label><br></br>
        <input type={"mail"}  onChange={(e)=>{setmail(e.target.value)}}></input><br></br>
            <button onClick={registeruser}>register</button>
            
         </div> 
        //  <button onClick={()=>{this.signIn()}}>signIn</button>
        //   <button onClick={()=>{this.signUp()}}>signUp</button>:<SignUp></SignUp>
            )
}

export default Register