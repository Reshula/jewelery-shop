import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import FirstPage from './FirstPage';

function App() {
  return <Router> 
  <nav>
    <Link to="/" className='link'>FirstPage</Link>
  </nav>
  <Routes>
    <Route path='/about' element={<FirstPage/>}/>
    
  </Routes>
  </Router>
}

export default App;
