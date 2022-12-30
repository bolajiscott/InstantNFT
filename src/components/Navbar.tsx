import React, { useState } from "react";
import binance from "../assets/binance.png";
import brise from "../assets/brise.png";
import etherium from "../assets/ethereum-eth-logo.png";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
const chains = [
  { name: "Bitgert", symbol: "brise", logo: brise },
  { name: "Binance", symbol: "bsc", logo: binance },
  { name: "Ethereum", symbol: "eth", logo: etherium },
];

function Navbar() {
  const [selectedPerson, setSelectedPerson] = useState(chains[0]);
  return (
    <div className="flex justify-between px-2 md:px-10 py-5 h-24 bg-primary text-white items-center flex-row">
      <div className="w-24 md:w-28">
        <img src="./InstNFT.png" alt="InstNFT" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="">
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>
              <div className="flex gap-[0.6rem] justify-center items-center mr-2 bg-secondary p-2 rounded">
                <img
                  className={selectedPerson.symbol === "bsc" ? `w-10 p-2 rounded-full bg-light`:`w-10 p-1 rounded-full bg-light`}
                  src={selectedPerson.logo}
                  alt={selectedPerson.logo}
                />
                <div className="w-14 mr-2 hidden sm:block">{selectedPerson.name}</div>
                <ChevronDownIcon
                  className="h-5 w-5 text-light"
                  aria-hidden="true"
                />
              </div>
            </Listbox.Button>
            <Listbox.Options className="absolute w-40 rounded py-0 mt-1 bg-primary focus:outline-none cursor-pointer">
              {chains.map((chain) => (
                <Listbox.Option value={chain}>
                  <div className="flex hover:bg-secondary focus:bg-secondary px-3 py-2 rounded  gap-3 items-center transition duration-200">
                    <div className="w-7 rounded-full bg-light flex justify-center">
                      <img
                        className="w-7 rounded-full"
                        src={chain.logo}
                        alt={chain.logo}
                      />
                    </div>
                    <div className="grow">{chain.name}</div>
                    {!selectedPerson 
                      ? chain === chains[0] && (
                        <CheckIcon className="w-5" />
                      )
                      : chain === selectedPerson && (
                      <CheckIcon className="w-5" />
                    )}
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>{" "}
        </div>
        <button className="button border-2 border-secondary rounded-md text-white px-2 md:px-5 py-[0.8rem] hover:bg-secondary transition duration-200">
          Connect <span className="hidden sm:inline">Wallet</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
