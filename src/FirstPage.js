import  Home  from "./Home";
import mainPic from './titlePic.jpg'
import './App.css';

function FirstPage() {
  return  (
    <div>
    <div className="containerOne">
      <img className="image" src={mainPic} alt="earing" width="1510px" />
    </div>
    <Home />
    

    </div>
    )
}

export default FirstPage;