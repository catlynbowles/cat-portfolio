import React from "react";
import Tile from "./Tile";

export type Tile = {
  value: string;
  detail: string;
};

type ColumnProps = {
  data: Tile[];
  header: string;
  handleTileClick: (detail: string, tileKey: string, value: string) => void;
  openedTiles: Set<string>;
};

const Column = ({
  data,
  header,
  handleTileClick,
  openedTiles,
}: ColumnProps) => {
  const renderTile = (
    tile: { value: string; detail: string },
    index: number,
    category: string
  ) => {
    const tileKey = `${category}-${index}`;
    const isOpened = openedTiles.has(tileKey);

    return (
      <Tile
        key={tileKey}
        tileKey={tileKey}
        tile={tile}
        handleTileClick={handleTileClick}
        isOpened={isOpened}
      />
    );
  };
  return (
    <div>
      <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
        {header}
      </div>
      {data.map((tile, index) => renderTile(tile, index, header))}
    </div>
  );
};

export default Column;
