import React , { useEffect, useState } from "react";


import axios from "axios";

async function Save() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    try {
        const trip = { // area:arrcs.area,
            userId: 1,
            begin_point1: 1,
            begin_point2: 2,
            end_point1: 3,
            end_point2: 4,
            date: date,
            listofsites: sites,
            constrainsoftrip: constrains
        }


        const res = await axios.post("http://localhost:4000/trip", { trip });//the url not excat
       
       
    } catch (err) {
        // setErr(err.response.data?.message);
    }
}
export default Save;