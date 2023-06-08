import Opinion from "../../components/Opinion/opinion";
import Site from "../../components/site/site";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const Home = () => {
  const [Opinions, setOpinions] = useState([])
  const [BestSites, setBestSites] = useState([])
  const [images, setimages] = useState(null);
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
    const GetBestSites = async () => {
      try {
        const ressites = await axios.get("http://localhost:4000/site");
        console.log(ressites.data)
        setBestSites(ressites.data)
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

  return (<>
    <div>Hello </div>
    <Site> </Site>
    {images ? images?.map((e) => <span key={e.idimages}>{e.url}  </span>) : <></>}
    {Opinions?.map((e) => <Opinion opinion={e.opinion} level={e.level}></Opinion>)}
    <Grid container spacing={4}>
      {BestSites?.map((e) => <Site e={e} height="150px" ></Site>)}
    </Grid>

  </>
  )
}
export default Home;

