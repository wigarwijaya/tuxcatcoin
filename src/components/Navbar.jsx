import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../constants";
import { Nav, SubMenu } from ".";
import { logo } from "../assets";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => setNavbar(!navbar);
  const closeMobileMenu = () => setNavbar(!navbar);

  return (
    <>
      <div className="flex justify-between items-center sticky top-0 z-20 h-[60px] w-screen bg-[#e4e4e4]">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex justify-center items-center ml-8 text-2xl h-[60px]"
        >
          <img src={logo} className="w-6 h-6 mr-2" />
          <p className="text-base font-medium text-primary">tuxcatcoin</p>
        </Link>
        <div className="hidden sm:flex flex-col justify-center items-center">
          <ul className="flex flex-row items-center justify-center gap-1 mr-8">
            <Nav />
          </ul>
        </div>
        {!navbar ? (
            <Link
              to="#"
              className="flex justify-end items-center h-[60px] text-2xl mr-8 sm:hidden"
            >
              <FaIcons.FaBars onClick={showNavbar} />
            </Link>
          ) : (
            <Link
              to="#"
              className="flex justify-end items-center h-[60px] text-2xl mr-8"
            >
              <AiIcons.AiOutlineClose onClick={showNavbar} />
            </Link>
          )}
      </div>
      {navbar && (
          <nav
            className={`bg-[#EDEDED] flex justify-center fixed w-screen h-screen top-0 ${(
              sidebar
            ) => (sidebar ? "left-0" : "-left-full")} z-10 sidebar`}
          >
            <div className="w-full">
              <Link
                to="#"
                className="flex justify-end items-center h-[60px] text-2xl mr-8"
              >
              </Link>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu close={closeMobileMenu} title={item.title} path={item.path} key={index} />
                );
              })}
            </div>
          </nav>
        )}
    </>
  );
};

export default Navbar;
