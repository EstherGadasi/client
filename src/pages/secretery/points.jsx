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
  place, setpoint1, setpoint2, setcurrent, setadress, setoptionalladress, optionalladress,setcorrent,setlngbegin,setlatbegin
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDixFC_GhvfskrRxu4KM09Dz-zeclSeke4",
  libraries:['places']
  });
  const [newArray, setnewArray] = useState([])

  function returnPoints() {
    if (isLoaded)
     {
      Geocode.fromAddress(place).then(
          (response) => {
            if(response.results.length){
            const { lat, lng } = response.results[0].geometry.location;
            console.log("H")
            console.log(lat, lng);
            if(setpoint1)
           { setpoint1(lat)
            setpoint2(lng) 
             setadress(response.results[0].formatted_address)}
            const formated = response.results.map(item=>{
              return item.formatted_address
            })
            console.log("formated", formated) 
             setoptionalladress(formated) 
             setlatbegin(lat)
             setlngbegin(lng)
             setcorrent(false)
          }
        },

      )
    }
  }
  useEffect(() => { returnPoints() });
  return (<>
  </>
  );
};
export default Point;