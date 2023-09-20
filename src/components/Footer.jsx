import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="lg:px-24 px-4 text-white">
      <div className="flex flex-col md:flex-row flex-wrap justify-between items-start gap-12">
        <div className="space-y-4 lg:w-1/3">
          <a href="" className="text-3xl font-bold text-white">
            <span className="text-orange">A</span>rino
          </a>
          <p className=" text-gray-300">
            Welcome to arino sed ut perspiciae omunde omnis iste natus error
            sitort voluptatem accusantium.
          </p>
          <div className="flex gap-5 text-white">
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="/"
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href=""
              className=" block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Services</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
              UI/UX design
            </a>
            <a href="/" className="block">
              WP development
            </a>
            <a href="/" className="block">
              Digital marketing
            </a>
            <a href="/" className="block">
              React development
            </a>
          </div>
        </div>

        {/* contact */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <div className="space-y-3 text-gray-300">
            <a href="/" className="block">
              +44 454 7800 112
            </a>
            <a href="/" className="block">
              infotech@arino.com
            </a>
            <a href="/" className="block">
              50 Wall Street Suite, <br /> 44150 Ohio, United States
            </a>
          </div>
        </div>

        {/* newsletter */}
        <div className="space-y-4 lg:w-96">
          <h3 className="text-2xl font-semibold">Subscribe</h3>
          <div className="space-y-3 text-gray-300">
            <div className="relative w-full">
              <input
                className="newsletter_input"
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
              />
              <button className="newsletter_btn">
                <span>Send</span>
              </button>
            </div>
            <p>
              At vero eos et accusamus et iusto odio as part dignissimos ducimus
              qui blandit.
            </p>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <hr className="border-gray-300" />
      <div className="h-8"></div>

      {/* copyright text */}
      <div className="flex flex-col sm:flex-row justify-between pb-7">
        <p>Copyright © 2022 Laralink.</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
