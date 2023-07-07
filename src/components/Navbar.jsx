import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full px-6 flex justify-center items-center backdrop-blur-md backdrop-opacity-10 backdrop-invert bg-white/70 sticky top-0 z-10 rounded-b-lg overscroll-contain">
      <div className="xl:max-w-[1280px] w-full">
        <nav className="w-full p-6 flex justify-between items-center">
          <img src={logo} alt="tuxcat" className="w-[124px] h-[32px]" />

          <ul className="list-none sm:flex hidden justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-teal-500" : "text-red-500"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 mx-auto my-2 min-w-[90%] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-center flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] w-full text-center ${
                      active === nav.title ? "text-teal-500" : "text-red-500"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
