import axios from "axios";
import React, { useEffect, useState } from "react";
import Trip from "../../components/trip/trip";
import { useLocation } from 'react-router-dom';
import { Location } from "react-router-dom";
import { Grid } from '@mui/material';
import Autocomplete1 from "../PlanTrip/autocomplete";
import Map from "../PlanTrip/Map";
import {
    useJsApiLoader, Autocomplete
} from "@react-google-maps/api";
import { Label } from "@material-ui/icons";
function FinallTrip() {
    const [center, setCenter] = useState({ lat: 31.732642099242874, lng: 35.18573300318892 })
    const [markers, setMarkers] = useState([{ lat: 31.732642099242874, lng: 35.18573300318892 }, { lat: 31.731318964884345, lng: 35.19509927741574 }])
    const [trip, settrip] = useState({})
    const location = useLocation();
    const [id, setid] = useState(location.state.id.id)
    const [showdurationtravels, setdurationtravels] = useState()
    const [locations, setlocations] = useState([])
    const [information, setinformation] = useState([])
    const [road, setroad] = useState()
    const [travel_mode, settravel_mode] = useState([])
    const [flag, setflag] = useState(false)
    const [messsage, setmesssage] = useState("these are the abilities: DRIVING,BICYCLING,TRANSIT,WALKING")
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
        libraries: ['places']
    });
    async function bringTrip() {
        try {
            console.log(id)
            const trip = await axios.get(`http://localhost:4000/trip/trip/${id}`);
            console.log(trip.data.sites)
            settrip(trip.data)

            let arr = []
            trip.data.sites.map((e) => arr.push("DRIVING"))
            settravel_mode(["DRIVING", ...arr])
            setflag(true)
        } catch (err) {
            // setErr(err.response.data?.message);
        }

    }
    const handleChange = (newArray) => {

    }

    function parseseconds(time) {
        let arr = []
        arr[0] = parseInt(time / 24 / 60 / 60 / 24)
        arr[1] = parseInt(time / 24 / 60 / 60 % 24)
        arr[2] = parseInt(time / 60 % 60)
        console.log(arr)
        return arr
    }
    function Travel_mode(e, i) {
        if (e.target.value == "DRIVING" || e.target.value == "BICYCLING" || e.target.value == "TRANSIT" || e.target.value == "WALKING") {
            travel_mode[i] = e.target.value
            settravel_mode([...travel_mode])
            setmesssage("")
        }
        else if(e.target.value!="")
        setmesssage("these are the abilities: DRIVING,BICYCLING,TRANSIT,WALKING")
    }
   
    useEffect(() => { bringTrip() }, []);

    // useEffect(() => { Information() }, [information]);onClick={setflag(false)}
    return (<>
        <br></br>
        <h4>default by DRIVING</h4>
        <label>you may change the trasnsforation</label><br></br>
        {messsage&&<h3>{messsage}</h3>}
        <label>start</label><br></br>
        <input placeholder="your ablities: DRIVING, BICYCLING, TRANSIT ,WALKING " onChange={(e) => { Travel_mode(e, 0) }}>
        </input><br></br>
        {trip.sites?.map((el, i) => {
            return (<>
                <label>{el.name}</label><br></br>
                <input placeholder="your ablities: DRIVING, BICYCLING, TRANSIT ,WALKING" onChange={(e) => { Travel_mode(e, i) }}>
                </input><br></br>
            </>)
        })}

      
        {trip ? <Trip trip={trip} setlocation={setlocations} /> : <></>}
       
        {/* {locations?.map((e) =>travel_mode={travel_mode} <Autocomplete1 center={{ "lat": 34.2, "lng": 98.5 }} markers={{ "lat": 34.2, "lng": 98.5 }} placesarr={e} />)} */}
     { trip.sites&&  <Map  sites={trip.sites} travel_mode={travel_mode} information={information} setinformation={setinformation} isLoaded={isLoaded} center={center} markers={markers} places={[...locations]} handleChange={handleChange} />}
    </>)
}
export default FinallTrip;