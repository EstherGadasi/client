import axios from "axios";
import React, { useEffect, useState } from "react";



function FinallTrip(res) {

    

   
   
    return <>
         {res.map((e) => <div>{e}</div>)}
        <div>hello </div>
        
    </>
}
export default FinallTrip;