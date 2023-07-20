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
import { Man } from "@mui/icons-material";
//sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
export const Home = () => {
  const [Opinions, setOpinions] = useState(null)
  const [BestSites, setBestSites] = useState(null)
  const [images, setimages] = useState(null);
  const [opinion, setopinion] = useState(null);
  const [level, setlevel] = useState(0);
  const [startindex, setstartindex] = useState(0)
  const [endindex, setendindex] = useState(4)
  const personal="התחביב הכי גדול שלי הוא לטייל "
  const hoby="מאז שהייתי קטן נהניתי ללכת לראות עוד ועוד מקומות יפים לחקור להנות הנוף היפה שלנו בינינו אין על ארץ ישראל"
 const israel="תמיד לא הבנתי את החברים שלי שיוצאים לנפוש בחוץ לארץ מה יש לנו לחפש שם אין על הארץ היפה שלנו שיש בה הכל מדבר מים ימים ונחלים "
  const start=" לטיל בראש שקט הוקם לצורך ערך מוסף בשבליכם מטיילים יקרים"
  const goal="מטרת האתר שלנו הוא לספק לכם מידע רב על המסלול אותו אתם בוחרים כגון דרכח הזגעה, מפות, אורך נסיעה ובעיקר דרך אופטימלית לנסוע"
  const explain="האתר יספק לכם אפשרות סינון אתרים על פי האפשרויות שלכם כל שעליכם לעשות הוא לספר לנו במידה ואתם רוצים איזה סינונים מתאים לכם "
  const descriptione="וכמובן התאמנו לכם עוד אפשרות סינון מיוחדת אתם תתארו לנו איזה אתרים אתם אוהבים והמערכת שלנו תביא לכם רשימת אתרים מתאימה"
 const shalom="שלומציון: תמיד היינו יוצאים לטיול עם תקווה להספיק את כל התכניות אך תמיד פשלנו כשהלכנו לאתר מסוים קודם וגילינו שסתם הארכנו את הדרך מאז שגיליתי את לטייל בראש שקט אני מוצא את עצמי מטייל בשקט בידיעה שסדרו לי מסלול מוכןמ ומאורגן עם התאמה מלאה לצרכים שלי"
  const man="דויוד: אם עד עכשיו היינו צריכים לחפש בכוחות עצמינו מה מתאים לנו לנתונים האישיים שלנו ולתכנן לעצמינו וכמובן לפפול שוב ושוב ולגלות שלא התכונוו באמת האתר לטייל בראש שקט נותן לנו את האתרים המתאימים לנו ואין טעויות"
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
    <div></div>
    <h4> {start} </h4>
    <h5> {personal} </h5>
    <h5> {hoby} </h5>
    <h5> {israel} </h5>
    <h6> {goal} </h6>
    <h6> {explain} </h6>   
    <h6> {descriptione} </h6>   
    <h6> {man} </h6>  
    <h6> {shalom} </h6>  
     <h3 style={{justifycontent: "center" ,display: "flex",   }}>אתרים הכי מבוקרים</h3>
    <Box sx={{ display: "flex",alignItems:"center" ,margin:"auto" }} style={{ width: "75vw" }}>
   { startindex>0&&<ArrowForwardIos style={{ left: 150, zIndex: 100 }} onClick={left}></ArrowForwardIos>}
   <Box sx={{ display: "flex",alignItems:"center",margin:"auto"   }} style={{ width: "75vw" }}>
      {BestSites?.map((e,i) => e.map((ev) => <Site index={i} e={ev} startindex={startindex} endindex={endindex}></Site>))}</Box>
    {BestSites&& endindex<BestSites.length&&<ArrowBackIos  onClick={right}></ArrowBackIos>}</Box>
    {/* <ArrowForwardIos style={{ right: 150, position: "fixed", zIndex: 100 }} */}
    <h5 style={{ display: "flex", justifycontent: "center"  }}>מה אנשים אומרים עלינו</h5>
    <Box sx={{ width: "100vw", display: "flex", justifycontent: "center"  }}>{Opinions?.map((e, i) => <Opinion key={i} e={e} ></Opinion>)}</Box>
    <h5>מה דעתך על האתר שלנו</h5>
    
    <TextField placeholder='   הדעה שלך' onChange={(e) => { setopinion(e.target.value) }}></TextField>
       <span>   </span>
       <Rating
      name="simple-controlled"
      value={level}
      onChange={(event, newValue) => {
        setlevel(newValue);
      }} /><Button onClick={addopinion}>הוסף את דעתך</Button>
  </>
  )
}
export default Home;

