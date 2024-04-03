import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "/src/components/NavBar";
import SearchBar from "/src/components/Search";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <SearchBar />
      <Navbar />
    </>
  );
}
