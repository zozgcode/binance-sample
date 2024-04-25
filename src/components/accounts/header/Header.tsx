import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className='w-full px-[24px] py-5 flex justify-between items-center'>
        <Image src="https://i.imgur.com/YcdjEZW.png" className='w-[150px] h-[30px]' width={150} height={150} alt='logo' />
        <div className="w-[100px]">
          <button className="h-[45px] w-full leading-[24px] rounded-[10px] px-[15px] text-[16px] bg-[#FCD535] text-[#202630] font-semibold">Deposit</button>
        </div>
    </header>
  );
}
