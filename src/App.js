import Login from './pages/login';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './pages/Home page'
import './App.css';
import Register from './pages/register'
//import Sitefrom  from './pages/sites/site';
import FinallTrip from './pages/FinallTrip';
import Secrtery from './pages/secretery'




import Personal_area from './pages/Personal_area'
import Planning_a_trip from './pages/PlanTrip';

// import Personal_area from './pages/Personal_area/Personal_area'

import ButtonAppBar from './components/Bar/bar';
import { AuthContextProvider } from "./context/authContext";









function App() {
  return (
    <div className="App">
        <AuthContextProvider>
      
    <Router>
    <ButtonAppBar/>
    


  

 
    
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />


    {/* <Route path='/index' element={<Planning_a_trip />} /> */}
    
    {/* <Route path='/secrtery' element={<Secrtery/>} /> */}


    <Route path='/PlanTrip' element={<Planning_a_trip />} />
    <Route path='/Personal_area' element={<Personal_area/>} /> 
    <Route path='/secrtery' element={<Secrtery/>} /> 


    <Route path='*' element={<h1> 404 Page not found</h1>} />
    
    {/* /* <Route path='/ConstrainsA' element={<ConstrainsA />} /> */}
     {/* <Route path='/FinallTrip' element={<FinallTrip />} /> */}
    </Routes>
    </Router>
  </AuthContextProvider>  
    </div>
    );
    
    //    <Route path='/plan-trip' element={<PlanTrip/>} />

 
}

export default App;
