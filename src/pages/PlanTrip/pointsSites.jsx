import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
import { useJsApiLoader, } from "@react-google-maps/api";
Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
const PointsSites = ({ point, site1, setname
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
    libraries: ['places']
  });
  const [site, setsite] = useState()
  function returnAdresss(point1) {
    if (isLoaded) {
      Geocode.fromLatLng(point1.lat, point1.lng).then(
        response => {
          console.log("res", response)
          const address = response.results[0].formatted_address;
          setsite(address)
          console.log(address)
          if (setname)
            setname(address)
          console.log("adress", address);
        },
        error => {
          console.error(error);
        }
      );
    }
  }
  useEffect(() => { returnAdresss(point) });
  return (<>
    {site ? <div>{site}</div> : <></>}
  </>
  );
};
export default PointsSites;