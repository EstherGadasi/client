import { useState } from "react"
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

import Map from "./Map"
import Map1 from "./e";

function MapOptions({placesarr}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCbGmLWQJtKnQpMNv6bP9F5heJ5hUPwSto",
    libraries: ['places']
  });
  const [ center, setCenter] = useState({lat:31.732642099242874, lng:35.18573300318892})
  const [markers, setMarkers] = useState([{lat:31.732642099242874, lng:35.18573300318892},{lat:31.731318964884345, lng:35.19509927741574}])
  const [places, setPlaces] = useState(placesarr)
  const [distances, setDistances] = useState([])
  const [autocomplete, setAutocomplete] = useState(null)
  const onLoad = (_autocomplete) => {
      setAutocomplete(_autocomplete)
  }
  
  const  onPlaceChanged= ()=> {
      if (autocomplete !== null) {
          const currPlace = autocomplete.getPlace()
        console.log(currPlace)
        const obj = { name:currPlace.name, lat:currPlace.geometry.location.lat(), lng:currPlace.geometry.location.lng()}
        setPlaces( [...places, obj])
      } else {
        console.log('Autocomplete is not loaded yet!')
      }
    }
    const handleChange =(newArray)=> {
      if(distances.length != newArray.length)
          setDistances(newArray);
    }

  if (!isLoaded) {
      return <h1>Loading the map</h1>;
    }
return (
  <div className="map-container">
      <div className="map-options">
          <Autocomplete 
           onLoad={onLoad}
           onPlaceChanged={onPlaceChanged}
         >
              <input  type="text" />
          </Autocomplete>
          {/* <button>Center the map</button> */}

{places?.length >0 && places.map((place, key)=>{
  return( <div className="route-detail" key={`a${key}`} >
      <div>{place.name}</div>
      <div>lat:  {place.lat} </div>
      <div>lng:  {place.lng} </div>
      
       </div>)
})}
{distances?.length >0 && distances.map((distance, key)=>{
  return( <div className="distance-detail" key={`d${key}`} >
   <div>   מרחק({distance.distance.text} | {distance.distance.value})</div>
   <div>     זמן({distance.duration.text} | {distance.duration.value})</div>
      
       </div>)
})}

      </div>
      <div className="g-map">
          <Map1 center={center} markers={markers} places={[...places]} handleChange={handleChange} />
      </div>
  </div>
)
}

export default MapOptions