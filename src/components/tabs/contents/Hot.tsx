"use client";

import React, { useEffect, useState } from "react";

// Define types for the data structure
interface CoinData {
  symbol: string;
  price_usd: string;
  percent_change_24h: string;
}

export default function Hot() {
  const [data, setData] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        const jsonData = await response.json();
        // Extracting required fields: symbol, price_usd, percent_change_24h
        const formattedData: CoinData[] = jsonData.data.map(
          ({ symbol, price_usd, percent_change_24h }: CoinData) => ({
            symbol,
            price_usd,
            percent_change_24h,
          })
        );
        // Slice the first 10 data entries
        const firstTenData = formattedData.slice(0, 10);
        setData(firstTenData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map(({ symbol, price_usd, percent_change_24h }) => (
        <div
          key={symbol}
          className="flex w-full justify-between items-center text-[#ffffff] text-[14px] font-medium mt-[15px]"
        >
          <div className="">
            <p className="">{symbol}</p>
          </div>
          <div className="flex items-center gap-16">
            <div className="text-right">
              <p>{price_usd}</p>
              <p className="text-[12px] text-[#848E9C]">{price_usd}</p>
            </div>
            <button
              className={`h-[35px] w-[90px] flex items-center justify-center leading-[24px] rounded-[5px] px-4 text-[12px] bg-[#0ECB81] ${parseFloat(percent_change_24h) < 0 ? "bg-red-500" : ""}`}
            >
              {percent_change_24h}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
