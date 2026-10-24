
import React, { useState } from "react";
import bannerImage from "../../../assets/images/banner.jpg";
import Image from "../../common/image";
import { NavLink } from "react-router-dom";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default || SliderModule;

const data = [
  {
    id: 1,
    title: "banner 1",
    image: bannerImage,
    url: "#",
  },
  {
    id: 2,
    title: "banner 2",
    image: bannerImage,
    url: "#",
  },
  {
    id: 3,
    title: "banner 3",
    image: bannerImage,
    url: "#",
  },
];

const Banner = () => {
   const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setDotActive(next),
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          bottom: "unset",
          transform: "translateY(-50%)",
          display: "inline-block",
          width: "0px",
          padding: "15px"
        }}
      >
        <ul style={{margin: "0px"}}> {dots} </ul>
      </div>
    ),
     customPaging: i => (
      <div
       style={
        i === dotActive
        ?
        {
          width: "30px",
          color: "#262626",
          borderRight: "3px blue solid",
        }
        :
        {
          width: "30px",
          color: "transparent",
          borderRight: "3px white solid",

        }
       
      }
      >
        0{i+1}
      </div>
     )
  };

  return (
    <section className="overflow-x-clip ">
      <div className="bg-[#6D6D6D]/30 h-4"></div>
      <div className="relative">
      <Slider {...settings}>
        {data.map((item) => (
          <NavLink key={item.id} to={item.url} className="w-full outline-none">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </NavLink>
        ))}
      </Slider>

      </div>
    </section>
  );
};

export default Banner;





