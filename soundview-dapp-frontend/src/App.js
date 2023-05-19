import { Routes, Route } from "react-router-dom";
import { HomePage } from "../src/pages/home/HomePage.jsx";
import { FullRanking } from "./pages/full-ranking/FullRanking.jsx";
import { Market } from "./pages/market/Market.jsx";
import { Navigation } from "./pages/navigation/Navigation.jsx";
import { Stream } from "./pages/stream/Stream.jsx";
import { CreateAccount } from "./pages/create/CreateAccount.jsx";
import { PurchasePage } from "./pages/purchase/PurchasePage";
import { Login } from "./pages/login/Login.jsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

export const App = () => {
  return (
    <ThirdwebProvider
      activeChain={Mumbai}
      dAppMeta={{
        name: "SoundView dApp",
        description: "Discover, Buy, Collect and Sell your NFTs at Soundview.",
        logoUrl: "https://soundview-dapp.vercel.app/static/media/soundviewlogo.0a33b1298d0b07b9e860.png",
        url: "https://soundview-dapp.vercel.app/",
        isDarkMode: false,
      }}
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route
            path="market"
            element={<Market header="Explore Music NFTs" />}
          />
          <Route
            path="market/afrobeats-nft"
            element={<Market header="Afrobeats Music NFTs" />}
          />
          <Route
            path="market/afrofusion-nft"
            element={<Market header="Afrofusion Music NFTs" />}
          />
          <Route
            path="market/afrotrap-nft"
            element={<Market header="Afrotrap Music NFTs" />}
          />
          <Route
            path="market/afropop-nft"
            element={<Market header="Afropop Music NFTs" />}
          />
          <Route
            path="market/hiphop-nft"
            element={<Market header="Hip-hop Rap Music NFTs" />}
          />
          <Route
            path="market/gospel-nft"
            element={<Market header="Gospel Music NFTs" />}
          />
          <Route path="statistics" element={<FullRanking />} />
          <Route path="stream" element={<Stream />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="buy/:listingId" element={<PurchasePage />} />
        </Route>
      </Routes>
    </ThirdwebProvider>
  );
};
