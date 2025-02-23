import React from "react";
import Img from "../../assets/jobmatching.png";
import Img2 from "../../assets/inapp.png";
import Img3 from "../../assets/messaging.png";
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
    img: Img3,
    name: "In-App Messaging",
    description:
      "Never miss a job opportunity with instant alerts.",
  },
  {
    id: 3,
    img: Img2,
    name: "Location-Based Jobs",
    description:
      "Chat with employers directly through the app.",
  },
  // {
  //   id: 3,
  //   img: Img2,
  //   name: "Location-Based Jobs",
  //   description:
  //     "Find part-time jobs near your university or home.",
  // },
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
