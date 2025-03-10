import React from "react";
import BiryaniImg from "../../assets/work.png";
import Vector from "../../assets/vector3.png";
import { FaUserPlus } from "react-icons/fa6"; // Account Creation
import { FaSearch } from "react-icons/fa"; // Job Searching
import { MdWork } from "react-icons/md"; // Start Working


const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div data-aos="slide-up" data-aos-duration="300" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="work process"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">How It Works</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Create an account and personalize your profile with skills and availability.
                  Tell us your skills, location, and available hours to find the best job matches.
                  <br />
                  <br />
                  Browse through available opportunities and apply for the ones you like.
                  Connect with employers, start working, and earn while managing your studies.
                </p>

                {/* Steps with new icons */}
                <div className="flex gap-6">
                  {/* Step 1: Account Creation */}
                  <div className="flex flex-col items-center text-center">
                    <FaUserPlus className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p className="text-sm mt-2 text-gray-600">Create Account</p>
                  </div>

                  {/* Step 2: Job Searching */}
                  <div className="flex flex-col items-center text-center">
                    <FaSearch className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p className="text-sm mt-2 text-gray-600">Find Jobs</p>
                  </div>

                  {/* Step 3: Start Working */}
                  <div className="flex flex-col items-center text-center">
                    <MdWork className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                    <p className="text-sm mt-2 text-gray-600">Start Working</p>
                  </div>
                </div>

                {/* Contact Button */}
                <div>
                <button
                  onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                  Contact Us
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;





// import React from "react";
// import BiryaniImg from "../../assets/work.png";
// import { FaUserPlus } from "react-icons/fa6"; // Account Creation
// import { FaSearch } from "react-icons/fa"; // Job Searching
// import { MdWork } from "react-icons/md"; // Start Working

// const Banner = () => {
//   return (
//     <>
//       <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white min-h-[550px]">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Large gradient circle */}
//           <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          
//           {/* Small circles */}
//           <div className="absolute top-1/4 right-10 w-32 h-32 bg-sky-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '7s'}}></div>
//           <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '8s'}}></div>
          
//           {/* Grid pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//         </div>

//         <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative z-10">
//           <div data-aos="slide-up" data-aos-duration="300" className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {/* Image section */}
//               <div className="relative">
//                 {/* Decorative elements */}
//                 <div className="absolute -z-10 inset-0">
//                   <div className="absolute top-1/3 left-1/4 w-16 h-16 border border-blue-500/30 rounded-full"></div>
//                   <div className="absolute bottom-1/4 right-1/3 w-24 h-24 border border-cyan-500/20 rounded-full"></div>
//                 </div>
                
//                 {/* Main image with glow */}
//                 <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-1">
//                   <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 rounded-2xl p-6">
//                     <div className="relative">
//                       {/* Image glow */}
//                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-2xl -z-10"></div>
                      
//                       {/* Animated image */}
//                       <img
//                         src={BiryaniImg}
//                         alt="work process"
//                         className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Text content section */}
//               <div className="flex flex-col justify-center gap-6 sm:pt-0 text-white">
//                 <h1 className="text-3xl sm:text-4xl font-bold">
//                   <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500">
//                     How It Works
//                   </span>
//                 </h1>
//                 <p className="text-gray-300 tracking-wide leading-5">
//                   Create an account and personalize your profile with skills and availability.
//                   Tell us your skills, location, and available hours to find the best job matches.
//                   <br />
//                   <br />
//                   Browse through available opportunities and apply for the ones you like.
//                   Connect with employers, start working, and earn while managing your studies.
//                 </p>

//                 {/* Steps with icons and animations */}
//                 <div className="flex gap-6">
//                   {/* Step 1: Account Creation */}
//                   <div className="flex flex-col items-center text-center group">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                       <div className="relative">
//                         <FaUserPlus className="text-4xl h-20 w-20 p-5 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/10 text-white group-hover:-translate-y-1 transition-all duration-300" />
//                       </div>
//                     </div>
//                     <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Create Account</p>
//                   </div>

//                   {/* Step 2: Job Searching */}
//                   <div className="flex flex-col items-center text-center group">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                       <div className="relative">
//                         <FaSearch className="text-4xl h-20 w-20 p-5 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/10 text-white group-hover:-translate-y-1 transition-all duration-300" />
//                       </div>
//                     </div>
//                     <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Find Jobs</p>
//                   </div>

//                   {/* Step 3: Start Working */}
//                   <div className="flex flex-col items-center text-center group">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
//                       <div className="relative">
//                         <MdWork className="text-4xl h-20 w-20 p-5 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/10 text-white group-hover:-translate-y-1 transition-all duration-300" />
//                       </div>
//                     </div>
//                     <p className="text-sm mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">Start Working</p>
//                   </div>
//                 </div>

//                 {/* Contact Button with animation */}
//                 <div className="mt-4">
//                   <button
//                     onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
//                     className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
//                     Contact Us
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add CSS for animations */}
//         <style jsx>{`
//           @keyframes float {
//             0% { transform: translateY(0px); }
//             50% { transform: translateY(-10px); }
//             100% { transform: translateY(0px); }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default Banner;
