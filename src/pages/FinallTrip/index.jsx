import axios from "axios";
import React, { useEffect, useState } from "react";
import Trip from "../../components/trip/trip";


 function FinallTrip({tripid}) {
    const[trip,settrip]=useState({})
    async function fun(){

    try {
         // area:arrcs.area,

        const trip = await axios.get(`http://localhost:4000/trip/${tripid}`);//the url not excat
        settrip(trip.data)
       
    } catch (err) {
        // setErr(err.response.data?.message);
    }

   }
    useEffect(()=>{fun()}, []);  
    return <>
         <Trip trip={trip}/>
       
        
    </>
}
export default FinallTrip;