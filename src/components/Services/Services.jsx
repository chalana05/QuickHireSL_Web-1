import React from "react";
import Img from "../../assets/jobmatching.png";
import Img2 from "../../assets/inapp.png";
import Img3 from "../../assets/messaging.png";
import Img4 from "../../assets/notify.png";
import Img5 from "../../assets/review.png";
import Img6 from "../../assets/Nationwide.png";
import StarRatings from "react-star-ratings";


const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Smart Job Matching",
    description:
      "Get jobs based on your skills, availability, and location.",
  },
  {
    id: 2,
    img: Img4,
    name: "Real Time Notification",
    description:
      "Never miss a job opportunity with instant alerts.",
  },
  {
    id: 3,
    img: Img3,
    name: "In-App Messaging",
    description:
      "Chat with employers directly through the app.",
  },
  {
    id: 4,
    img: Img2,
    name: "Location-Based Jobs",
    description:
      "Find part-time jobs near your university or home.",
  },
  {
    id: 5,
    img: Img5,
    name: "User review",
    description:
      "Share and read reviews from real job seekers.",
  },
  {
    id: 6,
    img: Img6,
    name: "Nationwide Jobs",
    description:
      "Explore job opportunities across the country.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
            Why Choose QuickHireSL
            </p>
            <h1 className="text-3xl font-bold py-3">Services</h1>
            <p className="text-sm text-gray-400 ">
              Find Flexible Jobs That Fit Your Schedule
              QuickHireSL connects university students with part-time jobs effortlessly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full ">
                    {/* <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      // starSelectingHoverColor
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    /> */}
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;


// import React from "react";
// import Img from "../../assets/jobmatching.png";
// import Img2 from "../../assets/inapp.png";
// import Img3 from "../../assets/messaging.png";

// const ServicesData = [
//   {
//     id: 1,
//     img: Img,
//     name: "Smart Job Matching",
//     description:
//       "Get jobs based on your skills, availability, and location.",
//     bgColor: "from-blue-500 to-cyan-500"
//   },
//   {
//     id: 2,
//     img: Img3,
//     name: "In-App Messaging",
//     description:
//       "Never miss a job opportunity with instant alerts.",
//     bgColor: "from-cyan-500 to-blue-600"
//   },
//   {
//     id: 3,
//     img: Img2,
//     name: "Location-Based Jobs",
//     description:
//       "Chat with employers directly through the app.",
//     bgColor: "from-blue-600 to-cyan-400"
//   },
// ];

// const Services = () => {
//   return (
//     <>
//       <span id="services"></span>
//       <div className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 relative overflow-hidden">
//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* Large gradient circle */}
//           <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
//           {/* Small circles */}
//           <div className="absolute top-1/3 right-10 w-24 h-24 bg-sky-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '9s'}}></div>
//           <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{animationDuration: '6s'}}></div>
          
//           {/* Grid pattern */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2aDI0di0yNkgzNnpNMCAzNHYyNmgyNHYtMjZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <div className="text-center mb-20 max-w-[600px] mx-auto">
//             <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
//               Why Choose QuickHireSL
//             </p>
//             <h1 className="text-3xl md:text-4xl font-bold py-3 text-white">Our Services</h1>
//             <p className="text-gray-300">
//               Find Flexible Jobs That Fit Your Schedule.
//               QuickHireSL connects university students with part-time jobs effortlessly.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//             {ServicesData.map((service) => (
//               <div
//                 key={service.id}
//                 data-aos="zoom-in"
//                 data-aos-duration="300"
//                 className="group w-full max-w-[350px] h-full"
//               >
//                 <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 h-full">
//                   {/* Card top with image */}
//                   <div className="h-[130px] bg-gradient-to-r bg-opacity-70 relative overflow-hidden rounded-t-2xl p-6">
//                     {/* Background gradient */}
//                     <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} opacity-20`}></div>
                    
//                     {/* Animated circles */}
//                     <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-white/20 rounded-full animate-pulse opacity-70"></div>
//                     <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse opacity-50" style={{animationDuration: '7s'}}></div>
                    
//                     {/* Image */}
//                     <img
//                       src={service.img}
//                       alt={service.name}
//                       className="max-w-[100px] h-[100px] object-contain block mx-auto transform -translate-y-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
//                     />
//                   </div>
                  
//                   {/* Card content */}
//                   <div className="p-6 text-center">
//                     <h1 className="text-xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
//                       {service.name}
//                     </h1>
//                     <p className="text-gray-300 text-sm">
//                       {service.description}
//                     </p>
                    
//                     {/* Animated button */}
//                     <div className="mt-6">
//                       <button className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-gray-300 hover:bg-blue-500/30 transition-all duration-300 backdrop-blur-sm">
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* CTA button */}
//           <div className="text-center mt-16">
//             <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 text-white">
//               Explore All Services
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* CSS for animations */}
//       <style jsx>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//           100% { transform: translateY(0px); }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Services;