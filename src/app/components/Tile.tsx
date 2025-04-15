import React from "react";

type TileProps = {
  tileKey: string;
  tile: { value: string; detail: string };
  handleTileClick: (detail: string, tileKey: string, value: string) => void;
  isOpened: boolean;
};

const Tile = ({ tileKey, tile, handleTileClick, isOpened }: TileProps) => {
  return (
    <div
      key={tileKey}
      className={`bg-blue-900 text-yellow-400 text-lg py-6 border border-white hover:scale-105 transition-transform cursor-pointer ${
        isOpened ? "bg-gray-500 text-gray-300" : ""
      }`} // Change style if tile is opened
      onClick={() => handleTileClick(tile.detail, tileKey, tile.value)}
    >
      {tile.value}
    </div>
  );
};

export default Tile;
