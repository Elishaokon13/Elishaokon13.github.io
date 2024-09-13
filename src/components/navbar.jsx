import { GhIcon } from "./svgs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <main className="">
        <header
          className={`fixed z-40 top-0 md:relative bg-blue-950 pb-3 w-full scroll:bg-black pt-[20px] px-[32px] md:py-[30px] lg:px-[80px]`}
        >
          <nav className={`flex items-center justify-between`}>
            <NavLink to="/">
              {({ isActive }) => (
                <div
                  className={`before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] lg:hover:before:bg-[#4C686F] active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                    isActive
                      ? "text-white hover:before:w-full"
                      : "text-white hover:before:w-full"
                  } relative`}
                >
                  DefiDevrel<span>!</span>
                  <span>⚡</span>
                </div>
              )}
            </NavLink>
            <div className="text-[#FFFFFF99] hover:text-white transition-all duration-300">
              <a
                href="https://www.github.com/Elishaokon13"
                target="_blank"
                rel="noreferrer"
              >
                <span className={`flex items-center gap-[8px] md:gap-[10px]`}>
                  <GhIcon
                    className={`hover:opacity-100 opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] text-[#1E90FF]`} // Blue color
                  />
                  <p className="font-clash text-[15px] md:text-[18px] font-medium text-[#ffffff]"> Github
                  </p>
                </span>
              </a>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Navbar;
