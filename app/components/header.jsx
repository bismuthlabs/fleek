"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CgMenuLeft } from "react-icons/cg";
import { useGlobalContext } from "../../context/context";

const Header = () => {

  const navigation = {
    navlinks: [
     
      {
        id: 1,
        name: "men",
        url: "/",
      },
      {
        id: 2,
        name: "women",
        url: "/",
      },
      {
        id: 3,
        name: "discover",
        url: "/",
      },
    ],
  };
  const {showSidemenu} = useGlobalContext()

  return (
    <header className="app-header">
      <nav className="app-nav">
        <div className="w-max flex gap-[13px] lg:gap-0">
          <span className="header-icon lg:hidden" onClick={showSidemenu}>
            <CgMenuLeft />
          </span>
          <Link href="/">
            <h1 className="logo">company logo</h1>
          </Link>
        </div>
        <div className=" navlinks ">
          {navigation.navlinks.map((link) => {
            const { id, url, name } = link;
            return (
              <Link href={url} key={id} className="afterLink">
                {name}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-5">
          <span className="header-icon">
            <HiOutlineSearch />
              </span>
          <span className="header-icon">
            <FaUser />
          </span>
          <span className="header-icon">
            <BsBag />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
