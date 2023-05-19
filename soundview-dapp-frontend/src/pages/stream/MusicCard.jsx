import React from "react";
import { useNavigate } from "react-router-dom";
import { MobilePlayButton } from "../../icons/PlayButton";
import { AntDClock } from "../../icons/AntDClock";

export const DesktopMusicCard = (props) => {
  const navigate = useNavigate();
  const { ranking, image, title, artist, genre, release_date, length } = props;
  return (
    <div
      className="hidden sm:flex sm:flex-row sm:gap-28 sm:w-full hover:ease-in-out duration-500 hover:scale-[1.05] sm:bg-gray-100 sm:rounded-lg sm:h-16 sm:py-2 sm:px-6"
      onClick={() => navigate("/buy")}
    >
      <div className="flex flex-row w-2/5 items-center gap-10">
        <div>{ranking}</div>
        <div className="w-12 h-full rounded-[200px] object-cover bg-gray-300">
          <img
            className="w-12 h-full rounded-[200px] object-cover"
            src={`${image}`}
            alt="soundview"
          />
        </div>
        <div className="font-bold text-black">{title}</div>
      </div>
      <div className="flex flex-row w-full items-center justify-end gap-20">
        <p>{artist}</p>
        <p>{genre}</p>
        <p>{release_date}</p>
        <p>{length}</p>
      </div>
    </div>
  );
};

export const MobileMusicCard = (props) => {
  const { title, artist, length } = props;
  return (
    <div className="mb-4 p-4 flex bg-gray-100 flex-row justify-between items-center hover:ease-in-out duration-500 hover:scale-[1.05] gap-4 sm:hidden w-full rounded-lg shadow-sm">
      <div className="flex flex-col gap-1 items-start justify-center">
        <div>
          <MobilePlayButton />
        </div>
        <h1 className="text-black text-xl font-bold">{title}</h1>
        <p className="font-light">{`By ${artist}`}</p>
      </div>
      <div className=""></div>
      <div className="flex flex-row items-end gap-2 justify-center">
        <AntDClock />
        {length}
      </div>
    </div>
  );
};
