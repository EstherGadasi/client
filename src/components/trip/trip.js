import React, { useEffect, useState } from "react";
// import React from "react";
import Siteshow from "../site/siteShow";
function Trip(props) {
    
    const [currPage, setCurrPage] = useState(0)

    
   
        
        return( 
            <div className="site">
             <span>ahdgyfdguy</span>    
         {props.trip?.map((e)=>{
            <div> {e.begin_point1?e.begin_point1:<></>}    {e.begin_point2?e.begin_point2:<></>}  {e.end_point1?e.end_point1:<></>}  {e.end_point2?e.end_point2:<></>} {e.area?e.area:<></>} 
            {e.sites?.map((site)=> <Siteshow name={site.name}/>)}
            </div>
         })}
        {/* <span>{props.opinion}</span>  <span>{props.level}</span> */} 
        

            
         </div> 
       
            )
}

export default Trip