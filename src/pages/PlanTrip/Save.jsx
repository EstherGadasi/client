import React, { useEffect, useState } from "react";


import axios from "axios";
import { func } from "prop-types";


function Save({ setTripid,  payment,  area,  userId, begin_point1,  begin_point2,  end_point1, end_point2,  date,  listofsites,  constrainsoftrip ,idtrips}) {



    async function save() {
        // console.log(begin_point1,  begin_point2,  end_point1, end_point2)
        const res = await axios.post("http://localhost:4000/trip", {payment,  area,  userId, begin_point1,  begin_point2,  end_point1, end_point2,  date,  listofsites,  constrainsoftrip})
        console.log(res.data)
        setTripid(res.data.tripcreated.idtrips);
    }
   async function update() {
        const res = await axios.put(`http://localhost:4000/trip/${idtrips}`,{payment,  area,  userId, begin_point1,  begin_point2,  end_point1, end_point2,  date,  listofsites,  constrainsoftrip})
        console.log(res.data)
    }

    const fun = async () => {
        if (idtrips) {
            update()
        }
        else
            save()
        // const res = await axios.post("http://localhost:4000/trip",  props.trip);//the url not excat
        // console.log(props.tripid);
        // // console.log(res.data.tripcreated[0].idtrips)
        // // props.setTripid(res.data.tripcreated.idtrips);
        // console.log(props.tripid);
       
    }
    useEffect(() => { fun() }, []);
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

    return (<></>)
}
export default Save;

