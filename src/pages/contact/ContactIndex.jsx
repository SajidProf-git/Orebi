import React from 'react'
import Container from '../../components/common/Container'
import BreadCrumb from '../../components/common/BreadCrumb'
import Input from '../../components/common/Input'
import PrimaryButton from '../../components/common/PrimaryButton'
import Image from '../../components/common/image'
import map from '../../assets/images/map.png'
import { NavLink } from 'react-router-dom'


const ContactIndex = () => {
  return (
    <section className='pt-20'>
        <Container>
            <div className=''>
                <BreadCrumb pageLabel="Contacts" rootpage="Home"/>
            </div>
            <div className='py-20'>
                <h3 className='font-bold text-3xl'>Fill up a Form</h3>
                <div className='py-10 grid'>   
                <label className='font-bold text-base leading-6 text-gray_2'>Name</label>
                <Input  type="text" placeholder="Enter Your name" name="first name" className="w-[700px] py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_1 outline-0"/>
                </div>
                <div className='py-10 grid'>   
                <label className='font-bold text-base leading-6 text-gray_2'>Email</label>
                <Input  type="Email" placeholder="Enter Your Email" name="email" className="w-[700px] py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_1 outline-0"/>
                </div>
                <div className='py-10 grid'>   
                <label className='font-bold text-base leading-6 text-gray_2'>Massage</label>
                <Input  type="text" placeholder="Give a massage" name="massage" className="w-[700px] py-4 taxt-base text-black
                placeholder:text-gray_4 border-b border-b-gray_1 outline-0"/>
                </div>

                <div className='py-3'>
                    <PrimaryButton url="/contacts" label="Post" />
                </div>

                <div className='py-15 flex justify-between items-center'>
                    
                    <NavLink to={"/"}> 
                    <Image src={map} alt="map" />
                    </NavLink>

                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactIndex
