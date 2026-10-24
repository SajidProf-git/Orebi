
import React from "react";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="bg-[#6D6D6D]/30 h-4"></div>

      <Slider {...settings}>
        {data.map((item) => (
          <NavLink key={item.id} to={item.url}>
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </NavLink>
        ))}
      </Slider>
    </section>
  );
};

export default Banner;





