import React from 'react'
import Container from '../../common/Container'

import ProductCard from '../../common/ProductCard'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { productData } from '../../../dummyData/productData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const NewArrible = () => {  
    return (
        <section className="pb-[118px]">
            <Container className=''>
                <h2 className="pb-9 text-[40px] font-bold">New Arrivals</h2>
                <div className="mt-12 relative">
                    <button className='prev-arrow size-16 hover:bg-black transition-all duration-300 flex items-center justify-center bg-black/20 rounded-full 
                    absolute left-0 top-[calc(50%-45px)] cursor-pointer -translate-y-1/2 z-50'><FaLongArrowAltLeft className='text-xl text-white'/></button>
                    
                    <button className='next-arrow size-16 hover:bg-black transition-all duration-300 flex items-center justify-center bg-black/20 rounded-full 
                    absolute right-0 top-[calc(50%-45px)] cursor-pointer -translate-y-1/2 z-50'><FaLongArrowAltRight className='text-xl text-white'/></button>
                
                     <Swiper
                        slidesPerView={4}
                        spaceBetween={40}
                        freeMode={true}
                        pagination={false}
                        loop={true}
                        navigation={{
                            nextEl: '.next-arrow',
                            prevEl: '.prev-arrow',
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                        >
                        
                        {productData.map((item, index) => (
                            <SwiperSlide>
                            <div key={index} className=''>
                                <ProductCard
                                name={item.name}
                                price={item.price}
                                category={item.category}
                                img={item.img}
                                isDiscount={item.isDiscount}
                                discountValue={item.discountValue}
                                isNew={item.isNew}
                                />
                            </div>
                            </SwiperSlide>
                        ))}
                        
                    </Swiper>
                    </div>
            </Container>
        </section>
    )
}

export default NewArrible






