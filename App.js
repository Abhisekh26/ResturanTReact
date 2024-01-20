import React, { useState} from "react";
import Form from "./Component/Form";
import DisplayHotel from "./Component/DisplayHotel";
function App() {
  const [arr, setnewArr] = useState([]);

  
  



  function getData(id, price, dishname, table) {
    var newarr = [
      ...arr,
      {
        id: id,
        price: price,
        dishname:dishname,
        table:table,
      },
    ];
    setnewArr(newarr);
  }

 function deleteItem(id) {
  localStorage.removeItem(id)
  var newarr=arr.filter(arr=> arr.id !==id)
  setnewArr(newarr)
 }

  return (
    <>
      <Form data={getData}></Form>
      <DisplayHotel arr={arr}
      deleteItem={deleteItem}></DisplayHotel>
    </>
  );
}

export default App;
