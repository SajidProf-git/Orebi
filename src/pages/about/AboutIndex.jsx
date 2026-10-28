


import React from "react";
import Container from "../../components/common/Container";
import Product1 from '../../assets/images/product_1.jpg'
import Product2 from '../../assets/images/product_2.jpg'
import PrimaryButton from "../../components/common/PrimaryButton";
import BreadCrumb from "../../components/common/BreadCrumb";


const AboutIndex = () => {
  const aboutItems = [
    {
      title: "Our Vision",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Our Story",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.",
    },
    {
      title: "Our Brands",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const promoItems = [
    {
      title: "Our Brands",
      img: Product1,
      alt: "Minimal black clock",
    },
    {
      title: "Our Stores",
      img: Product2,
      alt: "Woven storage basket",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
        <Container>
            <div className="py-10">
                <BreadCrumb pageLabel="About" rootpage="Home"/>
            </div>
            <div className="mx-auto w-[90%] max-w-[1200px]">

                {/* Cards */}
                <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-2">
                {promoItems.map((item) => (
                    <div
                    key={item.title}
                    className="flex flex-col items-center justify-between bg-[#f8f8f8] p-5 sm:p-6 md:p-8"
                    >
                    <div className="flex aspect-square w-full items-center justify-center">
                        <img
                        src={item.img}
                        alt={item.alt}
                        className="h-full w-full object-contain"
                        />
                    </div>
                    <PrimaryButton label="Our Brands"/>
                    </div>
                ))}
                </div>

                {/* Introduction */}
                <div className="mt-12 md:mt-16">
                <p className="max-w-[1000px] text-lg leading-relaxed text-[#292929] md:text-xl">
                    Orebi is one of the world’s leading ecommerce brands and is
                    internationally recognized for celebrating the essence of
                    classic Worldwide cool looking style.
                </p>
                </div>

                {/* About Information */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-7">
                {aboutItems.map((item) => (
                    <div key={item.title}>
                    <h3 className="mb-3 text-sm font-semibold text-[#252525]">
                        {item.title}
                    </h3>

                    <p className="text-xs leading-[1.9] text-[#777777]">
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>

            </div>
        </Container>
    </section>
  );
};

export default AboutIndex;

