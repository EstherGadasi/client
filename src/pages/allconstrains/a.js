import axios from "axios";
import React, {  useState } from "react";
import ConstrainsB from "./b";
// import './index'
function ConstrainsA(){

    const [ages ,setages ]=useState("")
    const [children,setchildren]=useState("")
    const [bicycles, setbicycles] = useState("");
let arrcs=[]

    async function continues(){
        arrcs.push(ages);
        arrcs.push(children);
        arrcs.push(bicycles);

      <ConstrainsB arrcs={arrcs}></ConstrainsB>
    }
    return<>
    <div>hello </div>
    <button onClick={continues}>continues</button><br></br>
    
            <input type={"text"} placeholder="ages" onChange={(e)=>{setages(e.target.value)}}></input><br></br>
           
        <input type={"text"} placeholder="bicycles" onChange={(e)=>{setbicycles(e.target.value)}}></input><br></br>
        <input type={"text"} placeholder="children" onChange={(e)=>{setchildren(e.target.value)}}></input><br></br>
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