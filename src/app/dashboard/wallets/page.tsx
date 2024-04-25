import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import coinLogo from "../../../assets/coin-logo/btc.png";
import { balance } from "./balance";

export default function WalletPage() {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <div className="text-white w-full">
          <p className="text-[17px]">Total Balance (USD)</p>
          <p className="text-[24px]">$20,000.323888</p>
        </div>
        <div className="w-full flex items-center justify-between gap-2">
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
        <p className="flex items-center gap-2 text-[14px] text-white">
          <span className="border-dashed">Today&apos;s PNL</span>
          <span className="text-[#0ECB81]">+ $0.00(1.24%)</span>
        </p>
        <div className="p-2 px-3 text-[14px] text-white border border-[#474D57] rounded-[5px]">
          Convert Low-Value Assets to BNB
        </div>
        <div className="flex items-center justify-between text-[#EAECEF] font-normal text-[16px]">
          <p>Balances</p>
          <FiSearch className="text-[#5b6474] text-[18px] font-semibold" />
        </div>
        <div className="flex flex-col gap-3">
          {balance.map((item) => (
            <div key={item.coinName1} className="flex items-center justify-between">
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
    </div>
  );
}
