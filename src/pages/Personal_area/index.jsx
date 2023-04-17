import axios from "axios";
import React, { useEffect, useState, navigate } from "react";
import Planning_a_trip from "../PlanTrip";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Trip from "../../components/trip/trip";
function Personal_area() {
    const navigate = useNavigate()
    const [updatebutton, setupdatebutton] = useState()
    const [trip, settrips] = useState([])

    useEffect(() => {
        bringuser()
    }, []);
    async function bringuser() {
        try {
            const res = await axios.get("http://localhost:4000/trip/1");
            // navigate("/login")
            console.log(res.data)
            settrips(res.data)
            
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
        // try {
        //     let config = {
        //         headers: {
        //             'Authorization': 'Bearer ' + localStorage.getItem("token")
        //         }
        //     }
        //     const res = await axios.get("http://localhost:4000/trip/1", config);
        //     setarrusertrip(res.data)
        // } catch (err) {
        //     //   setErr(err.response.data?.message);

        // }
        // // res.data.forEach(element => {
        // //     arr.push(element.sites)
        // // });

        // console.log(res.data)
    }
     async function plan_new_trip() {
        navigate('/PlanTrip')
    }



    return <>
        <div>hello </div>
        { trip?.map((e) => {

return <>
    <Trip trip={e} />

</>
})}
        <button onClick={plan_new_trip}>plan_new_trip</button>
    </>


}
export default Personal_area;