import image from './Photo/backgroundTwo.jpg';
import './App.css'
import { useState } from 'react';
import MainFooter from './Footer/MainFooter';


function About(){
    
    const par ="Emphasize your personality with help of jewelery made especially fo you.Our desingners will develop a decoration  that will  perfectly complement your image And the jewelery will repeat exactly the idea agreed with you from pure gold.S.QSSIM is a high quality, durable jewelry brand with trendy designs.All jewelry is made from gold plated or rhodium plated jewelry fittings and is made to order.Every piece of jewelry in our brand has come a long way to meet you.."
    const [showMore, setShowMore] = useState(false)
    return(
        <div>
          
            <img className="image"  src={image} alt='pearl'width="1510px"/>
          
            <div className='containerAbout'>
            <h1>Custom jewelery</h1>
            <p className="parAbout">{showMore ? par : par.substring(0,194) + "....."}
            <button className='btnPar' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
           
            </div>
    <MainFooter/>
        </div>
    )
}
export default About;