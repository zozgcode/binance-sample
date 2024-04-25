import { useState, useEffect, useRef } from "react";
import { items } from "./Tab";

export default function TabComponent() {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        {items.map((item, index) => (
          <button
            ref={index === 0 ? firstBtnRef : null}
            key={`${item.title}-${index}`}
            onClick={() => setSelectedTab(index)}
            className={`text text-[16px] text-[#5E6673] font-semibold pb-1 ${
              selectedTab === index ? "border-b border-[#FCD535]" : ""
            } `}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="w-full mt-[20px]">
        <div className="flex w-full justify-between items-center text-[12px] text-[#848E9C]">
          <p>Name</p>
          <p className="flex items-center gap-[100px]">
            <span>Last Price</span>
            <span>24h chg%</span>
          </p>
        </div>
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={selectedTab === index ? "" : "hidden"}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
