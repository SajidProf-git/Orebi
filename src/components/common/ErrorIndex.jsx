import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorIndex = () => {
  return (
    <div className='h-screen flex item-center justify-center'>
    <div className='flex flex-col item-center'>
      <span className='text-center block text-[100px]'>404 Error</span>
      <NavLink to="/" className="bg-blue-700 text-white px-10 py-5 inline-block">Back to Home</NavLink>
    </div>
    </div>
  )
}

export default ErrorIndex
