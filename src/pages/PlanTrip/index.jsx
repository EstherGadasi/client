//import { dblClick } from "@testing-library/user-event/dist/click"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FinallTrip from "../FinallTrip";
//import Show from "../showdetails";

import SearchParameters from "./SearchParameters";
import TripsOptions from "./TripsOPtions";
import TripSettings from "./TripSettings";
import Save from "./Save";


import Site from "../../components/site/site";

function Planning_a_trip({ arrcs, arrsites }) {



    const navigate = useNavigate()


    //     const [sites, setsites] = useState(arrsites)

    //     const [username, setuserName] = useState("")
    //     const [err, setErr] = useState(null);
    //    const [matchesites,setmatchesites]=useState([])




    //    let newsites=[]
    const [correntitemReduce, setcorrentitemReduce] = useState({})
    const [correntitemAdd, setcorrentitemAdd] = useState()

    let newsites = []

    //    let newsites=[]



    const [constrains, setconstrains] = useState([])
    const [tripsOptions, setTripsOptions] = useState([])
    const [selectOption, setSelectedOption] = useState([])
    const [TripSettings, setTripSettings] = useState([])
    const [trip, setTrip] = useState()
    const [tripid, setTripid] = useState({})
    const [begin_point1, setbegin_point1] = useState("")
    const [begin_point2, setbegin_point2] = useState("")
    const [end_point1, setend_point1] = useState("")
    const [end_point2, setend_point2] = useState("")
    const[arrid,setarrid]=useState([])

let arrhelper=selectOption;
let aaridhelper=arrid
    async function addsite(e) {
       
        setSelectedOption([...selectOption, e])
 console.log(selectOption)
 setarrid([...arrid,e.idsites])
    }
    async function RemoveSite(e) {
        //  const v=selectOption.pop(e)
        arrhelper=arrhelper.pop(e)
        setSelectedOption(
           [arrhelper]
            
        )
        aaridhelper=aaridhelper.pop(e.idsites)
        setarrid(
           [aaridhelper]
            
        )

       
        console.log(selectOption)
        // newsites = selectOption.pop(correntitem)
        // setSelectedOption([...newsites])
    }
    async function save() {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        const trip = { // area:arrcs.area,
            userId: 1,
            begin_point1: begin_point1,
            begin_point2: begin_point2,
            end_point1: end_point1,
            end_point2: end_point2,
            date: date,
            listofsites: arrid,
            constrainsoftrip: constrains
        }
        console.log(trip)
       setTrip(trip)

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
                <TripsOptions tripsOptions={tripsOptions} setcorrentitem={setcorrentitemAdd} addsite={addsite} />
                {selectOption?.map((e) => {

                    return <>
                        <Site RemoveSite={RemoveSite} e={e} setcorrentitem={setcorrentitemReduce}></Site>

                    </>
                })}
                {/* <TripSettings TripSettings={selectOption} setbegin_point1={setbegin_point1} setbegin_point2={setbegin_point2} setend_point1={setend_point1} setend_point2={setend_point2}/> */}
                <button onClick={save}>save</button>
                {/* <Save  setTripid={setTripid}/> */}
                {trip ? <Save trip={trip} setTripid={setTripid} /> : <></>}
                {/* {navigate ("/FinallTrip${tripid}")}   trip={trip}*/}



                {/* <TripsOptions tripsOptions={tripsOptions} />
                <TripSettings TripSettings={TripSettings} />

                <Save setTrip>Save Trip</Save>
                <FinallTrip trip={trip} sites={selectOption}  constrains={constrains}></FinallTrip> */}
                {/* {navigate ("/FinallTrip")} */}


            </label>



        </div>
        

    </>
}
export default Planning_a_trip;
{/* <option value="fruit">Fruit</option>

         <option value="vegetable">Vegetable</option>

         <option value="meat">Meat</option> */}
