import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AirlineSeatFlatAngled, Check } from "@material-ui/icons";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AuthContext } from "../../context/authContext"
import { fabClasses } from "@mui/material";
import { Checkbox, FormControlLabel, RadioGroup, Step, Radio, FormControl, FormLabel, FormGroup, TextField } from '@mui/material';
import { Grid } from '@mui/material';

function SearchParameters({ flag, startpoint, setTripsOptions, setconstrains, constrains, setTripsOptionsh, setSelectedOption }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [acces, setacces] = useState(false)
    const [bicycles, setbicycles] = useState(false);
    const [categories, setcategories] = useState([false, false, false, false]);
    const [categories1, setcategories1] = useState([]);
   // const [categories, setcategories] = useState();
    const [tripstype, settripstype] = useState([false, false, false])
    const [tripstype1, settripstype1] = useState([])
    // const [tripstype1, settripstype1] = useState(["around", "riding", "lines"])
    const [description, setdescription] = useState(null);
   // const [area, setarea] = useState(["south", "center", "JerusalemSurroundingArea", "north"])
   const [area, setarea] = useState([false, false, false, false])
   const [area1, setarea1] = useState([])
    const [truffic, settruffic] = useState(false)
    const [payment, setpayment] = useState(200)
    //const [level, setlevel] = useState(["medium", "hard", "easy"])
    const [level, setlevel] = useState([false, false,  false])
    const [level1, setlevel1] = useState([])
    const [empty, setempty] = useState("")
    const steps = ['Participants', 'Select type', 'Constrains'];
    const [f, setf] = useState(true)
    const [flagcon, setflagcon] = useState(false)
    const [flagd, setflagd] = useState(false)
    const [load, setload] = useState("")
    const { token, currentUser } = useContext(AuthContext)

    useEffect(() => {
        if (flagcon) initialization()
        if (flag) bringmatchessites()
    }, [flagcon]);

    function clearConstrains() {
        setacces(false)
        setbicycles(false)
        setcategories([1, 2, 3, 4])
        settripstype(["around", "riding", "lines"])
        setarea(["nortn", "south", "center", "JerusalemSurroundingArea"])
        settruffic(false)
        setpayment(200)
        setlevel(["medium", "hard", "easy"])
        bringmatchessites()
    }
    function initialization() {
        setacces(false)
        setbicycles(false)
        setcategories([])
        settripstype([])
        setdescription()
        setarea([])
        settruffic([])
        setpayment(200)
        setlevel([])
        bringmatchessites()
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
    async function bringmatchessites() {
        setempty("")
        console.log("Gjhkuyhkuhegliutr")
        const GetMatchesSites = async () => {
            const constrain = {
                acces: acces,
                bicycles: bicycles,
                tripstype: tripstype,
                description: description,
                truffic: truffic,
                area: area,
                payment: payment,
                level: level,
                categories: categories
            }

            setconstrains(constrain)

            try {

                const res = await axios.post(`http://localhost:4000/site/constrains`, constrain);//the url not excat


                if (res.data != "ho no there is any matcn site!!") {
                    return res.data
                }
                else
                    return null

            } catch (err) {
                // setErr(err.response.data?.message);
            }
        }
        async function getSitesByDescription() {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/sentence/${description}`);
                return res.data
            }
            catch (err) {
                // setErr(err.response.data?.message);
            }
        }
        async function Merge() {
            
            let arrorgin = []
            let specialarr = []

            arrorgin = await GetMatchesSites()
            console.log("kjgkj",arrorgin)
            if (arrorgin=="ho no there is any matcn site!!") {
                setempty("ho no there is any matcn site!!")
                return
            }
            if (description) {
                setload("match to you sites, it takes time...")
                specialarr = await getSitesByDescription()
                if (specialarr)
                    setempty("ho no there is any matcn site!!")
                setload("")
            }
            if (!description) {
                setTripsOptions(arrorgin)
                setTripsOptionsh(arrorgin)
                return
            }
            // && a[1] == 0.03889820724725723;
            let a
            let newarr = specialarr.filter((el) => { return arrorgin.find((e) => el[0] == e.idsites) != undefined && el[1] > 0.5 })
            newarr = arrorgin.filter((e) => newarr.find((el) => el[0] == e.idsites))
            console.log(newarr)
            setTripsOptions(newarr)
            setTripsOptionsh(newarr)
            setf(false)
        }
        Merge()
    }
    function showconstrains() {
        setf(true)
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


    return (<>
        {flagd && <>
            <label>filter just by description</label><br></br>
            <input placeholder="description" onChange={(e) => { setdescription(e.target.value) }}></input>
            <h1>{load}</h1></>}
        <Box>
            <Button onClick={() => { setflagd(true) ;clearConstrains()}}>filter just by description </Button>
            <Button onClick={showconstrains}>Show constrains </Button>
            <Button onClick={bringmatchessites}>Bring matches sites</Button><br></br><br></br>
            {empty ? <h2>{empty}</h2> : <></>}
            {f ? <div style={{ width: '100vw' }}><Box sx={{ width: '60vw',margin:'auto'  }} >
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
                           
                            <FormControlLabel checked={categories[0]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 0)  }/>} label="Families"/>
                                 <FormControlLabel checked={categories[1]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 1) }/>} label="Groups"/>
                                 <FormControlLabel checked={categories[2]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 2) }/>} label="Pairs"/>
                                 <FormControlLabel checked={categories[3]} control={<Checkbox onChange={(e) =>check(e,setcategories,categories, 3) }/>} label="Children"/>
</Box>
                           
                            <Box sx={{alignItems:"center", display:"flex", gap:1}}>
                            <FormLabel id="demo-controlled-radio-buttons-group">Accesible</FormLabel>
                            
                                <FormControlLabel control={<Checkbox checked={bicycles}  onChange={(e)=>setbicycles(e.target.checked)}/>} label="Bicycles"/>
                                <FormControlLabel control={<Checkbox checked={truffic}  onChange={(e) => { settruffic(e.target.checked)}}/>} label="Public truffic"/>
                                <FormControlLabel control={<Checkbox checked={acces}  onChange={(e) => { setacces(e.target.checked)}}/>} label="acces"/>
                              </Box>  </Box>
                             : (activeStep === 1) ? 
                              <Box sx={{alignItems:"center",display: 'block'}}>
                              <Box sx={{alignItems:"center"}}>
                              <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                            <FormLabel id="demo-controlled-radio-buttons-group">Level</FormLabel>
                        
                          
                           <FormControlLabel checked={level[0]} control={<Checkbox onChange={(e) =>check2(e,setlevel,level, 0)  }/>} label="Hard"/>
                                <FormControlLabel checked={level[1]} control={<Checkbox onChange={(e) =>check2(e,setlevel,level, 1) }/>} label="Easy"/>
                                <FormControlLabel checked={level[2]} control={<Checkbox onChange={(e) =>check2(e,setlevel,level, 2)}/>} label="Medium"/>
                               
</Box>
                           
                            </Box>
                            <Box sx={{alignItems:"center"}}>
                            <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                           
                           <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
                          
                           <FormControlLabel checked={tripstype[0]} control={<Checkbox onChange={(e) =>check4(e,settripstype,tripstype, 0)  }/>} label="Around"/>
                                <FormControlLabel checked={tripstype[1]} control={<Checkbox onChange={(e) =>check4(e,settripstype,tripstype, 1) }/>} label="Lines"/>
                                <FormControlLabel checked={tripstype[2]} control={<Checkbox onChange={(e) =>check4(e,settripstype,tripstype, 2) }/>} label="Riding"/>
                               
</Box></Box>
                                </Box>
                             : 
                              <Box sx={{alignItems:"center",display: 'block'}}>
                              <Box sx={{alignItems:"center"}}>
                              <Box  sx={{alignItems:"center",margin:"auto", display:"grid", gap:1}}>
                           
                           
                           <FormLabel id="demo-controlled-radio-buttons-group">Area</FormLabel>
                           <FormControlLabel checked={area[0]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 0)  }/>} label="North"/>
                                <FormControlLabel checked={area[1]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 1) }/>} label="South"/>
                                <FormControlLabel checked={area[2]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 2) }/>} label="Center"/>
                                <FormControlLabel checked={area[3]} control={<Checkbox onChange={(e) =>check3(e,setarea,area, 3) }/>} label="Jerusalem Surrounding Area"/>
</Box>
</Box> 
                            <TextField  label="Payment" id="fullWidth" value={payment}  onChange={(e) => { setpayment(e.target.value) }}/>
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
                                            ? 'Finish'
                                            : 'Complete Step'}
                                    </Button>
                                ))}
                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>  </div> : <></>}</Box>




    </>)





}
export default SearchParameters;



