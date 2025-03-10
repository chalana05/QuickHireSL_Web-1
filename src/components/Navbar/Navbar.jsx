import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Download",
    link: "/#download",
  },
  {
    id: 4,
    name: "About Us",
    link: "/#about-us",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add animation timings
    setTimeout(() => setLogoVisible(true), 300);
    setTimeout(() => setMenuItemsVisible(true), 700);
    setTimeout(() => setButtonVisible(true), 1100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-opacity-90 backdrop-blur-sm shadow-lg" 
          : "py-4 bg-opacity-0"
      } bg-[#152057] text-white`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className={`transition-all duration-700 ${
              logoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img 
                src={Logo} 
                alt="QuickHireSL" 
                className="w-36 logo-glow" 
              />
            </a>
          </div>

          {/* Center Menu Items - From New Code */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-10">
            <ul className="flex space-x-8">
              {Menu.map((menu, index) => (
                <li 
                  key={menu.id}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    menuItemsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <a
                    href={menu.link}
                    className="inline-block py-2 px-1 font-medium hover:text-blue-300 relative nav-link"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Items - From Old Code */}
          <div className="md:hidden flex justify-between items-center gap-4">
            <ul className="hidden ssm:flex items-center gap-4">
              {Menu.map((menu, index) => (
                <li 
                  key={menu.id}
                  className={`transition-all duration-700 delay-${index * 100} ${
                    menuItemsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <a
                    href={menu.link}
                    className="inline-block py-3 px-4 font-medium hover:text-blue-500 relative nav-link"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
            
          {/* Contact Button */}
          <a href="#footer">
            <button 
              className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 active:scale-95 ${
                buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Contact Us
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .logo-glow {
          filter: drop-shadow(0 0 8px rgba(104, 109, 224, 0.5));
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          opacity: 0;
        }
        
        .nav-link:hover::after {
          width: 100%;
          opacity: 1;
        }
        
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 15px rgba(104, 109, 224, 0.7);
        }
        
        /* For the delay utilities */
        .delay-0 {
          transition-delay: 0ms;
        }
        
        .delay-100 {
          transition-delay: 100ms;
        }
        
        .delay-200 {
          transition-delay: 200ms;
        }
        
        .delay-300 {
          transition-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default Navbar;