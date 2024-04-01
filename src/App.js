import Login from './pages/login';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home page'
import Register from './pages/register'
import FinallTrip from './pages/FinallTrip';
import Secrtery from './pages/secretery'
import ListSite from './pages/secretery/listSite';
import {Box}from "@mui/material"
import Personal_area from './pages/Personal_area'
import Planning_a_trip from './pages/PlanTrip';
import ButtonAppBar from './components/Bar/bar';
import { AuthContextProvider } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
          <Router><ButtonAppBar />
          <Box sx={{mt:8}}><Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/ListSite' element={<ListSite />} />
            <Route path='/PlanTrip' element={<Planning_a_trip />} />
            <Route path='/myTrips' element={<Personal_area />} />
            <Route path='/secrtery' element={<Secrtery />} />
            <Route path='*' element={<h1> 404 Page not found</h1>} />
            <Route path='/FinallTrip' element={<FinallTrip />} />
          </Routes>        </Box>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;

