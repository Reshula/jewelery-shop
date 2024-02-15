import { useState } from "react";
import { data } from "./data";
import Jewelery from "./Jewelery";
import Button from "./Button"

function Home(){
    const [jewelery, setJewelery] = useState(data);

    const choosenJew = (jewName) => {
        const newJew = data.filter(element =>
            element.jewName === jewName)
            setJewelery(newJew)
    }

    return(
        <div>
            <Button filteredJew={ choosenJew}/>
            <Jewelery jewelery= {jewelery} />
            

        </div>
    )
}
export default Home;