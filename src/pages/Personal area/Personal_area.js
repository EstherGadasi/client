import axios from "axios";
import Planning_a_trip from "../Planning a trip/Planning_a_trip";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import ConstrainsA from "../allconstrains/a";
function Personal_area(){
    let c=[]
    let sites=[]
    async function bringuser(){
        try {
            const res = await axios.get("http://localhost:4000/trip/1");
            // navigate("/login")
            console.log(res.data[0].sites)
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
    }
    async function plan_new_trip(){
        <ConstrainsA></ConstrainsA>
    }
     async function updatetrip(){
        <plan_new_trip arrcs={c} arrsites={sites} ></plan_new_trip>
    }
    return<>
    <div>hello </div>
    <button onClick={bringuser}>bring my trips</button>
   <button onClick={plan_new_trip}>plan_new_trip</button>
   <button onClick={updatetrip}></button>
    </>
}
export default Personal_area;