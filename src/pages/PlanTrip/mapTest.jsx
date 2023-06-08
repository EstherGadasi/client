import React, { Component, useState } from "react";
import Geocode from "react-geocode";

import GoogleMapReact from "google-map-react";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    DirectionsRenderer,
    DistanceMatrixService,
    InfoWindow,
  
    Polyline
  } from "@react-google-maps/api";
const MapTest = ()=>{
    // Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
        libraries:['places']
      }); 
    const [currentLocation, setCurrentLocation] = useState({ lat: 40.756795, lng: -73.954298 })
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentLocation: { lat: 40.756795, lng: -73.954298 }
//     };
//   }


    const apiIsLoaded = (map, maps) => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 40.756795, lng: -73.954298 };
      const destination = { lat: 41.756795, lng: -78.954298 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
    return (
      <div>
        {isLoaded &&
        <div style={{ height: "400px", width: "100%" }}>
            
         <GoogleMapReact
           
           
             defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
             defaultZoom={10}
             center={currentLocation}
           // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          /> 
        </div>
}
      </div>
    );
  }

export default MapTest;