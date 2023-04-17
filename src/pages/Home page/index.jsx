import Opinion from "../../components/Opinion/opinion";
import Siteshow from "../../components/site/siteShow";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const Home = () => {
  const [Opinions, setOpinions] = useState(null)
  const [BestSites, setBestSites] = useState(null)
  const [images, setimages] = useState(null);
  useEffect(() => {
    console.log("we")
    const GetBestOpinions = async () => {
      try {
      
        const resopinion = await axios.get("http://localhost:4000/generalopinion");
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
    {images? images?.map((e) => <span key={e.idimages}>{e.url}  </span>):<></>}
    {Opinions?.map((e) => <Opinion  opinion={e} ></Opinion>)}
    {BestSites?.map((e) => e.map((ev)=><Siteshow e={ev} ></Siteshow>))}
     
  </>
  )
}
export default Home; 

