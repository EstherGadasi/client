// import { Icon } from '@iconify/react'
import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";

import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,

} from "@react-google-maps/api";
Geocode.setApiKey("AIzaSyAtQpEDudWMrZBVUyiEiJeVdOWeXQMW-uI");

const Map = ({ isloaded, center }) => {
  return (isloaded ? <>
    <GoogleMap
      mapContainerStyle={{ width: "100vw", height: "30vh" }}
      center={center}
      zoom={10}
      markerId='1'
    >
      <MarkerF id={1} key={1} position={center} title={"the book"}></MarkerF>
    </GoogleMap>

  </> : <></>
  );
};
export default Map;