import React from "react";
import DisplayHotelDetails from "./DisplayHotelDetails";
function DisplayHotel({arr,deleteItem}){
    return (
        <>
        <h1>Orders</h1>
        <h2>
            Table 1:
                {arr.filter(
                (item)=>item.table === "Table 1"
            ).map((arra)=>(
                <DisplayHotelDetails
                key={arra.id}
                id={arra.id}
                price={arra.price}
                dish={arra.dish}
                table={arra.table}
                deleteItem={deleteItem}
                />
            ))
            }
        </h2>
        <h2>
            Table 2:
            {arr.filter(
                (item)=>item.table === "Table 2"
            ).map((arra)=>(
                <DisplayHotelDetails
                key={arra.id}
                id={arra.id}
                price={arra.price}
                dish={arra.dish}
                table={arra.table}
                deleteItem={deleteItem}
                />
            ))
            }
        </h2>
        <h2>
            Table 3:
            {arr.filter(
                (item)=>item.table === "Table 3"
            ).map((arra)=>(
                <DisplayHotelDetails
                key={arra.id}
                id={arra.id}
                price={arra.price}
                dish={arra.dish}
                table={arra.table}
                deleteItem={deleteItem}
                />
            ))
            }
        </h2>
        </>
    )
}
export default DisplayHotel;