import React, { componentDidMount, useEffect, useState } from "react";
import Geocode from "react-geocode";
import PointsSites from "./pointsSites";
import { useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
  DistanceMatrixService,
  InfoWindow,
  useLoadScript,
  Polyline
} from "@react-google-maps/api";

Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
const TripSettings = ({
  setend_point1,
  setend_point2,
  selectOption,
  setdistance,
  distanceSite,
  setflag,
  flag,
  duration,
  setduration,
  BICYCLING,
  location, height, width, zoomy, showDirection, userLocation, m
}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
  });

  let arr = []
  let r =
    selectOption.forEach((e) => arr.push({ "lat": e.place1, "lng": e.place2 }))



  var origin1 = "Stockholm, Sweden";

  var origin2 = "Greenwich, England";

  var destinationA = "Stockholm, Sweden";

  var destinationB = "Greenwich, England";

  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  const len = arr.length - 1

  // function fun1() {
  //   console.log("f")
  // if (isLoaded) {
  //   var service = new window.google.maps.DistanceMatrixService();
  //   // setdistance({min:0,site:{ "lat": selectOption[0].place1, "lng": selectOption[0].place2 }})
  //   for (let i = 0; i < len; i++) {

  //     if (selectOption.length > 1) {
  //       if (i == 0) {
  //         mdestinitions({ "lat": selectOption[0].place1, "lng": selectOption[0].place2 })
  //       }
  //       // if (!!distanceSite){
  //       //   console.log("df")
  //       //   setdistance({ min: 0, site: { "lat": selectOption[0].place1, "lng": selectOption[0].place2 } })}
  //       else { mdestinitions(distanceSite[distanceSite.length - 1].site) }
  //     }

  //   }

  //   function mdestinitions(source) {
  //     arr = arr.filter((el) => el.lat !== source.lat && el.lng !== source.lng)
  //     service.getDistanceMatrix(
  //       {
  //         origins: [source],

  //         destinations: arr,

  //         travelMode: "DRIVING",

  //       },

  //       callback
  //     );
  //   }
  // }

  const f = () => {
    if (isLoaded) {
      // setdistance([]) 
      if (selectOption.length > 1) {
        // setdistance({ "lat": selectOption[0].place1, "lng": selectOption[0].place2 })
        for (let i = 0; i < len; i++) {


          if (i == 0) {

            mdestinitions({ "lat": selectOption[0].place1, "lng": selectOption[0].place2 })
          }
          else { if (distanceSite.length > 0) mdestinitions(distanceSite[distanceSite.length - 1].site) }
        }
        setend_point1(distanceSite[distanceSite.length - 1].site.lng)
        setend_point2(distanceSite[distanceSite.length - 1].site.lat)
      }
    }
  }

  const mdestinitions = (source) => {
    var service = new window.google.maps.DistanceMatrixService();

    arr = arr.filter((el) => el.lat !== source.lat && el.lng !== source.lng)

    service.getDistanceMatrix(
      {
        origins: [source],
        destinations: arr,
        travelMode: "DRIVING",
        language: "en"
      }
    ).then((response, status) => {


      console.log(response)

      const distances = response.rows[0].elements
      let time = distances[0].duration.text
      let min = distances[0].distance.value
      let site = arr[0]
      let name=selectOption[0].name
      console.log(site)
      for (let i = 1; i < distances.length; i++) {
        if (min > distances[i].distance.value) {
          time = distances[i].duration.text
          min = distances[i].distance.value
          site = arr[i]
          let site1 = selectOption.find((el) => el.place1 == site.lat && el.place2 == site.lng)
         name = site1.name
        }
      }
      let arrh = [0]
      // console.log(arrh.length)
      arrh = distanceSite.find((el) => el.site.lat == site.lat && el.site.lng == site.lng)

      if (distanceSite.length == 0) {
        setdistance([...distanceSite, {
          time: time,
          site: site,
        name:name
        }])
      }


      else if (!arrh && distanceSite[distanceSite.length - 1].site.lat !== site.lat && distanceSite[distanceSite.length - 1].site.lng !== site.lng) {
        setdistance([...distanceSite, {
          time: time,
          site: site,
          name:name
        }])
      }
    })

    // .then(
    //   ,
    //   (error) => {
    //     console.error(error);
    //   }
  }


  function countduration() {
    let count = 0
    distanceSite.forEach((e) => { })
  }

  useEffect(() => { f(); countduration() });

  function callback(response, status) {

    console.log("response")
    const distances = response.rows[0].elements
    if (status == 'OK') {
      let min = distances[0].distance.text
      let site = arr[0]
      for (let i = 1; i < distances.length; i++) {
        if (min > distances[i].duration.text) {
          min = distances[i].duration.text
          site = response.originAddresses[0]

        }
      }
      setdistance([...distanceSite, {
        min: min,
        site: site
      }])
      // console.log(distanceSite)
      // var origins = response.originAddresses;
      // var destinations = response.destinationAddresses;

      // for (var i = 1; i < origins.length; i++) {
      //   var results = response.rows[i].elements;
      //   for (var j = i; j < results.length; j++) {
      //     var element = results[j];
      //     var distance = response.rows[i].elements[1].distance.text;
      //     var duration = response.rows[i].elements[1].duration.text;
      //     var from = origins[i];
      //     var to = destinations[j];
      //   }
      //     console.log('from', from)
      //     console.log('to' ,to)
      // }
      // See Parsing the Results for
      // the basics of a callback function.

    }
  }

  return (<>
    {isLoaded && flag}
    {/* <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    
   
    >
      {/*{/* {<DirectionsRenderer  />} */}
    {/* {showDirection && route && <DirectionsRenderer directions={route}/>} */}
    { /* Child components, such as markers, info windows, etc. */}
    {/* <>
        <Marker
          key={1}
          position={center}
      <div  ></Marker> */}
    <div>
      {distanceSite?.map((e) => {

        return <>
       
          <span>{e.name}</span>  
          <span>{e.time}</span>
           <span> </span>
          <PointsSites  point={e.site} />
        </>
      })}
    </div>
  </>
    // </GoogleMap> 

  );
};

export default TripSettings;