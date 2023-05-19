import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PurchaseCard } from "./PurchaseCard";
import { PurchasePageAcordion } from "./PurchasePageAcordion";
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
  useListing,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

export const PurchasePage = () => {
  const { listingId } = useParams();
  const walletAddress = useAddress();
  const { contract: MarketplaceContract } = useContract(
    process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS,
    "marketplace"
  );
  const {
    data: dataListing,
    isLoading: isLoadingListing,
    error: errorListing,
  } = useListing(MarketplaceContract, listingId);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  function handleCart() {
    setCartOpen(!cartOpen);
  }

  const text = (
    <div className="flex flex-col items-start justify-center gap-2">
      Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O
      Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias
      desde o ano de 1500, quando uma misturou os caracteres de um texto para
      criar um espécime de livro.
      <button className="py-3 w-1/3 rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta">
        Go here for minting
      </button>
    </div>
  );

  const offers = (
    <div className="flex flex-row items-center justify-center">
      No offers made yet
    </div>
  );

  const details = (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-start gap-3">
        <span>Contract Address</span>
        <span>Token ID</span>
        <span>Token standard</span>
        <span>Blockchain</span>
        <span>Last system update</span>
        <span>Creator's royalty</span>
      </div>
      <div className="flex flex-col items-end justify-start gap-3">
        <span className="text-red-500">0x233bsihbisvuyb8762gva</span>
        <span>3422</span>
        <span>ERC-721</span>
        <span>Ethereum</span>
        <span>18 hours ago</span>
        <span>10%</span>
      </div>
    </div>
  );

  const properties = (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-start gap-3">
        <span>Collection</span>
        <span>Featuring</span>
        <span>Status</span>
        <span>Blockchain</span>
      </div>
      <div className="flex flex-col items-end justify-start gap-3">
        <span className="text-red-500">Afropop</span>
        <span>Mavins records</span>
        <span>Listed</span>
        <span>Ethereum</span>
      </div>
    </div>
  );

  const listings = (
    <div className="flex flex-col items-center justify-center">
      <p>4 pieces of rush #3829 have been listed</p>
      <br />
      <div className="flex flex-col items-center justify-center rounded-lg object-cover">
        <img
          className="w-[200px] h-[200px] bg-slate-200 rounded-lg object-cover overflow-hidden"
          src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
          alt="soundview buy nft"
        />
        <br />
        <button
          className="py-3 w-full rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta"
          onClick={() => handleCart()}
        >
          Purchase
        </button>
      </div>
    </div>
  );

  const cartItem = (
    <div className="flex flex-row items-center justify-center gap-4 p-2 sm:p-4">
      <img
        className="rounded-lg w-[70px] h-[70px] object-cover"
        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
        alt="soundview buy nft"
      />
      <div className="flex flex-col items-start text-xs justify-center gap-1 mr-4">
        <h1 className="text-lg">
          <b>Rush #3456</b>
        </h1>
        <p>
          <b>By Aryar Star | Mavins</b>
        </p>
        <p>Creator royalties: 10%</p>
      </div>
      <h1 className="text-lg">23.05 ETH</h1>
    </div>
  );

  return (
    <div
      className={`flex sm:flex-row flex-col text-sm sm:text-base gap-10 w-full items-center justify-center py-20 sm:py-40 px-4 sm:px-12 relative`}
    >
      {cartOpen && (
        <div className="z-50 w-full font-Manrope h-full flex flex-col items-center justify-center absolute">
          <div className="bg-white p-3 sm:p-8 rounded-xl">
            <div className="w-full flex flex-row items-center justify-between">
              <div>
                <h1>
                  <b>Your Cart</b>
                </h1>
                <p className="text-sm">
                  Items in your cart not yet purchased until you have certified
                  purchase. <span className="text-red-600">learn more</span>
                </p>
              </div>
              <div className="cursor-pointer" onClick={() => handleCart()}>
                <b>✕</b>
              </div>
            </div>
            <br />
            <div className="w-full flex flex-col items-start justify-start">
              <div className="text-sm w-full flex flex-row items-center justify-between">
                <p>
                  <b>1 item</b>
                </p>
                <button>
                  <b>clear all</b>
                </button>
              </div>
            </div>
            <br />
            <div className="max-w-3xl max-h-48 overflow-y-scroll flex flex-row flex-wrap ">
              {[1, 2, 3, 4, 5, 6].map(() => cartItem)}
            </div>
            <br />
            <div className="w-full text-sm flex flex-row items-center justify-between">
              <p>Total price</p>
              <div>
                <p>
                  <b>92.02 ETH</b>
                </p>
                <p>$119.399.67</p>
              </div>
            </div>
            <br />
            <div className="w-full text-sm flex flex-col">
              <div className="w-full flex flex-row items-center justify-between">
                <p>Send asset to a 3rd party wallet address</p>
                <button>∨</button>
              </div>
              <br />
              <button className="w-full flex text-white flex-row items-center justify-center h-10 rounded-lg bg-[#CD313C]">
                <b>Complete Purchase</b>
              </button>
            </div>
          </div>
        </div>
      )}
      {!isLoadingListing ? (
        <>
          <div className="flex flex-col w-full gap-5">
            <PurchaseCard
              data={dataListing}
              genre="Afropop"
              rush_number="3829"
              artist="Ayar Star"
              album="Marvin Records"
              date="October 6, 2022"
              time="11:51pm GMT+1"
              coin_price="23"
              fiat_price="39,097.81"
              number_of_owners="You and 6 others"
              ratings="5"
              likes="50K"
              views="100K"
              main_owner="SoundView Limited"
            />
            <div className="flex flex-row w-full gap-5">
              <button className="py-3 w-full rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta">
                Add to cart
              </button>
              <button
                className="py-3 w-full rounded-lg bg-[#FFD7D9] text-[#CD313C] hover:bg-[#CD313C] hover:text-red-100 font-Recoleta"
                onClick={() => handleCart()}
              >
                Purchase
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 sm:px-12">
            <div className="shadow-lg w-full rounded-lg overflow-hidden">
              <div className="py-3 px-5 bg-gray-50 text-xl font-Recoleta flex flex-row items-center justify-between">
                <h1>Price History</h1>
                <button className="border rounded-full px-3 text-base">
                  All time
                </button>
              </div>
              <canvas className="p-10" id="chartLine"></canvas>
            </div>
            <PurchasePageAcordion
              title="About Rush #3859"
              acordion_content={text}
            />
            <PurchasePageAcordion title="Details" acordion_content={details} />
            <PurchasePageAcordion
              title="Properties"
              acordion_content={properties}
            />
            <PurchasePageAcordion
              title="Listings"
              acordion_content={listings}
            />
            <PurchasePageAcordion
              title="Offers made"
              acordion_content={offers}
            />
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
