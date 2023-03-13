import { dblClick } from "@testing-library/user-event/dist/click"
import React, { useEffect, useState } from "react";

import axios from "axios";

import FinallTrip from "../FinallTrip";
import Show from "../showdetails";
import ConstrainsC from "../allconstrains/c";
import SearchParameters from "./SearchParameters";
import TripsOptions from "./TripsOPtions";
import TripSettings from "./TripSettings";
import Save from "./Save";
function Planning_a_trip({ arrcs, arrsites, tripid }) {


    //     const [sites, setsites] = useState(arrsites)
    //     const[correntitem,setcorrentitem]= useState("")
    //     const [username, setuserName] = useState("")
    //     const [err, setErr] = useState(null);
    //    const [matchesites,setmatchesites]=useState([])
    //    let newsites=[]
    const [tripsOptions, setTripsOptions] = useState([])
    const [selectOption, setSelectedOption] = useState([])
    const [TripSettings, setTripSettings] = useState([])
    const [trip, setTrip] = useState({})



    async function addsite() {
        // newsites = sites.push(correntitem)
        // setsites(...newsites)
    }
    async function ReduceSite() {
        // newsites = sites.pop(correntitem)
        // setsites(...newsites)
    }



    return <>
        {/* {matcessites.map((e) => <button onClick={(e) => { ShowSiteDetails }} key={e.id}>{e}</button>)} */}
        <div>hello </div>

        <div>

            <label>


                {/* {matchesites?.map((e) => {
                    return <div onChange={(e) => setcorrentitem(e.target.value)} value={e.id} >{e.idsite}</div>
                })} */}


                <SearchParameters setTripsOptions />
                <TripsOptions tripsOptions />
                <TripSettings TripSettings />

                <Save setTrip>Save Trip</Save>
                <FinallTrip trip={trip}></FinallTrip>
                1
                2 navigate ("/FinallTrip")

            </label>



        </div>
        <button onClick={addsite}>addsite</button>
        <button onClick={ReduceSite}>ReduceSite</button>
        
    </>
}
export default Planning_a_trip;
{/* <option value="fruit">Fruit</option>

         <option value="vegetable">Vegetable</option>

         <option value="meat">Meat</option> */}
