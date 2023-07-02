import React from "react";
import Mytest from "./test";
import NavBarFFC from "./nav";
import Myfoot from "./Footer";
import Mycards from "./cardsModel";
import MydarkMode from "./DarkLight";
function App() {
  return (
    <div className="App">
      <NavBarFFC />
      <Mycards />
      <Mytest />
      <MydarkMode />
      <Myfoot />
    </div>
  );
}

export default App;
