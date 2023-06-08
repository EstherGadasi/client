import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    DirectionsRenderer,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
function Lgoogle(road,showduration,showdurationtravels, center, map, markers,directionsResponse,onLoad) {



    return (<>
        {/* <GoogleMap google={window.google}
            center={center}
            zoom={15}
            position="fixed"
            mapContainerStyle={{ width: "50vw", height: "30vh" }}
            options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
            onLoad={(map, maps) => {
                console.log(map)

            }}
        >
            {markers?.length &&
                markers.map((marker, key) => {
                    return <Marker key={key} onLoad={onLoad} position={marker} />;
                })}
            {directionsResponse.length > 0 &&
                directionsResponse.map((dirRes) => (
                    <DirectionsRenderer directions={dirRes} />
                ))}
        </GoogleMap> */}
        {road?.map((e) => <div>road: {e}</div>)}
    {showdurationtravels ? <div>count trip's travels time  {showdurationtravels[0] ? <><span>{showdurationtravels[0]} days </span></> : <></>}{showdurationtravels[1] ? <><span>{showdurationtravels[1]} hours </span></> : <></>}{showdurationtravels[2] ? <><span>{showdurationtravels[2]} minits </span></> : <></>}</div> : <></>}
    {showduration ? <div>count all trip with sites  {showduration[0] ? <><span>{showduration[0]} days </span></> : <></>}{showduration[1] ? <><span>{showduration[1]} hours </span></> : <></>}{showduration[2] ? <><span>{showduration[2]} minits </span></> : <></>}</div> : <></>}
    </>)
}
export default Lgoogle;