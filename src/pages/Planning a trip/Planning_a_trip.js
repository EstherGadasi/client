import axios from "axios";
import React, { useEffect, useState } from "react";
import FinallTrip from "../FinallTrip/FinallTrip";
import Show from "../showdetails";
import ConstrainsC from "../allconstrains/c";

function Planning_a_trip({arrcs, arrsites, tripid}) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const constrains = {
        num_of_turist: arrcs[5],
        ages: arrcs[0],
        children: arrcs[1],
        bicycles: arrcs[2],
        tripsKind: arrcs[6],
        description: arrcs[7],
        trufic: arrcs[4],
        area: arrcs[3],
        payment: arrcs[8]
    }


    const [sites, setsites] = useState(arrsites)
    const[correntitem,setcorrentitem]= useState("")
    const [username, setuserName] = useState("")
    const [err, setErr] = useState(null);
   const [matchesites,setmatchesites]=useState([])
   let newsites=[]
    useEffect(() => {
        console.log("we")
        const GetMatchesSites = async () => {//ages,children,bicycles,area,trufic,num_of_turist,tripsKind,description,payment
            try {
                const res = await axios.get("http://localhost:4000/site/constrains", {constrains});//the url not excat
                res.data.forEach(element => setmatchesites([...matchesites,element]));
                console.log(res)
            } catch (err) {
                // setErr(err.response.data?.message);
            }
        }
        GetMatchesSites()
    }, []);

    useEffect(() => {

        const CountTrip = async () => {

        }
        CountTrip()
    }, [sites]);

    async function addsite() {
        newsites = sites.push(correntitem)
        setsites(...newsites)
    }
    async function ReduceSite() {
        newsites = sites.pop(correntitem)
        setsites(...newsites)
    }
    async function finish() {
        try {
            const trip = { // area:arrcs.area,
                userId: 1,
                begin_point1: 1,
                begin_point2: 2,
                end_point1: 3,
                end_point2: 4,
                date: date,
                listofsites: sites,
                constrainsoftrip: constrains
            }


            const res = await axios.post("http://localhost:4000/trip", { trip });//the url not excat
           
            <FinallTrip trip={res}></FinallTrip>
        } catch (err) {
            // setErr(err.response.data?.message);
        }
    }
    async function form() {
        <ConstrainsC arrcs={arrcs}></ConstrainsC>
    }
    async function update(e) {
        const trip = { // area:arrcs.area,
            userId: 1,
            begin_point1: 1,
            begin_point2: 2,
            end_point1: 3,
            end_point2: 4,
            date: date,
            listofsites: sites,
            constrainsoftrip: constrains
        }
        try {
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }    
            const res = await axios.update(`http://localhost:4000/trip/${tripid}`, { trip },config);
            res.data.forEach(element => setmatchesites([...matchesites,element]));
            <FinallTrip trip={res}></FinallTrip>
        } catch (err) {
            // setErr(err.response.data?.message);
        }
    }
    return <>
        {/* {matcessites.map((e) => <button onClick={(e) => { ShowSiteDetails }} key={e.id}>{e}</button>)} */}
        <div>hello </div>

        <div>

            <label>

           
        {matchesites?.map((e)=>{
            return <div onChange={(e)=>setcorrentitem(e.target.value)} value={e.id} >{e.idsite}</div>
        })}
   

                

            </label>

           

        </div>
        <button onClick={addsite}>addsite</button>
        <button onClick={ReduceSite}>ReduceSite</button>
        <button onClick={finish}>finish</button>
        <button onClick={update}>update</button>
        <button onClick={form}>form</button>
    </>
}
export default Planning_a_trip;
{/* <option value="fruit">Fruit</option>

         <option value="vegetable">Vegetable</option>

         <option value="meat">Meat</option> */}