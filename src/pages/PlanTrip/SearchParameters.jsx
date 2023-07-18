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
    const [categories, setcategories] = useState([1, 2, 3, 4]);
    const [tripstype, settripstype] = useState(["around", "riding", "lines"])
    const [description, setdescription] = useState(null);
    const [area, setarea] = useState(["south", "north", "center", "JerusalemSurroundingArea"])
    const [truffic, settruffic] = useState(false)
    const [flagconstrains, setflagconstrains] = useState(false)
    const [payment, setpayment] = useState(200)
    const [level, setlevel] = useState(["hard", "easy", "medium"])
    const [empty, setempty] = useState("")
    const steps = ['Participants', 'Select type', 'Constrains'];
    const [f, setf] = useState(false)
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
        setcategories([null])
        settripstype([null])
        setarea([null])
        settruffic(false)
        setpayment(200)
        setlevel([null])

    }
    function initialization() {
        setacces(false)
        setbicycles(false)
        setcategories([1,2,3,4])
        settripstype(["around", "riding", "lines"])
        setdescription()
        setarea(["south", "north", "center", "JerusalemSurroundingArea"])
        settruffic(false)
        setpayment(200)
        setlevel(["hard", "easy", "medium"])
        bringmatchessites()
    }

    const check = (event, set) => {
        const value = event.target.value;
        if (event.target.checked) {
            set((prevState) => [...prevState, value]);
        } else {
            set((prevState) =>
                prevState.filter((checkbox) => checkbox !== value)
            );
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

    async function bringmatchessites() {
        setf(false)
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
                if (res.data.length != 0) {
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
            console.log(arrorgin)
            if (arrorgin == null) {
                setempty("אוי לא אין אתר מתאים!!")
                setTripsOptions([])
                setTripsOptionsh([])
                return
            }
            if (description) {
                setload("מתאים לך אתרים...")
                specialarr = await getSitesByDescription()
                if (specialarr)
                    setempty("אוי לא אין אתר מתאים!!")
                setload("")
            }
            if (!description) {
                setTripsOptions(arrorgin)
                setTripsOptionsh(arrorgin)
                return
            }
            let a
            let newarr = specialarr.filter((el) => { return arrorgin.find((e) => el[0] == e.idsites) != undefined && el[1] > 0.5 })
            newarr = arrorgin.filter((e) => newarr.find((el) => el[0] == e.idsites))
            setTripsOptions(newarr)
            setTripsOptionsh(newarr)
            setf(false)
        }
        Merge()
    }
    function showconstrains() {
        clearConstrains()
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
            <label>סנן רק לפי תאור</label><br></br>
            <input placeholder="תאור" onChange={(e) => { setdescription(e.target.value) }}></input>
            <h1>{load}</h1></>}
        <Box>
            <Button onClick={() => { setflagd(true); clearConstrains() }}>סנן רק לפי תאור </Button>
            <Button onClick={showconstrains}>בחירת אילוצים </Button>
            <Button onClick={bringmatchessites}>התאם לי אתרים</Button>
            <Button onClick={clearConstrains}>ביטול סינון</Button><br></br><br></br>
            {empty ? <h2>{empty}</h2> : <></>}
            {f ? <div style={{ width: '100vw' }}><Box sx={{ width: '60vw', margin: 'auto' }} >
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
                                כל השלבים נגמרו&apos;
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }} style={{ textAlign: "center" }}>
                                {(activeStep === 0) ?
                                    <Box sx={{ alignItems: "center", display: 'block' }}>
                                        <p>נא ביר את אילוציך</p>
                                        <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>

                                            <FormLabel id="demo-controlled-radio-buttons-group">למי מיועד</FormLabel>
                                            <FormControlLabel checked={categories.includes(1) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 1)} />} label="משפחות" />
                                            <FormControlLabel checked={categories.includes(2) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 2)} />} label="קבוצות" />
                                            <FormControlLabel checked={categories.includes(3) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 3)} />} label="זוגות" />
                                            <FormControlLabel checked={categories.includes(4) ? true : false} control={<Checkbox onChange={(e) => checkCategory(e, setcategories, 4)} />} label="ילדים" />
                                        </Box>

                                        <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
                                            <FormLabel id="demo-controlled-radio-buttons-group">גישה</FormLabel>
                                            <FormControlLabel checked={bicycles} control={<Checkbox checked={bicycles} onChange={(e) => { setbicycles(e.target.checked)}} />} label="אופניים" />
                                            <FormControlLabel checked={truffic} control={<Checkbox checked={truffic} onChange={(e) => { settruffic(e.target.checked) }} />} label=" תחבורה" />
                                            <FormControlLabel checked={acces} control={<Checkbox checked={acces} onChange={(e) => { setacces(e.target.checked) }} />} label="גישה" />
                                        </Box>  </Box>
                                    : (activeStep === 1) ?
                                        <Box sx={{ alignItems: "center", display: 'block' }}>
                                            <Box sx={{ alignItems: "center" }}>
                                                <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>
                                                    <FormLabel id="demo-controlled-radio-buttons-group">רמת קושי</FormLabel>


                                                    <FormControlLabel value="hard" checked={level.includes("hard") ? true : false} control={<Checkbox onChange={(e) => check(e, setlevel, level)} />} label="קשה" />
                                                    <FormControlLabel value="easy" checked={level.includes("easy") ? true : false} control={<Checkbox onChange={(e) => check(e, setlevel, level)} />} label="קל" />
                                                    <FormControlLabel value="medium" checked={level.includes("medium") ? true : false} control={<Checkbox onChange={(e) => check(e, setlevel, level)} />} label="בינוני" />

                                                </Box>

                                            </Box>
                                            <Box sx={{ alignItems: "center" }}>
                                                <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>

                                                    <FormLabel id="demo-controlled-radio-buttons-group">סוג טיול</FormLabel>
                                                    <FormControlLabel checked={tripstype.includes("around") ? true : false} value="around" control={<Checkbox onChange={(e) => check(e, settripstype, tripstype)} />} label="מעגלי" />
                                                    <FormControlLabel checked={tripstype.includes("lines") ? true : false} value="lines" control={<Checkbox onChange={(e) => check(e, settripstype, tripstype)} />} label="קווי" />
                                                    <FormControlLabel checked={tripstype.includes("riding") ? true : false} value="riding" control={<Checkbox onChange={(e) => check(e, settripstype, tripstype)} />} label="רכיבה" />
                                                </Box></Box>
                                        </Box>
                                        :
                                        <Box sx={{ alignItems: "center", display: 'block' }}>
                                            <Box sx={{ alignItems: "center" }}>
                                                <Box sx={{ alignItems: "center", margin: "auto", display: "grid", gap: 1 }}>


                                                    <FormLabel id="demo-controlled-radio-buttons-group">אזור</FormLabel>
                                                    <FormControlLabel checked={area.includes("north") ? true : false} value="north" control={<Checkbox onChange={(e) => check(e, setarea, area)} />} label="צפון" />
                                                    <FormControlLabel checked={area.includes("south") ? true : false} value="south" control={<Checkbox onChange={(e) => check(e, setarea, area)} />} label="דרום" />
                                                    <FormControlLabel checked={area.includes("center") ? true : false} value="center" control={<Checkbox onChange={(e) => check(e, setarea, area)} />} label="מרכז" />
                                                    <FormControlLabel checked={area.includes("JerusalemSurroundingArea") ? true : false} value="JerusalemSurroundingArea" control={<Checkbox onChange={(e) => check(e, setarea, area)} />} label="ירושלים והסביבה" />
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
                                    הקודם
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                    הבא
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            שלב {activeStep + 1} כבר הושלם
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



