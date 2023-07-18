
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MapOptions from "./x";
import FinallTrip from "../FinallTrip";
import Map from "./Map";
import SearchParameters from "./SearchParameters";
import TripsOptions from "./TripsOPtions";
import TripSettings from "./TripSettings";
import Save from "./Save";
import { AuthContext } from "../../context/authContext"
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Site from "../../components/site/site";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import Autocomplete1 from '../PlanTrip/autocomplete'
import { LicenseInfo } from '@mui/x-data-grid-pro';
import MapTest from "./mapTest";
import Map1 from "./e";
import { Grid } from "@material-ui/core";
import { useJsApiLoader } from "@react-google-maps/api";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

function Planning_a_trip({ constrainsarr, sites, id, paymenttrip, bg1, bg2, name, startpoint1, durationtrip }) {
    const { token, currentUser } = useContext(AuthContext)
    const [correntitemReduce, setcorrentitemReduce] = useState({})
    const [correntitemAdd, setcorrentitemAdd] = useState()
    const [startpoint, setstartpoint] = useState()
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBWW1xrjKfvdMk2-oVeMEHDyYW83E0nU0A",
        libraries: ['places']
    });
    const current = new Date();
    const date = `"${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}"`;
    const [center, setCenter] = useState({ lat: 31.732642099242874, lng: 35.18573300318892 })
    const [markers, setMarkers] = useState([{ lat: 31.732642099242874, lng: 35.18573300318892 }, { lat: 31.731318964884345, lng: 35.19509927741574 }])
    const [constrains, setconstrains] = useState()
    const [tripsOptions, setTripsOptions] = useState([])
    const [selectOption, setSelectedOption] = useState([])
    const [showselectOption, setshowSelectedOption] = useState([])
    const [TripSetting, setTripSettings] = useState([])
    const [trip, setTrip] = useState()
    const [tripid, setTripid] = useState(id)
    const [begin_point1, setbegin_point1] = useState(1)
    const [begin_point2, setbegin_point2] = useState(1)
    const [end_point1, setend_point1] = useState(2)
    const [end_point2, setend_point2] = useState(3)
    const [area, setarea] = useState(3)
    const [arrid, setarrid] = useState([])
    const [payment, setpayment] = useState(paymenttrip)
    const [flag, setflag] = useState(true)
    const [flagc, setflagc] = useState(false)
    const [distanceSite, setdistanceSite] = useState([])
    const [duration, setduration] = useState([])
    const [showduration, setshowduration] = useState([])
    const [tripsOptionsh, setTripsOptionsh] = useState([])
    const [locations, setlocations] = useState([])
    const [names, setnames] = useState([])
    const [namesar, setnamesarr] = useState([])
    const [namestart, setnamestart] = useState("")
    const [loading, setLoading] = React.useState(selectOption);
    const navigate = useNavigate()
    useEffect(() => {
        if (sites) {
            setflagc(true)
            if (sites.length > 0) forUpdateTrip()
        }
    }, []);
    useEffect(() => {
        let money = 0
        if (selectOption) {
            selectOption.forEach(element => {
                if (element.payment)
                    money += element.payment
            });
            setpayment(money)
        }
    }, [selectOption]);
    function forUpdateTrip() {
        const s = { "name": startpoint1, "place1": bg1, "place2": bg2 }
        let arr1 = []
        for (let i = 0; i < sites.length; i++) {
            setarrid([...arrid, sites[i].idsites])
        }
        setSelectedOption([{
            name: name, min: 0,
            site: {
                "lat": bg1,
                "lng": bg2
            }
        }, ...sites])
        setdistanceSite([{
            name: name, min: 0,
            site: {
                "lat": bg1,
                "lng": bg2
            }
        }])
        let arr = []
        arr.push({ "name": startpoint1, "lat": bg1, "lng": bg2 })
        for (let i = 0; i < sites.length; i++) {
            arr.push({ "name": sites[i].name, "lat": sites[i].place1, "lng": sites[i].place2 })
        }
        setlocations(arr)
        setbegin_point1(bg1)
        setbegin_point2(bg2)
        setstartpoint({ "name": startpoint1, "lat": bg1, "lng": bg2 })
        setduration(durationtrip)
        setnamestart(startpoint1)
    }
    const handleChange = (newArray) => {

    }
    async function addsite(e) {
        if (!selectOption.find((el) => el.idsites == e.idsites)) {
            if (startpoint) {
                setnamesarr([...selectOption, e])
                setSelectedOption([...selectOption, e])
                setarrid([...arrid, e.idsites])
                setpayment(payment + e.payment)
                setdistanceSite([{
                    name: selectOption[0].name, min: 0,
                    site: {
                        "lat": selectOption[0].place1,
                        "lng": selectOption[0].place2
                    }
                }])
                setnames([...names, selectOption[0].name])
                setlocations([...locations, { "name": e.name, "lat": e.place1, "lng": e.place2 }])
                setnames([...names, e.name])
            }
            else alert("enter start point")
        }
        else {
            alert("site exist")
        }
    }
    async function RemoveSite(e) {
        let arrhelper = selectOption;
        let aaridhelper = arrid
        arrhelper = arrhelper.filter((el) => el.idsites !== e.idsites)
        let arr = []
        for (let i = 0; i < arrhelper.length; i++) {
            arr.push({ "name": arrhelper[i].name, "lat": arrhelper[i].place1, "lng": arrhelper[i].place2 })
        }
        setlocations(arr)
        setSelectedOption(
            arrhelper
        )
        aaridhelper = aaridhelper.filter((el) => el !== e.idsites)
        setarrid(
            [aaridhelper]
        )
        setpayment(payment - e.payment)
        const site = {
            "lat": selectOption[0].place1,
            "lng": selectOption[0].place2

        }
        setdistanceSite([{ name: selectOption[0].name, min: 0, site: site }])
    }
    async function save() {
        const theTrip = {
            userId: 1,
            begin_point1: begin_point1,
            begin_point2: begin_point2,
            end_point1: end_point1,
            end_point2: end_point2,
            payment: payment,
            date: `"${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}"`,
            listofsites: arrid,
            constrainsoftrip: constrains
        }
        setTrip(theTrip);
    }
    function search(e) {
        let arr = []
        if (e) {
            arr = tripsOptions.filter((el) => el.name.includes(e))
            if (arr.length == 0) { setTripsOptions(["no results"]) }
            else
                setTripsOptions(arr)
        }
        else {
            setTripsOptions(tripsOptionsh)
        }
    }
    return <>
        <lable>הכנס נקודת יציאה</lable>
        {isLoaded && <Autocomplete1 setnamestart={setnamestart} SelectedOption={selectOption} locations={locations} setlocations={setlocations} setpoint1={setbegin_point1} setpoint2={setbegin_point2} isLoaded={isLoaded} setstartpoint={setstartpoint} setSelectedOption={setSelectedOption} />}
        <Box display={"block"} >
            <div>
                <SearchParameters flag={flag} startpoint={startpoint} setSelectedOption={setSelectedOption} setTripsOptionsh={setTripsOptionsh} setTripsOptions={setTripsOptions} setconstrains={setconstrains} constrains={constrains} /><br></br>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}>
                    {tripsOptions.length > 0 ? <TextField fullWidth label="search" id="fullWidth" endIcon={<SearchIcon />} onChange={(e) => { search(e.target.value) }} /> : <></>}
                </Box>
                <div style={{ width: "100vw", display: "flex" }}>
                    <TripsOptions tripsOptions={tripsOptions} setcorrentitem={setcorrentitemAdd} addsite={addsite} />
                    <div style={{
                        height: '100vh', width: "23vw", overflow: 'scroll', borderColor: "GrayText", borderWidth: "2px",
                        border: "double",
                        marginLeft: "2px"
                    }}>
                        {selectOption?.map((e, i) => {
                            return <>
                                {i != 0 && <Site startpoint={startpoint} setlocations={setlocations} locations={locations} key={i} len={selectOption.length} selectOption={selectOption} setSelectedOption={setSelectedOption} RemoveSite={RemoveSite} e={e} setcorrentitem={setcorrentitemReduce} i={i}></Site>} </>
                        })}
                        <label htmlFor="">לשינוי סדר האתרים הכנס מיקום רצוי בהכנסת מיקום  </label><br></br></div>
                </div>
                <Box></Box>

                {id ? <Button onClick={save}>עדכון טיול</Button> : <></>}
                {selectOption && !id ? <Button onClick={save}>שמירה</Button> : <></>}<br></br>
                <label> אחרי שמירת הטיול תוכל לראות את כל הפרטים עליו ולערוך אותו שוב</label>
                {trip ? <Save namestart={namestart} selectOption={selectOption[selectOption.length - 1]} setend_point1={setend_point1} setend_point2={setend_point2} isLoaded={isLoaded} setTripid={setTripid} payment={payment} userId={currentUser.idusers} begin_point1={begin_point1} begin_point2={begin_point2} end_point1={end_point1} end_point2={end_point2} date={date} listofsites={arrid} constrainsoftrip={constrains} idtrips={tripid} duration={duration} /> : <></>}
                {isLoaded && <Map isLoaded={isLoaded} center={center} markers={markers} places={[...locations]} handleChange={handleChange} />}
                <Box sx={{ width: "100vw" }} bgcolor="InfoBackground">

                    {selectOption ? <TripSettings setshowduration={setshowduration} setnamesarr={setnamesarr} namesar={namesar} names={names} setduration={setduration} duration={duration} flag={flag} setflag={setflag} setdistance={setdistanceSite} distanceSite={distanceSite} setend_point1={setend_point1} setend_point2={setend_point2} selectOption={selectOption} /> : <></>}
                    <span>יעלה לך בסה"כ: {payment}<AttachMoneyIcon /></span>
                    {duration && <div>{duration}</div>}
                    {showduration ? <div><QueryBuilderIcon />{showduration[0] ? <><span>{showduration[0]} ימים</span></> : <></>}{showduration[1] ? <><span>{showduration[1]} שעות</span></> : <></>}{showduration[2] ? <><span>{showduration[2]} דקות</span></> : <></>}</div> : <></>}
                </Box>
            </div>
        </Box>
    </>
}
export default Planning_a_trip;
