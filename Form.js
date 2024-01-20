import React, { useState } from "react";
function Form({ data }) {
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [dishname, setDishName] = useState();
  const [table, setTable] = useState();
  function HandleId(event) {
    setId(event.target.value);
  }
  function HandlePrice(event) {
    setPrice(event.target.value);
  }
  function HandleDishName(event) {
    setDishName(event.target.value);
  }
  function HandleTable(event) {
    setTable(event.target.value);
  }
  function dataSubmit() {
    data(id,price, dishname, table);
    localStorage.setItem(id,JSON.stringify({price,dishname,table}))
    setId("");
    setPrice("");
    setDishName("");
    setTable("");
  }

  return (
    <>
      <label>ID:</label>
      <input type="number" onChange={HandleId} value={id}></input>
      <label>Price:</label>
      <input type="number"
      onChange={HandlePrice}
      value={price}
      ></input>
      <label>Dish Ordered:</label>
      <input
        type="text"
        onChange={HandleDishName}
        value={dishname}
      ></input>
      <label>Choose a table: </label>
      <select onChange={HandleTable} value={table}>
        <option value=""></option>
        <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
      </select>
      <button onClick={dataSubmit} >Add Bill</button>
    </>
  );
}
export default Form;
