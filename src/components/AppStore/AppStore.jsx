import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Gif from "../../assets/downloadnow.png";


const AppStore = () => {
  return (
    <>
    <span id="download"></span>
      <div className="bg-gray-100 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                QuickHireSL is available for Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="https://play.google.com/store/appsa">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="https://www.apple.com/app-store/">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="mobile bike"
                className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;






// import React from "react";
// import AppStoreImg from "../../assets/app_store.png";
// import PlayStoreImg from "../../assets/play_store.png";
// import Gif from "../../assets/downloadnow.png";

// const AppStore = () => {
//   return (
//     <>
//       <span id="download"></span>
//       <div className="relative overflow-hidden bg-gradient-to-b from-blue-800 to-blue-900 text-white py-20">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Large gradient circle */}
//           <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          
//           {/* Small circles */}
//           <div className="absolute top-1/4 left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '8s'}}></div>
//           <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '7s'}}></div>
          
//           {/* Grid pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
//             <div
//               data-aos="fade-up"
//               data-aos-duration="300"
//               className="space-y-6 max-w-xl mx-auto"
//             >
//               <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
//                 <span className="block mb-2 text-gray-300">Download Now</span>
//                 <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500">
//                   QuickHireSL
//                 </span>
//                 <span className="block mt-2">Available for Android and iOS</span>
//               </h1>
              
//               <p className="text-gray-300 text-center sm:text-left">
//                 Find flexible jobs, message employers, and manage your schedule all from your mobile device.
//               </p>
              
//               <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
//                 <a href="#" className="transition-transform hover:scale-105 duration-300">
//                   <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-1 rounded-xl backdrop-blur-md">
//                     <img
//                       src={PlayStoreImg}
//                       alt="Play store"
//                       className="max-w-[150px] sm:max-w-[120px] md:max-w-[180px]"
//                     />
//                   </div>
//                 </a>
//                 <a href="#" className="transition-transform hover:scale-105 duration-300">
//                   <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-1 rounded-xl backdrop-blur-md">
//                     <img
//                       src={AppStoreImg}
//                       alt="App store"
//                       className="max-w-[150px] sm:max-w-[120px] md:max-w-[180px]"
//                     />
//                   </div>
//                 </a>
//               </div>
              
//               {/* QR code */}
//               <div className="flex justify-center sm:justify-start">
//                 <div className="bg-white p-1 rounded-md inline-flex flex-col items-center">
//                   <div className="bg-blue-900/10 p-2 rounded-md">
//                     {/* This is a placeholder for a QR code - replace with actual QR code or remove if not needed */}
//                     <div className="w-24 h-24 grid grid-cols-5 grid-rows-5 gap-1">
//                       {Array(25).fill(0).map((_, i) => (
//                         <div key={i} className={`${Math.random() > 0.7 ? 'bg-blue-900' : 'bg-transparent'}`}></div>
//                       ))}
//                     </div>
//                   </div>
//                   <p className="text-xs text-blue-900 mt-1">Scan to download</p>
//                 </div>
//               </div>
//             </div>

//             <div 
//               data-aos="zoom-in" 
//               data-aos-duration="300"
//               className="relative"
//             >
//               {/* Decorative elements */}
//               <div className="absolute -z-10 inset-0">
//                 <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-cyan-500/30 rounded-full"></div>
//                 <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-blue-500/20 rounded-full"></div>
//               </div>
              
//               {/* Main image with glow */}
//               <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-1">
//                 <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 rounded-2xl p-6">
//                   <div className="relative">
//                     {/* Image glow */}
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl -z-10"></div>
                    
//                     {/* Device image with floating animation */}
//                     <img
//                       src={Gif}
//                       alt="QuickHireSL Mobile App"
//                       className="w-full sm:max-w-[80%] block mx-auto rounded-md animate-float"
//                       style={{animationDuration: '6s'}}
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               {/* Device mockup accent elements */}
//               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 h-2 w-32 rounded-full blur-md"></div>
//             </div>
//           </div>
//         </div>
        
//         {/* CSS for animations */}
//         <style jsx>{`
//           @keyframes float {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0px); }
//           }
//           .animate-float {
//             animation: float 6s ease-in-out infinite;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default AppStore;