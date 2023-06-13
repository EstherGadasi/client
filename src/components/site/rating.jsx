import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import Typography from '@mui/joy/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import GradeIcon from '@mui/icons-material/Grade';
import Rating from '@mui/material/Rating';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../context/authContext"
import Opinion from '../Opinion/opinion';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Rate({ site, addsite, RemoveSite, realcode }) {
    const { currentUser, token } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const [level, setRating] = React.useState(0);
    const [user_opinion, setuser_opinion] = React.useState("");
    const [siteid, setsiteid] = React.useState(site.idsites);
    const [opinion, setopinion] = useState([])
    const navigate = useNavigate()
console.log(realcode)
    async function addopion() {
        if (!currentUser) navigate("/login")
        const userid = currentUser.idusers
        if (user_opinion && level) {
            try {
                const res = await axios.post("http://localhost:4000/opinion", { user_opinion, level, siteid, userid });
            }
            catch { }
        }
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>

                <Button endIcon={<StarOutlineIcon></StarOutlineIcon>}
                    variant="plain" color="neutral"
                    // endDecorator={<DeleteForever />}
                    onClick={() => setOpen(true)}
                >
                   פרטים נוספים {/* {site.name} */}
                </Button>
            </Box>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    variant="outlined"
                    role="alertdialog"
                    aria-labelledby="alert-dialog-modal-title"
                    aria-describedby="alert-dialog-modal-description"
                >

                    <Typography
                        id="alert-dialog-modal-title"
                        component="h2"
                        startDecorator={<GradeIcon />}
                    >
                       חוות דעת
                    </Typography>
                    <Divider />
                    {addsite || RemoveSite || realcode ? <> {site.opinion?.map((e) => <Opinion e={e} ></Opinion>)}</> : <>
                        <Rating
                            name="simple-controlled"
                            value={level}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }} /> 
                        <input placeholder='youropinion' onChange={(e) => { setuser_opinion(e.target.value) }}></input>

                    </>}

                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
                        <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                            חזרה
                        </Button>
                        {!(addsite || RemoveSite || realcode) && <Button variant="solid" color="success" onClick={() => {
                            setOpen(false)
                            addopion()
                            Rate();
                        }

                        }>
                            חוות דעת
                        </Button>}
                    </Box>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}