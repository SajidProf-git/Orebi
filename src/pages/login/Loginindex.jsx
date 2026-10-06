import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb';
import Peragraph from '../../components/common/Peragraph';
import Input from '../../components/common/Input';
import PrimaryButton from '../../components/common/PrimaryButton';


const Loginindex = () => {
  const titleStyle= `text-[39px] text-black_1 font-bold`
  return (
    <Container>
    <div className='py-34'>
      <div className='pb-15'>
       <BreadCrumb pageLabel="Login" rootpage="Home"/>
       <Peragraph className="pt-32 max-w-[644px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
       the industry's standard dummy text ever since the."/>
       </div>
       <div className='border-y border-y-gray_4 py-15'>
          <h3 className={titleStyle}>Returning Customer</h3>
          <div className='mt-10 max-w-[1055px] flex  gap-70'>
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
          <PrimaryButton label="Login" className="mt-10"/>
       </div>
       <div className='pt-15'>
         <h3 className={titleStyle}>New Customer</h3>
         <Peragraph className="pt-9.5 pb-12.5 max-w-[644px]" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
       the industry's standard dummy text ever since the."/>
       <PrimaryButton label="Continue"/>
       </div>
    </div>
    </Container>
  )
}

export default Loginindex
