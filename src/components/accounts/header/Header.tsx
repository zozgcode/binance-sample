"use client"

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("loggedInUser");
    // Redirect to the login page
    router.push("/");
  };

  return (
    <header className='w-full px-[16px] py-5 flex justify-between items-center mb-3'>
        <Image src="https://i.imgur.com/YcdjEZW.png" className='w-[140px]' width={150} height={150} alt='logo' />
        <button onClick={handleLogout} className="text-white border-b pb-1">Logout</button>
    </header>
  );
}
