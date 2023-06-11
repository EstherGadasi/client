import Opinion from "../../components/Opinion/opinion";
import Siteshow from "../../components/site/siteShow";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Site from "../../components/site/site";
import { Box,Button, TextField } from '@mui/material';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import { func } from "prop-types";
import CarouselImg from "./carousel";
//sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
export const Home = () => {
  const [Opinions, setOpinions] = useState(null)
  const [BestSites, setBestSites] = useState(null)
  const [images, setimages] = useState(null);
  const [opinion, setopinion] = useState(null);
  const [level, setlevel] = useState(0);
  const [startindex, setstartindex] = useState(0)
  const [endindex, setendindex] = useState(4)
  useEffect(() => {
    console.log("we")
    const GetBestOpinions = async () => {
      try {
        const resopinion = await axios.get("http://localhost:4000/generalopinion");
        console.log(resopinion.data)
        setOpinions(resopinion.data)
      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }

    const Getallimages = async () => {
      try {
        const ressites = await axios.get("http://localhost:4000/images");
        console.log(ressites.data)
        setimages(ressites.data)
      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }
    Getallimages()
    GetBestOpinions()
    GetBestSites()
  }, []);

  async function addopinion() {
    if (opinion && level) {
      try {
        const res = await axios.post("http://localhost:4000/generalopinion", { opinion, level });
        console.log(res.data)
      }
      catch { }
    }
  }
  const GetBestSites = async () => {
    try {
      const ressites = await axios.get("http://localhost:4000/site/constrains");
      console.log(ressites.data)
      if (ressites.data !== "not exist")
        setBestSites(ressites.data)
    } catch (err) {
      // setErr(err.response.data?.message);
    }
  }
  function right() {
    setstartindex(startindex + 1)
    setendindex(endindex + 1)
  }
  function left() {
    setstartindex(startindex - 1)
    setendindex(endindex - 1)
  }
  return (<>
    {/* <img src='/assets/front_image.jpg' style={{ width: '100vw', height: '50vh' }}></img> */}
    <CarouselImg></CarouselImg>
    <div>Hello we suggest you to register to our special site for surfing experience</div>
    <label> our site.... </label><br></br>
    <h3>our most visits sites:</h3>
    <Box sx={{ display: "flex",alignItems:"center" ,margin:"auto" }} style={{ width: "75vw" }}>
   { startindex>0&&<ArrowForwardIos style={{ left: 150, zIndex: 100 }} onClick={left}></ArrowForwardIos>}
   <Box sx={{ display: "flex",alignItems:"center",margin:"auto"   }} style={{ width: "75vw" }}>
      {BestSites?.map((e,i) => e.map((ev) => <Site index={i} e={ev} startindex={startindex} endindex={endindex}></Site>))}</Box>
    {BestSites&& endindex<BestSites.length&&<ArrowBackIos  onClick={right}></ArrowBackIos>}</Box>
    {/* <ArrowForwardIos style={{ right: 150, position: "fixed", zIndex: 100 }} */}
    <h5>מה אנשים אומרים עלינו</h5>
    <Box sx={{display:"flex",margin:"auto",alignItems:"center",textAlign:"center"}}>{Opinions?.map((e, i) => <Opinion key={i} e={e} ></Opinion>)}</Box>
    <h5>מה דעתך על האתר שלנו</h5>
    
    <TextField placeholder='   הדעה שלך' onChange={(e) => { setopinion(e.target.value) }}></TextField>
       <span>   </span><Rating
      name="simple-controlled"
      value={level}
      onChange={(event, newValue) => {
        setlevel(newValue);
      }} /><Button onClick={addopinion}>הוסף את דעתך</Button>
  </>
  )
}
export default Home;

