import { useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";

// import icons from react icons
import { FaXmark, FaBars, FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      }
      else{
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {link: "Home", path: "home" },
    {link: "About", path: "about" },
    {link: "Services", path: "services" },
    {link: "Portfolio", path: "portfolio" },
    {link: "Blog", path: "blogs" },
    {link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"
        }`}>
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="text-2xl font-bold text-white"><span className="text-orange">A</span>rino</a>

          <ul className="md:flex space-x-12 hidden navitems">
            
            {
                navItems.map(({link, path}) => <Link to={path} activeClass="active" spy={true} smooth={true} key={link} offset={-100} href={path} className="link block text-base uppercase text-white hover:text-orange">
                {link}
              </Link> )
            }
          </ul>

          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-transparent text-white p-2 border rounded-full">
                <FaBarsStaggered className="w-4 hover:text-orange"/>
            </button>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark  className="h-6 w-6 text-primary"/>
              ) : (
                <FaBars className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        <div
        className={`space-y-4 px-4 mt-16 py-7 bg-[#181818] ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
      >
        {
                navItems.map(({link, path}) => <Link 
                to={path} spy={true} smooth={true} offset={-90}
                key={link} 
                onClick={toggleMenu}
                className="block  text-white hover:text-gray-500"
                >
                {link}
              </Link> )
            }
      </div>
      </nav>
    </header>
  );
};

export default Navbar;