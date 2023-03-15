import React , { useEffect, useState } from "react";


import axios from "axios";

<<<<<<< HEAD
 
async function Save({trip,setTripid}) {


console.log("LK")
    // const current = new Date();
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
=======

async function Save({setTrip,selectOption,constrains, begin_point1, begin_point2,end_point1,end_point2}) {


    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    try {
        const trip = { // area:arrcs.area,
            userId: 1,
            begin_point1: begin_point1,
            begin_point2: begin_point2,
            end_point1: end_point1,
            end_point2: end_point2,
            date: date,
            listofsites: selectOption,
            constrainsoftrip: constrains
        }
>>>>>>> 6f756724b2a6bbfc4e6c5d6166d5b08ed178abeb


        const res = await axios.post("http://localhost:4000/trip", { trip });//the url not excat

<<<<<<< HEAD
        setTripid(res.data.tripid)
=======
        setTrip(res.data.tripid)
>>>>>>> 6f756724b2a6bbfc4e6c5d6166d5b08ed178abeb

       
       
    // } catch (err) {
    //     // setErr(err.response.data?.message);
    // }
}
export default Save;