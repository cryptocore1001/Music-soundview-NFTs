import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { SoundViewLogoMobile } from "../../icons/Logo";
import { Search } from "../../icons/Search";
import { Dialog, Transition } from "@headlessui/react";
import metamask from "../../icons/metamask.png";
import oasis from "../../icons/oasis.png";
import coinbase from "../../icons/coinbase.png";
import binance from "../../icons/binance.png";
import solana from "../../icons/solana.png";
import walletconnect from "../../icons/walletconnect.png";
import brave from "../../icons/brave.png";

export const MobileNavigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setNavbarOpen(false);
    setIsOpen(true);
  }

  const toggleNav = () => {
    setNavbarOpen(!navbarOpen);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:hidden w-full bg-white shadow-md fixed z-50">
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white sm:p-12 p-5 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-900"
                    >
                      Connect your Wallet
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm font-light text-gray-800">
                        If you don’t have a wallet connected, you can select one
                        of the options and create one.
                      </p>
                    </div>
                    <div className="sm:p-6 p-4 py-8 flex flex-col gap-5">
                      <div className="flex flex-row gap-5 items-center justify-evenly">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={metamask}
                            alt="soundview-metamask"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">
                            MetaMask
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={coinbase}
                            alt="soundview coinbase"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">
                            Coinbase
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={binance}
                            alt="soundview binance"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">
                            Binance
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={oasis}
                            alt="soundview oasis"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">Oasis</p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-evenly">
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={brave}
                            alt="soundview brave"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">Brave</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={solana}
                            alt="soundview solana"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">Solana</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                          <img
                            src={walletconnect}
                            alt="soundview wallet connect"
                            className="sm:w-[50px] w-[35px] h-auto"
                          />
                          <p className="font-bold text-xs text-black">
                            Wallet Connect
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-light text-gray-800">
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
      <div className="flex flex-row items-center justify-between px-4 py-2 w-full">
        <SoundViewLogoMobile />
        <button
          className="text-bold text-4xl font-black pr-2"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? "✕" : "☰"}
        </button>
      </div>
      <div
        className={` ${navbarOpen ? "flex" : "hidden"} flex-col px-4 w-full`}
      >
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
        <div className="flex flex-col items-start gap-8 w-full text-black text-lg font-semibold mt-4 px-4 mb-7">
          <button
            className="hover:text-themeRed active:text-themeRed focus:text-themeRed"
            onClick={() => toggleNav()}
          >
            <Link to="/">Home</Link>
          </button>
          <button
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
            onClick={() => toggleNav()}
          >
            <Link to="/statistics">Statistics</Link>
          </button>
          <button
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
            onClick={() => toggleNav()}
          >
            <Link to="/stream">Stream</Link>
          </button>
          <button
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
            onClick={() => toggleNav()}
          >
            <Link to="/market">Market Place</Link>
          </button>
          <button
            className="hover:text-themeRed focus:text-themeRed active:text-themeRed"
            onClick={() => toggleNav()}
          >
            <Link to="/create">Create</Link>
          </button>
        </div>
        <div className="w-full flex flex-row items-center justify-center pb-8">
          <button
            onClick={() => openModal()}
            className="mb-5 rounded-lg bg-themeRed p-3 text-white font-semibold hover:scale-110 transition duration-150 ease-in-out"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
