import React, { useEffect, useState } from "react";

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  DistanceMatrixService,
} from "@react-google-maps/api";

const TripSettings = ({
  setbegin_point1,
  setbegin_point2,
  setend_point1,
  setend_point2,
  selectOption,
  
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
  });


  var origin1 = "Stockholm, Sweden";

  var origin2 = "Greenwich, England";

  var destinationA = "Stockholm, Sweden";

  var destinationB = "Greenwich, England";

  if (isLoaded) {
    var service = new window.google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [origin1, origin2],

        destinations: [destinationA, destinationB],

        travelMode: "DRIVING",

        // transitOptions: TransitOptions,

        // drivingOptions: DrivingOptions,

        // unitSystem: UnitSystem,

        //avoidHighways: Boolean,

        //avoidTolls: Boolean,
      },
      callback
    );
  }

  function callback(response, status) {
    console.log(response)
    // See Parsing the Results for
    // the basics of a callback function.
  }

  return (
    isLoaded && (
      <>
        <div>what the matter with you?</div>
      </>
    )
  );
};
export default TripSettings;