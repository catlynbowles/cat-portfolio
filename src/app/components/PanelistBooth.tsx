import Image from "next/image";
import podiumImage from "../assets/jeopardy-podium.png";

const JeopardyPodiumOverlay = ({ name = "You", amount = 0 }) => {
  return (
    <div className="relative w-72 h-auto shrink-0 mx-auto">
      {/* Background image */}
      <Image
        src={podiumImage}
        alt="Jeopardy Podium"
        className="w-full h-full object-contain"
      />

      {/* Dollar Amount */}
      <div className="absolute top-[53%] w-full text-center">
        <span className="text-white text-[18px] font-bold drop-shadow">
          ${amount}
        </span>
      </div>

      {/* Cursive Name */}
      <div className="absolute top-[81%] w-full text-center">
        <span className="text-white text-[30px] drop-shadow-md font-indie-flower">
          {name}
        </span>
      </div>
    </div>
  );
};

export default JeopardyPodiumOverlay;
