import Login from './pages/login';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './pages/Home page/home'
import './App.css';
import Register from './pages/register/register'
//import Sitefrom  from './pages/sites/site';
import FinallTrip from './pages/FinallTrip';
import Secrtery from './pages/secretery/secrtery';
import ButtonAppBar from './components/Bar/bar';

import Planning_a_trip from './pages/PlanTrip';

import Personal_area from './pages/Personal_area'

function App() {
  return (
    <div className="App">  
    <Router>
    <ButtonAppBar/>
    
    <div className='nav'>
    {/* <NavLink to='/'>Home</NavLink><br></br> */}
    {/* <NavLink to='/login'>login</NavLink><br></br> */}
    {/* <NavLink to='/register'>register</NavLink><br></br>
    <NavLink to='/index'>index</NavLink><br></br>
    <NavLink to='/Personal_area'>Personal area</NavLink><br></br>
    <NavLink to='/secrtery'>Secrtery</NavLink> */}
    {/* <NavLink to='/ConstrainsA'>ConstrainsA</NavLink><br></br> */}
    </div> 
  
    <Routes>
     <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/PlanTrip' element={<Planning_a_trip />} />
    <Route path='/Personal_area' element={<Personal_area/>} />
    <Route path='/secrtery' element={<Secrtery/>} />
    <Route path='*' element={<h1> 404 Page not found</h1>} />
    
    {/* <Route path='/ConstrainsA' element={<ConstrainsA />} /> */}
    {/* <Route path='/FinallTrip' element={<FinallTrip />} /> */}
    </Routes>
    </Router>
  
    </div>
    );
    
    //    <Route path='/plan-trip' element={<PlanTrip/>} />

 
}

export default App;
