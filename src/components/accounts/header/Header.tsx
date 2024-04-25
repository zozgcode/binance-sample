import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className='w-full px-[16px] py-5 flex justify-between items-center mb-3'>
        <Image src="https://i.imgur.com/YcdjEZW.png" className='w-[140px]' width={150} height={150} alt='logo' />
    </header>
  );
}
