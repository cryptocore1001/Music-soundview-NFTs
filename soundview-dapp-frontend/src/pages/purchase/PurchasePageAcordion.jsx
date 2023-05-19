import React, { useState } from "react";

export const PurchasePageAcordion = (props) => {
  const { title, acordion_content } = props;
  const [acordionOpen, setAcordionOpen] = useState(false);

  const handleAcordion = () => {
    setAcordionOpen(!acordionOpen);
  };

  return (
    <div className="w-full flex flex-col font-Recoleta">
      <div className="w-full bg-[#FFD7D9] p-3 flex flex-row items-center justify-between">
        <h1 className="text-[#CD313C] text-xl">{title}</h1>
        <button
          className="rotate-90 font-bold text-xl text-[#CD313C]"
          onClick={() => handleAcordion()}
        >{`>`}</button>
      </div>
      {acordionOpen && <div className="p-4 bg-white">{acordion_content}</div>}
    </div>
  );
};
