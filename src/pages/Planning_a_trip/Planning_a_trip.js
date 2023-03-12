import axios from "axios";
import React, { useEffect, useState } from "react";
import FinallTrip from "../FinallTrip/FinallTrip";
import Show from "../showdetails";
import ConstrainsC from "../allconstrains/c";

function Planning_a_trip(arrcs, arrsites, tripid) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const consrains = {
        num_of_turist: arrcs.num_of_turist,
        ages: arrcs.ages,
        children: arrcs.children,
        bicycles: arrcs.bicycles,
        tripsKind: arrcs.tripsKind,
        description: arrcs.description,
        trufic: arrcs.trufic,
        area: arrcs.area
    }


    const [sites, setsites] = useState(arrsites)
    const[correntitem,setcorrentitem]= useState("")
    const [username, setuserName] = useState("")
    const [err, setErr] = useState(null);
    let matcessites = []
    let newsites = []
    useEffect(() => {
        console.log("we")
        const GetMatchesSites = async () => {
            try {
                const res = await axios.get("http://localhost:4000/site", consrains);//the url not excat
                res.data.forEach(element => matcessites.push(element));
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
                constrainsoftrip: consrains
            }


            const res = await axios.post("http://localhost:4000/trip", { trip });//the url not excat
            res.data.forEach(element => matcessites.push(element));
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
            constrainsoftrip: consrains
        }
        try {
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }    
            const res = await axios.update('http://localhost:4000/trip/${tripid}', { trip },config);
            res.data.forEach(element => matcessites.push(element));
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

            <select  onChange={(e)=>setcorrentitem(e.target.value)} >
        <option>-select--</option>
        {matcessites?.map((e)=>{
            return <option  value={e.id} >{e.name}</option>
        })}
    </select>

                

            </label>

           

        </div>
        <button onClick={addsite}></button>
        <button onClick={ReduceSite}></button>
        <button onClick={finish}></button>
        <button onClick={update}></button>
        <button onClick={form}></button>
    </>
}
export default Planning_a_trip;
{/* <option value="fruit">Fruit</option>

         <option value="vegetable">Vegetable</option>

         <option value="meat">Meat</option> */}