import React, { useEffect, useState } from "react";
// import React from "react";

function Site({e,idsites,name,num_of_turist,ages,children,address,accible,setcorrentitem}) {
    



      
  return (
    <>
    <div className="new-book" >
      {/* onClick={(e)=>{setcorrentitem(e.target.innerText)}} */}
        
      idsites:{idsites} name: {name} num_of_turist:{num_of_turist}
       {/* {ages} {children} {address} {accible} */}
       
    
    </div>
   
        
    </>
  )// idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Site;