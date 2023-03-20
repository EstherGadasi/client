import React , { useEffect, useState } from "react";


import axios from "axios";

 
function Save(props) {
    const fun = async()=>{
       
        // const res = await axios.post("http://localhost:4000/trip",  props.trip);//the url not excat
        console.log(props.tripid);
       // console.log(res.data.tripcreated[0].idtrips)
        // props.setTripid(res.data.tripcreated.idtrips);
        console.log(props.tripid);
    }
     useEffect(()=>{fun()}, []);   
    // const current = new Date()
    // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    // try {
    //     const trip = { // area:arrcs.area,
    //         userId: 1,
    //         begin_point1: begin_point1,
    //         begin_point2: begin_point2,
    //         end_point1: end_point1,
    //         end_point2: end_point2,
    //         date: date,
    //         listofsites: selectOption,
    //         constrainsoftrip: constrains
    //     }
        
    //  catch (err) {
    //     // setErr(err.response.data?.message);
    // }
    
    return(<></>)
}
 export default Save;

