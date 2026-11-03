import React, { useState } from 'react';
import Container from '../../components/common/Container';
import ProductCard from '../../components/common/ProductCard';

import Product1 from '../../assets/images/product_1.jpg';
import Product2 from '../../assets/images/product_2.jpg';
import Product3 from '../../assets/images/product_3.jpg';

// Icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { FaBars, FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

// 15 Total Products
const shopData = [
    { id: 1, name: "Basic Crew Neck Tee", price: "$44.00", category: "Black", img: Product1, isNew: true, isDiscount: false },
    { id: 2, name: "Classic Knit Basket", price: "$35.00", category: "Home Decor", img: Product2, isNew: false, isDiscount: true, discountValue: 10 },
    { id: 3, name: "Modern Minimalist Clock", price: "$59.00", category: "Accessories", img: Product3, isNew: false, isDiscount: false },
    { id: 4, name: "Urban Snapback Cap", price: "$25.00", category: "Fashion", img: Product1, isNew: false, isDiscount: false },
    { id: 5, name: "Wireless Headphones", price: "$120.00", category: "Electronics", img: Product2, isNew: true, isDiscount: false },
    { id: 6, name: "Designer Coffee Table", price: "$210.00", category: "Furniture", img: Product3, isNew: false, isDiscount: false },
    { id: 7, name: "Classic Wayfarer Sunglasses", price: "$40.00", category: "Accessories", img: Product1, isNew: false, isDiscount: true, discountValue: 15 },
    { id: 8, name: "Ergonomic Office Chair", price: "$150.00", category: "Furniture", img: Product2, isNew: false, isDiscount: false },
    { id: 9, name: "Minimalist Desk Lamp", price: "$45.00", category: "Home Decor", img: Product3, isNew: true, isDiscount: false },
    { id: 10, name: "Cotton Casual Hoodie", price: "$65.00", category: "Fashion", img: Product1, isNew: false, isDiscount: false },
    { id: 11, name: "Smart Fitness Watch", price: "$89.00", category: "Electronics", img: Product2, isNew: false, isDiscount: true, discountValue: 20 },
    { id: 12, name: "Leather Travel Backpack", price: "$95.00", category: "Accessories", img: Product3, isNew: true, isDiscount: false },
    { id: 13, name: "Ceramic Tea Mug Set", price: "$28.00", category: "Home Decor", img: Product1, isNew: false, isDiscount: false },
    { id: 14, name: "Bluetooth Pocket Speaker", price: "$45.00", category: "Electronics", img: Product2, isNew: false, isDiscount: false },
    { id: 15, name: "Classic Denim Jacket", price: "$80.00", category: "Fashion", img: Product3, isNew: true, isDiscount: false },
];

