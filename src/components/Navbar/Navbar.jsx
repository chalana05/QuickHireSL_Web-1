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
                      className="inline-block py-4 px-4 hover:text-primary"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#footer">
              <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                Contact Us
              </button>
            </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;





// import React from "react";
// import Logo from "../../assets/logo.png";
// import { FaCartShopping } from "react-icons/fa6";
// import DarkMode from "./DarkMode";

// const Menu = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#home",
//   },
//   {
//     id: 2,
//     name: "Services",
//     link: "/#services",
//   },
//   {
//     id: 3,
//     name: "Download",
//     link: "/#download",
//   },
//   {
//     id: 4,
//     name: "About Us",
//     link: "/#about Us",
//   },
// ];

// const Navbar = () => {
//   return (
//     <>
//       <div className="fixed w-full z-50 bg-[#1a3b88] text-white shadow-none border-b-0">
//         <div className="container mx-auto py-3 sm:py-0 px-4">
//           <div className="flex justify-between items-center">
//             <div>
//               <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
//                 <img src={Logo} alt="Logo" className="w-36" />
//               </a>
//             </div>
//             <div className="flex justify-between items-center gap-4">
//               <ul className="hidden sm:flex items-center gap-4">
//                 {Menu.map((menu) => (
//                   <li key={menu.id}>
//                     <a
//                       href={menu.link}
//                       className="inline-block py-4 px-4 hover:text-cyan-400 transition-colors"
//                     >
//                       {menu.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//               <button
//                 className="bg-[#1e90ff] hover:bg-[#0078e7] text-white py-2 px-6 rounded-full transition-all duration-300 hover:-translate-y-1">
//                 <a href="mailto:slquickhire@gmail.com">Contact Us</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Spacer div is modified to connect seamlessly with hero section */}
//       <div className="h-16 sm:h-20 bg-[#1a3b88]"></div>
//     </>
//   );
// };

// export default Navbar;