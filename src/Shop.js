import { useState, useEffect } from "react";
import { data } from "./data";
import Jewelery from "./Jewelery";
import Button from "./Button";
import MainFooter from "./Footer/MainFooter";
import  LoaderPage  from './Loader/LoaderPage';


function Shop(){
    const [jewelery, setJewelery] = useState(data);
    const [stateLoader, setStateLoader] = useState(false);

  
    
useEffect(() =>{
    const timer = setTimeout (() =>setStateLoader(false), 3000);
    return() => clearTimeout(timer)
    
    }, [])

    const choosenJew = (jewName) => {
        const newJew = data.filter(element =>
            element.jewName === jewName)
            setJewelery(newJew)
    }

    return(
        <div className="containerShop">
            {stateLoader && <LoaderPage/>}
            <h1 className="titleShop">Shop by category</h1>
            <Button filteredJew={ choosenJew}/>
            <Jewelery jewelery= {jewelery}/>
            <MainFooter/>

            

        </div>
    )
}
export default Shop;