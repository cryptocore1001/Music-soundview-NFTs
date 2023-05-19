import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChainId,
  ThirdwebNftMedia,
  MediaRenderer,
  useStorageUpload,
  useContract,
  useNFT,
  useNetwork,
  useNetworkMismatch,
  useAddress,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ethers } from "ethers";

export const MarketCard = (props) => {
  const navigate = useNavigate();

  const { data } = props;
  const metadata = data.asset;
  const attributes = {};
  console.log('data :>> ', data);
  data.asset.attributes?.forEach((a) => (attributes[a.trait_type] = a.value));
  // console.log(data);

  return (
    <div
      className="w-[200px] rounded-2xl shadow-lg cursor-pointer bg-red-50 max-w-sm hover:ease-in-out duration-500 hover:scale-[1.05]"
      onClick={() => navigate("/buy/" + data.id)}
    >
      <img
        className="rounded-t-2xl"
        src={
          attributes.banner_image ??
          "https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        }
        alt="soundview"
      />
      <div className="h-20 px-3 bg-transparent flex flex-row items-center gap-3 relative">
        <div className="w-12 h-12 rounded-[200px] object-cover bg-gray-300">
          <img
            className="w-full h-full rounded-[200px] object-cover"
            src={metadata.image}
            alt="nft_image"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold text-black">{metadata.name}</h1>
          <p className="font-light">{`Album: ${attributes.genre}`}</p>
        </div>
      </div>
    </div>
  );
};
