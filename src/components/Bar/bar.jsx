import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListSite from '../../pages/secretery/listSite';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Replay } from '@material-ui/icons';
import Personal_area from '../../pages/Personal_area';
import Secrtery from '../../pages/secretery';
//const navigate = useNavigate();
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { AuthContext } from "../../context/authContext"
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import Login from '../../pages/login';
//const navigate = useNavigate();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { token, currentUser,logout } = useContext(AuthContext)
  const [auth, setAuth] = React.useState(true);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    auth ? logout() : login();
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const logoutuser = async() => {

    try {
      await logout()
      setAuth(false);
      navigate("../", { replace: false })
 handleClose()
    } catch (err1) {
      //   setErr(err.response.data?.message);
    }
   
    
  };
  const login = () => {

    navigate("/login", { state: { setAuth: { setAuth } } })
    handleClose()
  }
  const planTrip = () => {

    navigate("../planTrip", { replace: false })
  }
  const home = () => {

    navigate("../", { replace: false })
  }
  const regist = () => {

    navigate("../register", { replace: false })
  }
  const personal_area = () => {

    navigate("../myTrips", { replace: false })
    handleClose()
  }

  const secrtery = () => {

    navigate("../secrtery", { replace: false })
  }
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  return (
    <div className={classes.root}>

      <AppBar position="fixed" style={{ backgroundColor: "GrayText" }}>
        <Toolbar >
          <Button onClick={home} color="inherit" style={{ width: "20vw" }}>דף הבית</Button>
          <Button onClick={planTrip} color="inherit" style={{ width: "20vw" }}>לתכן טיול חדש</Button>
          <Button onClick={login} color="inherit" style={{ width: "20vw" }}>התחבר</Button>
          <Button onClick={personal_area} color="inherit" style={{ width: "20vw" }}>הטיולים שלי</Button>
          <Button onClick={secrtery} color="inherit" style={{ width: "20vw" }}>מזכירה</Button>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={personal_area}>הטיולים שלי</MenuItem><br></br>
                <MenuItem onClick={logoutuser}>צא מהמשתמש</MenuItem>
              </Menu>
            </div>
          ) :
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <NoAccountsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={login}> התחבר</MenuItem><br></br>
              </Menu>
            </div>}
        </Toolbar>
      </AppBar>
    </div>
  );
}