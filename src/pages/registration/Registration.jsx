import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Peragraph from '../../components/common/Peragraph'
import Input from '../../components/common/Input'
import PrimaryButton from '../../components/common/PrimaryButton'



const Registration = () => {
 const titleStyle= `text-[39px] text-black_1 font-bold`
  return (
     <Container>
    <div className='py-34'>
      <div className='pb-15'>
       <BreadCrumb pageLabel="Registration" rootpage="Home"/>
       <Peragraph className="pt-32 max-w-[644px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
       the industry's standard dummy text ever since the."/>
       </div>
       <div className='border-y border-y-gray_4 py-15'>
          <h3 className={titleStyle}>Your Personal Details</h3>
          <div className='mt-10 max-w-[1055px]'>
          <div className='mt-10 max-w-[1055px] grid grid-cols-2 gap-10'>
             <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>First Name</label>
                <Input  type="text" placeholder="Enter Your first name" name="first name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
             <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Last Name</label>
                <Input  type="text" placeholder="Enter Your last name" name="last name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Email Address</label>
                <Input  type="" placeholder="Enter Your Email" name="email" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Telephone</label>
                <Input type="tel" placeholder="Type Your telephone number " name="telephone" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.password &&
                  <span className='text-red-600 text-sm'>{errors.password}</span>
                */}
              </div>
          </div>
          
        </div>
       </div>
       <div>
        <div className='border-b py-16'>
          <h3 className={titleStyle}>New Customer</h3>
          <div className='mt-10 max-w-[1055px]'>
          <div className='mt-10 max-w-[1055px] grid grid-cols-2 gap-5'>
            <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Current Address</label>
                <Input  type="text" placeholder="Enter a place" name="name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
            <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Permanent Address</label>
                <Input  type="text" placeholder="—" name="name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
             <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>City</label>
                <Input  type="text" placeholder="Your city" name="name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
             <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Post Code</label>
                <Input  type="number" placeholder="05228" name="number" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Division</label>
                <Input  type="text" placeholder="Please select" name="name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                */}
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>District</label>
                <Input type="text" placeholder="Please select" name="name" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {/*errors.password &&
                  <span className='text-red-600 text-sm'>{errors.password}</span>
                */}
              </div>
          </div>
          
        </div>
       </div>
       </div>
       <div className='pt-15'>
         <h3 className={titleStyle}>New Customer</h3>
         <Peragraph className="pt-9.5 pb-12.5 max-w-[644px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
       the industry's standard dummy text ever since the."/>
       <PrimaryButton url="/registration" label="Continue"/>
       </div>
    </div>
    </Container>
  )
}

export default Registration
