import React, { useEffect, useState } from "react";
// import React from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
function Opinion(props) {
    
   

    
   
        
        return( 
            <div className="opinion">
                
         <span>{props.opinion}</span>  <span>{props.level}</span>
        
            
         </div> 
       
            )
}

export default Opinion