import React , { useEffect, useState } from "react";
import axios from "axios";
import Site from "../../components/site/site";
function TripsOptions({tripsOptions,setcorrentitem}){
    // option onClick={setSelectedOption(optionn.id)
    // useEffect(() => {

    //     const CountTrip = async () => {

    //     }
    //     CountTrip()
    // }, [sites]);
    
    return<>

    {tripsOptions?.map((e)=>{
        
        return <> 
        <Site e={e} setcorrentitem={setcorrentitem}></Site>
       
   </> })}
</>

}
export default TripsOptions;
// e={e} setcorrentitem={setcorrentitem} idsites={e.idsites} name={e.name} num_of_turist={e.num_of_turist}ages={e.ages} children={e.children}address={e.address}accible={e.accible}