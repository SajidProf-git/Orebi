import React, { useEffect, useState } from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb';
import Peragraph from '../../components/common/Peragraph';
import Input from '../../components/common/Input';
import PrimaryButton from '../../components/common/PrimaryButton';


const Loginindex = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState ({
    email:'',
    password:''
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleFormChange = (e)=> {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) =>({
      ...prevErrors,
      [name]: "",
    }));


  }
  //validate form
const validateForm = () => {
  const validationFrrors = {};
  if (!formData.email.trim()) {
    validationFrrors.email = "Email is Requered";
  } else if (!emailRegex.test(formData.email.trim())) {
    validationFrrors.email = "Please enter a valid email";}
    if (!formData.password.trim()) {
      validationFrrors.password = "Password is requered";
    } else if (formData.password.length < 6) {
      validationFrrors.password = "Password must be at least 6 characters"
    }
    return validationFrrors;
}


const handleLogin = (e) => {
  e.preventDefault();
  const validationFrrors = validateForm();
  setErrors(validationFrrors);
  if (Object.keys(validationFrrors).length > 0) {return; }
  console.log("Login Data", formData)
};


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
          <form onSubmit={handleLogin} className='mt-10 max-w-[1055px]'>
          <div className='mt-10 max-w-[1055px] grid grid-cols-2  gap-10'>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Email Address</label>
                <Input onChange={handleFormChange} type="email" placeholder="Enter Your Email" name="email" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {errors.email &&
                  <span className='text-red-600 text-sm'>{errors.email}</span>
                }
              </div>
              <div className='flex flex-col'>
                <label className='font-bold text-base leading-6 text-gray_2'>Password</label>
                <Input  onChange={handleFormChange} type="password" placeholder="Type Your Password " name="password" className="py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_2 outline-0"/>
                {errors.password &&
                  <span className='text-red-600 text-sm'>{errors.password}</span>
                }
              </div>
          </div>
          <PrimaryButton onClick={handleLogin} label="Login" className="mt-10"/>
          </form>
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

export default Loginindex
