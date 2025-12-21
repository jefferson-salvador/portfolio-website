import Link from "next/link";

import { NavLinkProps } from "../types/types";

const NavLink = ({ path, title }: NavLinkProps) => {
  return (
    <Link
      href={path}
      className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};
export default NavLink;
