import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import './App.css'
import About from "./About";
import NavBar from './NavBar/NavBar';

function App() {
  return <Router> 

  <NavBar />
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
  </Routes>
  </Router>
}

export default App;
