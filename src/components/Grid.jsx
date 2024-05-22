import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TileTable } from '../tables/tiles';
import { AppliedFiltersContext } from '../pages/Whiskey';

export function Grid({ appliedMode }) {
    let { appliedFilters } = useContext(AppliedFiltersContext);

    var tiles = generateTiles(appliedMode, appliedFilters);
    const tilesToRender = tiles.map((currentTile, index) => <React.Fragment key={index}>{currentTile}</React.Fragment>);
    return (
        <div className="grid-container">{tilesToRender}</div>
    );
}

function generateTiles(appliedMode, appliedFilters) {
    var tiles = [];
    var render = true;

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
        }
    } else if (appliedFilters == null) { 
        for (var i = 0; i < TileTable.length; i++) {
            var newTile = <Tile
                mode={appliedMode}
                img={TileTable[i].img}
                url={TileTable[i].url}
                filters={TileTable[i].filters}
            />;
            tiles.push(newTile);
        }
    }

    return tiles;
}

export function Tile({ mode, img, url, filters }) {
    const [searchFilters, setSearchFilters] = useState(filters);

    return (
        <div className="tile">
            {mode ? (
                <Link to={url.whiskey}>
                    <img src={img[0]} alt="Whiskey" />
                </Link>
            ) : (
                <Link to={url.compound}>
                    <img src={img[1]} alt="Compound" />
                </Link>
            )}
        </div>
    );
}

export default Grid;
