import { AirlineSeatFlatAngled } from "@mui/icons-material"
import axios from "axios"
//import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Point from "./points"
import Uploader from "./Uploader"
import { Autocomplete } from '@mui/material';
import {  Checkbox,FormControlLabel, RadioGroup, Step,Radio,FormControl,FormLabel, FormGroup,TextField } from '@mui/material';
import ListSite from "./listSite"
import Site from "../../components/site/site"
import { useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import MapOptions from "../PlanTrip/x"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';

import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from "react";
import Autocomplete1 from "./autocomplete"
const Secrtery = ({site,setcurrentsite}) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [acces, setacces] = useState(false)
    const [visible, setvisible] = useState(true)
    const [bicycles, setbicycles] = useState(false);
    const [categories, setcategories] = useState([]);
    const [categories1, setcategories1] = useState([]);
    const [tripstype, settripstype] = useState([])
    const [description, setdescription] = useState(null);
    const [area, setarea] = useState([])
    const [truffic, settruffic] = useState(false)
    const [payment, setpayment] = useState(null)
    const [level, setlevel] = useState([])
    const [name, setname] = useState(null)
    const [place, setplace] = useState(null)
    const [place1, setpoint1] = useState(null)
    const [place2, setpoint2] = useState(null)
    const [address, setadress] = useState(null)
    const [url, seturl] = useState(null)
    const [current, setcorrent] = useState(false)
    const [duration, setduration] = useState(false)
    const [optionalladress, setoptionalladress] = useState([" "])
    const [flag, setflag] = useState(false)
    const [days, setdays] = useState(0)
    const [hours, sethours] = useState(0)
    const [minuets, setminuets] = useState(0)
    const realcode = 1234
    const steps = ['Participants', 'Select type', 'Constrains'];
    const navigate = useNavigate()
    const location = useLocation();
    const [id, setid] = useState(0)
    useEffect(() => { if (site){
       
        setflag(true) }}, []);
    function checkadmine(e) {

        console.log(realcode)
        console.log(e.target.value)
        if (e.target.value == realcode) { setflag(true) }
        else { setflag(false) }

    }
    function castingtimetoseconds(){
        let count=0
         count+=days*60*60*24
         count+=hours*60*60
         count+=minuets*60
         console.log(count)
         setduration(count)
       }
    async function update() {
        try {
            const res = await axios.put(`http://localhost:4000/site/${site.idsites}`, { duration, acces, bicycles, categories, tripstype, description, area, truffic, payment, level, name, place1, place2, url, address });

            console.log(res.data)
        } catch (err) {
            //   setErr(err.response.data?.message);

        }
    }
    function check(event,setcategories,categories, num) {
        const arr=categories
        let arr1=categories1
        arr[num]=event.target.checked
       setcategories([...arr]) 
        
        
        if(arr[num]==false)
        {
          arr1=arr1.filter((e)=>e!=(num+1))
        }
        else
        arr1.push(num+1);
        setcategories1([...arr1])
        console.log("aaa",categories,categories1)

    }
    function check2(event,setlevel,Level, num) {
        const arr=Level
        arr[num]=event.target.checked
       setlevel([...arr]) 
        console.log("aaa",Level)

    }
    function check3(event,setarea,area, num) {
        const arr=area
        arr[num]=event.target.checked
       setarea([...arr]) 
        console.log("aaa",area)

    }
    function check4(event,settripstype,tripstype, num) {
        const arr=tripstype
        arr[num]=event.target.checked
       settripstype([...arr]) 
        console.log("aaa",tripstype)

    }
    async function addsite() {
        console.log(address)

        const handleAddSite = async (e) => {
            try {
                // const res = await axios.post("http://localhost:4000/images", { url});
                // const idimage=res.data.idimages
                const ressite = await axios.post("http://localhost:4000/site", { duration, url, acces, bicycles, categories, tripstype, description, area, truffic, payment, level, name, place1, place2, url, address });

                console.log(ressite.data)
            } catch (err) {
                //   setErr(err.response.data?.message);

            }
            navigate("/ListSite")
        };
        handleAddSite()
    }
    function f(e) {
        setplace(e.target.value)
        setcorrent(true)
    }
    function handleOnChangeText(e) {
        if (!e.target.value) {
            setoptionalladress([" "])
        }
        else {
            setplace(e.target.value)
            setcorrent(true)
        }
    }
    function showallsites() {
        if(setcurrentsite)
        setcurrentsite() ;
        navigate("/ListSite")
    }
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };
    
    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };
    
    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    return <>
         {site?  <>   <Site e={site}/>      
           <Button onClick={update}>update</Button></> :<></>}  
       
       
        {flag ? <><Button onClick={addsite}>addsite</Button><br></br>
        <Button onClick={showallsites}>הצג את כל האתרים</Button>
        <Box sx={{ width: '60vw',margin:'auto'  }} >
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }} style={{textAlign:"center"}}>
                        {(activeStep === 0) ? 
                               <Box sx={{alignItems:"center",display: 'block'}}> 
                                <p>Please select your constrains</p>
                                <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                           
                            <FormLabel id="demo-controlled-radio-buttons-group">Participants</FormLabel>
                           
                            <FormControlLabel checked={categories[0]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 0)  }/>} label="משפחות"/>
                                 <FormControlLabel checked={categories[1]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 1) }/>} label="קבוצות"/>
                                 <FormControlLabel checked={categories[2]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 2) }/>} label="זוגות"/>
                                 <FormControlLabel checked={categories[3]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 3) }/>} label="ילדים"/>
