import Login from './pages/login/login';

import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './pages/home'
import './App.css';
import Register from './pages/register/register'
import Sitefrom  from './pages/sites/site';
import Site from './pages/sites/site';
function App() {
  return (
    <div className="App">
    <Router>
    <div className='nav'>
    <NavLink to='/'>Home</NavLink><br></br>
    <NavLink to='/login'>login</NavLink><br></br>
    <NavLink to='/register'>register</NavLink><br></br>
    <NavLink to='/site'>site</NavLink>
    </div>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/site' element={<Site/>} />
    <Route path='*' element={<h1> 404 Page not found</h1>} />
    </Routes>
    </Router>
    </div>
    );
    
 
}

export default App;
