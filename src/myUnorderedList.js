import React from "react";
import Myitem from "./Myitem";
import BMW from "./assest_photo/fronxfronxleftfrontthreequarter.jpeg";
import NISSAN from "./assest_photo/thartharrightfrontthreequarter (1).jpeg";
import KIA from "./assest_photo/thartharrightfrontthreequarter.jpeg";

const myItems = [
  {
    itemName: "BMW",
    itemPrice: "125,000",
    itemDEC:
      "Cars are a significant investment, so buyers want to make sure they take their time to buy the right one for them. Dealerships need to focus on relationship-building to earn buyers trust to close sales quicker.",
    itemPhoto: BMW,
  },
  {
    itemName: "NISSAN",
    itemPrice: "75,000",
    itemDEC:
      " They also need to take a more consultative approach to handle customers since buyers have more information today than ever and want to go with someone more knowledgeable about the car and industry",
    itemPhoto: NISSAN,
  },
  {
    itemName: "KIA",
    itemPrice: "25,000",
    itemDEC:
      " They also need to take a more consultative approach to handle customers since buyers have more information today than ever and want to go with someone more knowledgeable about the car and industry",
    itemPhoto: KIA,
  },
];
function MyULlist() {
  return (
    <div>
      <ul>
        <li>
          {
            <Myitem
              itemName={myItems[0].itemName}
              itemPhoto={myItems[0].itemPhoto}
              itemPrice={myItems[0].itemPrice}
              itemDescreption={myItems[0].itemDEC}
            />
          }
        </li>
        <li>
          <Myitem
            itemName={myItems[1].itemName}
            itemPhoto={myItems[1].itemPhoto}
            itemPrice={myItems[1].itemPrice}
            itemDescreption={myItems[1].itemDEC}
          />
        </li>
        <li>
          <Myitem
            itemName={myItems[2].itemName}
            itemPhoto={myItems[2].itemPhoto}
            itemPrice={myItems[2].itemPrice}
            itemDescreption={myItems[2].itemDEC}
          />
        </li>
      </ul>
    </div>
  );
}

export default MyULlist;
