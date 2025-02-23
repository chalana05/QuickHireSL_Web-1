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
