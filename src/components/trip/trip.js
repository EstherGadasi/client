import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PointsSites from "../../pages/PlanTrip/pointsSites";
import Planning_a_trip from "../../pages/PlanTrip";
import Siteshow from "../site/siteShow";
import Site from "../site/site";
import FinallTrip from "../../pages/FinallTrip";
import { Box, Button } from '@mui/material';
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommuteIcon from '@mui/icons-material/Commute';

function Trip({ settrips, trip, trips, setflag, flag, setlocation, setcurrentitem }) {
  const navigate = useNavigate()
  const [CurrPage, setCurrPage] = useState(0)
  const [name, setname] = useState()

  function update() {
    if (setflag)
      setflag(false)
    setCurrPage(1)
    setcurrentitem(trip)
  }

  function showFullTrip() {
    const id = trip.idtrips
    navigate("/FinallTrip", { state: { id: { id } } })
  }

  function setlocations() {
    let arr = []
    console.log(trip)
    arr.push({ "name": trip.namestart, "lat": trip.begin_point1, "lng": trip.begin_point2 })
    for (let i = 0; i < trip.sites.length; i++) {
      arr.push({ "name": trip.sites[i].name, "lat": trip.sites[i].place1, "lng": trip.sites[i].place2 })
    }
    setlocation(arr)
  }

  const deletetrip = async () => {
    const id = trip.idtrips
    const res = await axios.delete(`http://localhost:4000/trip/${id}`)
    console.log(res.data)
    let arrhelper = trips.filter((el) => el.idtrips !== id)
    console.log(arrhelper)
    settrips(arrhelper)

  }

  useEffect(() => { if (trip.idtrips && setlocation) setlocations() }, [trip])

  return (<><div style={{ borderColor: "pink", borderWidth: "0.5px", border: "solid", margin: "2px", alignItems: "center", alignContent: 'center' }}>
    {flag ? <>
      <Button onClick={update} variant="text" color="secondary" size="medium" startIcon={<EditIcon />}><h2>ערוך</h2></Button>
      <Button onClick={showFullTrip} style={{ color: "black" }} size="medium" startIcon={<CommuteIcon />}><h2>הראה טיול מלא</h2></Button>
      <Button onClick={deletetrip} variant="text" size="medium" startIcon={<DeleteIcon />}><h2>מחק</h2></Button>
      {name ? <div>{name}</div> : <></>}
    </> : <></>}
    <div className="site">
      <div>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(1, minmax(0,1fr))", sm: "repeat(3, minmax(0,1fr))" } }} style={{ width: "75vw", alignItems: "center", width: '100vw' }}>
          {trip.idtrips ? trip.sites.map((site, i) => <Site e={site} flag={true} key={i} />
          ) : <></>}
        </Box>
      </div>
    </div>
    <div>{trip.namestart}</div></div> </>
  )
}
export default Trip