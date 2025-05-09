import React from "react";
import { TileType } from "./Column";

interface TileProps {
  tileKey: string;
  tile: TileType;
  handleTileClick: (
    detail: string | { title: string; url: string },
    tileKey: string,
    value: string
  ) => void;
  isOpened: boolean;
}

const Tile = ({ tileKey, tile, handleTileClick, isOpened }: TileProps) => {
  return (
    <div
      key={tileKey}
      className={`tile-container tv-screen-bg ${
        isOpened ? "pointer-events-none" : ""
      }`}
      onClick={() => handleTileClick(tile.detail, tileKey, tile.value)}
    >
      {!isOpened && (
        <>
          <div className="static-effect"></div>
          <div className="tile-content-text">{tile.value}</div>
        </>
      )}
    </div>
  );
};

export default Tile;
