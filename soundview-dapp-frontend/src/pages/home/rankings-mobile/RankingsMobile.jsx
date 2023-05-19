import React from "react";

export const RankingsMobile = () => {
  return (
    <div className="mb-6 p-4 flex bg-gray-100 flex-col justify-center items-center gap-4 sm:hidden w-full rounded-lg shadow-sm">
      <div className="flex flex-row items-center justify-between w-full sm:hidden">
        <div>1</div>
        <div>Soundview</div>
        <div>Mr. Soundview</div>
      </div>
      <div className="flex flex-row items-center justify-between w-full sm:hidden">
        <div>$2300</div>
        <div className="text-textGreen">+300%</div>
        <div>50</div>
        <div>4 days ago</div>
      </div>
    </div>
  );
};
