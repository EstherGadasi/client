import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
  } from "@react-google-maps/api";
  import { useEffect, useState } from "react";
 

  function Map({isLoaded, center, markers, places, handleChange }) {
   
    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState([]);
    const [distancesDurations, setdistancesDurations] = useState([]);
    const [directionRes, setdirectionRes] = useState([]);
    useEffect(() => {
      calculateRoute();
    }, [places]);
    const onLoad = (marker) => {
      console.log("marker: ", marker);
    };
    const google = (window.google = window.google ? window.google : {});
    async function calculateRoute() {
      console.log(places)
      if (places?.length < 2) return;
      const duplicatePlaces = [...places]
      let origin = duplicatePlaces[0];
      let destination = duplicatePlaces[1];
      let others = duplicatePlaces.splice(2);
  
      const directionsService = new window.google.maps.DirectionsService();
      while (origin && destination) {
        const results = await directionsService.route({
          origin: origin.name,
          destination: destination.name,
          travelMode: google.maps.TravelMode.DRIVING,
        });
        if (results){
          console.log(results)
          setResult(results)
         setdirectionRes([...directionRes])
          setdistancesDurations([...distancesDurations,{
              distance:results.routes[0].legs[0].distance,
              duration:results.routes[0].legs[0].duration
           }])
           
        }
        if (others.length > 0) {
          origin = destination;
          destination = { ...others[0] };
          others.shift();
        } else {
          origin = null;
          destination = null;
        }
      }
  
      setDirectionsResponse(directionRes);
      handleChange(distancesDurations)
    }
  if(!isLoaded) return <h1>Loading</h1>
    return (<>
      {isLoaded}
      <GoogleMap google={window.google}
        center={center}
        zoom={15}
        position="fixed"
        mapContainerStyle={{ width: "100vw", height: "30vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map, maps) => {
          console.log(map)
          //console.log(maps)
          //renderMarkers(map)
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
      {places?.length > 0 && places.map((place, key) => {
        return (<div className="route-detail" key={`a${key}`} >
          <div>{place.name}</div>
          

        </div>)
      })}
      {distancesDurations?.length > 0 && distancesDurations.map((distance, key) => {
        return (<div className="distance-detail" key={`d${key}`} >
          <div>   מרחק({distance.distance.text} | {distance.distance.value})</div>
          <div>     זמן({distance.duration.text} | {distance.duration.value})</div>

        </div>)
      })}
</>
    );
  }
  
  export default Map;