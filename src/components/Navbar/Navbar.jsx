import React from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

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
    id: 3,
    name: "About Us",
    link: "/#about Us",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-36" />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-blue-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md" >
                <a href="mailto:slquickhire@gmail.com">Contact Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
