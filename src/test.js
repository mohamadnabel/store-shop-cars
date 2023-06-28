import React from "react";
import Myitem from "./Myitem";
import BMW from "./assest_photo/thartharrightfrontthreequarter.jpeg";
import NISSAN from "./assest_photo/Screenshot_1.jpg";
import KIA from "./assest_photo/fronxfronxleftfrontthreequarter.jpeg";

const proudact = [
  {
    name: "BMW",
    itemPrice: "125,000",
    itemDEC:
      "Cars are a significant investment, so buyers want to make sure they take their time to buy the right one for them. Dealerships need to focus on relationship-building to earn buyers trust to close sales quicker.",
    itemPhotos: { BMW },
  },
  {
    name: "NISSAN",
    itemPrice: "75,000",
    itemDEC:
      " They also need to take a more consultative approach to handle customers since buyers have more information today than ever and want to go with someone more knowledgeable about the car and industry",
    itemPhotos: { NISSAN },
  },
  {
    name: "KIA",
    itemPrice: "25,000",
    itemDEC:
      " They also need to take a more consultative approach to handle customers since buyers have more information today than ever and want to go with someone more knowledgeable about the car and industry",
    itemPhotos: { KIA },
  },
];
function Mytest() {
  return (
    <div className="test-main">
      <ul>
        <li>
          <Myitem
            itemName={proudact[0].name}
            itemPhotos={proudact[0].itemPhotos}
            itemPrice={proudact[0].itemPrice}
            itemDescreption={proudact[0].itemDEC}
          />
        </li>
        <li>
          <Myitem
            itemName={proudact[1].name}
            itemPhotos={proudact[1].itemPhotos}
            itemPrice={proudact[1].itemPrice}
            itemDescreption={proudact[1].itemDEC}
          />
        </li>
        <li>
          <Myitem
            itemName={proudact[2].name}
            itemPhotos={proudact[2].itemPhotos}
            itemPrice={proudact[2].itemPrice}
            itemDescreption={proudact[2].itemDEC}
          />
        </li>
      </ul>
    </div>
  );
}

export default Mytest;
