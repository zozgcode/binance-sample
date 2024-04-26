import { FatherMotherDepositTxData } from "@/components/accounts/transactionData/TrxData";
import React from "react";

export default function FatherMotherDeposit() {
  const top7depositData = FatherMotherDepositTxData.slice(0, 10); // Fetching only the first five transactions
  const moreThanSevenDeposit = FatherMotherDepositTxData.length > 10;

  return (
    <>
      {top7depositData.length === 0 && (
        <div className="text-center">No transaction yet.</div>
      )}
      {top7depositData.map((txt, i) => (
        <div key={i} className="flex justify-between mt-7">
          <div className="">
            <p className="text-[#EAECEF] text-[16px]">{txt.coinName}</p>
            <p className="text-[#848E9C] text-[14px]">{txt.dateTime}</p>
          </div>
          <div className="text-right">
            <p className="text-[16px] text-[#EAECEF]">{txt.amount}</p>
            <div className="flex items-center gap-1 text-[#848E9C] text-[14px]">
              <button className="rounded-full bg-[#0ECB81] w-2 h-2" />
              Completed
            </div>
          </div>
        </div>
      ))}
      {/* {moreThanSevenDeposit && (
        <div className="text-center mt-8">
          <Link
            href="/accounts/transactions"
            className="bg-[#d71e28] text-white font-semibold border border-[#d71e28] rounded p-3 text-lg"
          >
            Show All
          </Link>
        </div>
      )} */}
    </>
  );
}
