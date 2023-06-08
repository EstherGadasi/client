import React, { useEffect, useState } from "react";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from '@mui/material/Rating';
import { Card ,Box} from "@mui/material";

function Opinion({ e }) {
    // const [rating, setRating] = React.useState(e.level);

    return (<>
        <Card className="opinion"  key={e.idopinion} style={{width:"15vw"}}>
            <Rating
                name="simple-controlled"
                value={e.level}
            />
            <Box style={{display:"block"}}>
            {e.opinion ? <span >{e.opinion}</span> :<span >{e.user_opinion}</span> }</Box>
        </Card>
         <br></br></>

    )
}

export default Opinion