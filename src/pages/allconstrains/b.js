import axios from "axios";
import React, { useEffect, useState } from "react";
import ConstrainsA from "./a";
import ConstrainsC from "./c";
function ConstrainsB({arrcs}) {

  const [num_of_turist, setnum_of_turist] = useState("")
  const [tripsKind, settripsKind] = useState("")
  const [description, setdescription] = useState("");
  const [ststeold, setststeold] = useState(false)
  const [ststenew, setststenew] = useState(false)
  const [area, setarea] = useState("")
  const [trufic, settrufic] = useState("")
  if(!arrcs){
     arrcs=[]
}
  async function continues() {
    arrcs.push(num_of_turist);
    arrcs.push(tripsKind);
    arrcs.push(description);

    setststenew(true)
  }
  async function form() {
    arrcs.push(num_of_turist);
    arrcs.push(tripsKind);
    arrcs.push(description);
    setststeold(true)

  }
  return <>
    
    {/* {ststeold && <ConstrainsA arrcs={arrcs}></ConstrainsA>}
    {ststenew && <ConstrainsC arrcs={arrcs}></ConstrainsC>} */}
    <button onClick={continues}>continues</button>
    {/* <button onClick={form}>form</button> */}
    <input type={"text"} placeholder="num_of_turist" onChange={(e) => { setnum_of_turist(e.target.value) }}></input>
    <input type={"text"} placeholder="tripsKind" onChange={(e) => { settripsKind(e.target.value) }}></input><br></br>
    <input type={"text"} placeholder="description" onChange={(e) => { setdescription(e.target.value) }}></input><br></br>
  </>

}
export default ConstrainsB;


  // trufic:
  // area: 