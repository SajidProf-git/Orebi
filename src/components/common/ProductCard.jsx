import React from 'react';
import Image from './image'; // Make sure this path is correct for your project
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

// Inside ProductCard.jsx
const ProductCard = ({ name, img, price, category, isNew = false, isDiscount = false, discountValue = 10 }) => {
  return (
    <div className="w-full"> {/* Change w-[370px] to w-full so it adapts to the grid column */}
      <div className="group w-full h-[370px] bg-gray-100 relative overflow-hidden">
        <Image src={img} alt={name || "Product image"} className="w-full h-full object-cover" />
        
        {isNew && (
          <span className="inline-block bg-black py-2 px-8 absolute left-5 top-5 text-white font-bold z-10">
            New
          </span>
        )}
        
        {isDiscount && (
          <span className="inline-block bg-black py-2 px-8 absolute left-5 top-5 text-white font-bold z-10">
            -{discountValue}%
          </span>
        )}

        <div className="bg-white px-6 py-4 w-full absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-all duration-300 flex flex-col gap-2">
          {/* Action buttons */}
          <button className="flex justify-between items-center text-gray-600 hover:text-black font-medium">
            Add to wishlist <FaHeart />
          </button>
          <button className="flex justify-between items-center text-gray-600 hover:text-black font-medium">
            Compare <IoMdGitCompare />
          </button>
          <button className="flex justify-between items-center text-gray-600 hover:text-black font-bold">
            Add to Cart <FaShoppingCart />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <h5 className="font-bold text-lg text-black">{name}</h5>
        <span className="font-semibold text-gray-700">{price}</span>
      </div>
      
      <h6 className="mt-1 text-gray-500">{category}</h6>
    </div>
  );
};

export default ProductCard;





