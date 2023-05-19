import React, { useState, useEffect } from "react";
import {
  ChainId,
  ThirdwebNftMedia,
  useStorageUpload,
  useContract,
  useNFT,
  useNetwork,
  useNetworkMismatch,
  useAddress,
  Web3Button,
} from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { ethers } from "ethers";
import { ImageUploadIcon } from "../../icons/ImageUploadIcon";
import BarLoader from "react-spinners/BarLoader";
import { Dismiss } from "flowbite";

const cssOverride = {
  display: "block",
  margin: "0 auto",
  width: "100%",
};

export const CreateAccount = () => {
  const walletAddress = useAddress();
  const [{ data, error, loading }, switchNetwork] = useNetwork();
  const isMismatched = useNetworkMismatch();
  const { contract: NFTContract } = useContract(
    process.env.REACT_APP_NFT_CONTRACT_ADDRESS
  );
  const { contract: MarketplaceContract } = useContract(
    process.env.REACT_APP_MARKETPLACE_CONTRACT_ADDRESS,
    "marketplace"
  );

  const { mutateAsync: upload } = useStorageUpload();
  const storage = new ThirdwebStorage();
  const [metadata, setMetadata] = useState({
    name: "Test NFT",
    description: "This NFT is ...",
    external_url: "https://soundview.live/",
    image: "",
    animation_url: "",
    background_color: "",
    attributes: [
      {
        trait_type: "collection_url",
        value: "collection_url",
      },
      {
        trait_type: "website_link",
        value: "website_link",
      },
      {
        trait_type: "discord_link",
        value: "discord_link",
      },
      {
        trait_type: "medium_link",
        value: "medium_link",
      },
      {
        trait_type: "telegram_link",
        value: "telegram_link",
      },
      {
        trait_type: "genre",
        value: "techno",
      },
      {
        trait_type: "payment_tokens",
        value: "payment_tokens",
      },
      {
        trait_type: "royalty_address",
        value: "royalty_address",
      },
      {
        trait_type: "ecosystem",
        value: "ethereum",
      },
      {
        trait_type: "featured_image",
        value: "",
      },
      {
        trait_type: "banner_image",
        value: "",
      },
      {
        trait_type: "adult_content",
        value: false,
      },
    ],
  });
  const mutateMetadata = (type, newValue) => {
    setMetadata({
      ...metadata,
      attributes: metadata.attributes.map((val) =>
        val.trait_type === type ? { ...val, value: newValue } : val
      ),
    });
  };
  const [isUploading, setIsUploading] = useState(false);
  const [genre, setGenre] = useState("");
  const [ecosystem, setEcosystem] = useState("ethereum");
  const [profileImage, setProfileImage] = useState(undefined);
  const [featuredImage, setFeaturedImage] = useState(undefined);
  const [bannerImage, setBannerImage] = useState(undefined);
  const [image, setImage] = useState(undefined);
  const [imageType, setImageType] = useState("image");
  const mintAndList = async () => {
    console.log("metadata :>> ", metadata);
    setIsUploading(true);
    const uris = await upload({
      data: [metadata],
      options: {
        uploadWithGatewayUrl: true, // TODO: remote this later
        // uploadWithoutDirectory: true,
      },
    });
    const uploadedMetadata = await storage.downloadJSON(uris[0]);
    const reqBody = JSON.stringify({
      metadata: uploadedMetadata,
      to: walletAddress,
      quantity: 1,
      // currencyAddress: NATIVE_TOKEN_ADDRESS, // (Optional) the currency to pay with
      // price: 0.1, // (Optional) the price to pay for minting those tokens (in the currency above)
      // mintStartTime: new Date(), // (Optional) can mint anytime from now
      // mintEndTime: new Date(Date.now() + 60 * 60 * 24 * 1000), // (Optional) to 24h from now,
    });
    console.log("reqBody :>> ", reqBody);
    const signedPayloadReq = await fetch(
      `https://soundview-dapp-backend.vercel.app/api/server`,
      {
        method: "POST",
        mode: "cors",
        body: reqBody,
      }
    );
    console.log("signedPayloadReq :>> ", signedPayloadReq);
    const json = await signedPayloadReq.json();
    const signedPayload = json.signedPayload;
    if (!signedPayloadReq.ok) {
      alert(json.error);
      return false;
    }
    console.log("signedPayload :>> ", signedPayload);
    const mintTxResult = await NFTContract.erc1155.signature.mint(
      signedPayload
    );
    console.log("mintTxResult :>> ", mintTxResult);
    const listTxResult = await MarketplaceContract.direct.createListing({
      assetContractAddress: process.env.REACT_APP_NFT_CONTRACT_ADDRESS,
      tokenId: mintTxResult.id.toString(),
      buyoutPricePerToken: 1.5,
      startTimestamp: new Date(),
      listingDurationInSeconds: 7 * 24 * 60 * 60,
      quantity: 1,
      currencyContractAddress: NATIVE_TOKEN_ADDRESS,
    });
    console.log("listTxResult :>> ", listTxResult);
    setIsUploading(false);
    return false;
  };
  useEffect(() => {
    if (isMismatched) {
      switchNetwork(ChainId.Mumbai); // the chain you want here
    }
  }, [walletAddress]);

  return (
    <form className="flex flex-col gap-8 w-full py-40 sm:px-20 px-6 sm:items-center">
      <div className="flex flex-col sm:flex-row gap-2 items-center w-full justify-start">
        <h1 className="text-left text-black text-2xl sm:text-4xl">
          Create a Muscial NFT{" "}
        </h1>
        <span className="text-base font-semibold text-red-600 sm:px-0 sm:text-base">
          (Asterisked options are required to be filled)
        </span>
      </div>
      <div className="flex sm:flex-row flex-col sm:px-0 w-full sm:gap-20 gap-10 sm:items-center justify-center">
        <div className="flex flex-col sm:w-[50%] gap-10">
          <div>
            <h1 className="text-black font-semibold">
              Profile Image <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              This is the image that shows on every profile of your NFTs.
            </p>
            <label htmlFor="profile_image" className="profile-image">
              {profileImage ? (
                <img
                  style={{
                    width: "125px",
                    height: "125px",
                    borderRadius: "125px",
                  }}
                  alt="profile_image"
                  src={profileImage}
                ></img>
              ) : (
                <div style={{ padding: "40px" }}>
                  <ImageUploadIcon />
                </div>
              )}
              <input
                type="file"
                id="profile_image"
                name="profile_image"
                accept="image/*"
                onChange={(e) => {
                  setProfileImage(URL.createObjectURL(e.target.files[0]));
                  setMetadata({
                    ...metadata,
                    image: e.target.files[0],
                  });
                }}
                required
              />
            </label>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Featured Image <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              This is the image that will be used on the homepage or any other
              sales platform for NFTs.{" "}
            </p>
            <label htmlFor="featured_image" className="featured-image">
              {featuredImage ? (
                <img
                  style={{
                    // width: "125px",
                    // height: "125px",
                    borderRadius: "6px",
                  }}
                  alt="featured_image"
                  src={featuredImage}
                ></img>
              ) : (
                <div style={{ padding: "40px" }}>
                  <ImageUploadIcon />
                </div>
              )}
              <input
                type="file"
                id="featured_image"
                name="featured_image"
                accept="image/*"
                onChange={(e) => {
                  setFeaturedImage(URL.createObjectURL(e.target.files[0]));
                  mutateMetadata("featured_image", e.target.files[0]);
                }}
                required
              />
            </label>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Banner Image <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              This is the image that will be used as a banner on every your NFT
              muscial genre here on Soundview or any other platform.
            </p>
            <label htmlFor="banner_image" className="banner-image">
              {bannerImage ? (
                <img
                  style={{
                    borderRadius: "6px",
                  }}
                  alt="banner_image"
                  src={bannerImage}
                ></img>
              ) : (
                <div style={{ padding: "50px" }}>
                  <ImageUploadIcon />
                </div>
              )}
              <input
                type="file"
                id="banner_image"
                name="banner_image"
                accept="image/*"
                onChange={(e) => {
                  setBannerImage(URL.createObjectURL(e.target.files[0]));
                  mutateMetadata("banner_image", e.target.files[0]);
                }}
                required
              />
            </label>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Description <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="description" />
            <p className="text-sm font-light">
              In less than 2000 words, give a detailed description on what your
              NFT is all about.
            </p>
            <textarea
              type="textarea"
              id="description"
              name="description"
              rows="6"
              className="bg-gray-200 rounded-md w-full mt-5"
              onChange={(e) =>
                setMetadata({
                  ...metadata,
                  description: e.target.value,
                })
              }
              required
            ></textarea>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Explicit and Sensitive contents{" "}
              <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">
              You musical NFT contains explicit contents e.g pornography?
            </p>
            <div className="flex gap-10 mt-3">
              <div>
                <label htmlFor="adult_content">Yes </label>
                <input
                  type="radio"
                  id="adult_content"
                  name="adult_content"
                  onChange={(e) => mutateMetadata("adult_content", true)}
                  required
                />
              </div>
              <div>
                <label htmlFor="adult_content">No </label>
                <input
                  type="radio"
                  id="adult_content"
                  name="adult_content"
                  checked={true}
                  onChange={(e) => mutateMetadata("adult_content", false)}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Add NFT <span className="text-red-600 text-xl">*</span>
            </h1>
            <p className="text-sm font-light">Upload your NFT file.</p>
            <label htmlFor="nft_file" className="nft-file">
              {image ? (
                imageType === "image" ? (
                  <img
                    style={{
                      borderRadius: "6px",
                    }}
                    alt="featured_image"
                    src={image}
                  />
                ) : imageType === "video" ? (
                  <video
                    controls
                    style={{
                      borderRadius: "6px",
                    }}
                    alt="featured_image"
                  >
                    <source id="preview-vid" src={image ?? ""} />
                    Your browser does not support HTML5 video.
                  </video>
                ) : (
                  ""
                )
              ) : (
                <div className="bg-neutral-300 m-10 rounded-md flex items-center justify-center text-white text-4xl  w-[50px] h-[50px]">
                  <span className="flex flex-col items-center justify-center">
                    <b>⇧</b>
                  </span>
                </div>
              )}
              <input
                type="file"
                id="nft_file"
                name="nft_file"
                onChange={(e) => {
                  setImageType(e.target.files[0]["type"].split("/")[0]);
                  setImage(URL.createObjectURL(e.target.files[0]));
                  setMetadata({
                    ...metadata,
                    animation_url: e.target.files[0],
                  });
                }}
                required
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:w-[50%] gap-10">
          <div>
            <h1 className="text-black font-semibold">
              Name <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="name" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Mr. SoundView NFT"
              className="bg-gray-100 rounded-md w-full mt-5 p-3"
              onChange={(e) =>
                setMetadata({
                  ...metadata,
                  name: e.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              URL <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="collection_url" />
            <p className="text-sm font-light">
              Your gallery collection URL must be in lowercase letters, numbers,
              hyphens and special characters.
            </p>
            <input
              type="text"
              id="collection_url"
              name="collection_url"
              placeholder="https://soundview.io/genre/hip_hip_rap_music"
              className="bg-gray-100 rounded-md w-full mt-5 p-3"
              onChange={(e) => mutateMetadata("collection_url", e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Links <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="other_links" />
            <p className="text-sm font-light">
              Provide links for your other communities and websites
            </p>
            <div className="flex flex-col gap-3 mt-5">
              <input
                type="text"
                id="other_links"
                name="website_link"
                placeholder="Website link"
                className="bg-gray-100 rounded-md w-full p-3"
                onChange={(e) => mutateMetadata("website_link", e.target.value)}
                required
              />
              <input
                type="text"
                id="other_links"
                name="discord_link"
                placeholder="Discord channel link"
                className="bg-gray-100 rounded-md w-full p-3"
                onChange={(e) => mutateMetadata("discord_link", e.target.value)}
                required
              />
              <input
                type="text"
                id="other_links"
                name="medium_links"
                placeholder="Medium link"
                className="bg-gray-100 rounded-md w-full p-3"
                onChange={(e) => mutateMetadata("medium_link", e.target.value)}
                required
              />
              <input
                type="text"
                id="other_links"
                name="telegram_link"
                placeholder="Telegram link"
                className="bg-gray-100 rounded-md w-full p-3"
                onChange={(e) =>
                  mutateMetadata("telegram_link", e.target.value)
                }
                required
              />
            </div>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Genre <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="genre" />
            <p className="text-sm font-light">
              Add a genre to help your NFT to be easier to find and access.
            </p>
            <select
              type="text"
              id="genre"
              name="genre"
              value={genre}
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
              onChange={(e) => {
                setGenre(e.target.value);
                mutateMetadata("genre", e.target.value);
              }}
              required
            >
              <option value="" disabled>
                Add Genre
              </option>
              <option value="latin">Latin</option>
              <option value="techno">Techno</option>
              <option value="double_step">Double step</option>
              <option value="rnb_and_soul">R&B & Soul</option>
              <option value="hiphop_rap">Hip Hop Rap</option>
              <option value="dance_edm">Dance & Edm</option>
            </select>
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Payment Tokens <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="payment_token" />
            <p className="text-sm font-light">
              These tokens can be used to buy and sell your created musical
              NFTs.
            </p>
            <input
              type="text"
              id="payment_token"
              name="payment_token"
              placeholder="Mr. SoundView NFT"
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
              onChange={(e) => mutateMetadata("payment_token", e.target.value)}
              required
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Add Royalties <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="royalties" />
            <p className="text-sm font-light">
              Royalties are percentage earnings you get when ever any of your
              musical NFTs are sold. You can add an address where you receive
              all royalties.
            </p>
            <input
              type="text"
              id="royalties"
              name="royalties"
              placeholder="Add wallet address"
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
              onChange={(e) =>
                mutateMetadata("royalty_address", e.target.value)
              }
              required
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">
              Blockchain Ecosystem{" "}
              <span className="text-red-600 text-xl">*</span>
            </h1>
            <label htmlFor="blockchain" />
            <p className="text-sm font-light">
              Select the blockchain ecosystem where you would love your genre to
              be listed streamed and sell.
            </p>
            <select
              type="text"
              id="blockchain"
              name="blockchain"
              value={ecosystem}
              className="bg-gray-100 rounded-md mt-5 w-full p-3"
              onChange={(e) => {
                setEcosystem(e.target.value);
                alert(e.target.value);
                mutateMetadata("ecosystem", e.target.value);
              }}
              required
            >
              <option value="ethereum">Ethereum</option>
              {/* <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option> */}
            </select>
          </div>
        </div>
      </div>
      <Web3Button
        theme="light"
        className="mt-6 rounded-lg bg-themeRed p-4 text-white font-semibold hover:scale-105 transition duration-150 ease-in-out sm:w-1/5 "
        contractAddress={process.env.REACT_APP_NFT_CONTRACT_ADDRESS} // Your smart contract address
        action={async (contract) => {
          // if(!document.forms[0].checkValidity()) document.forms[0].reportValidity();
          await mintAndList();
        }}
      >
        <div>Create NFT</div>
        {/* <BarLoader
          color={"white"}
          loading={isUploading}
          cssOverride={cssOverride}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
      </Web3Button>
      {/* <button
        // type="submit"
        onClick={mintAndList}
        className="mt-6 rounded-lg bg-themeRed p-4 text-white font-semibold hover:scale-105 transition duration-150 ease-in-out sm:w-1/5 "
        disabled={isUploading}
      >
      </button> */}
    </form>
  );
};
