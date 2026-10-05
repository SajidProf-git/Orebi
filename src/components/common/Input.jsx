import React from 'react'

const Input = ({type, name, placeholder, id, onChange, className }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} id={id} onchange={onChange} className={className}/>
  )
}

export default Input
