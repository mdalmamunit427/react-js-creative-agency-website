import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" text-white relative md:-mt-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:mx-24 mx-4 md:py-20 py-12 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12"
    >
      <div className="bg-[url(/src/assets/funfact_bg.svg)] bg-no-repeat bg-center h-full w-full absolute left-0 top-0 opacity-75"></div>

      {/* left side text */}
      <div className=" md:w-2/5">
        <h2 className="text-5xl font-bold mb-5">Our fun fact</h2>
        <p className="text-gray-300">
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis.
        </p>
      </div>

      {/* right side text */}
      <div className="md:w-3/5">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">40K</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Global Happy Clients
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">50K</h4>
            <div>
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Project Completed
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">245</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tight text-gray-300">
                Team Members
              </p>
            </div>
          </div>
          <div className="flex h-auto items-center gap-3">
            <h4 className="md:text-5xl text-3xl font-semibold">550</h4>
            <div className="">
              <span className="text-orange font-bold text-lg">+</span>
              <p className="mb-2 text-sm leading-tighttext-gray-300">
                Digital products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
