import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(!click);

  return (
    <>
      <li className="flex items-center h-[60px]">
        <Link
          to="/"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Home
        </Link>
      </li>
      <li
        className="flex items-center h-[60px]"
      >
        <Link
          to="#"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          About <i className="fas fa-caret-down text-primary" />
        </Link>
      </li>
      <li
        className="flex items-center h-[60px]"
      >
        <Link
          to="#"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
        How to buy <i className="fas fa-caret-down text-primary" />
        </Link>
      </li>
      <li className="flex items-center h-[60px]">
        <Link
          to="/contact-us"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Bridge
        </Link>
      </li>
      <li className="flex items-center h-[60px]">
        <Link
          to="/contact-us"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Tokenomics
        </Link>
      </li>
      <li className="flex items-center h-[60px]">
        <Link
          to="/contact-us"
          className="text-primary no-underline px-4 py-2"
          onClick={closeMobileMenu}
        >
          Roadmap
        </Link>
      </li>
    </>
  );
}

export default Nav;
