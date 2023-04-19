//import { dblClick } from "@testing-library/user-event/dist/click"
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FinallTrip from "../FinallTrip";
//import Show from "../showdetails";
import Map from "./Map";
import SearchParameters from "./SearchParameters";
import TripsOptions from "./TripsOPtions";
import TripSettings from "./TripSettings";
import Save from "./Save";
import { AuthContext } from "../../context/authContext"

// import Box from '@mui/material/Box';
// import {
//   DataGridPremium,
//   GridToolbar,
//   useGridApiRef,
//   useKeepGroupedColumnsHidden,
// } from '@mui/x-data-grid-premium';
//  import { useDemoData } from '@mui/x-data-grid-generator';

import Site from "../../components/site/site";

// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

// function loadServerRows(page, data) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(data.rows.slice(page * 5, (page + 1) * 5));
//         }, Math.random() * 500 + 100); // simulate network latency
//     });
// }

// function ControlledSelectionServerPaginationGrid() {
//     const { data } = useDemoData({
//         dataSet: 'Commodity',
//         rowLength: 100,
//         maxColumns: 6,
//     });

//     const [paginationModel, setPaginationModel] = React.useState({
//         page: 0,
//         pageSize: 5,
//     });
//     const [rows, setRows] = React.useState([]);
//     const [loading, setLoading] = React.useState(false);
//     const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

//     React.useEffect(() => {
//         let active = true;

//         (async () => {
//             setLoading(true);
//             const newRows = await loadServerRows(paginationModel.page, data);

//             if (!active) {
//                 return;
//             }

//             setRows(newRows);
//             setLoading(false);
//         })();

//         return () => {
//             active = false;
//         };
//     }, [paginationModel.page, data]);

// }

    function Planning_a_trip({ constrainsarr, sites, id, paymenttrip }) {



        const navigate = useNavigate()


        //     const [sites, setsites] = useState(arrsites)

        //     const [username, setuserName] = useState("")
        //     const [err, setErr] = useState(null);
        //    const [matchesites,setmatchesites]=useState([])




        //    let newsites=[]
        const [correntitemReduce, setcorrentitemReduce] = useState({})
        const [correntitemAdd, setcorrentitemAdd] = useState()

        let newsites = []

        //    let newsites=[]
        function fun() {
            setSelectedOption(sites)
            const site = {
                "lat": sites[0].place1,
                "lng": sites[0].place2

            }
            setdistanceSite([{ name: sites[0].name, min: 0, site: site }])
        }
        function fun1() {
            setconstrains(constrainsarr)
        }
        const current = new Date();
        const date = `"${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}"`;

        const [constrains, setconstrains] = useState(constrainsarr)
        const [tripsOptions, setTripsOptions] = useState([])
        const [selectOption, setSelectedOption] = useState([])
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
        const [distanceSite, setdistanceSite] = useState([])
        const [duration, setduration] = useState([])

        useEffect(() => { if (sites) fun() }, []);
        useEffect(() => { if (constrainsarr) fun1() }, []);
        // if (selectOption)
        //     setdistanceSite( })
        async function addsite(e) {


            setSelectedOption([...selectOption, e])
            //  console.log(selectOption)
            console.log(arrid)
            setarrid([...arrid, e.idsites])
            setpayment(payment + e.payment)
            const site = {
                "lat": selectOption[0].place1,
                "lng": selectOption[0].place2

            }
            setdistanceSite([{ name: selectOption[0].name, min: 0, site: site }])
            setbegin_point1(selectOption[0].place1)
            setbegin_point2(selectOption[0].place2)

        }
        async function RemoveSite(e) {
            //  const v=selectOption.pop(e)
            let arrhelper = selectOption;
            let aaridhelper = arrid
            arrhelper = arrhelper.filter((el) => el !== e)

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
            // newsites = selectOption.pop(correntitem)
            // setSelectedOption([...newsites])e.idsites
        }
        async function save() {



            const theTrip = { // area:arrcs.area,
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


        return <>
            {/* {matcessites.map((e) => <button onClick={(e) => { ShowSiteDetails }} key={e.id}>{e}</button>)} */}
            <div>hello </div>

            <div>

                <label>


                    {/* {matchesites?.map((e) => {
                    return <div onChange={(e) => setcorrentitem(e.target.value)} value={e.id} >{e.idsite}</div>
                })} */}
                    {id ? <button onClick={save}>update</button> : <></>}


                    <SearchParameters setTripsOptions={setTripsOptions} setconstrains={setconstrains} constrains={constrains} />
                    <TripsOptions tripsOptions={tripsOptions} setcorrentitem={setcorrentitemAdd} addsite={addsite} />
                    {/* <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            {...data}
                            rows={rows}
                            pagination
                            checkboxSelection
                            paginationModel={paginationModel}
                            pageSizeOptions={[5]}
                            rowCount={100}
                            paginationMode="server"
                            onPaginationModelChange={setPaginationModel}
                            onRowSelectionModelChange={(newRowSelectionModel) => {
                                setRowSelectionModel(newRowSelectionModel);
                            }}
                            rowSelectionModel={rowSelectionModel}
                            loading={loading}
                            keepNonExistentRowsSelected
                        />
                    </div> */}
                    {/* <Box sx={{ height: 520, width: '100%' }}>
                    <DataGridPremium
                        // {...data}
                        // apiRef={apiRef}
                        // loading={loading}
                        // disableRowSelectionOnClick
                        // initialState={initialState}
                        // slots={{ toolbar: GridToolbar }}
                    />
                </Box> */}
                    {selectOption?.map((e) => {

                        return <>
                            <Site RemoveSite={RemoveSite} e={e} setcorrentitem={setcorrentitemReduce}></Site>

                        </>
                    })}
                    {/* <TripSettings /> */}
                    <button onClick={save}>save</button>
                    <span>payment {payment}</span>


                    {trip ? <Save setTripid={setTripid} payment={payment} userId={1} begin_point1={begin_point1} begin_point2={begin_point2} end_point1={end_point1} end_point2={end_point2} date={date} listofsites={arrid} constrainsoftrip={constrains} idtrips={tripid} /> : <></>}
                    {selectOption ? <TripSettings setduration={setduration} duration={duration} flag={flag} setflag={setflag} setdistance={setdistanceSite} distanceSite={distanceSite} setend_point1={setend_point1} setend_point2={setend_point2} selectOption={selectOption} /> : <></>}
                    {selectOption ? <Map /> : <></>}
                    {/* {trip ? <Save trip={trip} setTripid={setTripid} tripid={tripid}/> : <></>} */}
                    {/* <TripSettings={selectOption} setbegin_point1={setbegin_point1} setbegin_point2={setbegin_point2} setend_point1={setend_point1} setend_point2={setend_point2} */}
                    {/* {tripid && <span>{tripid}</span>} */}
                    {/* {navigate ("/FinallTrip${tripid}")}   trip={trip}
{/* 
               { tripid?<FinallTrip tripid={tripid}></FinallTrip>:<></>} */ }

                    {/* <TripsOptions tripsOptions={tripsOptions} />
                <TripSettings TripSettings={TripSettings} />

                <Save setTrip>Save Trip</Save>
                <FinallTrip trip={trip} sites={selectOption}  constrains={constrains}></FinallTrip> */}
                    {/* {navigate ("/FinallTrip")} */}


                </label>



            </div>


        </>
    }
    export default Planning_a_trip;
    {/* <option value="fruit">Fruit</option>

         <option value="vegetable">Vegetable</option>

         <option value="meat">Meat</option> */}
