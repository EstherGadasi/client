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

function Planning_a_trip({ constrainsarr, sites, id, paymenttrip }) {



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
    function fun() {
        setSelectedOption(sites)
    }
    function fun1() {
        setconstrains(constrainsarr)
    }
    const current = new Date();
    const date = `"${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}"`;

    const [constrains, setconstrains] = useState(constrainsarr)
    const [tripsOptions, setTripsOptions] = useState([])
    const [selectOption, setSelectedOption] = useState([])
    const [TripSetting, setTripSettings] = useState([])
    const [trip, setTrip] = useState()
    const [tripid, setTripid] = useState(id)
    const [begin_point1, setbegin_point1] = useState(1)
    const [begin_point2, setbegin_point2] = useState(1)
    const [end_point1, setend_point1] = useState(2)
    const [end_point2, setend_point2] = useState(3)
    const [area, setarea] = useState(3)
    const [arrid, setarrid] = useState([])
    const [payment, setpayment] = useState(paymenttrip)
    const [flag, setflag] = useState(false)
    useEffect(() => { if (sites) fun() }, []);
    useEffect(() => { if (constrainsarr) fun1() }, []);

    async function addsite(e) {


        setSelectedOption([...selectOption, e])
        //  console.log(selectOption)
        console.log(arrid)
        setarrid([...arrid, e.idsites])
        setpayment(payment + e.payment)
    }
    async function RemoveSite(e) {
        //  const v=selectOption.pop(e)
        let arrhelper = selectOption;
        let aaridhelper = arrid
        arrhelper=arrhelper.filter((el) => el !== e)
       
        setSelectedOption(
            [arrhelper]

        )
        aaridhelper=aaridhelper.filter((el) => el !== e.idsites)
        setarrid(
            [aaridhelper]

        )

        setpayment(payment - e.payment)

        // newsites = selectOption.pop(correntitem)
        // setSelectedOption([...newsites])e.idsites
    }
    async function save() {



        const theTrip = { // area:arrcs.area,
            userId: 1,
            begin_point1: begin_point1,
            begin_point2: begin_point2,
            end_point1: end_point1,
            end_point2: end_point2,
            payment: payment,
            date: `"${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}"`,
            listofsites: arrid,
            constrainsoftrip: constrains
        }

        setTrip(theTrip);

    }


    return <>
        {/* {matcessites.map((e) => <button onClick={(e) => { ShowSiteDetails }} key={e.id}>{e}</button>)} */}
        <div>hello </div>

        <div>

            <label>


                {/* {matchesites?.map((e) => {
                    return <div onChange={(e) => setcorrentitem(e.target.value)} value={e.id} >{e.idsite}</div>
                })} */}
                {id ? <button onClick={save}>update</button> : <></>}


                <SearchParameters setTripsOptions={setTripsOptions} setconstrains={setconstrains} constrains={constrains} />
                <TripsOptions tripsOptions={tripsOptions} setcorrentitem={setcorrentitemAdd} addsite={addsite} />
                {selectOption?.map((e) => {

                    return <>
                        <Site RemoveSite={RemoveSite} e={e} setcorrentitem={setcorrentitemReduce}></Site>

                    </>
                })}
                {/* <TripSettings /> */}
                <button onClick={save}>save</button>
                <span>payment {payment}</span>


                {trip ? <Save setTripid={setTripid} payment={payment} userId={1} begin_point1={begin_point1} begin_point2={begin_point2} end_point1={end_point1} end_point2={end_point2} date={date} listofsites={arrid} constrainsoftrip={constrains} idtrips={tripid} /> : <></>}
                {/* <TripSettings setbegin_point1={setbegin_point1} setbegin_point2={setbegin_point2} setend_point1={setend_point1} setend_point2={setend_point2} /> */}
                {/* {trip ? <Save trip={trip} setTripid={setTripid} tripid={tripid}/> : <></>} */}
                {/* <TripSettings={selectOption} setbegin_point1={setbegin_point1} setbegin_point2={setbegin_point2} setend_point1={setend_point1} setend_point2={setend_point2} */}
                {/* {tripid && <span>{tripid}</span>} */}
                {/* {navigate ("/FinallTrip${tripid}")}   trip={trip}
{/* 
               { tripid?<FinallTrip tripid={tripid}></FinallTrip>:<></>} */ }

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
