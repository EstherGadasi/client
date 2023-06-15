import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Lgoogle from "./searchShow";
function Map({ sites, travel_mode, isLoaded, center, markers, places, handleChange }) {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState([]);
  const [information, setinformation] = useState([])
  const [road, setroad] = useState()
  const [showdurationtravels, setdurationtravels] = useState()
  const [showduration, setduration] = useState()
  let arr = []
  let time1 = 0
  let arrResults = []
  let time = 0
  useEffect(() => {
    calculateRoute();
    if (travel_mode) {


    }
    //   if(information){
    //   if(arrResults.length==0)
    //  { calculateRoute();
    //   //  setinformation(arrResults)
    // }}
    //    else calculateRoute()
  }, [places]);
  const onLoad = (marker) => {
  };
  const google = (window.google = window.google ? window.google : {});
  async function calculateRoute() {
    console.log(places)
    if (places?.length < 2) return;
    const duplicatePlaces = [...places]
    let origin = duplicatePlaces[0];
    let destination = duplicatePlaces[1];
    let others = duplicatePlaces.splice(2);

    let i = 0
    const directionRes = [];
    const distancesDurations = []

    const directionsService = new window.google.maps.DirectionsService();
    while (origin && destination) {
      const results = await directionsService.route({
        origin: origin.name,
        destination: destination.name,
        travelMode: travel_mode ? travel_mode[i] : "DRIVING",
        language: "he"
      });
      if (results) {
        console.log(results)
        arrResults.push(results)
        directionRes.push(results);
        distancesDurations.push({
          distance: results.routes[0].legs[0].distance,
          duration: results.routes[0].legs[0].duration
        })

      }
      if (others.length > 0) {
        i++
        origin = destination;
        destination = { ...others[0] };
        others.shift();
      } else {
        origin = null;
        destination = null;
      }
    }
    // setinformation(arrResults)
    setDirectionsResponse(directionRes);
    handleChange(distancesDurations)
    if (travel_mode) {
      setinformation(arrResults)
      originInformation(arrResults)
      count(arrResults)
    }
  }
  function originInformation(arrResults) {
    if (arrResults.length) {
      
      arrResults.forEach((e) => { arr.push(e.routes[0].summary) })
      arrResults.forEach((e) => { time1 += e.routes[0].legs[0].distance.value })
      setdurationtravels(parseseconds(time1))
      setroad(arr)

    }
  }
  function parseseconds(time) {
    let arr = []
    arr[0] = parseInt(time / 24 / 60 / 60 / 24)
    arr[1] = parseInt(time / 24 / 60 / 60 % 24)
    arr[2] = parseInt(time / 60 % 60)
    return arr
  }
  function count(arrResults) {
    arrResults.forEach((e) => { time += e.routes[0].legs[0].distance.value })
    sites.map((e) => time += e.duration)
    setduration(parseseconds(time))

  }
  if (!isLoaded) return <h1>Loading</h1>
  return (<>

    {isLoaded}

    <div >
      <GoogleMap google={window.google}
        center={center}
        zoom={15}
        position="fixed"
        mapContainerStyle={{ width: "50vw", height: "30vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map, maps) => {

        }}
      >
        {markers?.length &&
          markers.map((marker, key) => {
            return <Marker key={key} onLoad={onLoad} position={marker} />;
          })}
        {directionsResponse.length > 0 &&
          directionsResponse.map((dirRes) => (
            <DirectionsRenderer directions={dirRes} />
          ))}
      </GoogleMap>
      {/* {road&&<Lgoogle road={road} showduration={showduration} showdurationtravels={showdurationtravels} onLoad={onLoad} center={center} map={map} markers={markers}directionsResponse={directionsResponse} directionsResponse={directionsResponse} ></Lgoogle>} */}
    </div>

    {road?.map((e, i) => <div>כביש מנקודה {i + 1} לנקודה {i + 2}: {e}</div>)}
    {showdurationtravels ? <div>זמן הנסיעות של הטיול  {showdurationtravels[0] ? <><span>{showdurationtravels[0]} ימים </span></> : <></>}{showdurationtravels[1] ? <><span>{showdurationtravels[1]} שעות </span></> : <></>}{showdurationtravels[2] ? <><span>{showdurationtravels[2]} דקות </span></> : <></>}</div> : <></>}
    {showduration ? <div>אורך טיול בסה"כ {showduration[0] ? <><span>{showduration[0]} ימים </span></> : <></>}{showduration[1] ? <><span>{showduration[1]} שעות </span></> : <></>}{showduration[2] ? <><span>{showduration[2]} דקות </span></> : <></>}</div> : <></>}
  </>
  );


}


export default Map;
