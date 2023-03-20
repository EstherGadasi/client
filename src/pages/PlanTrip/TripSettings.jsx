import React , { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader , Marker, DirectionsRenderer,DistanceMatrixService} from '@react-google-maps/api';

function TripSettings({setbegin_point1,setbegin_point2,setend_point1,setend_point2,selectOption}){
  

 const distanceCallback = (response) => {
    console.log("Hello");
    console.log(response);

    if (response !== null) {
       {
        console.log("response: ", response);
      }
    }
  };

  

 

 

 return<>
    <div className="map">
      <div className="map-settings">
        <hr className="mt-0 mb-3" />

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="ORIGIN">Origin</label>
              <br />
              <input
                id="ORIGIN"
                className="form-control"
                type="text"
              
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="DESTINATION">Destination</label>
              <br />
              <input
                id="DESTINATION"
                className="form-control"
                type="text"
                
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <div className="form-group custom-control custom-radio mr-4">
            <input
              id="DRIVING"
              className="custom-control-input"
              name="travelMode"
              type="radio"
             
            />
            <label className="custom-control-label" htmlFor="DRIVING">
              Driving
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary"
          type="button"
        
        >
          Build Route
        </button>
      </div>

      <div className="map-container">
        {/* <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          options={options}
        > */}
          {/* <DistanceMatrixService
 options={{
           destinations: [{lat:1.296788, lng:103.778961}],
           origins: [{lng:103.780267, lat:1.291692}],
           travelMode: "DRIVING",
         }} */}
        
/>  
 {distanceCallback()}
          
       
      </div>
    </div>
    </>
}
  // //const google = window.google

  // var origin1 = 'Stockholm, Sweden';
  // var origin2 = 'Greenwich, England';
  // var destinationA = 'Stockholm, Sweden';
  // var destinationB = 'Greenwich, England';
  
  // var service = new google.maps.DistanceMatrixService();
  // service.getDistanceMatrix(
  //   {
  //     origins: [origin1, origin2],
  //     destinations: [destinationA, destinationB],
  //     travelMode: 'DRIVING',
  //     apikey: 'AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A'
  //     // transitOptions: TransitOptions,
  //     // drivingOptions: DrivingOptions,
  //     // unitSystem: UnitSystem,
  //     //avoidHighways: Boolean,
  //     //avoidTolls: Boolean,
  //   }, callback);
  
  // function callback(response, status) {
  //   // See Parsing the Results for
  //   // the basics of a callback function.
  // }
   
  //  return <>
  //  <div>what the matter with you?</div></>}
    {/* <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
    ></GoogleMap>
    
    // option onClick={setSelectedOption(optionn.id)
//     useEffect(() => {

//         const CountTrip = async () => {

//         }
//         CountTrip()
//     }, [sites]);
}
export default TripSettings;
// import React from 'react'



// function Map({location, height, width, zoomy}) {
//     const [center, setCenter] = React.useState()
//     const [zoom, setZoom] = React.useState(18);

//     const containerStyle = {
//       margin: 'auto',
//       width: width,
//       height: height
//     };

//     const findLocation=async()=>{
//         if(typeof location == 'object'){
//             setCenter(location);
//             return;
//         }
//         const response = await fetch('http://localhost:3500/api/maps/geocode', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ address: location })
//         })
//         console.log(response);
//         if (response?.ok) {
//             const newCenter = await response.json();
//             console.log(newCenter)
//             setCenter(newCenter);
//         }
//     }
//     React.useEffect(()=>{findLocation()}, [location])
//     const [map, setMap] = React.useState(null);
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: Your-Api-Key
//   })

//   const onLoad = React.useCallback(function callback(map) {
//     map.setZoom(zoomy? zoomy: zoom)
//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={zoom}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         <DirectionsRenderer origin={center} destination={{ lat: 31.801710903916923, lng:35.222700738262645 }} />
//         { /* Child components, such as markers, info windows, etc. */ }
//         <>
//         <Marker
//         key={1}
//         position={center}
//         ></Marker>
//         </>
//       </GoogleMap>
//   ) : <></>
// }

export default TripSettings;

