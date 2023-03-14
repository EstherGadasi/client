import React , { useEffect, useState } from "react";
import axios from "axios";
import Site from "../../components/site/site";
function TripsOptions({i,tripsOptions,setcorrentitem}){
    // option onClick={setSelectedOption(optionn.id)
    // useEffect(() => {

    //     const CountTrip = async () => {

    //     }
    //     CountTrip()
    // }, [sites]);
    
    return<>
   
    {tripsOptions?.map((e)=>{
        {i=i+1}
        return <> <div onClick={(e)=>{setcorrentitem(e[i])}}>
        <Site e={e[i]} setcorrentitem={setcorrentitem} idsites={e[i].idsites} name={e[i].name} num_of_turist={e[i].num_of_turist}ages={e[i].ages} children={e[i].children}address={e[i].address}accible={e[i].accible}></Site>
       </div>
   </> })}
</>

}
export default TripsOptions;
