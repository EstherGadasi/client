import { useState } from "react"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import CustomizedInputBase from '../secretery/input'
function Autocomplete1({setnamestart, locations, isLoaded, setlocations, setpoint1, setpoint2, placesarr, setSelectedOption, SelectedOption, setstartpoint }) {
  const [center, setCenter] = useState({ lat: 31.732642099242874, lng: 35.18573300318892 })
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
        setpoint1(currPlace.geometry.location.lat())
        setpoint2(currPlace.geometry.location.lng())
      }
      if (setstartpoint) {
        setstartpoint({ "name": currPlace.name, "lat": currPlace.geometry.location.lat(), "lng": currPlace.geometry.location.lng() })
        if (locations.length>0) {
          let arr = locations.splice(1, locations.length - 1)
          setlocations([{ "name": currPlace.name, "lat": currPlace.geometry.location.lat(), "lng": currPlace.geometry.location.lng() }, ...arr])
          let arr2 = SelectedOption.splice(1, SelectedOption.length - 1)
          setSelectedOption([{ "name": currPlace.name, "place1": currPlace.geometry.location.lat(), "place2": currPlace.geometry.location.lng() }, ...arr2])
        }
        else {
          setlocations([...locations, { "name": currPlace.name, "lat": currPlace.geometry.location.lat(), "lng": currPlace.geometry.location.lng() }])
          setSelectedOption([{ "name": currPlace.name, "place1": currPlace.geometry.location.lat(), "place2": currPlace.geometry.location.lng() }])
        }
        setnamestart(currPlace.name)
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
    return <h1>מעלה את המפה</h1>;
  }
  return (<>
  <div> 
    <Autocomplete
  style={{ width: "100vw", display: "flex" }}
    onLoad={onLoad}
    onPlaceChanged={onPlaceChanged}
  >
    <CustomizedInputBase />
  </Autocomplete>
    {/* {setstartpoint || f ?<Map center={center} markers={markers} handleChange={handleChange} places={places} />:<></>} */}
    <div className="map-container">
      <div className="map-options">

        {/* <button>Center the map</button> */}

        {places?.length > 0 && places.map((place, key) => {
          return (<div className="route-detail" key={`a${key}`} >
            <div>{place.name}</div>
            {/* <div>lat:  {place.lat} </div>
            <div>lng:  {place.lng} </div> */}

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

        {/* places={[...places]} */}
      </div>
    </div>
    </div>
  </>
  )
}

export default Autocomplete1