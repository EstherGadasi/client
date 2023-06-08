import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
  } from "@react-google-maps/api";
  import { useEffect, useState } from "react";
  
  function Map1({ center, markers, places, handleChange }) {
    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState([]);
  
    useEffect(() => {
      if (map) {
        console.log(places,";jkuyj");
        map.panTo(center);
      }
    }, [map]);
    useEffect(() => {
      calculateRoute();
    }, [places]);
    const onLoad = (marker) => {
      console.log("marker: ", marker);
    };
    const google = (window.google = window.google ? window.google : {});
    async function calculateRoute() {
      if (!places) return;
      const duplicatePlaces = [...places]
      let origin = duplicatePlaces[0];
      let destination = duplicatePlaces[1];
      let others = duplicatePlaces.splice(2);
      const directionRes = [];
      const distancesDurations=[]
  
      const directionsService = new google.maps.DirectionsService();
      while (origin && destination) {
        console.log(":jj",origin,destination)
     
        const results = await directionsService.route({
          origin: origin.name,
          destination: destination.name,
          travelMode: google.maps.TravelMode.DRIVING,
        });
        if (results){
          console.log(results)
           directionRes.push(results);
            console.log(results.routes[0].legs[0].distance,  "F"  ,results.routes[0].legs[0].duration)
           distancesDurations.push({
           
              distance:results.routes[0].legs[0].distance,
              duration:results.routes[0].legs[0].duration
           })
           
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
  
    return (
      <GoogleMap google={window.google}
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map, maps) => {
          //console.log(map)
          setMap(map);
          //console.log(maps)
          // renderMarkers(map)
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
    );
  }
  
  export default Map1;