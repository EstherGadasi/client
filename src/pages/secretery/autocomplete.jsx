import { useState } from "react"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import CustomizedInputBase from '../secretery/input'
import Map from "./map";
function Autocomplete1({ setpoint1, setpoint2, f, endpoint1, endpoint2 }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDr4hJZxTXnNuaruWBC9gYKg-8ItccUmag",
    libraries: ['places']
  });
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

      if (setpoint1&&currPlace.geometry.location.lat()) {
        console.log(currPlace.geometry.location.lat(), currPlace.geometry.location.lng())
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
  return (<>
    <Autocomplete
      style={{ width: "100vw", display: "flex" }}
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
    >
      <CustomizedInputBase />
    </Autocomplete>
    <div className="map-container">
      <div className="map-options">

        {places && <><div>{places[places.length - 1].name}</div>
          <div>lat:  {places[places.length - 1].lat} </div>
          <div>lng:  {places[places.length - 1].lng} </div></>}

        {distances.length > 0 && <><div>   מרחק({distances[distances.length - 1].distance.text} | {distances[distances.length - 1].distance.value})</div>
          <div>     זמן({distances[distances.length - 1].duration.text} | {distances[distances.length - 1].duration.value})</div>
        </>}

      </div>
      <div className="g-map">
      </div>
    </div>
    <Map isloaded={isLoaded} center={{ "lat": endpoint1, "lng": endpoint2 }} />
  </>
  )
}

export default Autocomplete1