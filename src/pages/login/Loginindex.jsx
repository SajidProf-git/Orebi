import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb';
import Peragraph from '../../components/common/Peragraph';
import Input from '../../components/common/Input';


const Loginindex = () => {
  return (
    <Container>
    <div className='py-34'>
      <div className='pb-15'>
       <BreadCrumb pageLabel="Login" rootpage="Home"/>
       <Peragraph className="pt-32 max-w-[644px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
       the industry's standard dummy text ever since the."/>
       </div>
       <div className='border-y border-y-gray_4 py-15'>
          <h3 className='text-[39px] text-[#262626] font-bold'>Returning Customer</h3>
          <div className='mt-10 max-w-[1055px] grid grid-col-2 gap-x-10'>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Email Address</label>
                <Input type="email" placeholder="Enter Your Email" name="email" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Password</label>
                <Input type="password" placeholder="Type Your Password " name="password" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
              </div>
          </div>
       </div>
    </div>
    </Container>
  )
}

export default Loginindex
