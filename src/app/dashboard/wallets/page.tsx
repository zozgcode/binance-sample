"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { balance } from "./balance";
import Link from "next/link";

export default function WalletPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  return (
    <div className="">
       {user && (
      <div className="flex flex-col mb-5">
        <div className="flex justify-between">
          <div className="text-white w-full">
            <p className="text-[17px]">Total Balance (USD)</p>
            <p className="text-[24px]">${user.totalBalance}</p>
          </div>
          <Link href="/dashboard/history" className="flex">
            <svg
              className="mr-2 w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z"
                fill="#ffffff"
              ></path>
            </svg>
            <span className="text-[#EAECEF] font-normal text-[16px]">History</span>
          </Link>
        </div>
        <p className="flex items-center gap-2 text-[14px] text-white mb-5 mt-1">
          <span className="border-dashed">Today&apos;s PNL</span>
          <span className="text-[#0ECB81]">+ $0.00(1.24%)</span>
        </p>
        <div className="w-full flex items-center justify-between gap-2 mb-5">
          <button className="h-[45px] w-full leading-[24px] rounded-[10px] px-[15px] text-[16px] bg-[#FCD535] text-[#202630] font-semibold">
            Deposit
          </button>
          <button className="h-[45px] w-full leading-[24px] rounded-[10px] px-[15px] text-[16px] bg-[#333b48] text-[#ffffff] font-semibold">
            Withdraw
          </button>
          <button className="h-[45px] w-full leading-[24px] rounded-[10px] px-[15px] text-[16px] bg-[#333b48] text-[#ffffff] font-semibold">
            Transfer
          </button>
        </div>
        <div className="p-2 px-3 text-[14px] text-white border border-[#474D57] rounded-[5px] mb-5">
          Convert Low-Value Assets to BNB
        </div>
        <div className="flex items-center justify-between text-[#EAECEF] font-normal text-[16px]">
          <p>Balances</p>
          <FiSearch className="text-[#5b6474] text-[18px] font-semibold" />
        </div>
        <div className="flex flex-col gap-3 mt-6">
          {balance.map((item) => (
            <div
              key={item.coinName1}
              className="flex items-center justify-between"
            >
              <div className="flex gap-3">
                <Image
                  src={item.coinLogo}
                  width={20}
                  height={20}
                  className="w-5 h-5 relative top-[6px]"
                  alt="coin logo"
                />
                <div className="flex flex-col">
                  <span className="text-[16px] text-[#EAECEF] font-normal">
                    {item.coinName1}
                  </span>
                  <span className="text-[14px] text-[#848E9C] font-normal">
                    {item.coinName2}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[16px] text-[#EAECEF] font-normal">
                  {item.amount1}
                </span>
                <span className="text-[14px] text-[#848E9C] font-normal">
                  {item.amount2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
       )}
    </div>
  );
}
