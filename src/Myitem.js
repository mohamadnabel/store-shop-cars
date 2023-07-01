import React, { useState } from "react";
import "../src/styleSheet.css";

function Myitem(props) {
  const [Title, setTitle] = useState(props.itemName);
  const [Price, setPrice] = useState(props.itemPrice);
  function E_input() {
    if (document.getElementById("input-id").value === "1234") {
      console.log(document.getElementById("input-id").value);
    }
    //  else {
    //   console.log("not correct");
    // }
  }
  let DataArray = [];
  function pushProudact() {
    DataArray.push(Title);
    console.log(DataArray);
  }
  function click() {
    alert("visit jeep wepsite to know");
  }
  function AddhandelerFucction(params) {
    let message =
      "do you wont to continue ? " +
      " " +
      Title +
      " will be add , that priced  " +
      Price;
    let userResponse = window.confirm(message);
    if (userResponse) {
      alert("good let's continue :)");
      setTitle(Title + " (was added to card)");
      pushProudact();
    } else {
      window.alert = function () {};
    }
  }
  function HidehandelerFucction(params) {
    setPrice("------ :) ------ ");
  }

  return (
    <div className="main-contener">
      <h1 className="Title-name">{Title}</h1>
      <h3 className="Price-card">Price : {Price}</h3>
      <h2>{props.itemDescreption}</h2>
      <img className="img-item" alt="photo" src={props.itemPhotos} />
      <br></br>
      <button className="input-action" onClick={AddhandelerFucction}>
        Add to the card
      </button>
      <button className="input-action" onClick={HidehandelerFucction}>
        Hide the price
      </button>
      <button className="input-action" onClick={click}>
        Show more
      </button>
      <div>
        {/* <input
          id="input-id"
          // onInput={E_input}
          className="input-action"
          placeholder="Inter your Email"
          type="password"
        ></input> */}
        {/* <button className="input-action" onClick={E_input}>
          Subbmit
        </button> */}
      </div>
    </div>
  );
}

export default Myitem;
