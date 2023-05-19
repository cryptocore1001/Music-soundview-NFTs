import React, { useState, useEffect } from "react";
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
  useListings,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ethers } from "ethers";
import nftbanner from "../../icons/nftbanner.png";
import { Search } from "../../icons/Search";
import { MarketCard } from "./marketCard";

export const Market = (props) => {
  const walletAddress = useAddress();
  const [{ data, error: networkError, loading }, switchNetwork] = useNetwork();
  const isMismatched = useNetworkMismatch();
  const { contract: MarketplaceContract } = useContract(
    process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS,
    "marketplace"
  );

  const {
    data: listings,
    isLoading: isLoadingListings,
    error: errorListings,
  } = useListings(MarketplaceContract);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    console.log('directListings :>> ', listings);
  }, [listings]);

  const { header } = props;
  return (
    <div className="w-full sm:py-40 py-24 px-4 sm:px-12">
      <div className="w-full flex flex-col items-center gap-8">
        <img
          src={nftbanner}
          alt="nft banner"
          className="sm:w-full h-auto rounded-2xl"
        />
        <h1 className="text-2xl text-black sm:text-4xl">{header}</h1>
        <p className="text-center text-base sm:text-2xl">
          Soundview is the only platform to purchase amazing and exclusive
          musical NFTs.
        </p>
        <div className="flex flex-row gap-3 items-center justify-center w-full">
          {/* <p>Artists: </p> */}
          <div className=" input-group flex flex-row items-center justify-center w-full sm:w-1/2 mb-4">
            <input
              type="search"
              className="form-control min-w-0 w-full py-3 pr-0 pl-6 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-50 rounded-bl-lg rounded-tl-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-50 focus:outline-none"
              placeholder="Search for artists A-Z..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn px-8 py-4 bg-gray-50 text-gray-500 font-normal text-base leading-tight uppercase rounded-br-lg rounded-tr-lg border border-solid border-gray-50 hover:bg-gray-50 hover:shadow-lg focus:bg-gray-50  focus:shadow-lg focus:outline-none focus:border-gray-50 focus:ring-0 active:bg-gray-50 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <Search />
            </button>
          </div>
        </div>
        <section className="w-full px-4 sm:px-12">
          <div>
            <h1 className="font-semibold text-xl sm:text-2xl text-black text-left mt-6 mb-3 sm:mb-5">
              All Albums
            </h1>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-12 flex-wrap">
            {
              !isLoadingListings ?
                listings.map((item, idx) => {
                  return (
                    <MarketCard
                      key={idx}
                      data={item}
                    />
                  );
                })
                : "loading..."
            }
          </div>
        </section>
      </div>
    </div>
  );
};
