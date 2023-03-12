import axios from "axios";
import React, { useEffect, useState } from "react";
import Planning_a_trip from "../Planning_a_trip/Planning_a_trip";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import ConstrainsA from "../allconstrains/a";
function Personal_area(){
    
    const [usertrip,setusertrip]=useState([])
    const [arrusertrip,setarrusertrip]=useState([])
    const [arrusersites,setarrusersites]=useState([])
    let arr=[]
    async function bringuser(){
        try {
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }    
            const res = await axios.get("http://localhost:4000/trip/1",config);
            setarrusertrip(res.data) 
            res.data.forEach(element => {
                arr.push(element.sites)
            });
            
            // setarrusersites(arr)
            console.log(res.data)
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
    } 
    
    async function plan_new_trip(){
        <ConstrainsA></ConstrainsA>
    }
     async function updatetrip(){
        <Planning_a_trip arrcs={usertrip.constrainsoflist} arrsites={usertrip.listofsites} tripid={usertrip.idtrip}></Planning_a_trip>
    }
    return<>
    <div>hello </div>
    <div>hello </div>

        <div>

            <label>

            <div  onChange={(e)=>setusertrip(e.target.value)} >
       
        {arrusertrip?.map((trips)=>{
            
            <div  onChange={(e)=>setusertrip(e.target.value)} >
        <h1>-select--</h1>
        {trips?.sites.map((site)=>{
            
            return <div  key={site.idsites} >{site.ages}</div>
        })}
         {trips?.sites.map((site)=>{
            
            return <div  key={site.idsites} >{site.ages}</div>
        })}
    </div>
            return <div  key={trips.idtrips} >{trips.idtrips}</div>
        })}
    </div>

              </label>

           
        </div>
    <button onClick={bringuser}>bring my trips</button>
   <button onClick={plan_new_trip}>plan_new_trip</button>
   <button onClick={updatetrip}></button>
    </>
}
export default Personal_area;