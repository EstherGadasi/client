import React, { useEffect, useState } from "react";
// import React from "react";
import Siteshow from "../site/siteShow";
function Trip({trip}) {
    
    const [currPage, setCurrPage] = useState(0)

    
   
        
        return( 
            <div className="site">
              
        
            <div> {trip.begin_point1?trip.begin_point1:<></>}    {trip.begin_point2?trip.begin_point2:<></>}  {trip.end_point1?trip.end_point1:<></>}  {trip.end_point2?trip.end_point2:<></>} {trip.area?trip.area:<></>} 
            {trip.sites?.map((site)=> <Siteshow name={site.name}/>)}
            </div>
        
        {/* <span>{props.opinion}</span>  <span>{props.level}</span> */} 
        

            
         </div> 
       
            )
}

export default Trip