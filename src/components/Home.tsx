import React, { useState } from "react";
import binance from "../assets/binance.png";
import brise from "../assets/brise.png";
import Farm from "./Farm";
const chains = [
  { name: "Bitgert", symbol: "brise", logo: brise },
  { name: "Binance", symbol: "bsc", logo: binance },
];

function Home() {
  const [selectedPerson, setSelectedPerson] = useState(chains[0]);
  return (
    <div>
      <div className="text-center text-primary font-bold text-4xl">
        Welcome to Instant NFT Platform
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-12">
        <Farm />
        <Farm />
      </div>
      <div className="flex justify-center my-10">
        <button className="bg-secondary text-white hover:scale-95 transition duration-200 px-10 py-3 rounded-md">
          Create New Project
        </button>
      </div>
    </div>
  );
}

export default Home;
