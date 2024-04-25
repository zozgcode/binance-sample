import Image from "next/image";
import TestingWithdrawal from "./withdrawal/TestingWithdrawal";
import Deposit from "./deposit/Deposit";

export const items = [
  {
    title: "Deposit",
    content: (
      <div className="w-full">
        <Deposit />
      </div>
    ),
  },
  {
    title: "Withdrawal",
    content: (
      <div className="w-full">
        <TestingWithdrawal />
      </div>
    ),
  },
  {
    title: "Buy",
    content: (
      <div className="w-full flex items-center justify-center pt-10">
        <Image src="https://i.imgur.com/DgM4E1Q.png" width={500} height={500} className="w-[100px] " alt="buy" />
      </div>
    ),
  },
  {
    title: "Sell",
    content: (
      <div className="w-full flex items-center justify-center pt-10">
        <Image src="https://i.imgur.com/DgM4E1Q.png" width={500} height={500} className="w-[100px] " alt="buy" />
      </div>
    ),
  },
  {
    title: "Trade",
    content: (
      <div className="w-full flex items-center justify-center pt-10">
        <Image src="https://i.imgur.com/DgM4E1Q.png" width={500} height={500} className="w-[100px] " alt="buy" />
      </div>
    ),
  },
];
