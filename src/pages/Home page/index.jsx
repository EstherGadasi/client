import Opinion from "../../components/Opinion/opinion";
import Siteshow from "../../components/site/siteShow";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const Home = () => {
  const [Opinions, setOpinions] = useState(null)
  const [BestSites, setBestSites] = useState(null)
  const [images, setimages] = useState(null);
  const [opinion, setopinion] = useState(null);
  const [level, setlevel] = useState(null);

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

  async function addopinion() {
    if (opinion && level) {
      try {
        const res = await axios.post("http://localhost:4000/generalopinion", { opinion, level });
        console.log(res.data)
      }
      catch { }
    }
  }

return (<>
  <div>Hello </div>

  {/* { images?.map((e) => <img key={e.idimages} src={e.url}></img>) } */}
  {Opinions?.map((e) => <Opinion opinion={e} ></Opinion>)}
  {BestSites?.map((e) => e.map((ev) => <Siteshow e={ev} ></Siteshow>))}
  <button onClick={addopinion}>tell us about our site</button>
  <input placeholder='youropinion' onChange={(e) => { setopinion(e.target.value) }}></input>
  <input placeholder='level' type="number" min="1" max="5" onChange={(e) => { setlevel(e.target.value) }}></input>
</>
)
}
export default Home;

