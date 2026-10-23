import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Input from '../../components/common/Input'
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import PrimaryButton from '../../components/common/PrimaryButton';




const Cartindex = () => {
  return (
    <section className='py-31'>
      <Container>
          <BreadCrumb pageLabel="Cart" rootpage="Home"/>
          <div>
            {/* Table header */}
            <div className='bg-gray_1 py-8 px-5 mt-32 grid grid-cols-4'>
              <div>
                <h6 className='font-bold text-base text-black'>Product</h6>
              </div>
              <div>
                <h6 className='font-bold text-base text-black'>Price</h6>
              </div>
              <div>
                <h6 className='font-bold text-base text-black'>Quantity</h6>
              </div>
              <div>
                <h6 className='font-bold text-base text-black'>Total</h6>
              </div>
            </div>
            {/* Table Body */}
            {[0,1,2,3].map((item,index) =>(
            <div key={index} className='border-x border-b last:border-b-0 border-[#F0F0F0] py-7.5 px-5 grid grid-cols-4'>
               <div className='flex items-center gap-5'>
                <IoClose className='cursor-pointer text-xl'/>
                <div className='size-25 bg-red-400 overflow-hidden'></div>
                <div className='font-bold text-base'>Product Name</div>
               </div>
               <div className='flex items-center'>
                <span className='font-bold text-xl'>$44.00</span>
               </div>
               <div className='flex items-center'>
                <div className='border border-[#F0F0F0] px-5 py-2 inline-flex gap-9'>
                 <button className='cursor-pointer'>
                  <FaMinus />
                </button>
                <span>1</span> 
                <button className='cursor-pointer'>
                  <FaPlus />
                </button>
                  
                </div>
               </div>
               <div className='flex items-center'>
                <span className='font-bold text-xl'>$44.00</span>
               </div>
            </div>
            ))
            }
            {/* Table footer */}
            <div className='flex items-center justify-between border border-[#F0F0F0] p-5'>
              <div className='flex items-center gap-6'>
                <Input type="select" className="border border-[#F0F0F0] outline-0 h-12.5 px-2" placeholder="Coupon Code"/>
                <button className='text-sm font-bold leading-6.5 text-[#262626] cursor-pointer'>Apply Coupon</button>
              </div>
              <div>
                <button className='text-sm font-bold leading-6.5 text-[#262626] cursor-pointer'>Update Cart</button>
              </div>
            </div>
          </div>
          <div className='ml-auto w-[644px] mt-13'>
            <h5 className='text-right font-bold text-xl text-[#262626]'>Cart Totals</h5>
            <div className='py-2 px-2 border  border-[#F0F0F0] mt-6 grid grid-cols-2  gap-2'>
              
              <div>
                <h6 className='font-bold text-base border-b border-r border-[#F0F0F0] text-black'>Subtotal</h6>
              </div>
              <div>
                <h6 className='font-bold text-base border-b border-r border-[#F0F0F0] text-gray_3'>389.99 $</h6>
              </div>
              <div>
                <h6 className='font-bold text-base border-r border-[#F0F0F0] text-black'>Total</h6>
              </div>
              <div>
                <h6 className='font-bold text-base border-r border-[#F0F0F0] text-black'>389.99 $</h6>
              </div>
            </div>
            <div className='flex items-center justify-end pt-10'>
              <PrimaryButton url="/cart" label="Proceed to Checkout"/>
            </div>
          </div>
      </Container>
    </section>
  )
}

export default Cartindex
