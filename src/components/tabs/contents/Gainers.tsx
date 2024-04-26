"use client";

import React, { useEffect, useState } from "react";

// Define types for the data structure
interface CoinData {
  id: string;
  symbol: string;
  price_usd: string;
  percent_change_24h: string;
}

export default function Gainers() {
  const [data, setData] = useState<CoinData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        const jsonData = await response.json();
        // Extracting required fields: symbol, price_usd, percent_change_24h
        const formattedData: CoinData[] = jsonData.data.map(
          ({ id, symbol, price_usd, percent_change_24h }: CoinData) => ({
            id,
            symbol,
            price_usd,
            percent_change_24h,
          })
        );
        // Slice the first 10 data entries
        // const firstTenData = formattedData.slice(0, 10);
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const gainersData = data.filter(({ percent_change_24h }) => parseFloat(percent_change_24h) > 0);

  return (
    <div>
      {gainersData.map(({ id, symbol, price_usd, percent_change_24h }) => (
        <div
          key={id}
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
              className={`h-[35px] w-[90px] leading-[24px] rounded-[5px] px-4 text-[12px] bg-[#0ECB81]`}>
              {percent_change_24h}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
