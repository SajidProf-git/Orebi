import React from 'react'
import Container from '../../common/Container'
import prompImg1 from '../../../assets/images/promo_1.jpg'
import prompImg2 from '../../../assets/images/promo_2.jpg'
import prompImg3 from '../../../assets/images/promo_3.jpg'
import Image from '../../common/image'
import { NavLink } from 'react-router-dom'



const PromoOffer = () => {
  return (
   <section className='pt-35 pb-32'>
    <Container>
        <div className='grid grid-cols-2 gap-10'>
            <NavLink to="#" className='h-[750px] overflow-hidden'>
                <Image src={prompImg1} alt={"img"} className="w-full h-full object-cover"/>
            </NavLink>
            <div className='h-[750px]  grid grid-cols-1 gap-13'>
                <NavLink to="#" className='h-[375px] overflow-hidden '>
                    <Image src={prompImg2} alt={"img"} className="w-full object-cover"/>
                </NavLink>
                <NavLink to="#" className='h-[375px] overflow-hidden '>
                    <Image src={prompImg3} alt={"img"} className="w-full object-cover"/>
                </NavLink>
            </div>
        </div>
    </Container>
   </section>
  )
}

export default PromoOffer
