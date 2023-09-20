import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-scroll";

const PortfolioSlider = () => {
  const portfolioData = [
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_3.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_1.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_0.jpg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_2.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_3.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_1.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_0.jpg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_2.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_3.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_1.jpeg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_0.jpg",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/portfolio/portfolio-details",
      src: "images/portfolio_2.jpeg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4 lg:-mx-64">
      {portfolioData.map((item, index) => (
        <Link to="/" key={index} className={`cs-portfolio cs-bg relative`}>
          <>
            <div className=" absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl" />
            <div>
              <img src={item.src} alt="" />
            </div>
            <div className="absolute top-0 left-0 hover:bg-orange/80 w-full h-full flex items-center justify-center rounded-2xl cursor-pointer">
              <div className=" text-center">
                <h2 className="text-2xl mb-1 font-semibold">{item.title}</h2>
                <div className="cs-portfolio_subtitle">{item.subtitle}</div>
              </div>
            </div>
          </>
        </Link>
      ))}
    </Slider>
  );
};

export default PortfolioSlider;
