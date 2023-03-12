import axios from "axios";
import React, { useEffect, useState } from "react";
import ConstrainsB from "./b";
import Planning_a_trip from "../Planning_a_trip/Planning_a_trip";
function ConstrainsC(arrcs) {

    const [area, setarea] = useState("")
    const [trufic, settrufic] = useState("")
    


    async function finish() {
        arrcs.push(area);
        arrcs.push(trufic);
        
        <Planning_a_trip arrcs={arrcs}></Planning_a_trip>
        //pass to planning trips with arrcs  
    }
    async function form() {
        arrcs.push(area);
        arrcs.push(trufic);
       
        <ConstrainsB arrcs={arrcs}></ConstrainsB>
    }
    return <>
        <div>hello </div>
        <button onClick={finish}></button>
        <button onClick={form}></button>
        <input type={"text"} placeholder="area" onChange={(e) => { setarea(e.target.value) }}></input>
        <br></br><label>password</label><br></br>
        <input type={"text"} placeholder="trufic" onChange={(e) => { settrufic(e.target.value) }}></input><br></br>
       
    </>

}
export default ConstrainsC;

 