import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  DistanceMatrixService,
  InfoWindow,

  Polyline
} from "@react-google-maps/api";
Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
const Point = ({
place,setpoint1,setpoint2,setcurrent,setadress

}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
  });

  
function f(){
  if (isLoaded) {
  
    Geocode.fromAddress(place).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log("H")
        console.log(lat, lng);
        setpoint1(lat)
        setpoint2(lng)
        setadress(response.results[0].formatted_address)
          console.log(response.results[0].formatted_address)
      },
      
    );

      
  
  }
}
useEffect(() => {  f() });

  function callback(response, status) {
    console.log("f")
    console.log(response)
    console.log(status)
    // setcurrent(false)
    // See Parsing the Results for
    // the basics of a callback function.
  }
  //Sataf

  return (<>
    {isLoaded}
 
    </>
  );
};
export default Point;