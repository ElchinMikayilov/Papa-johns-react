import React from 'react'
import Hero from '../components/home/Hero'
import NewProducts from '../components/home/NewProducts'
import MenuSection from '../components/home/MenuSection'
import InfoSection from '../components/common/InfoSection'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='mt-10 lg:mt-30'>
      <Header />
      <Hero />
      <NewProducts />
      <MenuSection />
      <InfoSection />
    </div>
  )
}

export default Home
