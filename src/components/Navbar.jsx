import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants/ContentConstants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-6">
      <nav className="mx-auto px-0 md:px-20 flex justify-between items-center py-6 z-10">
        {/* Logo on the left */}
        <div className="flex">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden z-20">
          <button
            onClick={toggleMenu}
            className="text-[#1B1C20] focus:outline-none"
          >
            {isMenuOpen ? (
              // Close Mobile Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M8 8L24 24M24 8L8 24"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Open Mobile Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M5.33337 8H26.6667M5.33337 16H26.6667M17.3334 24H26.6667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          <div
            className={`${
              isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
            } transform origin-top transition-transform duration-300 ease-in-out absolute top-[7rem] left-0 w-full bg-white shadow-lg z-60`}
          >
            <ul className="p-2">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer p-2 font-primary font-medium leading-6 text-[#1b1c20] hover:bg-[#e7e6e6] hover:font-bold rounded-sm mr-0`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-12">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-primary font-normal text-[16px] text-white hover:font-semibold`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Login button on the right */}
        <div className="hidden lg:flex">
          <button className="flex-shrink-0 w-[160px] h-[48px] rounded-lg bg-primary text-white font-primary font-normal z-0">
            Download Now
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
