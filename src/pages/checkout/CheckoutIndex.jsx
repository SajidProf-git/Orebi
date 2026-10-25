import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Peragraph from '../../components/common/Peragraph'
import Input from '../../components/common/Input'
import PrimaryButton from '../../components/common/PrimaryButton'

const CheckoutIndex = () => {

    



  return (
    <section className='py-31'>
        <Container>
            <BreadCrumb pageLabel="Checkout" rootpage="Home"/>
            <Peragraph className="py-20" text="Have a coupon? Click here to enter your code" />
            <div>
                <h5 className='font-bold text-black text-3xl'>Billing Details</h5>
                <div className=' py-7.5 grid grid-cols-2 gap-10'>
                    <div className='flex flex-col'>
                    <label className='font-bold text-base leading-6 text-gray_2'>First Name*</label>
                    <Input  type="text" placeholder="Enter Your first name" name="first name" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                    */}
                    </div>
                    <div className='flex flex-col'>
                    <label className='font-bold text-base leading-6 text-gray_2'>Last Name*</label>
                    <Input  type="text" placeholder="Enter Your last name" name="first name" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                         */}
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Companye Name (optional)</label>
                    <Input  type="text" placeholder="Company Name" name="first name" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                    */}
                    </div>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Country *</label>
                    {/* <Input  type="text" placeholder="Please select" name="name" className="py-4 taxt-base text-black
                        placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>*/}
                    <select name="division" className='taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0'>
                    <option value="">Please Select</option>
                    </select>
                    </div>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Street Address *</label>
                    <Input  type="text" placeholder="House number and street name" name="first name" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    <Input  type="text" placeholder="Apartment, suite, unit etc. (optional)" name="first name" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    </div>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Town/City *</label>
                    <Input  type="text" placeholder="Town/City" name="first name" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                    */}
                    </div>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Post Code *</label>
                    <Input  type="number" placeholder="Post Code" name="Post Code" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                    */}
                    </div>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Phone *</label>
                    <Input  type="number" placeholder="Phone" name="Phone" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                    */}
                    </div>
                    <div className='flex flex-col'>
                    <label className='pt-4 font-bold text-base leading-6 text-gray_2'>Email Address *</label>
                    <Input  type="email" placeholder="Email" name="email" className="py-4 taxt-base text-black
                    placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                    {/*errors.email &&
                    <span className='text-red-600 text-sm'>{errors.email}</span>
                    */}
                    </div>
                </div>
                <div className='py-25'>
                     <h5 className='font-bold  text-black text-4xl'>Additional Information  </h5>
                     <p className='py-2 font-bold'>Other Notes (optional)</p>
                     <Peragraph text="Notes about your order, e.g. special notes for delivery." />
                </div>
            </div>
            <div>
                <h5 className='font-bold text-black text-3xl'>Your Order</h5>
                 <div className="pt-5 w-full max-w-[780px]">
                     <table className="w-full border-collapse border border-[#EEEEEE] text-left">
                     <tbody>
                     <tr>
                        <th className="w-1/2 border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] font-semibold text-[#333333]">
                         Product
                    </th>
                        <td className="w-1/2 border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] text-[#888888]">
                        Total
                    </td>
                    </tr>

                    <tr>
                        <th className="border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] font-semibold text-[#333333]">
                         Product name x 1
                    </th>
                        <td className="border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] text-[#888888]">
                        389.99 $
                    </td>
                    </tr>

                    <tr>
                        <th className="border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] font-semibold text-[#333333]">
                        Subtotal
                    </th>
                        <td className="border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] text-[#333333]">
                        389.99 $
                    </td>
                    </tr>

                    <tr>
                        <th className="border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] font-semibold text-[#333333]">
                        Total
                    </th>
                        <td className="border border-[#EEEEEE] px-[18px] py-[14px] text-[15px] text-[#333333]">
                        389.99 $
                    </td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                <div className='py-15'>
                     <div className="w-full border border-[#EEEEEE] px-[30px] py-[25px]">

                
                    <div className="mb-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="bank"
                            checked=""
                            onChange=""
                            className="accent-[#262626]"
                        />
                        <span className="text-[14px] font-semibold text-[#262626]">
                            Bank
                        </span>
                        </label>

        
         
                        <div className="mt-6 bg-[#F5F5F5] px-6 py-4">
                            <p className="text-[13px] text-[#888888]">
                            Pay via Bank; you can pay with your credit card
                            if you don’t have a Bank account.
                            </p>
                        </div>
                    
                        </div>

                
                        <div className="mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="bank2"
                                checked=""
                                onChange=""
                                className="accent-[#262626]"
                            />
                            <span className="text-[14px] font-semibold text-[#888888]">
                                Bank 2
                            </span>
                            </label>

                            
                            <div className="mt-6 bg-[#F5F5F5] px-6 py-4">
                                <p className="text-[13px] text-[#888888]">
                                Pay securely using Bank 2.
                                </p>
                            </div>
                            
                        </div>

                        
                        <p className="mb-5 text-[14px] leading-7 text-[#888888]">
                            Your personal data will be used to process your order,
                            support your experience throughout this website, and
                            for other purposes described in our{" "}
                            <a
                            href="/privacy-policy"
                            className="text-[#262626] hover:underline"
                            >
                            privacy policy.
                            </a>
                        </p>
                        <div className='py-5'>
                        <PrimaryButton url="/checkout" label="Proceed to" />
                        </div>

                        </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default CheckoutIndex
