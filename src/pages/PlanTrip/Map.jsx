import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Button, Box } from '@mui/material';
import { CircularProgress } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
function Map({ trip, sites, travel_mode, isLoaded, center, markers, places, handleChange }) {
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState([]);
  const [information, setinformation] = useState([])
  const [road, setroad] = useState()
  const [showdurationtravels, setdurationtravels] = useState()
  const [showduration, setduration] = useState()
  let arr = []
  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 2,
    border: 1,
    width: '30rem',
    height: '20rem',
  };
  let time1 = 0
  let arrResults = []
  let time = trip?.duration ? trip.duration : 0
  useEffect(() => {
    calculateRoute();

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
      count()
    }
  }
  function originInformation(arrResults) {
    console.log(arrResults)
    if (arrResults.length) {

      arrResults.forEach((e) => { arr.push(e.routes[0].summary) })
      setdurationtravels(parseseconds(time))
      setroad(arr)
      console.log(arr)

    }
  }
  function parseseconds(time) {
    console.log(time)
    let arr = []
    arr[0] = parseInt(time / 24 / 60 / 60 / 24)
    arr[1] = parseInt(time / 24 / 60 / 60 % 24)
    arr[2] = parseInt(time / 60 % 60)
    return arr
  }
  function count() {
    let t = 0
    sites.map((e) => t += e.duration)
    console.log(t)
    setduration(parseseconds(time + t))
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
    </div>
    <Box ></Box>

    {road&&  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles , borderRadius: '50%'}}>
      {road&& <ElectricRickshawIcon  style={{ width: '5rem',height: '5rem',}}></ElectricRickshawIcon>} {road?.map((e, i) =><> <h4 style={{ display: "flex", justifycontent: "center" }}>כביש מנקודה  {i + 1} לנקודה {i + 2}  :<div >{e}</div></h4></>)}
    </Box>
    <Box sx={{ ...commonStyles, borderRadius: '50%' }}>
        {showdurationtravels ?<><AccessTimeIcon style={{ width: '5rem',height: '5rem',}}></AccessTimeIcon> <h4>זמן הנסיעות של הטיול:   {showdurationtravels[0] ? <><span>{showdurationtravels[0]} ימים </span></> : <></>}{showdurationtravels[1] ? <><span>{showdurationtravels[1]} שעות </span></> : <></>}{showdurationtravels[2] ? <><span>{showdurationtravels[2]} דקות </span></> : <></>}</h4> </>: <></>}
        {showduration ?<> <h4>אורך טיול בסה"כ:   {showduration[0] ? <><span>{showduration[0]} ימים </span></> : <></>}{showduration[1] ? <><span>{showduration[1]} שעות </span></> : <></>}{showduration[2] ? <><span>{showduration[2]} דקות </span></> : <></>}</h4> </>: <></>}
    </Box>
    </Box>}
  </>
  );
}


export default Map;
