import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export default async function server(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  try {
    // De-structure the arguments we passed in out of the request body
    console.log("reqbody :>> ", req.body);
    const signatureReq = JSON.parse(req.body);
    console.log("signatureReq :>> ", signatureReq);

    // You'll need to add your private key in a .env.local file in the root of your project
    if (!process.env.PRIVATE_KEY) {
      throw new Error("You're missing PRIVATE_KEY in your .env.local file.");
    }

    // Initialize the Thirdweb SDK on the serverside
    const sdk = ThirdwebSDK.fromPrivateKey(
      // Your wallet private key (read it in from .env.local file)
      process.env.PRIVATE_KEY as string,
      "mumbai"
    );

    // Load the NFT Collection via it's contract address using the SDK
    const nftContract = await sdk.getContract(
      // Replace this with your NFT Collection contract address
      process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS!
    );
    /*
    // Here we can make all kinds of cool checks to see if the user is eligible to mint the NFT.
    // Here are a few examples:

    // 1) Check that it's an animal name from our list of animal names
    // This demonstrates how we can restrict what kinds of NFTs we give signatures for
    if (!animalNames.includes(nftName?.toLowerCase())) {
      res.status(400).json({ error: "That's not one of the animals we know!" });
      return;
    }

    // 2) Check that this wallet hasn't already minted a page - 1 NFT per wallet
    const hasMinted = (await nftContract.balanceOf(authorAddress)).gt(0);
    if (hasMinted) {
      res.status(400).json({ error: "Already minted" });
      return;
    }
*/
    // If all the checks pass, begin generating the signature...
    // Generate the signature for the page NFT
    const signedPayload = await nftContract.erc1155.signature.generate(
      signatureReq
    );
    // Return back the signedPayload to the client.
    res.status(200).json({
      signedPayload: signedPayload,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: `Server error ${e}` });
  }
}
