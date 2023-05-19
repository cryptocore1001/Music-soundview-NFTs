import React from "react";

export const Card = (props) => {
  const { price, title, sale } = props;
  return (
    <div className="rounded-2xl shadow-lg hover:ease-in-out duration-500 hover:scale-[1.05] bg-red-50 max-w-sm">
      <img
        className="rounded-t-2xl"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt="soundview"
      />
      <div className="p-6 bg-transparent flex flex-row justify-between">
        <div>
          <h5 className="text-gray-900 text-2xl font-bold font-Manrope mb-2">
            {title}
          </h5>
          <p className="text-transparent hover:text-gray-700 text-sm mb-2">
            {sale}
          </p>
          <button
            type="button"
            className="rounded-md bg-themeRed pl-2 pr-2 pt-1 pb-1 text-white text-base hover:scale-105 transition duration-150 ease-in-out"
          >
            Purchase
          </button>
        </div>
        <div className="flex flex-col items-center justify-evenly w-28">
          <div className="text-black bg-themeTeal text-sm w-full pl-1">
            RECORD LABEL
          </div>
          <div className="text-black bg-gray-200 text-sm w-full pl-1">
            {`Price: $${price}`}
          </div>
        </div>
      </div>
    </div>
  );
};
