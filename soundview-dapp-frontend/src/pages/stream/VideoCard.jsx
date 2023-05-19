import React from "react";
import { useNavigate } from "react-router-dom";
import { PlayButton } from "../../icons/PlayButton";

export const VideoCard = (props) => {
  const navigate = useNavigate();
  const { image, views, title, timestamp } = props;
  return (
    <div
      className="rounded-2xl shadow-lg bg-red-50 max-w-sm hover:ease-in-out duration-500 hover:scale-[1.05]"
      onClick={() => navigate("/buy")}
    >
      <img
        className="rounded-t-2xl"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt="soundview"
      />
      <div className="h-20 px-3 bg-transparent flex flex-row items-center gap-3 relative">
        <div className="w-12 h-12 rounded-[200px] object-cover bg-gray-300">
          <img
            className="w-full h-full rounded-[200px] object-cover"
            src={`${image}`}
            alt="soundview"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-black">{title}</h1>
          <p className="font-light">{`${views}K views, ${timestamp}`}</p>
        </div>
        <div className="absolute right-10 bottom-14 hover:ease-in-out duration-500 hover:scale-[1.05] cursor-pointer">
          {<PlayButton />}
        </div>
      </div>
    </div>
  );
};
