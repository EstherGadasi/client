import Login from './pages/login/login';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './pages/Home page/home'
import './App.css';
import Register from './pages/register/register'
//import Sitefrom  from './pages/sites/site';
import FinallTrip from './pages/FinallTrip';
import Secrtery from './pages/secretery/secrtery';
import Personal_area from './pages/Personal area/Personal_area'
import Planning_a_trip from './pages/PlanTrip';
function App() {
  return (
    <div className="App">
    <Router>
    <div className='nav'>
    <NavLink to='/'>Home</NavLink><br></br>
    <NavLink to='/login'>login</NavLink><br></br>
    <NavLink to='/register'>register</NavLink><br></br>
    {/* <NavLink to='/Personal_area'>Personal_area</NavLink><br></br> */}
    {/* <NavLink to='/Personal_area'>Personal area</NavLink><br></br> */}
    <NavLink to='/secrtery'>Secrtery</NavLink>
    {/* <NavLink to='/ConstrainsA'>ConstrainsA</NavLink><br></br> */}
    </div>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    
    {/* <Route path='/secrtery' element={<Secrtery/>} /> */}
    <Route path='*' element={<h1> 404 Page not found</h1>} />
    {/* <Route path='/Personal_area' element={<Personal_area />} /> */}
    {/* <Route path='/ConstrainsA' element={<ConstrainsA />} /> */}
    {/* <Route path='/FinallTrip' element={<FinallTrip />} /> */}
    </Routes>
    </Router>
    </div>
    );
    
    //    <Route path='/plan-trip' element={<PlanTrip/>} />

 
}

export default App;
