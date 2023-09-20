/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="lg:px-24 px-4" id="contact">
      <div className="relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl">
        {/* shape moving */}
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>
        <div className="cs-shape_1"></div>

        {/* cta text */}
        <div className="h-full  flex items-center justify-center">
          <div className="lg:w-1/2 mx-auto text-center px-4">
            <h2 className="lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6">
              Let's disscuse make something{" "}
              <span className="italic">cool </span> together
            </h2>
            <a
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-orange"
              href="/contact"
            >
              <span>Apply For Meeting</span>
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
