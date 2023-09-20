import React from "react";
import Navbar from "./Companenets/Navbar";
import "./Style/Style.css"
import PageIndex from "./page/PageIndex";
import Config from "./Context/Config";
function App() {
  return (
    <>
    <Config />
      <Navbar />
      <PageIndex />
    </>
  );
}
export default App;
