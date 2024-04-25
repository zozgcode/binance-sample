import { gainersContent, hotContent, losersContent } from "./TabContent";

export const items = [
  {
    title: "Hot",
    content: (
      <div className="w-full">
        {hotContent.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between items-center text-[#ffffff] text-[14px] font-medium mt-[15px]"
          >
            <div className="">
              <p className="">{item.coinName}</p>
            </div>
            <div className="flex items-center gap-16">
              <div className="text-right">
                <p>{item.lastPrice1}</p>
                <p className="text-[12px] text-[#848E9C]">{item.lastPrice2}</p>
              </div>
              <button
                className={`h-[35px] w-full leading-[24px] rounded-[5px] px-[25px] text-[12px] bg-[#0ECB81] ${
                  !item.gain ? "bg-[#F6465D]" : ""
                }`}
              >
                {item.change24Hr}
              </button>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Gainers",
    content: (
      <div className="w-full">
        {gainersContent.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between items-center text-[#ffffff] text-[14px] font-medium mt-[15px]"
          >
            <div className="">
              <p className="">{item.coinName}</p>
            </div>
            <div className="flex items-center gap-16">
              <div className="text-right">
                <p>{item.lastPrice1}</p>
                <p className="text-[12px] text-[#848E9C]">{item.lastPrice2}</p>
              </div>
              <button
                className={`h-[35px] w-full leading-[24px] rounded-[5px] px-[25px] text-[12px] bg-[#0ECB81] ${
                  !item.gain ? "bg-[#F6465D]" : ""
                }`}
              >
                {item.change24Hr}
              </button>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Losers",
    content: (
      <div className="w-full">
        {losersContent.map((item, index) => (
          <div
            key={index}
            className="flex w-full justify-between items-center text-[#ffffff] text-[14px] font-medium mt-[15px]"
          >
            <div className="">
              <p className="">{item.coinName}</p>
            </div>
            <div className="flex items-center gap-16">
              <div className="text-right">
                <p>{item.lastPrice1}</p>
                <p className="text-[12px] text-[#848E9C]">{item.lastPrice2}</p>
              </div>
              <button
                className={`h-[35px] w-full leading-[24px] rounded-[5px] px-[25px] text-[12px] bg-[#0ECB81] ${
                  !item.gain ? "bg-[#F6465D]" : ""
                }`}
              >
                {item.change24Hr}
              </button>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];
