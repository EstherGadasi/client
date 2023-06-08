import React, { useEffect, useState } from "react";
import axios from "axios"
import Planning_a_trip from "../../pages/PlanTrip";
import Site from "../../components/site/site";
import { TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import Secrtery from ".";

function ListSite({ code }) {
    const [sites, setsites] = useState([]);
    const [flag, setflag] = useState(false);
    const [current, setcurrent] = useState(false);
    const [currentsite, setcurrentsite] = useState(false)
    const realcode = 1234;

    function checkadmine(e) {

        console.log(realcode)
        console.log(e.target.value)
        if (e.target.value == realcode) {
            setflag(true)
        }
        else {
            setflag(false)
            allsites()
        }

    }

    async function allsites() {
        try {
            const res = await axios.get("http://localhost:4000/site");
            // navigate("/login")
            console.log(res)
            setsites(res.data)
        } catch (err) {
            //   setErr(err.response.data?.message);
        }
    }

    return (<> <input type="text" placeholder="enter an admine code" onChange={(e) => { checkadmine(e) }}></input><br></br>
        {flag && !currentsite ?
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(1, minmax(0,1fr))", sm: "repeat(4, minmax(0,1fr))" } }}>
                {sites?.map((site, i) => <Site key={i} setcurrentsite={setcurrentsite} e={site} realcode={realcode} setcurrent={setcurrent} />)}
            </Box> : <></>}
        {currentsite ? <Secrtery site={currentsite} setcurrentsite={setcurrentsite} /> : <></>}     </>
    )
}

export default ListSite