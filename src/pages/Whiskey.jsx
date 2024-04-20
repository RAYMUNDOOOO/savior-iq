import React from "react";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import Toggle from "../components/Toggle";

function Whiskey() {
  let [state, setState] = React.useState({
    type: false, // Initially set to false
  });

  // const handleChange = () => {
  //   // Toggle the value of whiskey
  //   setState((prevState) => ({
  //     ...prevState,
  //     type: !prevState.type,
  //   }));
  // };

  // function handleChange() {
  //   setState(!type);
  // }

  const handleChange = (newValue) => {
    console.log("Whiskey state in whiskey:", state.type);
    const newType = newValue.whiskey ? true : false;
    setState((prevState) => ({
      ...prevState,
      type: newType,
    }));
  };

  // When the state changes, log the updated value of whiskey
  React.useEffect(() => {
    console.log("Whiskey state in whiskey:", state.type);
  }, [state.type]);

  return (
    <div>
      <Navbar />
      <h1>Whiskey Page</h1>
      <p>Welcome to the Whiskey page!</p>
      <div style={{ textAlign: "left" }}>
        <SideFilter text={state.type ? "whiskey" : "chemistry"} />
        <Toggle change={handleChange} />
      </div>
    </div>
  );
}

export default Whiskey;
