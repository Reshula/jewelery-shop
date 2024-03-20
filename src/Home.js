
import mainPic from './titlePic.jpg'
import './App.css';
import MainFooter from './Footer/MainFooter';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);


function Home() {

 

  const container = useRef();
  useGSAP(() => {
    gsap.to(".icon", {x: 100});
  }, { scope: container });

  gsap.from(".icon", {
    rotation: 360,
    duration: 5,
    ease: "elastic",
  });

  return  (
    <div>
    <div className="containerOne">
      <img src={mainPic} alt="earing" width="1510px" />
    </div>
    <div className='icon-block-container'>
      <div 
        className='icon-block'>
        <div 
          className='icon-container'> 
          <div
            className='icon'>
             <span><p>Delelivery</p></span>
          </div>
        </div>
        </div>
      <div 
        className='icon-block'>
        <div 
          className='icon-container'>
          <div
            className='icon'>
          </div>

        </div>

      </div>

      <div 
        className='icon-block'>
        <div 
          className='icon-container'>
          <div
            className='icon'>
          </div>

        </div>
        </div>
      <div 
        className='icon-block'>

     
        <div 
          className='icon-container'>
          <div
            className='icon'>
          </div>

        </div>

      </div>
      

    </div>
    <MainFooter/>
   
   
 
  
    </div>
    )
}

export default Home;

