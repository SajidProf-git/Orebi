import React from 'react'
import Container from '../../common/Container'
import YearPromoImg from '../../../assets/images/clock.jpg'
import Image from '../../common/image'
import PrimaryButton from '../../common/PrimaryButton'

const YearpromoOffer = () => {
  return (
        <section className='pb-[128px]'>
            <Container>
                <div className='bg-[#F3F3F3] w-full flex gap-12 items-center'>
                    <Image src={YearPromoImg} alt="year-promo"/>
                    <div>
                        <h3 className='text-[40px] font-bold text-black'>Clock of the year</h3>
                        <p className='text-[16px] text-black max-w-[511px] py-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                       <PrimaryButton url="#" label="Shop now"/>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default YearpromoOffer
