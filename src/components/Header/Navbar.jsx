import { useState } from "react";
import logo from "/assets/images/aneebshahid.com_logo.webp";
import { BsDownload } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Canvas from "./Canvas";
import { NavLink, useLocation } from "react-router-dom";
import { PiStarFourFill } from "react-icons/pi";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const location = useLocation();
  console.log(location);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="">
        <div className="container py-3">
          <div className="flex justify-between items-center border border-white/15 rounded-full bg-white/10 backdrop-blur py-3 px-4 text-white">
            <div className="logo">
              <NavLink to="/">
                <img className="w-32" src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className="menu">
              <nav className="p-[2px] hidden md:flex md:gap-1">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "active-menu nav-item"
                        : "nav-item hover-effect"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
            <div className="resume-btn hidden md:inline-flex md:items-center md:justify-center md:gap-2 font-medium">
              <button>Resume</button>
              <BsDownload />
            </div>
            <div className="md:hidden">
              {!isOpen ? (
                <button className="three-lines" onClick={() => setIsOpen(true)}>
                  <GiHamburgerMenu size={30} />
                </button>
              ) : (
                <button
                  className="cross-icon "
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross2 size={30} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Canvas isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="px-4 flex flex-col text-white gap-7">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="nav-item"
            >
              {({ isActive }) => (
                <li className="inline-flex items-center gap-4">
                  <span>
                    <PiStarFourFill color={isActive ? "#6ee7b7" : ""} />
                  </span>
                  <span className={isActive ? "active-menu" : "hover-effect"}>
                    {item.name}
                  </span>
                </li>
              )}
            </NavLink>
          ))}          
          <div>
          <button className="resume-btn inline-flex items-center justify-center gap-2 font-medium">
            Resume <BsDownload />
          </button>
          </div> 
        </div>
          </Canvas>
    </header>
  );
};

export default Navbar;
