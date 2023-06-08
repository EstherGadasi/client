import React, { useEffect, useState } from "react";
import axios from "axios";
import Site from "../../components/site/site";
import { Box } from '@mui/material';

function TripsOptions({ tripsOptions, setcorrentitem, addsite }) {

    return (<>
    <Box sx={{display:"block",width:"100vw"}}>
    <div display="flex">
        <label> choose your favorate sites   </label>
        <label style={{color:"darkblue"}}> for more details click on "show site" </label></div>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(1, minmax(0,1fr))", sm: "repeat(3, minmax(0,1fr))" } }} style={{ width: "75vw" }}>
            {tripsOptions?.map((e, i) => {
                return <>
                    <Site key={i} e={e} addsite={addsite} setcorrentitem={setcorrentitem}></Site>
                </>
            })}
        </Box></Box></>)
}

export default TripsOptions;
