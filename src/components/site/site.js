import React, { useEffect, useState } from "react";
// import React from "react";

function Site({idsites,name,num_of_turist,ages,children,address,accible}) {
    



      
  return (
    <>
    <div className="new-book">
        
  <span>{name}</span> <span>{num_of_turist}</span>  <span>{ages} </span> <span>{children}</span><span>{address}</span><span>{accible}</span>
        
    
    </div>
   
        
    </>
  )// idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Site;