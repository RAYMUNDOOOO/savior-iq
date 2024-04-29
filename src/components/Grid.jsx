import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { TileTable } from "../tables/tiles";

/*
 * The toggle switch component will pass down its state into the Grid, 
 * which will then pass it into the tiles. The filter component also 
 * needs to pass in which filters are currently being applied so that we 
 * can selectively render tiles that also use that filter.
 */
export function Grid({ appliedMode, appliedFilters }) {
  // TODO: Needs to check appliedFilters against filters of tiles in TileTable.
  // const [tiles, allocateTiles] = useState();
  // const [filters, applyFilters] = useState(appliedFilters);
  var tiles = [];
  for (var i = 0; i < TileTable.length; i++) {
    var newTile = <Tile mode={appliedMode} img={TileTable[i].img} url={TileTable[i].url} filters={TileTable[i].filters} />
    tiles.push(newTile);
  }

  const tilesToRender = tiles.map((currentTile) => <div>{currentTile}</div>);
  return (
    <div>
      {tilesToRender}
    </div>
  );
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

export default Grid;
