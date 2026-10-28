import React from 'react'
import Container from '../../common/Container'
import Product1 from '../../../assets/images/product_1.jpg'
import Product2 from '../../../assets/images/product_2.jpg'
import Product3 from '../../../assets/images/product_3.jpg'
import ProductCard from '../../common/ProductCard'

const data = [
    {
        id: 1,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product1,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 2,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product2,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 3,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product3,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 4,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product1,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 4,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product1,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 4,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product1,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 4,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product1,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
    {
        id: 4,
        name: "Basic Crew Neck Tee",
        price: "$44.00",
        category: "Black",
        img: Product1,
        isDiscount: false,
        discountValue: null,
        isNew: true
    },
]

const NewArrible = () => {
    return (
        <section className="pb-[118px]">
            <Container>
                <h2 className="pb-9 text-[40px] font-bold">New Arrivals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item) => (
                        <ProductCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        img={item.img}
                        isDiscount={item.isDiscount}
                        discountValue={item.discountValue}
                        isNew={item.isNew}
                        />
                    ))}
                    </div>
            </Container>
        </section>
    )
}

export default NewArrible






