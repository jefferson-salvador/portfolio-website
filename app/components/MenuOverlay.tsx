import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { NavLinkProps } from "../types/types";

const MenuOverlay = ({ links }: { links: NavLinkProps[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink path={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