</Box>
                           
                            <Box sx={{alignItems:"center", display:"flex", gap:1}}>
                            <FormLabel id="demo-controlled-radio-buttons-group">Accesible</FormLabel>
                            
                                <FormControlLabel control={<Checkbox checked={bicycles}  onChange={(e)=>setbicycles(e.target.checked)}/>} label="אופניים"/>
                                <FormControlLabel control={<Checkbox checked={truffic}  onChange={(e) => { settruffic(e.target.checked)}}/>} label="תחבורה ציבורית"/>
                                <FormControlLabel control={<Checkbox checked={acces}  onChange={(e) => { setacces(e.target.checked)}}/>} label="גישה"/>
                              </Box>  </Box>
                             : (activeStep === 1) ? 
                              <Box sx={{alignItems:"center",display: 'block'}}>
                              <Box sx={{alignItems:"center"}}>
                              <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                            <FormLabel id="demo-controlled-radio-buttons-group">Level</FormLabel>
                        
                          
                           <FormControlLabel checked={level[0]} control={<Checkbox onChange={(e) =>check2(e,setlevel,level, 0)  }/>} label="קשה"/>
                                <FormControlLabel checked={level[1]} control={<Checkbox onChange={(e) =>check2(e,setlevel,level, 1) }/>} label="קל"/>
                                <FormControlLabel checked={level[2]} control={<Checkbox onChange={(e) =>check2(e,setlevel,level, 2)}/>} label="בינוני"/>
                               
</Box>
                           
                            </Box>
                            <Box sx={{alignItems:"center"}}>
                            <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                           
                           <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
                          
                           <FormControlLabel checked={tripstype[0]} control={<Checkbox onChange={(e) =>check4(e,settripstype,tripstype, 0)  }/>} label="סיבובי"/>
                                <FormControlLabel checked={tripstype[1]} control={<Checkbox onChange={(e) =>check4(e,settripstype,tripstype, 1) }/>} label="קווי"/>
                                <FormControlLabel checked={tripstype[2]} control={<Checkbox onChange={(e) =>check4(e,settripstype,tripstype, 2) }/>} label="רכיבה"/>
                               
</Box>
                          </Box>
                                </Box>
                             : 
                              <Box sx={{alignItems:"center",display: 'block'}}>
                              <Box sx={{alignItems:"center"}}>
                              <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                           
                           
                           <FormLabel id="demo-controlled-radio-buttons-group">Area</FormLabel>
                           <FormControlLabel checked={area[0]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 0)  }/>} label="צפון"/>
                                <FormControlLabel checked={area[1]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 1) }/>} label="דרום"/>
                                <FormControlLabel checked={area[2]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 2) }/>} label="מרכז"/>
                                <FormControlLabel checked={area[3]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 3) }/>} label="ירושלים והסביבה"/>
</Box>
</Box> 
                            <TextField  label="תשלום" id="fullWidth" value={payment}  onChange={(e) => { setpayment(e.target.value) }}/>
                            <TextField fullWidth label="description" id="fullWidth" value={description} onChange={(e) => { setdescription(e.target.value) }}/>
                        </Box>
                            }
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>
                            {activeStep !== steps.length &&
                                (completed[activeStep] ? (
                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                        Step {activeStep + 1} already completed
                                    </Typography>
                                ) : (
                                    <Button onClick={handleComplete}>
                                        {completedSteps() === totalSteps() - 1
                                            ? 'גמרת'
                                            : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>  
         <TextField
          label="שם"
          variant="standard"
           placeholder="שם האתר" 
           onChange={(e) => { setname(e.target.value) }}
        />
        <TextField
          label="משך זמן"
          variant="standard"
          placeholder="משך זמן שהיה באתר" 
          onChange={(e) => { setduration(e.target.value) }}
        />
        <div>
            <Autocomplete1 endpoint2={place2} endpoint1={place1} setpoint1={setpoint1} setpoint2={setpoint2} f={true} ></Autocomplete1>
     </div>      
            <Uploader file={url} setFile={seturl} label="הוסף תמונה" />
            {/* <input type={"text"} placeholder="place2" onChange={(e) => { f(e) }}></input><br></br> */}
            <div>
       
      </div>
            
           
            </>
            : <TextField type="password" placeholder="הכנס קוד מזכירה" visible={visible} style={{marginTop:"20vh", margin:"auto"}} onChange={(e) => { checkadmine(e) }}/>}
        
   


</>



}
export default Secrtery;