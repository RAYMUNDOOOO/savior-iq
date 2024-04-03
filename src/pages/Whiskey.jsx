import React from "react";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";

function Whiskey() {
  return (
    <div>
      <Navbar />
      <h1>Whiskey Page</h1>
      <p>Welcome to the Whiskey page!</p>
      <div>
        <SideFilter />
      </div>
    </div>
  );
}

export default Whiskey;
