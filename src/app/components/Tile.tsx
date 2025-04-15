import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
      className={`relative w-full h-full cursor-pointer border border-white`}
      onClick={() => handleTileClick(tile.detail, tileKey, tile.value)}
    >
      {/* Lottie Animation */}
      <DotLottieReact
        src="https://lottie.host/ca27c5a0-92b2-4b9b-b4cf-4c859bd32319/K6yO9xyNlm.lottie"
        loop
        autoplay
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Tile Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white font-bold">
        {tile.value}
      </div>
    </div>
  );
};

export default Tile;
