import axios from "axios";
import React, {  useState } from "react";
import ConstrainsB from "./b";
// import './index'
import Planning_a_trip from "../Planning a trip/Planning_a_trip";
function ConstrainsA(){

    const [ages ,setages ]=useState("")
    const [children,setchildren]=useState("")
    const [bicycles, setbicycles] = useState("");
    // const[ststenew,setststenew]=useState(false)
    const [num_of_turist, setnum_of_turist] = useState("")
  const [tripsKind, settripsKind] = useState("")
  const [description, setdescription] = useState("");
  const [area, setarea] = useState("")
  const [trufic, settrufic] = useState("")
const [currPage,setCurrPage]=useState(2)
const [payment,setpayment]=useState("")
const [arrcs,setarrcs]=useState("")
// let arrcs=[];

    async function continues(){
       setarrcs([...arrcs,ages,children,bicycles,area,trufic,num_of_turist,tripsKind,description,payment]);
        // (children);
        // (bicycles);
        // (area);
        // (trufic);
        // (num_of_turist);
        // (tripsKind);
        // (description);
        // (payment);
        setCurrPage(3)
    }
    return<>
    
    <button onClick={continues}>continues</button><br></br>
    
            <input type={"text"} placeholder="ages" onChange={(e)=>{setages(e.target.value)}}></input><br></br>
            {currPage ===3 && <Planning_a_trip arrcs={arrcs}/>}
        <input type={"text"} placeholder="bicycles" onChange={(e)=>{setbicycles(e.target.value)}}></input><br></br>
        <input type={"text"} placeholder="children" onChange={(e)=>{setchildren(e.target.value)}}></input><br></br>
        <input type={"text"} placeholder="num_of_turist" onChange={(e) => { setnum_of_turist(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="tripsKind" onChange={(e) => { settripsKind(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="description" onChange={(e) => { setdescription(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="area" onChange={(e) => { setarea(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="trufic" onChange={(e) => { settrufic(e.target.value) }}></input><br></br>
     
     <input type={"text"} placeholder="payment" onChange={(e) => { setpayment(e.target.value) }}></input><br></br>
    </>
    
}
export default ConstrainsA;
 // num_of_turist: 
// ages
  //children
  //bicycles
  // tripsKind: 
  // description:
  // trufic:
  // area: 