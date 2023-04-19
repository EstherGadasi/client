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
import GoogleMapReact from "google-maps-react";
Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
const Map = ({
point

}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
  });

  const l={"lat": 40.756795, "lng": -73.95429}
// function f(map, maps){
//   if (isLoaded) {

 
    
//         const directionsService = new google.maps.DirectionsService();
//         const directionsRenderer = new google.maps.DirectionsRenderer();
//         directionsRenderer.setMap(map);
//         const origin = { lat: 40.756795, lng: -73.954298 };
//         const destination = { lat: 41.756795, lng: -78.954298 };
  
//         directionsService.route(
//           {
//             origin: origin,
//             destination: destination,
//             travelMode: google.maps.TravelMode.DRIVING
//           },
//           (result, status) => {
//             if (status === google.maps.DirectionsStatus.OK) {
//               directionsRenderer.setDirections(result);
//             } else {
//               console.error(`error fetching directions ${result}`);
//             }
//           }
//         );
     

   
        
      
  
//   }
// }
//  useEffect(() => {  f() });
  //Sataf

  return (<>
    {isLoaded}
    {/* <GoogleMapReact
            
            defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
            defaultZoom={10}
            center={l}
            yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => f(map, maps)}
          /> */}
    </>
  );
};
export default Map;