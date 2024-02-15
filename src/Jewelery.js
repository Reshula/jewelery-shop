
function Jewelery({jewelery}){
    return(
        <div>
            {jewelery.map ((item) =>{
                const {id, jewName, price, image}= item;
                console.log(image)

                return(
                    <div className="containerShop" key={id}>
                        <img src={image} alt="jewelery"  />        
                       <div>
                        <p>{jewName}</p>
                        <p>{price}</p> 
                        </div>
                                     
                    </div>
                )
            } )}

        </div>
    )
}
export default Jewelery;