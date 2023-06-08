import React, { useEffect, useState } from "react";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Rating from '@mui/material/Rating';
import { Card } from "@mui/material";

function Opinion({ e }) {
    // const [rating, setRating] = React.useState(e.level);

    return (<>
        <Card className="opinion"  key={e.idopinion}>
            <Rating
                name="simple-controlled"
                value={e.level}
            />
            {e.opinion ? <span >{e.opinion}</span> : <span >{e.user_opinion}</span>}
        </Card>
         <br></br></>
    )
}

export default Opinion