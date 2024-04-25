import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BiSolidWallet } from "react-icons/bi";

export const fMenuLink = [
    {
      label: "Home",
      icon: <TiHome />,
      slug: "/dashboard",
    },
    {
      label: "Wallets",
      icon: <CgProfile />,
      slug: "/dashboard/wallets",
    },
    {
      label: "Profile",
      icon: <BiSolidWallet />,
      slug: "/dashboard/profile",
    },
  ];