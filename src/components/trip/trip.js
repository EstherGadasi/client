import React, { useEffect, useState } from "react";
// import React from "react";
import Planning_a_trip from "../../pages/PlanTrip";
import Siteshow from "../site/siteShow";
import Site from "../site/site";
function Trip({ trip }) {

    const [CurrPage, setCurrPage] = useState(0)
    function f() { setCurrPage(1) }


    return (<>

        <button onClick={f}>updatetrip</button>
        <div className="site">


            <div> {trip.begin_point1 ? trip.begin_point1 : <></>}    {trip.begin_point2 ? trip.begin_point2 : <></>}  {trip.end_point1 ? trip.end_point1 : <></>}  {trip.end_point2 ? trip.end_point2 : <></>} {trip.area ? trip.area : <></>}
                {trip.sites?.map((site) => <Site e={site} flag={true}/>)}
            </div>

            {/* <span>{props.opinion}</span>  <span>{props.level}</span> */}

            {CurrPage ? <Planning_a_trip constrainsarr={trip.constrains} sites={trip.sites} id={trip.idtrips} paymenttrip={trip.payment} /> : <></>}

        </div>


    </>

    )
}

export default Trip