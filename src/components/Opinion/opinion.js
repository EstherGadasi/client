import React, { useEffect, useState } from "react";
// import React from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
function Opinion({opinion}) {
    
   

    
   
        
        return( 
            <div className="opinion" key={opinion.idopinion}>
               
                {opinion.opinion?<span >{opinion.opinion}</span>:<span >{opinion.user_opinion}</span>}  <span>{opinion.level}</span>
        
            
         </div> 
       
            )
}

export default Opinion