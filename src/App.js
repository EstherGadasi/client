import Login from './pages/login';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './pages/Home page/home'
import './App.css';
import Register from './pages/register/register'
//import Sitefrom  from './pages/sites/site';
import FinallTrip from './pages/FinallTrip';
import Secrtery from './pages/secretery/secrtery';
<<<<<<< HEAD


import Personal_area from './pages/Personal_area'
import Planning_a_trip from './pages/PlanTrip';

// import Personal_area from './pages/Personal_area/Personal_area'

import ButtonAppBar from './components/Bar/bar';

=======



import Planning_a_trip from './pages/PlanTrip';



import ButtonAppBar from './components/Bar/bar';



import Personal_area from './pages/Personal_area'
>>>>>>> 6f756724b2a6bbfc4e6c5d6166d5b08ed178abeb


function App() {
  return (
    <div className="App">  
    <Router>
    <ButtonAppBar/>
    
<<<<<<< HEAD
    <div className='nav'>

    </div> 
=======
>>>>>>> 6f756724b2a6bbfc4e6c5d6166d5b08ed178abeb
  

 
    
    <Routes>
     <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />

<<<<<<< HEAD
    <Route path='/index' element={<Planning_a_trip />} />
    
    {/* <Route path='/secrtery' element={<Secrtery/>} /> */}
=======
>>>>>>> 6f756724b2a6bbfc4e6c5d6166d5b08ed178abeb

    <Route path='/PlanTrip' element={<Planning_a_trip />} />
    <Route path='/Personal_area' element={<Personal_area/>} />
    <Route path='/secrtery' element={<Secrtery/>} />
<<<<<<< HEAD
 
=======

>>>>>>> 6f756724b2a6bbfc4e6c5d6166d5b08ed178abeb
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
