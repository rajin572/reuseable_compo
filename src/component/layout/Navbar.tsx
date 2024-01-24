import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full py-3 px-5 md:px-10 lg:px-15 flex justify-between items-center bg-violet-500 z-50 ">
      {/* //*Company name */}
      <div>
        <h2 className="text-3xl cursor-pointer">AI</h2>
      </div>
      {/* //*Nav links */}
      <nav
        className={
          mobileMenuOpen
            ? " lg:w-[40%] w-full lg:static absolute top-[50px] left-0 lg:bg-none bg-violet-500 transition-all lg:z-0 -z-50 lg:border-none border-b-2 border-lime-400"
            : " lg:w-[40%] w-full lg:static absolute top-[-300px] left-0 transition-all lg:z-0 -z-50"
        }
      >
        <ul className="flex justify-end gap-5 items-center lg:flex-row flex-col lg:py-0 py-10">
          <li className="lg:mb-0 mb-5 cursor-pointer group relative">
            <Link className="px-4 py-1" to="/">
              Home
            </Link>
          </li>
          <li className="lg:mb-0 mb-5 cursor-pointer group relative">
            <Link className="px-4 py-1" to="/about">
              About
            </Link>
          </li>
          <li className="lg:mb-0 mb-5 cursor-pointer group relative">
            <Link className="px-4 py-1" to="/">
              link
            </Link>
          </li>
          <li className="lg:mb-0 mb-5 cursor-pointer group relative">
            <Link className="px-4 py-1" to="/">
              Link
            </Link>
          </li>
          {/* <li className="lg:mb-0 cursor-pointer">
            <a
              href="#"
              className="px-3 py-1 rounded border-2 border-lime-400 font-bold bg-slate-100 text-lime-400 hover:bg-lime-400 hover:text-slate-950"
            >
              Join Discord
            </a>
          </li> */}
        </ul>
      </nav>
      {/* //*Icons */}
      <div className="lg:hidden cursor-pointer">
        {mobileMenuOpen ? (
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        ) : (
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
