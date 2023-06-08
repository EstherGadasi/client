import axios from "axios";
import React, { useContext, useEffect, useState, navigate } from "react";
import Planning_a_trip from "../PlanTrip";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Trip from "../../components/trip/trip";
import { AuthContext } from "../../context/authContext"
import PointsSites from "../PlanTrip/pointsSites";
import { Button,Box } from '@mui/material';

function Personal_area() {
    const navigate = useNavigate()
    const [updatebutton, setupdatebutton] = useState()
    const [trip, settrips] = useState([])
    const [flag, setflag] = useState(true)
    const { token, currentUser } = useContext(AuthContext)
    const [currentitem, setcurrentitem] = useState()
    useEffect(() => {
        bringuser()
    }, []);
    async function bringuser() {
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        try {
            if (currentUser == null)
                navigate("/login")
            console.log(currentUser.idusers)
            const res = await axios.get(`http://localhost:4000/trip/${currentUser.idusers}`, config);
            console.log(res.data)
            if (res.data == "Unauthorized")
                navigate("/login")
            console.log(res.data)
            settrips(res.data)

        }
        catch (err) {
            //   setErr(err.response.data?.message);
        }
    }
    async function plan_new_trip() {
        navigate('/PlanTrip')
    }
    return <>
        {!currentitem ? <>
        <Box style={{width:"100vw",display:"blok"}}>
        <div>hello welcom to your personal area, here you can see all your trips edit them or delete and olso get to plan new one </div> 
        <Button onClick={plan_new_trip}>plan new trip</Button>
        <Box style={{width:"100vw",display:"blok"}}>
            {trip?.map((e, i) => {

                return <>
                    <Trip settrips={settrips} key={i} trip={e} trips={trip} setflag={setflag} flag={flag} setcurrentitem={setcurrentitem} />

                </>
            })}</Box></Box>
            </>: <Planning_a_trip startpoint1={currentitem.namestart} sites={currentitem.sites} id={currentitem.idtrips} paymenttrip={currentitem.payment} bg1={currentitem.begin_point1} bg2={currentitem.begin_point2} name={currentitem.name} />}
    </>


}
export default Personal_area;