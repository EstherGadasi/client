import axios from "axios";
import React, { useEffect, useState, navigate } from "react";
import Planning_a_trip from "../Planning a trip/Planning_a_trip";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'

import Trip from "../../components/trip/trip";
function Personal_area() {

    const [usertrip, setusertrip] = useState([])
    const [arrusertrip, setarrusertrip] = useState([])
    const [arrusersites, setarrusersites] = useState([])
    const [ststenew, setstatenew] = useState(false)
    const [ststeold, setstateold] = useState(false)
    const [currPage, setCurrPage] = useState(0)
    let arr = []
    async function bringuser() {
        try {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const res = await axios.get("http://localhost:4000/trip/1");
            setarrusertrip(res.data)
            res.data.forEach(element => {
                arr.push(element.sites)
            });
         setCurrPage(3)
            // setarrusersites(arr)
            console.log(res.data)
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
    }

    async function plan_new_trip() {
       
    }
    async function updatetrip() {
        setstateold(true)

    }
    return <>
        
        



                {/* {arrusertrip?.map((trips) => {

                    
                    return <div key={trips.idtrips} >{trips.idtrips}
                        {trips.sites?.map((site) => {

                         return(    <div style={{color:"red"}}>
                                {site.idsites}
                            </div>)
                            // return <div key={trips.idtrips} >{trips.idtrips}
                            // </div>
                        })}
                    </div>
                })} */}

                {/* {trips?.sites.map((site)=>{
            
            return <div  key={site.idsites} >{site.ages}</div>
        })} */}
                {/* {trips?.sites.map((site)=>{
            
            return <div  key={site.idsites} >{site.ages}</div>
        })} */}
         
        <button onClick={bringuser}>bring my trips</button>

        <button onClick={()=>setCurrPage(1)}>plan_new_trip</button>
        {/* {currPage ===1 && <ConstrainsA />} */}
        {currPage ===2 && <plan_new_trip />} 
       {/* { arrusertrip.map((e)=>{ */}
        {currPage ===3 && <Trip trip={arrusertrip}></Trip> } 
       {/* })} */}
        {/* {ststenew && <ConstrainsA setCurrPage={setCurrPage}></ConstrainsA>} */}
        <button onClick={()=>setCurrPage(2)}>updatetrip</button>
        {ststeold && <Planning_a_trip arrcs={usertrip.constrainsoflist} arrsites={usertrip.listofsites} tripid={usertrip.idtrip}></Planning_a_trip>}
    </>
}
export default Personal_area;