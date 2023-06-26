import React from "react";
import MyULlist from "./myUnorderedList";
function Myitem(pro) {
  return (
    <div>
      <h1>{pro.itemPrice}</h1>
      <h1 className="name-item">{pro.itemName}</h1>
    </div>
  );
}

export default Myitem;
