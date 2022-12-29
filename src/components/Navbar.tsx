import React, { useState } from "react";
import binance from "../assets/binance.png";
import brise from "../assets/brise.png";
import etherium from "../assets/ethereum-eth-logo.png";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
const chains = [
  { name: "Bitgert", symbol: "brise", logo: brise },
  { name: "Binance", symbol: "bsc", logo: binance },
  { name: "Etherium", symbol: "eth", logo: etherium },
];

function Navbar() {
  const [selectedPerson, setSelectedPerson] = useState(chains[0]);
  return (
    <div className="flex justify-between px-10 py-5 text-white items-center flex-row">
      <div className="text text-xl">Instant Nft</div>
      <div className="flex gap-2 items-center">
        <div className="">
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <Listbox.Button>
              <div className="flex gap-3 justify-center items-center ">
                <img
                  className="w-10 rounded-full"
                  src={selectedPerson.logo}
                ></img>
                <div>{selectedPerson.name}</div>
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </Listbox.Button>
            <Listbox.Options className="absolute w-40 rounded py-1 mt-4 bg-[#031521] focus:outline-none cursor-pointer">
              {chains.map((chain) => (
                <Listbox.Option value={chain}>
                  <div className="flex hover:bg-[#ff5100] focus:bg-[#ff5100] px-3 py-2 rounded  gap-3 items-center">
                    <div className="w-7 rounded-full bg-slate-800 flex justify-center">
                      <img className="w-7 rounded-full" src={chain.logo}></img>
                    </div>
                    <div className="grow">{chain.name}</div>
                    {chain === selectedPerson && (
                      <CheckIcon className="w-5"></CheckIcon>
                    )}
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>{" "}
        </div>
        <button className="button border-2 border-[#ff5100] rounded-md text-white px-5 py-2">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
