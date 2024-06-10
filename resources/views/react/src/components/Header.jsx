import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from '../App';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className='font-[sans-serif] min-h-[60px] tracking-wide relative z-50'>
      <section className="bg-[#FFB600] min-h-[40px] px-4 py-2 flex items-center gap-2">
        <a href="tel:+1805482588">
          <button type="button" className="text-black text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
              viewBox="0 0 482.6 482.6">
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000"></path>
            </svg>
            +180-548-2588
          </button>
        </a>

        <span className="border-l h-3 mx-6"></span>
        <a href="mailto:info@example.com">
          <button type="button" className="text-black text-sm max-sm:my-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-3 inline-block"
              viewBox="0 0 479.058 479.058">
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"></path>
            </svg>
            info@example.com
          </button>
        </a>
      </section>

      <div className='flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-white lg:gap-y-4 gap-y-6 gap-x-4'>
        <a href="/"><img src="/images/LOGO.png" alt="logo" className='w-20' />
        </a>

        <div id="collapseMenu"
          className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">

          <ul
            className='lg:!flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo"
                className='w-36' />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <NavLink to="/" className={`text-black block text-[15px] font-medium ${location.pathname === "/" ? "border-[#FFB600] border-b-2" : ""}`}>Home</NavLink>
            </li>

            <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <NavLink to="/about" className={`text-black block text-[15px] font-medium ${location.pathname === "/about" ? "border-[#FFB600] border-b-2" : ""}`}>About</NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <NavLink to="/project" className={`text-black block text-[15px] font-medium ${location.pathname === "/project" ? "border-[#FFB600] border-b-2" : ""}`}>Projects</NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
              <NavLink to="/contact" className={`text-black block text-[15px] font-medium ${location.pathname === "/contact" ? "border-[#FFB600] border-b-2" : ""}`}>Contact</NavLink>
            </li>
            <li className="max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            {isLoggedIn && (
            <NavLink to="/dashboard" className="text-black text-sm max-sm:my-2">Dashboard</NavLink>)}
            </li>
          </ul>
        </div>

        <div className='flex items-center max-sm:ml-auto'>
        <div id="collapseMenu" className={`lg:hidden ${menuOpen ? "block" : "hidden"} fixed top-[52px] left-0 w-full h-full bg-black bg-opacity-50 z-50`}>
          {/* Close button */}
          <button className="absolute top-5 right-3 text-white" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 352 512">
              <path fill="#FFFFFF" d="M200.97 256L344.48 112.49C351.3 105.67 351.3 94.315 344.48 87.49L329.51 72.515c-6.835-6.835-18.19-6.835-25.03 0L176 215.03 32.49 71.52c-6.835-6.835-18.19-6.835-25.03 0L8.515 86.49C1.692 93.315 1.692 104.67 8.515 111.49L152.03 256 8.515 399.51c-6.835 6.835-6.835 18.19 0 25.03l14.97 14.975c6.835 6.835 18.19 6.835 25.03 0L176 296.97l143.51 143.51c6.835 6.835 18.19 6.835 25.03 0l14.97-14.97c6.835-6.835 6.835-18.19 0-25.03L200.97 256z" />
            </svg>
          </button>

          {/* Mobile menu content */}
          <div className="bg-[#151d20] text-white px-10 py-20 shadow-md overflow-auto">
            <ul>
              <li className="mb-4">
                <NavLink to="/" className={`text-white block text-sm font-medium ${location.pathname === "/" ? "border-[#FFB600] border-b-2" : ""}`}>Home</NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/about" className={`text-white block text-sm font-medium ${location.pathname === "/about" ? "border-[#FFB600] border-b-2" : ""}`}>About</NavLink>
              </li>
              <li className="mb-4">
                <NavLink to="/project" className={`text-white block text-sm font-medium ${location.pathname === "/project" ? "border-[#FFB600] border-b-2" : ""}`}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={`text-white block text-sm font-medium ${location.pathname === "/contact" ? "border-[#FFB600] border-b-2" : ""}`}>Contact</NavLink>
              </li>
              
            </ul>
          </div>
        </div>

          <button id="toggleOpen" className='lg:hidden ml-6' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512">
              <path fill="#000000" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

  )
}

export default Header