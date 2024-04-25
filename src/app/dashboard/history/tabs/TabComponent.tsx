"use client"

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
      <div className="flex items-center justify-between gap-4 border-b border-[#828d9b56]">
        {items.map((item, index) => (
          <button
            ref={index === 0 ? firstBtnRef : null}
            key={`${item.title}-${index}`}
            onClick={() => setSelectedTab(index)}
            className={`text-[16px] text-[#5E6673] font-semibold pb-2 ${
              selectedTab === index ? "border-b-4 border-[#FCD535] font-semibold text-[#EAECEF]" : ""
            } `}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="w-full mt-[20px]">
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
