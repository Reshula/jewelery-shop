
import mainPic from './titlePic.jpg'
import './App.css';
// import Contact from './Contact';
import MainFooter from './Footer/MainFooter';



function Home() {
  return  (
    <div>
    <div className="containerOne">
      <img src={mainPic} alt="earing" width="1510px" />
    </div>
    <MainFooter/>
   
   
 
  
    </div>
    )
}

export default Home;