import axios from "axios";
import React, { useEffect, useState } from "react";
import Trip from "../../components/trip/trip";


async function FinallTrip(id) {
const[trip,settrip]=useState({})
    try {
         // area:arrcs.area,

        const trip = await axios.get(`http://localhost:4000/trip${id}`);//the url not excat
        settrip(trip.data)
       
    } catch (err) {
        // setErr(err.response.data?.message);
    }

   
   
    return <>
         <Trip trip={trip}/>
       
        
    </>
}
export default FinallTrip;