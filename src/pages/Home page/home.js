
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
      
        const resopinion = await axios.get("http://localhost:4000/opinion");
        // res.data.forEach(element => matcessites.push(element));
        console.log(resopinion.data)
        setOpinions(resopinion.data)
      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }
    const GetBestSites = async () => {
      try {
       
        const ressites = await axios.get("http://localhost:4000/site");
        // res.data.forEach(element => matcessites.push(element));
        console.log(ressites.data)
        setBestSites(ressites.data)
      } catch (err) {
        // setErr(err.response.data?.message);
      }
    }
    const Getallimages = async () => {
      try {
        
        const ressites = await axios.get("http://localhost:4000/images");
        // res.data.forEach(element => matcessites.push(element));
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
    {images?.map((e) => <div key={e.idimages}>{e.idimages}</div>)}
    {Opinions?.map((e) => <div key={e.userid}>opinions{e.userid}</div>)}
    {BestSites?.map((e) => <div key={e.idsite}>sites{e.idsite}</div>)}
     
  </>
  )
}
export default Home;

