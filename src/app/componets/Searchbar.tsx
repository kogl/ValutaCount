"use client";
import { useState } from "react";
import { getCashToDollar } from "../api/data";

export const Searchbar = () => {
  const [currencyText, setCurrencyText] = useState("");

  //   const searchFilter = (currencyList: any) => {
  //     return currencyList.filter((currency: any) =>
  //       currencyList.name.toUpperCase().includes(currencyText.toUpperCase())
  //     );
  //   };

  return (
    <>
      <div className="w-screen h-screen bg-green-600 justify-center items-center flex flex-col">
        <form className="w-3/5 flex h-4/6 bg-gradient-to-r  from-stone-800 to-black  flex-col justify-evenly items-center">
          <h1 className=" text-3xl text-zinc-50 font-bold w-1/4 text-end border-b-2 border-amber-600 ">
            Currency!
          </h1>
          <input
            className="bg-orange-400 pl-2 text-zinc-50 placeholder:text-zinc-50 border-2 border-amber-600 rounded-tl-2xl rounded-br-2xl w-1/2 h-[56px]"
            type="text"
            placeholder="$ök valuta SEK EUR etc..."
            id="currencyName"
            name="currencyName"
            value={currencyText}
            onChange={(e) => setCurrencyText(e.target.value)}
          />
          <div className=" w-1/2 flex-row flex items-center justify-between">
            <input
              className="bg-orange-400 pl-2 text-zinc-50 placeholder:text-zinc-50 border-2 border-amber-600 rounded-tl-2xl rounded-br-2xl w-2/5 h-[56px]"
              type="date"
            />

            <input
              className="bg-orange-400 pl-2 text-zinc-50 placeholder:text-zinc-50 border-2 border-amber-600 rounded-tl-2xl rounded-br-2xl w-2/5 h-[56px]"
              type="date"
            />
          </div>

          <button
            className="w-1/6 h-[42px] text-black bg-zinc-50 "
            // onClick={fetchData}
          >
            sök
          </button>
        </form>
        <div className="w-screen h-1/4 flex flex-col justify-start  items-center">
          <div className="h-[10vh] w-[60vw]  bg-gradient-to-r  from-amber-400 to-amber-600  text-white">
			
            <h2>To_Currency Code:</h2>
            <h3>To_Currency Name: </h3>
            <p>Exchange Rate:</p>
          </div>
        </div>
      </div>
    </>
  );
};
