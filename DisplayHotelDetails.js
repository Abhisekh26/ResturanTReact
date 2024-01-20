import React from "react";
function DisplayHotelDetails({id, price, dish, table,deleteItem}){
return(
    <>
    <p>
    
         Price:{price}
          Dish:{dish}
        Table:{table}
        <button onClick={()=>deleteItem(id)} >Delete</button>

    </p>
    </>
)
}
export default DisplayHotelDetails