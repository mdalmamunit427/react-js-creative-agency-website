import React from "react";
import { BsArrowRight } from "react-icons/bs";
// images
import service1 from "../assets/service_1.jpeg";
import service2 from "../assets/service_2.jpeg";
import service3 from "../assets/service_3.jpeg";
import service4 from "../assets/service_4.jpeg";

const Services = () => {
    
  return (
    <div className="text-white lg:px-24 px-4">
      <div className="h-36"></div>

      {/* service section */}
      <div className="lg:flex lg:justify-between items-start" id="services">
        {/* contents */}
        <div className="lg:w-1/3 space-y-5">
          <h4 className="text-gray-200 font-semibold text-2xl">
            What Can We Do
          </h4>
          <h2 className="text-5xl font-bold mb-5 leading-snug">
            Services we can help you with
          </h2>
          <a
            className="inline-flex items-center gap-2 font-semibold mt-5 hover:underline underline-offset-4 hover:text-orange transition-all ease-in duration-300"
            href="/"
          >
            <span>See All Services</span>
            <BsArrowRight />
          </a>
        </div>

        {/* cards */}
        <div className="lg:w-2/3 my-8">
          <div className="flex flex-wrap">
            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="lg:w-1/4 sm:w-5/12 mx-auto my-auto hover:shadow-lg hover:shadow-orange rounded-2xl transition-all duration-300">
              <a className="rounded-2xl block relative" href="/">
                <img src={service1} alt="Service" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                    UI/UX design
                  </h2>
                </div>
              </a>
            </div>
            <div className="lg:w-1/4 hidden md:block"></div>
            <div className="service-cards">
              <a className="rounded-2xl block relative" href="/">
                <img src={service2} alt="Service" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                  React.js Development
                  </h2>
                </div>
              </a>
            </div>

            <div className="service-cards">
              <a className="rounded-2xl block relative" href="/">
                <img src={service3} alt="Service" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                  Digital Marketing
                  </h2>
                </div>
              </a>
            </div>
            <div className="lg:w-1/4 hidden lg:block"></div>
            <div className="service-cards">
              <a className="rounded-2xl block relative" href="/">
                <img src={service4} alt="Service" className="rounded-2xl" />
                <div className="absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl"></div>
                <div className="absolute top-1/3 left-4 right-0">
                  <span className="w-3 h-3 block rounded-full bg-orange mb-2"></span>
                  <h2 className="text-2xl font-bold text-white">
                  Technology
                  </h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-36"></div>
    </div>
  );
};

export default Services;
