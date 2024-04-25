"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import defaultAvatar from "../../../assets/default-avatar.png";
import { recommend, shortcut } from "./data";

export default function ProfilePage() {
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
        <>
          <div className="flex gap-4">
            <Image
              src={user.profileImg ? user.profileImg : defaultAvatar}
              width={100}
              height={100}
              className="w-[56px] h-[56px]"
              alt="avatar"
            />
            <div className="">
              <p className="text-[#475263] text-[14px]">UID: {user.uid}</p>
              <p className="text-[16px] leading-[24px] text-white font-semibold">
                {user.usern}
              </p>
              <p className="flex items-center gap-2 mt-2">
                <button className="outline-none text-[10px] bg-[#0ecb81]/5 rounded-[8px] text-[#0ecb81] border-none p-1 px-3">
                  Verified
                </button>
                <button className="outline-none text-[10px] bg-[#fcd535]/5 rounded-[8px] text-[#fcd535] border-none p-1 px-3">
                  Regular
                </button>
              </p>
            </div>
          </div>
          <div className="border-t border-[#333b48] pt-3 mt-5">
            <h3 className="text-white text-[16px] font-normal mb-5">
              Shortcut
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 gap-y-5">
              {shortcut.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center max-w-max p-1"
                >
                  <Image
                    src={item.logo}
                    width={100}
                    height={100}
                    className="w-[20px] h-[20px]"
                    alt={item.title}
                  />
                  <p className="text-white text-[12px]">{item.title}</p>
                </div>
              ))}
            </div>
            <h3 className="text-white text-[16px] font-normal mb-5 mt-20">
              Recommend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 gap-y-7">
              {recommend.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center max-w-max p-1"
                >
                  <Image
                    src={item.logo}
                    width={100}
                    height={100}
                    className="w-[20px] h-[20px]"
                    alt={item.title}
                  />
                  <p className="text-white text-[12px]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
