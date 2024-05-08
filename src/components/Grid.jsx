import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { useContext } from "react";
import { TileTable } from "../tables/tiles";
import { AppliedFiltersContext } from "../pages/Whiskey";

/*
 * The toggle switch component will pass down its state into the Grid, 
 * which will then pass it into the tiles. The filter component also 
 * needs to pass in which filters are currently being applied so that we 
 * can selectively render tiles that also use that filter.
 */
export function Grid({ appliedMode }) {
        let { appliedFilters, setAppliedFilters } = useContext(AppliedFiltersContext);

        var tiles = generateTiles(appliedMode, appliedFilters); 
        const tilesToRender = tiles.map((currentTile) => <>{currentTile}</>);
        return (
                <div>{tilesToRender}</div>
        );
}

function generateTiles(appliedMode, appliedFilters) {
        var tiles = [];
        var render = true;

        /*
         * 1. Let's save the values that have been selected for each category.
         * 2. Let's loop through each tile in TileTable.
         *      2.1. Check if their properties can be found in each array of selected values.
         * 3. If they can be found, generate the tile and push it to tiles[].
         */
        let containsAll = (source, target) => target.every(value => source.includes(value));
        if (appliedFilters != null && appliedMode) {
                console.log(appliedFilters.filterValues);
                for (var i = 0; i < TileTable.length; i++) {
                        if ("Region" in appliedFilters.filterValues) {
                                if (appliedFilters.filterValues.Region.length === TileTable[i].filters.whiskey.region.length ||
                                        appliedFilters.filterValues.Region.length < TileTable[i].filters.whiskey.region.length) {
                                        for (var j = 0; j < appliedFilters.filterValues.Region.length; j++) {
                                                if (!TileTable[i].filters.whiskey.region.includes(appliedFilters.filterValues.Region[j])) render = false;
                                        }
                                }

                                if (appliedFilters.filterValues.Region.length > TileTable[i].filters.whiskey.region.length) render = false;
                        }

                        if ("Flavour" in appliedFilters.filterValues) {
                                if (appliedFilters.filterValues.Flavour.length === TileTable[i].filters.whiskey.flavour.length ||
                                        appliedFilters.filterValues.Flavour.length < TileTable[i].filters.whiskey.flavour.length) {
                                        for (var j = 0; j < appliedFilters.filterValues.Flavour.length; j++) {
                                                if (!TileTable[i].filters.whiskey.flavour.includes(appliedFilters.filterValues.Flavour[j])) render = false;
                                        }
                                }

                                if (appliedFilters.filterValues.Flavour.length > TileTable[i].filters.whiskey.flavour.length) render = false;
                        }

                        if ("Brand" in appliedFilters.filterValues) {
                                if (appliedFilters.filterValues.Brand.length === TileTable[i].filters.whiskey.brand.length ||
                                        appliedFilters.filterValues.Brand.length < TileTable[i].filters.whiskey.brand.length) {
                                        for (var j = 0; j < appliedFilters.filterValues.Brand.length; j++) {
                                                if (!TileTable[i].filters.whiskey.brand.includes(appliedFilters.filterValues.Brand[j])) render = false;
                                        }
                                }

                                if (appliedFilters.filterValues.Brand.length > TileTable[i].filters.whiskey.brand.length) render = false;
                        }


                        if (render) {
                                var newTile = <Tile 
                                mode={appliedMode} 
                                img={TileTable[i].img} 
                                url={TileTable[i].url} 
                                filters={TileTable[i].filters} 
                                        />;
                                tiles.push(newTile);
                        }

                        render = true;
                }
        } else if (appliedFilters != null && !appliedMode) {
                console.log(appliedFilters);
                for (var i = 0; i < TileTable.length; i++) { 
                        if ("Flavour" in appliedFilters.filterValues) {
                                if (appliedFilters.filterValues.Flavour.length === TileTable[i].filters.compound.flavour.length ||
                                        appliedFilters.filterValues.Flavour.length < TileTable[i].filters.compound.flavour.length) {
                                        for (var j = 0; j < appliedFilters.filterValues.Flavour.length; j++) {
                                                if (!TileTable[i].filters.compound.flavour.includes(appliedFilters.filterValues.Flavour[j])) render = false;
                                        }
                                }

                                if (appliedFilters.filterValues.Flavour.length > TileTable[i].filters.compound.flavour.length) render = false;
                        }

                        var newTile = <Tile 
                                mode={appliedMode} 
                                img={TileTable[i].img} 
                                url={TileTable[i].url} 
                                filters={TileTable[i].filters} 
                        />;
                        tiles.push(newTile);

                        render = true;
                }
        }

        return tiles;
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
        <Link to={url.whiskey}>
          <img src={img[0]}></img>
        </Link>
      ) : (
        <Link to={url.compound}>
          <img src={img[1]}></img>
        </Link>
      )}
    </div>
  )
}

export default Grid;
