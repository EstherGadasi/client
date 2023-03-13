import axios from "axios";
import React, { useEffect, useState } from "react";
import ConstrainsB from "./b";
import Planning_a_trip from "../Planning a trip/Planning_a_trip";
function ConstrainsC({arrcs}) {

    const [area, setarea] = useState("")
    const [trufic, settrufic] = useState("")
    const [ststeold, setststeold] = useState(false)
    const [ststenew, setststenew] = useState(false)

    if(!arrcs){
         arrcs=[]
    }
    async function finish() {
        arrcs.push(area);
        arrcs.push(trufic);
        
        setststenew( true)
    }
    async function form() {
        arrcs.push(area);
        arrcs.push(trufic);
       
        setststeold(true)
    }
    return <>
        {ststenew && <Planning_a_trip arrcs={arrcs}></Planning_a_trip>}
        {ststeold && <ConstrainsB arrcs={arrcs}></ConstrainsB>}
        <button onClick={finish}>finish</button>
        <button onClick={form}>form</button>
        <input type={"text"} placeholder="area" onChange={(e) => { setarea(e.target.value) }}></input>
        <input type={"text"} placeholder="trufic" onChange={(e) => { settrufic(e.target.value) }}></input><br></br>
       
    </>

}
export default ConstrainsC;

 