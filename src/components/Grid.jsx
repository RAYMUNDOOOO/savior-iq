import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";


/*
 * The toggle switch component will pass down its state into the Grid, 
 * which will then pass it into the tiles. The filter component also 
 * needs to pass in which filters are currently being applied so that we 
 * can selectively render tiles that also use that filter.
 */
export default function Grid({ mode, appliedFilters }) {

}

/*
 * Each tile will render depending on the "mode" (true = Whiskey, false = Compound) by the 
 * parent component (Grid). The table of filters that will apply to the tile
 * will also be passed in by the parent component and used in conjunction with the
 * appliedFilters from the Filter component to determine whether it
 * should be rendered or not.
 */
export function Tile({ mode, img, url, filters })  {
  const [searchFilters, setSearchFilters] = useState(filters);

  return (
    <div className="tile">
      {mode ? (
        <Link to={url.whiskey.url}>
          <img src={img[0]}></img>
        </Link>
      ) : (
        <Link to={url.compound.url}>
          <img src={img[1]}></img>
        </Link>
      )}
    </div>
  )
}