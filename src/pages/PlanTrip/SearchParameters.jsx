import React , { useEffect, useState } from "react";
import axios from "axios";

function SearchParameters({setTripsOptions,setconstrains}) {


    const [ages, setages] = useState("")
    const [children, setchildren] = useState("")
    const [bicycles, setbicycles] = useState("");

    const [num_of_turist, setnum_of_turist] = useState("")
    const [tripsKind, settripsKind] = useState("")
    const [description, setdescription] = useState("");
    const [area, setarea] = useState("")
    const [trufic, settrufic] = useState("")
    const [currPage, setCurrPage] = useState(2)
    const [payment, setpayment] = useState("")
    const [arrcs, setarrcs] = useState([])
    // let arrcs=[];

    async function bringmatchessites() {


        setarrcs([...arrcs, ages, children, bicycles, area, trufic, num_of_turist, tripsKind, description, payment]);
        // setconstrains(arrcs)

        setCurrPage(3)

    

   
        const GetMatchesSites = async () => {//ages,children,bicycles,area,trufic,num_of_turist,tripsKind,description,payment
            const constrains = {
                // num_of_turist: arrcs[5],
                // ages: arrcs[0],
                // children: arrcs[1],
                // bicycles: arrcs[2],
                // tripsKind: arrcs[6],
                // description: arrcs[7],
                // trufic: arrcs[4],
                // area: arrcs[3],
                // payment: arrcs[8]
                num_of_turist: "3",
                ages: " ",
                children: " ",
                bicycles: " ",
                tripsKind: " ",
                description: " ",
                trufic: " ",
                area: " ",
                payment: " ",
                time_it_takes:" "
                
            }
        setconstrains(constrains)
            try {

                const res = await axios.post("http://localhost:4000/site/constrains",  constrains );//the url not excat
                

               setTripsOptions([res.data])



                console.log(res)
            } catch (err) {
                // setErr(err.response.data?.message);
            }
        }
        GetMatchesSites()
   
}
    return <>

        <button onClick={bringmatchessites}>bringmatchessites</button><br></br>

        <input type={"text"} placeholder="ages" onChange={(e) => { setages(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="bicycles" onChange={(e) => { setbicycles(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="children" onChange={(e) => { setchildren(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="num_of_turist" onChange={(e) => { setnum_of_turist(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="tripsKind" onChange={(e) => { settripsKind(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="description" onChange={(e) => { setdescription(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="area" onChange={(e) => { setarea(e.target.value) }}></input><br></br>
        <input type={"text"} placeholder="trufic" onChange={(e) => { settrufic(e.target.value) }}></input><br></br>

        <input type={"text"} placeholder="payment" onChange={(e) => { setpayment(e.target.value) }}></input><br></br>
    </>


}
export default SearchParameters;