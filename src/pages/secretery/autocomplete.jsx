import { useState } from "react"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import CustomizedInputBase from '../secretery/input'
//import Map from "./Map"
//import Map1 from "./e";
import Map from "./map";
function Autocomplete1({setpoint1, setpoint2, f ,endpoint1,endpoint2}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
    libraries: ['places']
  });
  // const [center, setCenter] = useState({ lat: 31.732642099242874, lng: 35.18573300318892 })
  const [markers, setMarkers] = useState([{ lat: 31.732642099242874, lng: 35.18573300318892 }, { lat: 31.731318964884345, lng: 35.19509927741574 }])
  const [places, setPlaces] = useState("")
  const [distances, setDistances] = useState([])
  const [autocomplete, setAutocomplete] = useState(null)
  const onLoad = (_autocomplete) => {
    setAutocomplete(_autocomplete)
  }

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const currPlace = autocomplete.getPlace()
      console.log(currPlace)
      if (setpoint1) {
        console.log(currPlace.geometry.location.lat(),currPlace.geometry.location.lng())
        setpoint1(currPlace.geometry.location.lat())
        setpoint2(currPlace.geometry.location.lng())
      }
     
      const obj = { name: currPlace.name, lat: currPlace.geometry.location.lat(), lng: currPlace.geometry.location.lng() }
      setPlaces([...places, obj])
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }
  const handleChange = (newArray) => {
    if (distances.length != newArray.length)
      setDistances(newArray);
  }

  if (!isLoaded) {
    return <h1>Loading the map</h1>;
  }
  return (<> <Autocomplete
    onLoad={onLoad}
    onPlaceChanged={onPlaceChanged} >
    {/* <CustomizedInputBase /> */}
  </Autocomplete>
      <div className="map-container">
        <div className="map-options">
          {places?.length > 0 && places.map((place, key) => {
            return (<div className="route-detail" key={`a${key}`} >
              <div>{place.name}</div>
              <div>lat:  {place.lat} </div>
              <div>lng:  {place.lng} </div>

            </div>)
          })}
          {distances?.length > 0 && distances.map((distance, key) => {
            return (<div className="distance-detail" key={`d${key}`} >
              <div>   מרחק({distance.distance.text} | {distance.distance.value})</div>
              <div>     זמן({distance.duration.text} | {distance.duration.value})</div>

            </div>)
          })}

        </div>
        <div className="g-map">
        </div>
      </div>  
    <Map isloaded={isLoaded} center={{"lat":endpoint1,"lng":endpoint2}}/>
  </>
  )
}

export default Autocomplete1