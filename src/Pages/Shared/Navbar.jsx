import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    id: "/about",
    name: "About",
  },
  {
    id: "/developer",
    name: "Developer",
  },
  {
    id: "/community",
    name: "Community",
  },
  {
    id: "/ecosystem",
    name: "Ecosystem",
  },
  {
    id: "/validators",
    name: "Validators",
  },
  {
    id: "/whitePapers",
    name: "WhitePapers",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full headerBg text-sm py-5 sticky top-0">
      <nav
        className=" 3xl:max-w-[1400px] w-full mx-auto px-4 sm:px-10 md:px-12 xl:px-20 3xl:px-0 xl:flex lg:items-center lg:justify-between "
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-x-[10px] text-[26.75px] font-medium text-[var(--gray100)] leading-[34.775px] tracking-[-0.696px]"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="39"
              viewBox="0 0 65 39"
              fill="none"
            >
              <path
                d="M48.7386 0.730652L0.00878906 28.8969L16.2615 38.2695L64.9905 10.1032L48.7386 0.730652Z"
                fill="#3D587B"
              />
              <path
                d="M65.0002 28.8649L64.9915 10.1031L48.748 19.4927L48.758 38.2539L65.0002 28.8649Z"
                fill="#D5F6FF"
              />
              <path
                d="M32.4957 10.1194L16.2432 0.746904L16.2521 19.5083L32.4957 10.1194Z"
                fill="#5A7B92"
              />
              <path
                d="M48.7579 38.2524L48.7475 19.491L32.5054 28.8798L48.7579 38.2524Z"
                fill="#5A7B92"
              />
              <path
                d="M16.2523 19.5076L16.2434 0.746212L0 10.1351L0.00896615 28.8965L16.2523 19.5076Z"
                fill="#AAEEFF"
              />
            </svg>
            Fast
            <span className="text-[var(--primary)] "> Chain</span>
          </Link>
          <div className="xl:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              // data-hs-collapse="#navbar-image-and-text-1"
              // aria-controls="navbar-image-and-text-1"
              // aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`transition-all duration-600 basis-full grow ${
            open ? " xl:block " : "hidden xl:block"
          }`}
        >
          <div className="flex flex-col gap-5 xl:gap-[46px] mt-5 xl:flex-row lg:items-center lg:justify-end lg:mt-0 sm:ps-5">
            {navLinks?.map((link, i) => (
              <Link
                to={link.id}
                key={i}
                className="font-normal text-lg text-[var(--gray100)] dark:focus:outline-none dark:focus:ring-1 hover:text-[var(--primary)] duration-300 "
                href="#"
                aria-current="page"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              className="py-4 px-5 max-w-[165px] inline-flex items-center gap-x-2 text-base font-bold leading-[20.8px] tracking-[-0.256px] rounded-md border border-transparent bg-[#008DA0] text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 duration-1000 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Join Community
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
