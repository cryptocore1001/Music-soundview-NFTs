import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RankingsMobile } from "../home/rankings-mobile/RankingsMobile";

export const FullRanking = () => {
  const [genreOpen, setGenreOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const toggleGenreOpen = () => {
    setGenreOpen(!genreOpen);
  };

  const toggleStatusOpen = () => {
    setStatusOpen(!statusOpen);
  };

  return (
    <div className="flex flex-col gap-8 w-full py-40 sm:px-12">
      <h1 className="text-left text-black text-2xl px-5 sm:px-0 sm:text-4xl">
        All Musical Ranking
      </h1>
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row px-5 sm:px-0 w-full sm:justify-between">
        <div className="flex flex-row w-full gap-8 text-black">
          <button className="hover:text-themeRed font-bold text-xl focus:text-themeRed active:text-themeRed">
            <Link to="/statistics">Top</Link>
          </button>
          <button className="hover:text-themeRed font-bold text-xl focus:text-themeRed active:text-themeRed">
            <Link to="/statistics">Trending</Link>
          </button>
        </div>
        <div className="flex flex-row w-full justify-end gap-8">
          <div className="w-1/2 sm:w-1/4">
            <div className="flex justify-center w-full">
              <div className="w-full">
                <div className="dropdown relative w-full">
                  <button
                    className="w-full dropdown-toggle px-6 py-2.5 bg-gray-100 text-gray-700nfont-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg active:text-gray-700 transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => toggleGenreOpen()}
                  >
                    Genre
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className={`dropdown-menu w-full absolute ${
                      genreOpen ? "block" : "hidden"
                    } bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100 "
                        href="/statistics"
                      >
                        Afrobeats
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100"
                        href="/statistics"
                      >
                        Afrofusion
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100"
                        href="/statistics"
                      >
                        Afro trap
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100"
                        href="/statistics"
                      >
                        Afro pop
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100"
                        href="/statistics"
                      >
                        Hip Pop
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100"
                        href="/statistics"
                      >
                        Gospel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <div className="flex justify-center w-full">
              <div className="w-full">
                <div className="dropdown relative w-full">
                  <button
                    className="w-full dropdown-toggle px-6 py-2.5 bg-gray-100 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-gray-100 active:shadow-lg active:text-gray-700 transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => toggleStatusOpen()}
                  >
                    Status
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    className={`dropdown-menu w-full absolute ${
                      statusOpen ? "block" : "hidden"
                    } bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100 "
                        href="/statistics"
                      >
                        All
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100 "
                        href="/statistics"
                      >
                        Available to mint
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-red-100"
                        href="/statistics"
                      >
                        Sold out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-6 px-5 pb-8 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
          (i) => {
            return <RankingsMobile />;
          }
        )}
        <div className="hidden sm:flex flex-row w-full justify-between mb-12 text-black text-xs sm:text-base font-semibold">
          <div className="w-24 flex flex-row justify-start">Ranking</div>
          <div className="w-24 flex flex-row justify-start">Name</div>
          <div className="w-24 flex flex-row justify-start">Artists</div>
          <div className="w-24 flex flex-row justify-start">Price</div>
          <div className="w-24 flex flex-row justify-start">Changes(24H)</div>
          <div className="w-24 flex flex-row justify-start">Sales</div>
          <div className="w-24 flex flex-row justify-start">Date</div>
        </div>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => {
          return (
            <div className="hidden sm:flex flex-row w-full justify-between mb-8 text-xs font-semibold">
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
            View all rankings
          </button>
        </div>
      </section>
    </div>
  );
};
