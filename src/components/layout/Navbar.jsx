import React, { useEffect, useRef, useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/images/logo.png'
import Image from '../common/image'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { navData } from '../../dummyData/navData';
import { IoCloseSharp } from "react-icons/io5";
import { useLocation } from 'react-router';
import useOutsideclick from '../../hooks/useOutsideClick';
import { profileDropdownData } from '../../dummyData/navData';
import { MdLogin } from "react-icons/md";





const Navbar = () => {

  const[showDropdown, setShowDropdown] = useState(false)
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const pathname = useLocation()
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  
  useOutsideclick(dropdownRef, () =>{
    setShowDropdown(false);
  });
  useOutsideclick(profileDropdownRef, ()=>{
   setShowProfileDropdown(false);

  });

  return (
    
     <div>
      <nav className='py-8'>
        <Container>
        <div className='flex justify-between items-center'>
          <NavLink to={"/"}> 
          <Image src={logo} alt="logo" />
          </NavLink>
          <ul className='flex justify-end gap-10'>
              {navData.map((item,index)=>(
            <li key={index}>
              <NavLink to={item.url} className={`${item.url == pathname.pathname ? 'text-red-600' : 'text-0black'}`}>
                  {
                    item.label
                  }
              </NavLink>
            </li>
            ))
              }
          </ul>
        </div>
      </Container>
    </nav>
        <div className='bg-gray_1 py'>
          <Container>
          <div className='flex justify-between items-center'>
          <div ref={dropdownRef} className='relative'>
            {showDropdown ?
              <IoCloseSharp onClick={()=>setShowDropdown(!showDropdown)} className='text-2xl cursor-pointer' />
              :
             <HiMiniBars3BottomLeft onClick={()=>setShowDropdown(!showDropdown)} className='text-2xl cursor-pointer'/>
            }
          {showDropdown &&
            <div className='bg-white shadow-2x1 absolute left-0 -bottom-80 -translat-y-full w-50'>
            <ul>
              {[0,1,2,3,4,5].map((item,index)=>(
                <li key={index} className='px-5 py-3 cursor-pointer border-b last-border-b-0'>Category 1</li>
              ))}
              
            </ul>
          </div>
          } 
          </div>
          <div className='search w-150 relative'>
          <input type="text" name='search' className='relative py-4.25 px-5 bg-white w-full h-full font-normal font-dm-sans placeholder:text-[#C4C4C4] ' 
           placeholder='Search Products'/>
           <FaSearch className='absolate left-5 text-2xl'/>

          </div>
          <div className='flex gap-10 items-center'>
            {isLogin ?
                <div ref={profileDropdownData} className='relative'>
              <div onClick={()=>setShowProfileDropdown(!showProfileDropdown)} className='cursor-pointer flex gap-2 items-center'>
               <IoMdPerson className='text-xl' />
               <FaSortDown />
              </div>
             {showProfileDropdown &&
                <div className='w-32 bg-white absulate bottom-0 left-0 translate-y-full shadow'>
                {profileDropdownData.map((item,index)=>(
                  <NavLink key={item.id} to={item.url} className='px-5 py-3 block cursor-pointer border-b last-border-b-0'>
                  {item.label}
                  </NavLink>
              ))}   
               </div>
             }
            </div>
            :
            <NavLink to="/login">
                <MdLogin className='cursor-pointer text-2xl'/>
            </NavLink> 
            }
            
            <NavLink to="/cart">
                <FaShoppingCart className='text-2xl cursor-pointer'/>
            </NavLink>
              
          
          

          
          </div>
          </div>
          </Container>
        </div>
    </div>
  )
}

export default Navbar
