import React from "react";

interface TileProps {
  tileKey: string;
  tile: { value: string; detail: string };
  handleTileClick: (detail: string, tileKey: string, value: string) => void;
  isOpened: boolean;
}

const Tile = ({ tileKey, tile, handleTileClick, isOpened }: TileProps) => {
  return (
    <div
      key={tileKey}
      className={`tile-container ${isOpened ? "pointer-events-none" : ""}`}
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
