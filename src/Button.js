function Button({filteredJew}){

    return (
        <div className="containerButton">
        <button className="change" onClick={()=>filteredJew("ring")}>RINGS</button>
        <button className="change" onClick={()=>filteredJew("earing")}>EARINGS</button>
        <button className="change"onClick={()=>filteredJew("necklace")}>NECKLACES</button>
        <button className="change" onClick={()=>filteredJew("bracelet")}>BRACELETS</button>
      
    </div>
    )
}
export default Button;