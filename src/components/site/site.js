//import React, { useEffect, useState } from "react";
// import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { json } from 'react-router-dom';
import axios from "axios";
import Opinion from '../Opinion/opinion';
import React, { useEffect, useState } from "react";

function Site({ e, addsite, RemoveSite, flag }) {
  // acces,bicycles,categories,tripstype,description,area,truffic,payment,level,name,place1,place2,url,adress

  const [level, setlevel] = useState({})
  const [user_opinion, setuser_opinion] = useState({})
  const [opinion, setopinion] = useState(null)
  const [siteid, setsiteid] = useState(e.idsites)
  const [userid, setuserid] = useState(1)
  async function addopion() {

    if (user_opinion && level) {
      try {
        const res = await axios.post("http://localhost:4000/opinion", { user_opinion, level, siteid, userid });
      }
      catch { }
    }

  }, []);
  async function getopion() {

    try {
      const res = await axios.get(`http://localhost:4000/opinion/${e.idsites}`);

      setopinion(res.data)
      console.log(opinion)
    }
    catch { }
  }


  return (
    <>

        {/* {opinion?.map((e) => <Opinion opinion={e}/>)} */}
        <span className="new-book"  >
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 100 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                site :{e.name}
              </Typography>
              {flag ?<></>:
                <Typography variant="body2" color="text.secondary">
                  "acces": {e.acces ? "possible to acces" : "not possible"} "bicycles": {e.bicycles ? "possible to bicycles" : "not possible to bicycles"} "categories": {e.categories} "tripstype":{e.tripstype} "description": {e.description} "area": {e.area} "truffic": {e.truffic ? "possible to truffic" : "not possible to truffic"}
                  "payment": {e.payment}  "level": {e.level}  "name": {e.name}  "place1": {e.place1}  "place2": {e.place2}   "adress": {e.adress}
                  <img src="J:\הנדסת תוכנה\ציבי.jpg" ></img>
                  

                </Typography>  }
                {addsite || RemoveSite ? <></> : <br></br>}
                  {addsite || RemoveSite ? <></> : <input placeholder='youropinion' onChange={(e) => { setuser_opinion(e.target.value) }}></input>}
                  {addsite || RemoveSite ? <></> : <input placeholder='level' onChange={(e) => { setlevel(e.target.value) }}></input>}
                  {addsite || RemoveSite ? <></> : <br></br>}
                  {addsite || RemoveSite ? <></> : <button onClick={addopion}>addopion</button>}
            </CardContent>
            <CardActions>
              {addsite ? <Button size="small" onClick={() => addsite(e)}>Add</Button> : <></>}
              {RemoveSite ? <Button size="small" onClick={() => RemoveSite(e)}>Remove</Button> : <></>}
            </CardActions>
          </Card>



        
    </>
  )
  // idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Site;