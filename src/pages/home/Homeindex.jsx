import React from 'react'
import OurCommitment from '../../components/pages/home/OurCommitment'
import Banner from '../../components/pages/home/Banner'
import PromoOffer from '../../components/pages/home/PromoOffer'
import NewArrible from '../../components/pages/home/NewArrible'
import BestSellar from '../../components/pages/home/BestSellar'
import YearpromoOffer from '../../components/pages/home/YearpromoOffer'




const HomeIndex = () => {
  return (
    <div>
      <Banner/>
      <OurCommitment/>
      <PromoOffer/>
      <NewArrible />
      <BestSellar sectionTitle ="Best Seller" />
      <YearpromoOffer/>
      <BestSellar sectionTitle ="Special Offers" />
    </div>
  )
}

export default HomeIndex
