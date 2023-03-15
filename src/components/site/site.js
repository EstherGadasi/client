//import React, { useEffect, useState } from "react";
// import React from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Site({e, setcorrentitem}) {
    // {e,idsites,name,num_of_turist,ages,children,address,accible,setcorrentitem}



      
  return (
    <>
    <div className="new-book"  onClick={(e)=>{setcorrentitem(JSON.parse(`{${e.currentTarget.textContent}}`))}} >
<Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 100 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
        {/* site :{e.name}  */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        "num_of_turist": {e.num_of_turist} "ages": {e.ages} "address": {e.address} "children":{e.children} "accible": {e.truffic}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add</Button>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
    
     
        
     
  
  {/* <Card sx={{ maxWidth: 345 }}>
      <CardMedian
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> */}

    
   
    </div>
   
        
    </>
  )
  // idimage,num_of_turist,ages,children,discription,time_it_takes,accible,place1,place2,address
}

export default Site;