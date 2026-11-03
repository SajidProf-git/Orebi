import React from 'react'
import Container from '../../common/Container'
import {productData} from '../../../dummyData/productData'
import ProductCard from '../../common/ProductCard'


const BestSellar = ({sectionTitle}) => {
  return (
     <section className="pb-[118px]">
            <Container className=''>
                <h2 className="pb-9 text-[40px] font-bold">{sectionTitle}</h2>
                <div className="mt-12 grid grid-cols-4 gap-5">    
                        {productData.slice(0,4).map((item, index) => (
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
                        ))}
                        
                    
                    </div>
            </Container>
        </section>
  )
}

export default BestSellar
