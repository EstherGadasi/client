// import { Icon } from '@iconify/react'
import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";

import {
   GoogleMap,
   useJsApiLoader,
  MarkerF,

} from "@react-google-maps/api";


Geocode.setApiKey("AIzaSyAtQpEDudWMrZBVUyiEiJeVdOWeXQMW-uI");

const Map = ({isloaded,center}) => 
{
  

 
 console.log(center)


  
  
  return (isloaded ? <>

    <GoogleMap
     mapContainerStyle={{ width: "100vw", height: "30vh" }}
        // mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        markerId='1'
      >
        <MarkerF id={1} key={1} position={center} title={"the book"}></MarkerF> 
      </GoogleMap>

  </>:<></>
  );
};
export default Map;