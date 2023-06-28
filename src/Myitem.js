import React from "react";
import Mytest from "./test";
function Myitem(props) {
  return (
    <div>
      <h1>{props.itemName}</h1>
      <h3>{props.itemPrice}</h3>
      <h2>{props.itemDescreption}</h2>
      <img alt="photo" src={props.itemPhotos} />
    </div>
  );
}

export default Myitem;
