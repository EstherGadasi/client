import React, { useEffect, useState } from "react";
import axios from "axios"
import Planning_a_trip from "../../pages/PlanTrip";
import Site from "../../components/site/site";
import { TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import Secrtery from ".";

function ListSite({ code }) {
    const [inputValue, setInputValue] = useState('');
    const [visible, setvisible] = useState(true)
    const [sites, setsites] = useState([]);
    const [flag, setflag] = useState(false);
    const [current, setcurrent] = useState(false);
    const [currentsite, setcurrentsite] = useState(false)
    const realcode = 1234;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        // Send the input value here, for example by calling a function or dispatching an action
        checkadmine(inputValue);
        }
    };
    const handleChange = (event) => {
    setInputValue(event.target.value);
  };

    function checkadmine(e) {

       
        if (e == realcode) {
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

    return (<>    <TextField
        type="password"
        placeholder="הכנס קוד מזכירה"
        style={{ marginTop: "20vh", margin: "auto" }}
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleChange} // This captures input changes
      /><br></br>
                 
        {flag && !currentsite ?
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(1, minmax(0,1fr))", sm: "repeat(4, minmax(0,1fr))" } }}>
                {sites?.map((site, i) => <Site key={i} setcurrentsite={setcurrentsite} e={site} realcode={realcode} setcurrent={setcurrent} />)}
            </Box> : <></>}
        {currentsite ? <Secrtery site={currentsite} setcurrentsite={setcurrentsite} /> : <></>}     </>
    )
}

export default ListSite