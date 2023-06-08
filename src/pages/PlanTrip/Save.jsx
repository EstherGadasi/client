import React, { useContext,useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/authContext"
import axios from "axios";
import { func } from "prop-types";


function Save({namestart, selectOption,setend_point1, setend_point2,duration, setTripid,  payment,  area,  userId, begin_point1,  begin_point2,  end_point1, end_point2,  date,  listofsites,  constrainsoftrip ,idtrips}) {
    const navigate = useNavigate()
let i=0
    async function save() {
        i++
         console.log(listofsites)
        const res = await axios.post("http://localhost:4000/trip", {namestart,duration,payment,  area,  userId, begin_point1,  begin_point2,  end_point1, end_point2,  date,  listofsites,  constrainsoftrip})
        console.log(res.data)
        setTripid(res.data.tripcreated.idtrips);
       const id=res.data.tripcreated.idtrips
        navigate("/FinallTrip", { state: { id: {  id} } })
    }

   async function update() {
    i++
    console.log(listofsites)
        const res = await axios.put(`http://localhost:4000/trip/${idtrips}`,{namestart,duration,payment,  area,  userId, begin_point1,  begin_point2,  end_point1, end_point2,  date,  listofsites})
        console.log(res.data)
       const id=idtrips
        navigate("/FinallTrip", { state: { id: {id  } } })
    }

    const SaveOrUpdate = async () => {
       setend_point1(selectOption.place1)
       setend_point2(selectOption.place2)
        if (idtrips) {
            update()
        }
        else
            save()
    }
    useEffect(() => {if(i==0) SaveOrUpdate() }, []);
    
    return (<></>)
}
export default Save;

