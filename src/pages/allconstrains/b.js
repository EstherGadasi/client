import axios from "axios";
import React, { useEffect, useState } from "react";
import ConstrainsA from "./a";
import ConstrainsC from "./c";
function ConstrainsB(arrcs){

    const [num_of_turist ,setnum_of_turist ]=useState("")
    const [tripsKind,settripsKind]=useState("")
    const [description, setdescription] = useState("");


    async function continues(){
        arrcs.push(num_of_turist);
        arrcs.push(tripsKind);
        arrcs.push(description);

      <ConstrainsC arrcs={arrcs}></ConstrainsC>
    }
    async function form(){
        arrcs.push(num_of_turist);
        arrcs.push(tripsKind);
        arrcs.push(description);

      <ConstrainsA arrcs={arrcs}></ConstrainsA>
    }
    return<>
    <div>hello </div>
    <button onClick={continues}></button>
    <button onClick={form}></button>
        <input type={"text"} placeholder="num_of_turist" onChange={(e)=>{setnum_of_turist(e.target.value)}}></input>
        <br></br><label>password</label><br></br>
        <input type={"text"} placeholder="tripsKind" onChange={(e)=>{settripsKind(e.target.value)}}></input><br></br>
        <input type={"text"} placeholder="description" onChange={(e)=>{setdescription(e.target.value)}}></input><br></br>
    </>
    
}
export default ConstrainsB;
  
  
  // trufic:
  // area: 