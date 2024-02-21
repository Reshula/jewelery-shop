import { useState } from "react";
import { data } from "./data";
import Jewelery from "./Jewelery";
import Button from "./Button"

function Shop(){
    const [jewelery, setJewelery] = useState(data);

    const choosenJew = (jewName) => {
        const newJew = data.filter(element =>
            element.jewName === jewName)
            setJewelery(newJew)
    }

    return(
        <div className="containerShop">
            <h1 className="titleShop">Shop by category</h1>
            <Button filteredJew={ choosenJew}/>
            <Jewelery jewelery= {jewelery}/>
            

        </div>
    )
}
export default Shop;