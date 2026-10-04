import React, { useEffect, useRef, useState } from 'react'
import Container from '../common/Container'
import logo from '../../assets/images/logo.png'
import Image from '../common/image'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { NavLink, useLocation } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { navData } from '../../dummyData/navData';
import { IoCloseSharp } from "react-icons/io5";
import useOutsideclick from '../../hooks/useOutsideClick';






const Navbar = () => {

  const[showDropdown, setShowDropdown] = useState(false)
  const pathname = useLocation
  const dropdownRef = useRef(null);
  
  useOutsideclick(dropdownRef, () =>{
    setShowDropdown(false);
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
            <div className='bg-white shadow-2x1 absolute left-0 -bottom-2 translat-y-full w-50'>
            <ul>
              {[0,1,2,3,4,5].map((item,index)=>(
                <li key={index} className='px-5 py-3 cursor-pointer border-b last-border-b-0'>Category 1</li>
              ))}
              
            </ul>
          </div>
          } 
          </div>
          <div className='w-[600px] relative'>
          <input type="text" name='search' className='w-full bg-white px-5 py-5 font-normal text-sm placeholder:text-[#C4C4C4] ' 
           placeholder='Search Products'/>
           <FaSearch className='absolate right-5 top-1/2 -translate-y-9 text-2xl'/>

          </div>
          <div className='flex gap-10 items-center'>
            <div className='cursor-pointer flex gap-2 items-center'>
             <IoMdPerson className='text-xl' />
             <FaSortDown />
              <FaShoppingCart className='text-2xl cursor-pointer'/>
          
          

          </div>
          </div>
          </div>
          </Container>
        </div>
    </div>
  )
}

export default Navbar
