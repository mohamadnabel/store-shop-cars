import React from "react";
import "../src/styleSheet.css";

function Myitem(props) {
  function AddhandelerFucction(params) {
    let Myold = props.itemName;
    Myold = "add";
    console.log(Myold);
  }
  function HidehandelerFucction(params) {
    let Myold = props.itemName;
    Myold = "hide";
    console.log(Myold);
  }
  return (
    <div>
      <h1>{props.itemName}</h1>
      <h3>{props.itemPrice}</h3>
      <h2>{props.itemDescreption}</h2>
      <img className="img-item" alt="photo" src={props.itemPhotos} />
      <br></br>
      <button onClick={AddhandelerFucction}>Add to the card</button>
      <button onClick={HidehandelerFucction}>Hide the price</button>
    </div>
  );
}

export default Myitem;
