import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="footer" className="bg-gray-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-22" />
            </h1>
            <p>
              To revolutionize the industry with innovative solutions that
              deliver top-quality services and enhance user experiences.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Colombo, Sri Lanka</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+94 70 331 1371</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/quickhire_sl?igsh=b2MwOHYzbnV1YjA1&utm_source=qr">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61573150813619&mibextid=wwXIfr&mibextid=wwXIfr">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.linkedin.com/company/quickhiresl/about/?viewAsMember=true">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-16 px-28">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer" onClick={() => scrollToSection("home")}>Home</li>
                <li className="cursor-pointer" onClick={() => scrollToSection("services")}>Services</li>
                <li className="cursor-pointer" onClick={() => scrollToSection("download")}>Download</li>
                <li className="cursor-pointer" onClick={() => scrollToSection("about Us")}>About Us</li>
              
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          © 2025 All rights reserved QuickHireSL
        </div>
      </section>
    </div>
  );
};




export default Footer;









// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaLocationArrow,
//   FaMobileAlt,
//   FaTwitter,
//   FaGithub,
//   FaArrowRight
// } from "react-icons/fa";
// import footerLogo from "../../assets/logo.png";

// const Footer = () => {
//   const scrollToSection = (sectionId) => {
//     document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-blue-900 to-black pt-20 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large gradient circle */}
//         <div className="absolute bottom-0 left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        
//         {/* Grid pattern */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-300">
//           {/* Logo and mission */}
//           <div className="col-span-1 lg:col-span-1">
//             <div className="mb-6">
//               <img 
//                 src={footerLogo} 
//                 alt="QuickHireSL Logo" 
//                 className="h-12 w-auto"
//               />
//             </div>
            
//             <p className="mb-6 leading-relaxed">
//               To revolutionize the industry with innovative solutions that
//               deliver top-quality services and enhance user experiences.
//             </p>
            
//             {/* Location */}
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400">
//                 <FaLocationArrow />
//               </div>
//               <span>Colombo, Sri Lanka</span>
//             </div>
            
//             {/* Phone */}
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400">
//                 <FaMobileAlt />
//               </div>
//               <span>+94 70 331 1371</span>
//             </div>
//           </div>
          
//           {/* Navigation Links */}
//           <div className="col-span-1">
//             <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Links</h3>
//             <ul className="space-y-3">
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">Home</span>
//                 </button>
//               </li>
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("services")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">Services</span>
//                 </button>
//               </li>
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("download")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">Download</span>
//                 </button>
//               </li>
//               <li className="group transition-all duration-300 hover:translate-x-2">
//                 <button onClick={() => scrollToSection("about Us")} className="flex items-center gap-2">
//                   <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-blue-500/40 transition-colors">
//                     <FaArrowRight className="text-xs" />
//                   </div>
//                   <span className="group-hover:text-cyan-400 transition-colors">About Us</span>
//                 </button>
//               </li>
//             </ul>
//           </div>
          
//           {/* Newsletter */}
//           <div className="col-span-1 lg:col-span-2">
//             <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Join Our Newsletter</h3>
//             <p className="mb-4">Stay updated with our latest features and job opportunities</p>
            
//             <div className="flex flex-col sm:flex-row gap-2">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 className="px-4 py-3 bg-blue-900/40 rounded-lg border border-blue-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 flex-1"
//               />
//               <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-white whitespace-nowrap">
//                 Subscribe
//               </button>
//             </div>
            
//             {/* Social links */}
//             <div className="mt-8">
//               <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Follow Us</h4>
//               <div className="flex gap-4">
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaFacebook />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaInstagram />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaLinkedin />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaTwitter />
//                 </a>
//                 <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-cyan-400 hover:bg-blue-500/40 transition-colors">
//                   <FaGithub />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-8"></div>
        
//         {/* Copyright */}
//         <div className="text-center pb-8 text-gray-400">
//           © 2025 All rights reserved QuickHireSL
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;