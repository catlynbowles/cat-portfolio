import React from "react";
import Tile from "./Tile";

export type Detail = { title?: string; url?: string; media?: React.ReactNode };

export type TileType = {
  value: string;
  detail: Detail;
};

type ColumnProps = {
  data: TileType[];
  header: string;
  handleTileClick: (detail: Detail, tileKey: string, value: string) => void;
  openedTiles: Set<string>;
};

const Column = ({
  data,
  header,
  handleTileClick,
  openedTiles,
}: ColumnProps) => {
  const renderTile = (
    tile: { value: string; detail: Detail },
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
      <div className="header-column-text">{header}</div>
      {data.map((tile, index) => renderTile(tile, index, header))}
    </div>
  );
};

export default Column;
