import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import './App.css'
import About from "./About";

function App() {
  return <Router> 
  <nav>

    <Link to="/home" className='link'>Home</Link>
    <Link to="/shop" className='link'>Shop</Link>
    <Link to="/about" className='link'>About</Link>
    <Link to="/contact" className='link'>Contact</Link>
    <Link to="/cart" className='link'>Cart</Link>
  </nav>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
  </Routes>
  </Router>
}

export default App;
