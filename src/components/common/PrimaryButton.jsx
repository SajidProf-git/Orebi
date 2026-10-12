import React from 'react'
import { NavLink } from 'react-router-dom'

const PrimaryButton = ({label, onClick, className, type, url, handleClick}) => {
 
  return (url ? (
    <NavLink to={url} className={`bg-black_1 px-15 py-5 text-white font-bold text-sm cursor-pointer transition-all duration-300 border border-black_1 hover:bg-transparent hover:text-black_1
        ${className}`}>{label}</NavLink>
  ) : (
    <button type={type} className={`bg-black_1 px-15 py-5 text-white font-bold text-sm cursor-pointer transition-all duration-300 border border-black_1 hover:bg-transparent hover:text-black_1
        ${className}`} onClick={handleClick}>{label}</button>
        )
  )
}

export default PrimaryButton
