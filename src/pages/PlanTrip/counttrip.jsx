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
const PointsSites = ({
point,
site1

}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
  });

  const [site,setsite]=useState()
function f(point1){
  if (isLoaded) {
    
  

     

   

      
  
  }
}
 
//  useEffect(() => {  f(site1) },[]);
 useEffect(() => {  f(point) });
  //Sataf

  return (<>
    {isLoaded}
 {site?<div>{site}</div>:<></>}
    </>
  );
};
export default PointsSites;