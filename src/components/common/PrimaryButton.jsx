import React from 'react'

const PrimaryButton = ({label, onClick, className}) => {
  return (
    <button className={`bg-black_1 px-15 py-5 text-white font-bold text-sm cursor-pointer transition-all duration-300 border border-black_1 hover:bg-transparent hover:text-black_1
        ${className}`} onClick={onClick}>{label}</button>
  )
}

export default PrimaryButton
