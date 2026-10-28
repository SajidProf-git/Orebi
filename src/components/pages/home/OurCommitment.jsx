import React from 'react'
import Container from "../../common/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { TbNumber22Small } from "react-icons/tb";
import { FaRedoAlt } from "react-icons/fa";


const data = [
  {
    id: 1,
    lable:"Two years warranty",
    icon:<TbNumber22Small className='text-3xl' />
  },
  {
    id: 2,
    lable:"Free shipping",
    icon:<TbTruckDelivery className='text-3xl'/>
  },
  {
    id: 3,
    lable:"Return policy in 30 days",
    icon:<FaRedoAlt className='text-2xl'/>
  },
]


const OurCommitment = () => {
  return (
    <section className='py-7.5 border-b border-[#F0F0F0] '>
      <Container>
        <div className='flex justify-between'>
          {data.map((item,index) => (
            <div key={index} className='flex items-center gap-4 cursor-pointer'>
                {item.icon}
                <span>{item.lable}</span>
            </div>
          ))

          }
        </div>
      </Container>
    </section>
  )
}

export default OurCommitment
