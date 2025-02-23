import React from "react";
import Slider from "react-slick";
import kovida from "../../assets/kovida.jpg";
import chalana from "../../assets/chalana.jpg";
import nandun from "../../assets/nandun.jpg";
import devinda from "../../assets/devvinda.jpg";
import pasan from "../../assets/pasana.png";
import rasali from "../../assets/rasali.jpg";

const testimonialData = [
  {
    id: 1,
    name: "Kovida Opatha",
    text: "Founder and Team lead of QuickHireSL",
    img: kovida,
  },
  {
    id: 2,
    name: "Chalana Sayuranga",
    text: "Frontend-dev & Content Creator",
    img: chalana,
  },
  {
    id: 3,
    name: "Nandun Disanayake",
    text: "Backend-dev",
    img: nandun,
  },
  {
    id: 4,
    name: "Devinda Bandara",
    text: "Frontend-dev",
    img: devinda,
  },
  {
    id: 5,
    name: "Damindu Pasan",
    text: "Frontend-dev",
    img: pasan,
  },
  {
    id: 6,
    name: "Rasali Oshadi",
    text: "Frontend-dev",
    img: rasali,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
    <span id="about Us"></span>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary py-3">
              About Us
            </p>
            <h1 className="text-3xl font-bold py-3">Meet Our Team</h1>
            <p className="text-lg text-gray-400">
              We're a passionate team of innovators dedicated to revolutionizing skill sharing and learning.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div key={data.id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        className="rounded-full block mx-auto w-32 h-32 object-cover"
                        src={data.img}
                        alt={data.name}
                      />
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
