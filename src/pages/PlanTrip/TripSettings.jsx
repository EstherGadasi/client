import React, { componentDidMount, useEffect, useState } from "react";
import Geocode from "react-geocode";
import PointsSites from "./pointsSites";
import { useMemo } from "react";
import MuseumIcon from '@mui/icons-material/Museum';
import { useJsApiLoader } from "@react-google-maps/api";
import HouseIcon from '@mui/icons-material/House';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Siteshow from "../../components/site/siteShow";
Geocode.setApiKey("AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A");
const TripSettings = ({ setend_point1, setend_point2, selectOption, setdistance, distanceSite, flag, setduration, count, setcount, setshowduration,
}) => {
  let t=0
  let arrs=distanceSite
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
    libraries: ['places']
  });
  let counttime = 0
  let arr = []
  selectOption.forEach((e) => arr.push({ "lat": e.place1, "lng": e.place2 }))//ליצור שרר של נקודות של כל המקומות
  const len = arr.length
  
  const bestTime = () => {
    if (isLoaded) {
      if (selectOption.length > 1) {
        MDestinitions({ "lat": selectOption[0].place1, "lng": selectOption[0].place2 })
        // for (let i = 0; i < len; i++) {
        //   console.log(i)
        //   if (i == 0) {
        //     console.log("distanceSite", distanceSite)
        //     console.log("bestTime")
        //     MDestinitions({ "lat": selectOption[0].place1, "lng": selectOption[0].place2 })
        //   }
        //   else { if (distanceSite.length > 0){
        //     console.log("bestTime2")

        //      MDestinitions(distanceSite[distanceSite.length - 1].site)} }
        // }

        // console.log(distanceSite)
      }
    }
  }
  const sARI=()=>{
    for(let i=0; i<8; i++){
      console.log(i," ")
    }
  }
  const MDestinitions = (source) => {
    var service = new window.google.maps.DistanceMatrixService();
    arr = arr.filter((el) => el.lat !== source.lat && el.lng !== source.lng)
   
    console.log("MDestinitions")
    service.getDistanceMatrix(
      {
        origins: [source],
        destinations: arr,
        travelMode: "DRIVING",
        language: "en"
      }
    ).then((response, status) => {
      console.log("in then")
      const distances = response.rows[0].elements
     
      let time = distances[0].duration.text//time
      let min = distances[0].distance.value//nums
      let site = arr[0]//2 points
      let name = selectOption.find((el) => el.place1 == site.lat && el.place2 == site.lng).name
      console.log("befiore mintime")
      MinTime(min,time,site,name,distances)
      if(arrs.length<selectOption.length){
        console.log(arrs)
      MDestinitions(arrs[arrs.length - 1].site)}
      countTrip()
      setdistance(arrs)
    })
  }
  function MinTime(min,time,site,name,distances){
    console.log("MinTime")
    for (let i = 1; i < distances.length; i++) {
      if (min > distances[i].distance.value) {
        time = distances[i].duration.text
        min = distances[i].distance.value
        site = arr[i - 1]
        let site1 = selectOption.find((el) => el.place1 == site.lat && el.place2 == site.lng)
        name = site1.name
      }
    }
    let arrh = [0]
 
    arrh = arrs.find((el) => el.site.lat == site.lat && el.site.lng == site.lng)
    if (arrs.length == 0) {
      // setcount(count + min)
      t+=min
      arrs.push({
        time: time,
        site: site,
        min: min,
        name: name
      })
    }
    else if (!arrh && distanceSite[distanceSite.length - 1].site.lat !== site.lat && distanceSite[distanceSite.length - 1].site.lng !== site.lng) {
      t+=min
      arrs.push({
        time: time,
        site: site,
        min: min,
        name: name
      })
    }
  }
  function parseSeconds(time) {
    let arr = []
    arr[0] = parseInt(time / 24 / 60 / 60 / 24)
    arr[1] = parseInt(time / 24 / 60 / 60 % 24)
    arr[2] = parseInt(time / 60 % 60)
    return arr
  }

  useEffect(() => {
   
    bestTime();
    
  }, [selectOption]);

  useEffect(() => {
   
  }, [distanceSite]);

  function countTrip() {
    if (distanceSite) {
      distanceSite.forEach(element => {
        counttime += element.min
      });
      setshowduration(parseSeconds(counttime))
      setduration(counttime)
    }
  }
  return (<>
    {isLoaded && flag}
{console.log(distanceSite,",bjh")
}    <div>
      <label>אנחנו ממליצים לך לנסוע בסדר הזה כדי לחסוך בבזמן</label>
      {selectOption ? <>
        <div display="flex">
          <span><HouseIcon color="primary" /></span>
          {distanceSite?.map((e) =>
            <> <span> <TrendingFlatIcon /></span>
              <span> {e.name} </span>
              <span> <MuseumIcon /> </span></>
          )}
        </div> </> : <></>}
    </div>
  </>
  );
};

export default TripSettings;