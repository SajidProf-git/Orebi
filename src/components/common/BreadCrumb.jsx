import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = ({pageLabel, rootpage}) => {
  return (
     <div>
          <span className='font-bold text-5xl block '>{pageLabel}</span>
          <div className='mt-3 flex item-center gap-1'>
            <p className='text-gray_2 font-normal text-xs '>{rootpage}</p>
              <FaChevronRight />
            <p className='text-gray_2 font-normal text-xs '>{pageLabel}</p>
          </div>         
    </div>
  )
}

export default BreadCrumb
