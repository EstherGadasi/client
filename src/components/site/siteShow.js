import React, { useEffect, useState } from "react";
import Button from '@mui/joy/Button';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Rate from './rating';
import Box from '@mui/joy/Box';
import Modal from '@mui/joy/Modal';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ModalDialog from '@mui/joy/ModalDialog';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/joy/Typography';
import AccessibleIcon from '@mui/icons-material/Accessible';
import NotAccessibleIcon from '@mui/icons-material/NotAccessible';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Face2Icon from '@mui/icons-material/Face2';
function Siteshow({ site, addsite, RemoveSite, update, realcode }) {
  const [open, setOpen] = React.useState(false);
  const [categories, setcategories] = React.useState([false, false, false, false]);
  const arrIcons = [EscalatorWarningIcon, EscalatorWarningIcon, Face2Icon, SupervisorAccountIcon]
  useEffect(() => {
    let arr = categories
    site.category.forEach((e) => {
      arr[e.idcategory - 1] = true
    })
    setcategories([...arr])
  });
  return (
    <>
      <React.Fragment>
        <Box sx={{ display: 'grid', gap: 2, pt: 5 }}>
          <Button dir='rtl'
            variant="plain" color="neutral"
            onClick={() => setOpen(true)}
          >
            פרטים נוספים
          </Button>

        </Box>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            variant="outlined"
            role="alertdialog"
            aria-labelledby="alert-dialog-modal-title"
            aria-describedby="alert-dialog-modal-description"
          >
            <Button variant="plain" color="red" style={{ width: "20px" }} onClick={() => setOpen(false)}>
              <CloseIcon></CloseIcon>
            </Button>
            <h3 >{site.name}</h3>
            <img key={site.images?.idimages} src={site.images ? site.images.url : '/assets/deed_sea.jpg'} style={{ height: '20vh', maxWidth: '50vw' }}></img>

            <Typography variant="body2" color="text.secondary" sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(1, minmax(0,1fr))", sm: "repeat(3, minmax(0,1fr))" } }}>
              <div display="flex"><h4>גישה:</h4> {site.acces ? <><AccessibleIcon />  </> : <> <NotAccessibleIcon /> </>}</div>
              <div><h4>אופניים: </h4> {site.bicycles ? <> <PedalBikeIcon /> </> : <><CloseIcon /><PedalBikeIcon />  </>}</div>
              <div><h4>מתאים ל: </h4>
                {categories[0] && <><EscalatorWarningIcon></EscalatorWarningIcon> <span></span></>}
                {categories[1] && <><Diversity3Icon></Diversity3Icon> <span></span></>}
                {categories[2] && <><Face2Icon></Face2Icon> <span></span></>}
                {categories[3] && <><SupervisorAccountIcon></SupervisorAccountIcon> <span></span></>}
              </div>
              <div><h4>סוג טיול:  </h4> {site.tripstype == "around" ? <span>מעגלי</span> : site.tripstype == "lines" ? <span>קווי</span>
                : site.tripstype == "riding" ? <span>רכיבתי</span> : <></>}</div>
                          

              <div><h4>אזור: </h4> {site.area == "north" ? <span>צפון</span> : site.area == "South" ? <span>דרום</span>
                : site.area == "center" ? <span>מרכז</span> : site.area ==+ "JerusalemSurroundingArea" ? <span>ירושלים והסביבה</span> : <></>}</div>
              <div><h4>תחבורה ציבורית:    </h4> {site.truffic ? <><DirectionsBusFilledIcon /> </> : <><BusAlertIcon />  </>}</div>
              
              <div><h4>תשלום: </h4> <AttachMoneyIcon />{site.payment}</div>
              <div><h4>רמה: </h4>   {site.level == "easy" ? <span>קל</span> : site.level == "medium" ? <span>בנוני</span>
                : site.level == "hard" ? <span>קשה</span> : <></>}
                </div>
              
              <div><h4>כתובת:</h4>{site.adress}</div>
            </Typography>
            <Rate site={site} update={update} addsite={addsite} RemoveSite={RemoveSite} realcode={realcode}></Rate>
          </ModalDialog>
        </Modal>
      </React.Fragment>

    </>
  )
}

export default Siteshow;