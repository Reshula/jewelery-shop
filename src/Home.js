
import mainPic from './titlePic.jpg'
import './App.css';
import Contact from './Contact';


function Home() {
  return  (
    <div>
    <div className="containerOne">
      <img className="image" src={mainPic} alt="earing" width="1510px" />
    </div>
    <Contact />

    
 
    

    </div>
    )
}

export default Home;