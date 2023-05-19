import React, { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import soundviewlogo from "../../icons/soundviewlogo.png";
import { Search } from "../../icons/Search";
import { MobileNavigation } from "./MobileNavigation";
import { Discord } from "../../icons/Discord";
import { Telegram } from "../../icons/Telegram";
import soundviewwhite from "../../icons/soundviewwhite.png";
import { useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import metamask from "../../icons/metamask.png";
import oasis from "../../icons/oasis.png";
import coinbase from "../../icons/coinbase.png";
import binance from "../../icons/binance.png";
import solana from "../../icons/solana.png";
import walletconnect from "../../icons/walletconnect.png";
import brave from "../../icons/brave.png";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useMetamask } from "@thirdweb-dev/react";
import { useCoinbaseWallet } from "@thirdweb-dev/react";
import { useWalletConnect } from "@thirdweb-dev/react";

export const Navigation = () => {
  let [isOpen, setIsOpen] = useState(false);
  const connectMetamask = useMetamask();
  const connectCoinBase = useCoinbaseWallet();
  const connectWalletConnect = useWalletConnect();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white sm:p-12 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-900"
                    >
                      Connect your Wallet
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        If you don’t have a wallet connected, you can select one
                        of the options and create one.
                      </p>
                    </div>
                    <div className="sm:p-6 flex flex-col gap-5">
                      <div className="flex flex-row gap-10 items-center justify-evenly">
                        <button
                          onClick={connectMetamask}
                          className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]"
                        >
                          <img
                            src={metamask}
                            alt="soundview-metamask"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">MetaMask</p>
                        </button>
                        <button
                          onClick={connectCoinBase}
                          className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]"
                        >
                          <img
                            src={coinbase}
                            alt="soundview coinbase"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Coinbase</p>
                        </button>
                        <button
                          onClick={connectWalletConnect}
                          className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]"
                        >
                          <img
                            src={walletconnect}
                            alt="soundview wallet connect"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Wallet Connect</p>
                        </button>
                        {/* <div className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]">
                          <img
                            src={binance}
                            alt="soundview binance"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Binance</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]">
                          <img
                            src={oasis}
                            alt="soundview oasis"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Oasis</p>
                        </div> */}
                      </div>
                      {/* <div className="flex flex-row gap-10 items-center justify-evenly">
                        <div className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]">
                          <img
                            src={brave}
                            alt="soundview brave"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Brave</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]">
                          <img
                            src={solana}
                            alt="soundview solana"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Solana</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center hover:ease-in-out duration-300 hover:scale-[1.1]">
                          <img
                            src={walletconnect}
                            alt="soundview wallet connect"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-black">Wallet Connect</p>
                        </div>
                      </div> */}
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        By connecting your wallet, you agree to Soundview’s
                        Term’s & Conditions and Privacy Policy
                      </p>
                    </div>
                    <div className=" absolute mt-4 top-1 right-5">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-bold hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        ✕
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
      <MobileNavigation />
      <div className="sm:h-32 hidden sm:w-full sm:flex flex-row items-end shadow-sm justify-between sm:p-[45px] pt-28 sm:fixed z-50 bg-white">
        <div className="w-[15%]">
          <img
            src={soundviewlogo}
            alt="soundview logo"
            className="sm:w-[70%] sm:pt-8 sm:h-auto"
          />
        </div>
        <div className="w-[38%]">
          <div className="mb-3">
            <div className="input-group flex flex-row items-center justify-between w-full mb-4">
              <input
                type="search"
                className="form-control min-w-0 w-full py-3 pr-0 pl-6 text-base font-normal text-gray-700 bg-gray-50 bg-clip-padding border border-solid border-gray-50 rounded-bl-lg rounded-tl-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-50 focus:outline-none"
                placeholder="Search for NFTs, collections, artists..."
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
        </div>
        <div className="flex flex-row items-center justify-evenly w-[35%] text-black font-semibold mb-7">
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed hover:ease-in-out duration-300 hover:scale-[1.1] active:text-themeRed focus:text-themeRed"
          >
            <Link to="/">Home</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed hover:ease-in-out duration-300 hover:scale-[1.1] focus:text-themeRed active:text-themeRed"
          >
            <Link to="/statistics">Statistics</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed hover:ease-in-out duration-300 hover:scale-[1.1] focus:text-themeRed active:text-themeRed"
          >
            <Link to="/stream">Stream</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed hover:ease-in-out duration-300 hover:scale-[1.1] focus:text-themeRed active:text-themeRed"
          >
            <Link to="/market">Market Place</Link>
          </button>
          <button
            onClick={() => handleClick()}
            className="hover:text-themeRed hover:ease-in-out duration-300 hover:scale-[1.1] focus:text-themeRed active:text-themeRed"
          >
            <Link to="/create">Create</Link>
          </button>
        </div>
        <div className="w-[12%]">
          {/* <button
            onClick={() => openModal()}
            className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold hover:scale-105 transition duration-150 ease-in-out"
          >
            Connect Wallet
          </button> */}
          <ConnectWallet
            accentColor="rgb(205,49,60)"
            className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold scale-90 transition duration-150 ease-in-out"
            colorMode="light"
            btnTitle="Connect Wallet"
          />
        </div>
      </div>
      <div className="">
        <Outlet />
      </div>
      <footer className=" bg-themeRed text-white p-8 sm:p-12 w-full">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-[30%] w-full sm:mr-56">
            <img
              src={soundviewwhite}
              alt="whitelogo"
              className="sm:w-[200px] w-[100px] h-auto"
            />
            <h1 className="text-bold text-4xl mb-4 sm:mb-6">Soundview</h1>
            <p className="sm:mb-6 mb-2 text-xs font-extralight text-justify">
              SoundView is the finest Afro centered Music NFT Marketplace where
              fans can stream to earn along side their favorite artist
            </p>
            <h1 className="sm:pt-6 pt-3">Join our various communities</h1>
            <div className="flex flex-row gap-1 mt-1">
              <a href="https://discord.gg/ZGHU9An8" target="blank_">
                <Discord />
              </a>
              <a href="https://t.me/soundview" target="blank_">
                <Telegram />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-14 sm:mt-20 mt-10 text-white">
            <div className="flex flex-row sm:gap-24 w-full justify-between text-white">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                  <h1 className="text-bold text-xl">Market</h1>{" "}
                  <h1 className="text-bold text-xl">Place</h1>
                </div>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market">All NFTs</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afrobeats-nft">Afrobeats</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afrofusion-nft">Afrofusion</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afrotrap-nft">AfroTrap</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/afropop-nft">Afro pop</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/hiphop-nft">Hip hop</Link>
                </p>
                <p
                  onClick={() => handleClick()}
                  className="text-xs font-extralight"
                >
                  <Link to="/market/gospel-nft">Gospel</Link>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1">
                  <h1 className="text-bold text-xl">My</h1>{" "}
                  <h1 className="text-bold text-xl"> Account</h1>
                </div>
                <p className="text-xs font-extralight">Profile</p>
                <p className="text-xs font-extralight">Favorite</p>
                <p className="text-xs font-extralight">Watch list</p>
                <p className="text-xs font-extralight">My Collections</p>
              </div>
            </div>
            <div className="flex flex-row sm:gap-24 w-full justify-between text-white">
              <div className="flex flex-col gap-2">
                <h1 className="text-bold text-xl">Partners</h1>
                <p className="text-xs font-extralight">
                  Decentralized <br /> Exchange LTD
                </p>
                <p className="text-xs font-extralight">World View Records</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-bold text-xl">Company</h1>
                <p className="text-xs font-extralight">Docs</p>
                <p className="text-xs font-extralight">Careers</p>
                <p className="text-xs font-extralight">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full mt-8 pt-3" />
        <div className="w-full flex flex-row items-center justify-between">
          <p className="text-xs font-extralight">
            ©️All copyrights are reserved
          </p>
          <div className="flex flex-row gap-4">
            <p className="text-xs font-extralight">Privacy policy</p>
            <p className="text-xs font-extralight">Terms of service</p>
          </div>
        </div>
      </footer>
    </>
  );
};