const Shopindex = () => {
    // Accordion toggles
    const [openCategory, setOpenCategory] = useState(true);
    const [openColor, setOpenColor] = useState(false);
    const [openBrand, setOpenBrand] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);

    // View mode toggle
    const [isGridView, setIsGridView] = useState(true);

    return (
        <section className="py-12">
            <Container>
                <div className="flex flex-col lg:flex-row gap-8">
                    
                    {/* LEFT SIDEBAR */}
                    <div className="w-full lg:w-1/4 space-y-6">
                        
                        {/* Shop by Category */}
                        <div className="border-b pb-4">
                            <button 
                                onClick={() => setOpenCategory(!openCategory)} 
                                className="w-full font-bold text-lg flex justify-between items-center cursor-pointer text-left"
                            >
                                Shop by Category 
                                {openCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            
                            {openCategory && (
                                <ul className="mt-3 space-y-3 text-gray-600">
                                    <li className="flex justify-between cursor-pointer hover:text-black">Category 1 <span>+</span></li>
                                    <li className="cursor-pointer hover:text-black">Category 2</li>
                                    <li className="flex justify-between cursor-pointer hover:text-black">Category 3 <span>+</span></li>
                                    <li className="cursor-pointer hover:text-black">Category 4</li>
                                    <li className="cursor-pointer hover:text-black">Category 5</li>
                                </ul>
                            )}
                        </div>

                        {/* Shop by Color */}
                        <div className="border-b pb-4">
                            <button 
                                onClick={() => setOpenColor(!openColor)} 
                                className="w-full font-bold text-lg flex justify-between items-center cursor-pointer text-left"
                            >
                                Shop by Color 
                                {openColor ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            
                            {openColor && (
                                <ul className="mt-3 space-y-3 text-gray-600">
                                    <li className="flex items-center gap-2 cursor-pointer hover:text-black"><span className="w-3 h-3 rounded-full bg-black"></span> Color 1</li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:text-black"><span className="w-3 h-3 rounded-full bg-red-400"></span> Color 2</li>
                                    <li className="flex items-center gap-2 cursor-pointer hover:text-black"><span className="w-3 h-3 rounded-full bg-green-500"></span> Color 3</li>
                                </ul>
                            )}
                        </div>

                        {/* Shop by Brand */}
                        <div className="border-b pb-4">
                            <button 
                                onClick={() => setOpenBrand(!openBrand)} 
                                className="w-full font-bold text-lg flex justify-between items-center cursor-pointer text-left"
                            >
                                Shop by Brand 
                                {openBrand ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            
                            {openBrand && (
                                <ul className="mt-3 space-y-3 text-gray-600">
                                    <li className="cursor-pointer hover:text-black">Brand 1</li>
                                    <li className="cursor-pointer hover:text-black">Brand 2</li>
                                    <li className="cursor-pointer hover:text-black">Brand 3</li>
                                </ul>
                            )}
                        </div>

                        {/* Shop by Price */}
                        <div className="border-b pb-4">
                            <button 
                                onClick={() => setOpenPrice(!openPrice)} 
                                className="w-full font-bold text-lg flex justify-between items-center cursor-pointer text-left"
                            >
                                Shop by Price 
                                {openPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </button>
                            
                            {openPrice && (
                                <ul className="mt-3 space-y-3 text-gray-600">
                                    <li className="cursor-pointer hover:text-black">$0.00 - $9.99</li>
                                    <li className="cursor-pointer hover:text-black">$10.00 - $19.99</li>
                                    <li className="cursor-pointer hover:text-black">$20.00 - $29.99</li>
                                </ul>
                            )}
                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full lg:w-3/4">
                        
                        {/* Top Controls Bar */}
                        <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-8 gap-4">
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => setIsGridView(true)} 
                                    className={`p-2 rounded cursor-pointer ${isGridView ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                                    title="Grid View"
                                >
                                    <BsGridFill className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => setIsGridView(false)} 
                                    className={`p-2 rounded cursor-pointer ${!isGridView ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
                                    title="Large/List View"
                                >
                                    <FaBars className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span>Sort by:</span>
                                    <select className="border p-2 rounded bg-white outline-none">
                                        <option>Featured</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <span>Show:</span>
                                    <select className="border p-2 rounded bg-white outline-none">
                                        <option>12</option>
                                        <option>24</option>
                                        <option>36</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* PRODUCTS DISPLAY */}
                        {isGridView ? (
                            /* STRICT 3-COLUMN × 3-ROW GRID */
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {shopData.slice(0, 9).map((item) => (
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
                        ) : (
                            /* LARGE / LIST VIEW */
                            <div className="flex flex-col gap-6">
                                {shopData.slice(0, 9).map((item) => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 border p-4 rounded-lg bg-white shadow-sm">
                                        <div className="w-full sm:w-1/3 bg-gray-100 h-48 relative overflow-hidden flex items-center justify-center">
                                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-full sm:w-2/3 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-xl text-black">{item.name}</h4>
                                                <p className="text-gray-500 mt-1">{item.category}</p>
                                                <p className="font-bold text-lg text-black mt-2">{item.price}</p>
                                            </div>
                                            <div className="flex items-center gap-4 mt-4">
                                                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                                                    <FaHeart /> Wishlist
                                                </button>
                                                <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                                                    <IoMdGitCompare /> Compare
                                                </button>
                                                <button className="flex items-center gap-1 text-sm font-bold bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800">
                                                    <FaShoppingCart /> Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination */}
                        <div className="flex flex-wrap justify-between items-center mt-12 pt-6 border-t">
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 bg-black text-white font-bold rounded flex items-center justify-center">1</button>
                                <button className="w-8 h-8 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded flex items-center justify-center">2</button>
                            </div>
                            <span className="text-sm text-gray-500">Products from 1 to 9 of 15</span>
                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Shopindex;