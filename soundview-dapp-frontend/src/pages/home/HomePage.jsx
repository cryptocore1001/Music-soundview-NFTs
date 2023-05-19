import React from "react";
import { CryptoWallet } from "../../icons/CryptoWallet";
import { AddFiles } from "../../icons/AddFiles";
import { MusicCart } from "../../icons/MusicCart";
import { Clipboard } from "../../icons/Clipboard";
import { Card } from "./home-carousel/carousel";
import { Newsletter } from "../../icons/Newsletter";
import { RankingsMobile } from "./rankings-mobile/RankingsMobile";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="font-Manrope">
      {/* FIRST SECTION WITH THE HERO TEXT AND SUB HERO TEXT */}
      <section className="flex flex-col items-center w-full p-[25px] sm:p-[45px] pt-24 sm:pt-32">
        <h1 className="font-medium text-5xl text-black text-center mt-24 mb-12">
          Discover, Buy, Collect and Sell <br /> your NFTs at Soundview
        </h1>
        <p className="text-center mb-12 text-2xl">
          Soundview is the first Afro centered Music NFT Marketplace <br />
          where fans can stream to earn along side their favorite artist.
        </p>
        <button className="border-2 rounded-lg border-themeRed p-3 text-themeRed font-semibold hover:scale-110 transition duration-150 ease-in-out">
          <Link to="/stream">Stream Contents</Link>
        </button>
      </section>
      {/* THE BLIND SECTION */}
      <section className="sm:p-[45px] p-[10px] w-full relative">
        <div className="flex flex-row p-1 items-end sm:gap-4 gap-2 h-[35rem]">
          <div className="animate-[bounce_3.4s_infinite_100ms] hidden sm:block">
            <img
              className="rounded-lg "
              src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="music"
            />
          </div>
          <div className="mb-16 animate-[bounce_3s_infinite_1000ms]">
            <img
              className="rounded-lg "
              src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="music"
            />
          </div>
          <div className="mb-32 animate-[bounce_2.6s_infinite_500ms]">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="music"
            />
          </div>
          <div className="mb-16 animate-[bounce_3.2s_infinite_700ms]">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="music"
            />
          </div>
          <div className="animate-[bounce_2.8s_infinite_300ms] hidden sm:block">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
              alt="music"
            />
          </div>
        </div>
        <div className="bg-white h-24 sm:h-40 w-[calc(100vw-15px)] sm:w-[96%] absolute sm:bottom-10 bottom-14"></div>
      </section>
      {/* TOP MUSICS SECTION */}
      <section className="pb-32 w-full">
        <div>
          <h1 className="font-semibold text-3xl text-black text-center mt-12 mb-12">
            Top Musics
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:justify-evenly ">
          {[1, 2, 3].map((i) => {
            return (
              <Card title="Will Smith" price="999" sale="sales in 3 hour(s)" />
            );
          })}
        </div>
      </section>
      {/* THE ICONS SECTION */}
      <section className="w-full mb-40 sm:mb-20 p-[25px] sm:p-[65px] ">
        <h1 className="font-semibold text-3xl text-black text-center mt-12 mb-12">
          Create and Sell your Music NFTs
        </h1>
        <div className="flex flex-col sm:flex-row w-full gap-4 sm:justify-between h-52">
          <div className="flex flex-col items-center justify-between h-full sm:w-1/5">
            <div className="w-14 h-14 m-4">
              <CryptoWallet />
            </div>
            <h1 className="font-bold text-xl text-black mb-4">
              Set up your wallet
            </h1>
            <p className="text-sm text-center sm:text-justify">
              Once you&apos;ve set up your wallet of choice, connect it to
              SoundView by clicking the wallet icon in the top right corner.
              Learn about the wallets we support.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-full sm:w-1/5">
            <div className="w-14 h-14 m-4">
              <MusicCart />
            </div>
            <h1 className="font-bold text-xl text-black mb-4 text-center">
              Create your collection
            </h1>
            <p className="text-sm text-center sm:text-justify">
              Click My Collections and set up your collection. Add social links,
              a description, profile & banner images, and set a secondary sales
              fee.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-full sm:w-1/5">
            <div className="w-14 h-14 m-4">
              <AddFiles />
            </div>
            <h1 className="font-bold text-xl text-black mb-4">Add your NFTs</h1>
            <p className="text-sm text-center sm:text-justify">
              Upload your work (image, video, audio, or 3D art), add a title and
              description, and customize your NFTs with properties, stats, and
              unlockable content.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between h-full sm:w-1/5">
            <div className="w-14 h-14 m-4">
              <Clipboard />
            </div>
            <h1 className="font-bold text-xl text-black mb-4">
              List them for sale
            </h1>
            <p className="text-sm text-center sm:text-justify">
              Choose between auctions, fixed-price listings, and declining-price
              listings. You choose how you want to sell your NFTs, and we help
              you sell them!
            </p>
          </div>
        </div>
      </section>
      {/* THE CAROUSEL SECTION */}
      <section className="bg-gray-100 w-full mt-[50rem] sm:mt-8 pt-16 pb-32">
        <div>
          <h1 className="font-semibold text-3xl text-black text-center mt-12 mb-12">
            Recent Drops
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-evenly ">
          {[1, 2, 3].map((i) => {
            return (
              <Card title="Will Smith" price="999" sale="sales in 3 hour(s)" />
            );
          })}
        </div>
      </section>
      {/* THE DISCOVER SECTION */}
      <section className="bg-gray-100 w-full pt-16 pb-32">
        <div>
          <h1 className="font-semibold text-3xl text-black text-center mt-12 mb-12">
            Discover by Album
          </h1>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-14 ">
          {[1, 2, 3].map((i) => {
            return (
              <Card title="Will Smith" price="999" sale="sales in 3 hour(s)" />
            );
          })}
        </div>
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-evenly mb-14 ">
          {[1, 2, 3].map((i) => {
            return (
              <Card title="Will Smith" price="999" sale="sales in 3 hour(s)" />
            );
          })}
        </div>
      </section>
      {/* THE RANKINGS LIST */}
      <section className="pt-16 pb-32 w-full">
        <div>
          <h1 className="font-semibold text-3xl text-black text-center mt-12 mb-16">
            Top Trends in all Genres
          </h1>
        </div>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => {
          return <RankingsMobile />;
        })}
        <div className="hidden sm:flex flex-row w-full justify-between pl-6 sm:pl-12 pr-6 sm:pr-12 mb-12 text-black text-xs sm:text-base font-semibold">
          <div className="w-24 flex flex-row justify-start">Ranking</div>
          <div className="w-24 flex flex-row justify-start">Name</div>
          <div className="w-24 flex flex-row justify-start">Artists</div>
          <div className="w-24 flex flex-row justify-start">Price</div>
          <div className="w-24 flex flex-row justify-start">Changes(24H)</div>
          <div className="w-24 flex flex-row justify-start">Sales</div>
          <div className="w-24 flex flex-row justify-start">Date</div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div className="hidden sm:flex flex-row w-full justify-between pl-12 pr-12 mb-8 text-xs font-semibold">
              <div className="w-24 flex flex-row justify-start">1</div>
              <div className="w-24 flex flex-row justify-start">Soundview</div>
              <div className="w-24 flex flex-row justify-start">
                Mr. Soundview
              </div>
              <div className="w-24 flex flex-row justify-start">$2300</div>
              <div className="w-24 flex flex-row justify-start text-textGreen">
                +300%
              </div>
              <div className="w-24 flex flex-row justify-start">50</div>
              <div className="w-24 flex flex-row justify-start">4 days ago</div>
            </div>
          );
        })}
        <div className="flex flex-row items-center justify-center pt-12">
          <button className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold hover:scale-110 transition duration-150 ease-in-out">
            <Link to="/statistics">View all rankings</Link>
          </button>
        </div>
      </section>
      <section className="bg-themePinkWhite p-12 w-full">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="sm:w-[70%] w-full">
            <h1 className="font-semibold text-4xl text-black text-center mt-12 mb-12">
              Get to know more about Soundview
            </h1>
            <p className="text-center">
              Soundview is the only platform to purchase amazing and exclusive
              musical NFTs. We have the best artists aunctioning their arts.
              Also subscribe to our newsletter to get daily updates and trends
              from Soundview.
            </p>
            <div className="input-group flex flex-row items-center justify-center w-full mb-4 mt-8">
              <input
                type="email"
                className="form-control min-w-0 sm:w-[60%] py-3 pr-0 mr-4 pl-6 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none"
                placeholder="Enter your email"
                aria-label="Newsletter"
                aria-describedby="button-addon2"
              />
              <button
                className=" rounded-lg bg-themeRed p-2 text-white font-semibold hover:scale-105 transition duration-150 ease-in-out"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="">
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  );
};
