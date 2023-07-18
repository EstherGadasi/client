import { AirlineSeatFlatAngled } from "@mui/icons-material"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import Point from "./points"
import Uploader from "./Uploader"
import { Autocomplete } from '@mui/material';
import { Checkbox, FormControlLabel, RadioGroup, Step, Radio, FormControl, FormLabel, FormGroup, TextField } from '@mui/material';
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
const Secrtery = ({ site, setcurrentsite }) => {

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
    useEffect(() => {
        if (site) {
            setacces(site.acces)
            setadress(site.address)
            setduration(site.duration)
            setpoint1(site.place1)
            setpoint2(site.place2)
            setdescription(site.description)
            settruffic(site.truffic)
            setbicycles(site.bicycles)
            setcategories(site.category)
            settripstype(site.tripstype)
            setarea(site.area)
            setpayment(site.payment)
            setlevel(site.level)
            setname(site.name)
            if (site.images)
                seturl(site.images.url)
            setflag(true)
        }
    }, []);
    function checkadmine(e) {

        console.log(realcode)
        console.log(e.target.value)
        if (e.target.value == realcode) { setflag(true) }
        else { setflag(false) }

    }
    function castingtimetoseconds() {
        let count = 0
        count += days * 60 * 60 * 24
        count += hours * 60 * 60
        count += minuets * 60
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
    function checkCategory(event, setcategories, num) {
        if (event.target.checked) {
            setcategories((prevState) => [...prevState, num]);
        } else {
            setcategories((prevState) =>
                prevState.filter((checkbox) => checkbox !== num)
            );
        }
    }
    async function addsite() {
        console.log(address)

        const handleAddSite = async (e) => {
            try {
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
        if (setcurrentsite)
            setcurrentsite();
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
        {site ? <>   <Site e={site} />
            <Button onClick={update}>עדכן</Button></> : <></>}


        {flag ? <><Button onClick={addsite}>הוסף אתר</Button><br></br>
            <Button onClick={showallsites}>הצג את כל האתרים</Button>
            <Box sx={{ width: '60vw', margin: 'auto' }} >
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
                                הכל הושלם&apos;
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>אתחול</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }} style={{ textAlign: "center" }}>
                                {(activeStep === 0) ?
                                    <Box sx={{ alignItems: "center", display: 'block' }}>
                                        <p>נא מלא אחר הפרטים</p>
                                        <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>

                                            <FormLabel id="demo-controlled-radio-buttons-group">מיועד ל..</FormLabel>

                                            <FormControlLabel checked={categories.includes(1) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 1)} />} label="משפחות" />
                                            <FormControlLabel checked={categories.includes(2) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 2)} />} label="קבוצות" />
                                            <FormControlLabel checked={categories.includes(3) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 3)} />} label="זוגות" />
                                            <FormControlLabel checked={categories.includes(4) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 4)} />} label="ילדים" />
                                        </Box>

                                        <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
                                            <FormLabel id="demo-controlled-radio-buttons-group">גישה</FormLabel>

                                            <FormControlLabel control={<Checkbox checked={bicycles} onChange={(e) => setbicycles(e.target.checked)} />} label="אופניים" />
                                            <FormControlLabel control={<Checkbox checked={truffic} onChange={(e) => { settruffic(e.target.checked) }} />} label="תחבורה ציבורית" />
                                            <FormControlLabel control={<Checkbox checked={acces} onChange={(e) => { setacces(e.target.checked) }} />} label="גישה" />
                                        </Box>  </Box>
                                    : (activeStep === 1) ?
                                        <Box sx={{ alignItems: "center", display: 'block' }}>
                                            <Box sx={{ alignItems: "center" }}>
                                                <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>

                                                    <FormControl>
                                                        <FormLabel>רמת קושי</FormLabel>
                                                        <RadioGroup aria-label="level" name="level" value={level} onChange={(event) => { setlevel(event.target.value) }}>
                                                            <FormControlLabel value="hard" control={<Radio />} label="קשה" />
                                                            <FormControlLabel value="easy" control={<Radio />} label="קל" />
                                                            <FormControlLabel value="medium" control={<Radio />} label="בינוני" />
                                                        </RadioGroup>
                                                    </FormControl>

                                                </Box>

                                            </Box>
                                            <Box sx={{ alignItems: "center" }}>
                                                <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>

                                                    <FormControl>
                                                        <FormLabel>סוג אתר</FormLabel>
                                                        <RadioGroup aria-label="triptype" name="triptype" value={tripstype} onChange={(event) => { settripstype(event.target.value) }}>
                                                            <FormControlLabel value="around" control={<Radio />} label="מעגלי" />
                                                            <FormControlLabel value="riding" control={<Radio />} label="רכיבה" />
                                                            <FormControlLabel value="lines" control={<Radio />} label="קווי" />
                                                        </RadioGroup>
                                                    </FormControl>

                                                </Box>
                                            </Box>
                                        </Box>
                                        :
                                        <Box sx={{ alignItems: "center", display: 'block' }}>
                                            <Box sx={{ alignItems: "center" }}>
                                                <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>


                                                    <FormControl>
                                                        <FormLabel>אזור</FormLabel>
                                                        <RadioGroup aria-label="area" name="area" value={area} onChange={(event) => { setarea(event.target.value) }}>
                                                            <FormControlLabel value="north" control={<Radio />} label="צפון" />
                                                            <FormControlLabel value="south" control={<Radio />} label="דרום" />
                                                            <FormControlLabel value="center" control={<Radio />} label="מרכז" />
                                                            <FormControlLabel value="JerusalemSurroundingArea" control={<Radio />} label="ירושלים והסביבה" />

                                                        </RadioGroup>
                                                    </FormControl>

                                                </Box>
                                            </Box>
                                            <TextField label="תשלום" id="fullWidth" value={payment} onChange={(e) => { setpayment(e.target.value) }} />
                                            <TextField fullWidth label="תאור" id="fullWidth" value={description} onChange={(e) => { setdescription(e.target.value) }} />
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
                                            שלב {activeStep + 1} כבר הושלם
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'גמרת'
                                                : 'גמרת'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>

            </Box><br></br>
            <Uploader file={url} setFile={seturl} label="הוסף תמונה" /><br></br><br></br>
            <TextField
                label="שם"
                variant="standard"
                placeholder="שם האתר"
                value={name}
                onChange={(e) => { setname(e.target.value) }}
            />

            <label>            </label>
            <TextField
                label="משך זמן"
                variant="standard"
                placeholder="משך זמן שהיה באתר"
                value={duration}
                onChange={(e) => { setduration(e.target.value) }}
            />
            <div>
                <Autocomplete1 endpoint2={place2} endpoint1={place1} setpoint1={setpoint1} setpoint2={setpoint2} f={true} ></Autocomplete1>
            </div>


        </>
            : <TextField type="password" placeholder="הכנס קוד מזכירה" visible={visible} style={{ marginTop: "20vh", margin: "auto" }} onChange={(e) => { checkadmine(e) }} />}
    </>
}
export default Secrtery;