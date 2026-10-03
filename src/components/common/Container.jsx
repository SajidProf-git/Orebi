import React from 'react'

const Container = ({Children}) => {
  return (
    <div className='max-w-[1600px] mx-auto'>{Children}</div>
  )
}

export default Container
