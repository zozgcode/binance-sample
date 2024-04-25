"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TransactionHistory from "./transactionData/TransactionHistory";
import Testing from "./allUsersTxtData/Testing";
import TestingTwo from "./allUsersTxtData/Testing2";
import TabComponent from "../tabs/TabComponent";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      setUser(JSON.parse(loggedInUserData));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="text-white w-[70%]">
          <p className="text-[17px]">Total Balance (USD)</p>
          <p className="text-[24px]">$20,000.323888</p>
        </div>
        <div className="w-[100px] relative top-[-63px]">
          <button className="h-[45px] w-full leading-[24px] rounded-[10px] px-[15px] text-[16px] bg-[#FCD535] text-[#202630] font-semibold">Deposit</button>
        </div>
      </div>
      <div className="mt-10 pt-5 border-t border-[#474D57]">
        <div className="">
          <TabComponent />
        </div>
      </div>
    </div>
  );
}
