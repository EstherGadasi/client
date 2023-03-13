import React , { useEffect, useState } from "react";
import axios from "axios";
import Site from "../../components/site/site";
function TripsOptions(tripsOptions){
    // option onClick={setSelectedOption(optionn.id)
    // useEffect(() => {

    //     const CountTrip = async () => {

    //     }
    //     CountTrip()
    // }, [sites]);
    {tripsOptions?.map((e)=>{
        return <Site idsites={e.idsites} name={e.name} num_of_turist={e.num_of_turist}ages={e.ages} children={e.children}address={e.address}accible={e.accible}></Site>
    })}


}
export default TripsOptions;
