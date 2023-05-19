import React, { useState, useEffect, useRef } from "react";
import {
  ChainId,
  MediaRenderer,
  useStorageUpload,
  useContract,
  useNFT,
  useNetwork,
  useNetworkMismatch,
  useAddress,
  useListing,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";

export const PurchaseCard = (props) => {
  const {
    data,
    genre,
    rush_number,
    artist,
    album,
    date,
    time,
    coin_price,
    fiat_price,
    number_of_owners,
    ratings,
    likes,
    views,
    main_owner,
  } = props;

  let attributes = {};
  data.asset.attributes.forEach((a) => (attributes[a.trait_type] = a.value));
  data.metadata = {
    ...data.asset,
    attributes,
  };

  // console.log("data :>> ", data);

  const endTime = Number(
    data.startTimeInSeconds.add(data.secondsUntilEnd).toString()
  );
  const [remainingTime, setRemainingTime] = useState(0);

  useEffectOnce(() => {
    setInterval(() => {
      setRemainingTime(endTime - Math.floor(new Date() / 1000));
    }, 500);
  }, []);

  return (
    <div className="w-full flex flex-col gap-10 px-5 font-Recoleta">
      <div className="w-full h-[300px] object-cover flex items-center justify-center overflow-hidden rounded-2xl">
        <ThirdwebNftMedia
          className="rounded-2xl object-cover overflow-hidden"
          metadata={data.metadata}
          requireInteraction={true}
          controls
          alt="Nft media"
        />
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-[70%] w-full text-left flex items-start justify-start flex-col gap-10">
          <div>
            <p className="font-light text-black">
              {data.metadata.attributes.genre}
            </p>
            <h1 className="font-bold text-2xl">
              {data.metadata.name} #{data.tokenId?.toString()}
            </h1>
            <p className="font-light text-black">{`By ${artist} | ${album}`}</p>
          </div>
          <div>
            <p className="font-light text-black">{`Sale ends at ${new Date(
              endTime * 1000
            ).toLocaleString()}`}</p>
            <div className="flex flex-row gap-10 text-left">
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-2xl">
                  {Math.floor(remainingTime / 3600)}
                </h1>
                <p>Hours</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-2xl">
                  {Math.floor(remainingTime / 60) -
                    Math.floor(remainingTime / 3600) * 60}
                </h1>
                <p>Minutes</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="font-semibold text-2xl">{remainingTime % 60}</h1>
                <p>Seconds</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <p className="font-light text-black">current Price: </p>
            {data.buyoutCurrencyValuePerToken.symbol}{" "}
            <h1 className="font-bold text-4xl">
              {data.buyoutCurrencyValuePerToken.displayValue}{" "}
            </h1>
            <p className="font-semibold">
              {`~$${+(
                1.12 * data.buyoutCurrencyValuePerToken.displayValue
              ).toFixed(2)}`}
            </p>
          </div>
        </div>
        <div className="sm:w-[30%] w-full text-left font-light flex items-start justify-start flex-col gap-3">
          <div className="flex flex-col items-start justify-start">
            <p>Owners:</p>
            <p className="font-semibold">{number_of_owners}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Ratings:</p>
            {ratings && <span>⭐⭐⭐⭐⭐</span>}
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Liked by:</p>
            <p className="font-semibold">{likes}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Total views:</p>
            <p className="font-semibold">{views}</p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p>Owned by:</p>
            <p className="font-semibold">{main_owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const useEffectOnce = (effect) => {
  const destroyFunc = useRef();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);
  const [, refresh] = useState(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    // this forces one render after the effect is run
    refresh(1);

    return () => {
      // if the comp didn't render since the useEffect was called,
      // we know it's the dummy React cycle
      if (!renderAfterCalled.current) {
        return;
      }
      if (destroyFunc.current) {
        destroyFunc.current();
      }
    };
  }, []);
};
