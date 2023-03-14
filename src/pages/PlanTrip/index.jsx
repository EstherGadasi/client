import { dblClick } from "@testing-library/user-event/dist/click"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FinallTrip from "../FinallTrip";
import Show from "../showdetails";
import ConstrainsC from "../allconstrains/c";
import SearchParameters from "./SearchParameters";
import TripsOptions from "./TripsOPtions";
import TripSettings from "./TripSettings";
import Save from "./Save";
function Planning_a_trip({ arrcs, arrsites, tripid }) {
    const navigate = useNavigate()

    //     const [sites, setsites] = useState(arrsites)
    const [correntitem, setcorrentitem] = useState({})
    //     const [username, setuserName] = useState("")
    //     const [err, setErr] = useState(null);
    //    const [matchesites,setmatchesites]=useState([])
    let newsites = []
    const [constrains, setconstrains] = useState([])
    const [tripsOptions, setTripsOptions] = useState([])
    const [selectOption, setSelectedOption] = useState([])
    const [TripSettings, setTripSettings] = useState([])
    const [trip, setTrip] = useState({})
    const [begin_point1, setbegin_point1] = useState("")
    const [begin_point2, setbegin_point2] = useState("")
    const [end_point1, setend_point1] = useState("")
    const [end_point2, setend_point2] = useState("")


let i=-1;
    async function addsite() {
        newsites = selectOption.push(correntitem)
        setSelectedOption([...newsites])
    }
    async function ReduceSite() {
        newsites = selectOption.pop(correntitem)
        setSelectedOption([...newsites])
    }
    async function save() {
        <Save setTrip={setTrip} selectOption={selectOption} constrains={constrains} begin_point1={begin_point1} begin_point2={begin_point2} end_point1={end_point1} end_point2={end_point2}>Save Trip</Save>
    }


    return <>
        {/* {matcessites.map((e) => <button onClick={(e) => { ShowSiteDetails }} key={e.id}>{e}</button>)} */}
        <div>hello </div>

        <div>

            <label>


                {/* {matchesites?.map((e) => {
                    return <div onChange={(e) => setcorrentitem(e.target.value)} value={e.id} >{e.idsite}</div>
                })} */}


                <SearchParameters setTripsOptions={setTripsOptions} setconstrains={setconstrains} />
                <TripsOptions tripsOptions={tripsOptions} setcorrentitem={setcorrentitem} i={i} />
                {/* <TripSettings TripSettings={selectOption} setbegin_point1={setbegin_point1} setbegin_point2={setbegin_point2} setend_point1={setend_point1} setend_point2={setend_point2}/> */}
                <button onClick={save}>save</button>

                {/* {navigate ("/FinallTrip${tripid}")}  */}

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
