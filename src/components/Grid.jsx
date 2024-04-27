import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";


export default function Grid() {

}

/*
 * Each tile will render depending on the "mode" (Whiskey or Compound) by the 
 * parent component (Grid). The table of filters that will apply to the tile
 * will also be passed in by the parent component to determine whether
 * it should render or not.
 */
export function Tile({ mode, img, url, filters })  {
  const [searchFilters, setSearchFilters] = useState(filters);

  return (
    <section className="tile">
      <div>
        {mode === "Whiskey" ? (
          <Link to={url.whiskey}>
            <img src={img.whiskey}></img>
          </Link>
        ) : (
          <Link to={url.compound}>
            <img src={img.compound}></img>
          </Link>
        )}
      </div>
    </section>
  )
}