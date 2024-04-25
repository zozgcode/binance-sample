import React from "react";
import { fMenuLink } from "./data";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed flex items-center justify-center h-[60px] bottom-0 w-full bg-[#181A20] left-0 right-0">
      <div className="flex justify-evenly gap-3 w-full">
        {fMenuLink.map((link, i) => (
          <Link
            href={link.slug}
            key={i}
            className="flex flex-col text-[#848E9C] text-[13px] px-4 w-full items-center justify-center"
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
