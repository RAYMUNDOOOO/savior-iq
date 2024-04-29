import React from "react";
import { createContext } from "react";

import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import Toggle from "../components/Toggle";
import Grid from "../components/Grid";

/*
 * AppliedFiltersContext is a table of the filters that are currently
 * selected in the SideFilter component. It is to be written to by 
 * the SideFilter component and then passed to and read by the 
 * Grid component.
 */
const AppliedFiltersContext = createContext(null);

function Whiskey() {
        let [state, setState] = React.useState({ type: false });
        let [appliedFilters, setAppliedFilters] = React.useState({}) 

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
        <Grid appliedMode={state.type} />
      </div>
    </div>
  );
}

export default Whiskey;
