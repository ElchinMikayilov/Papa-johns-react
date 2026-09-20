import React from 'react'
import PageHeader from '../../components/PageHeader'
import InfoSection from '../../components/common/InfoSection'

const Allergens = () => {
  return (
    <>
      <PageHeader />

      <div className='mt-30 lg:mt-50 w-94/100 lg:w-70/100 mx-auto bg-[#f5e8dc] rounded-3xl'>

        <div className='px-5 py-7 md:px-30 lg:py-10 lg:px-40 lg:w-200 mb-15'>
          <h2 style={{ fontFamily: "Titan" }} className='text-xl text-center md:text-start md:text-2xl lg:text-3xl mb-2 md:mb-5'>Papa Johns-da istifadə olunan allergenlər:</h2>

          <ul className='font-[arial] space-y-1 text-sm md:text-base'>
            <li>● Süd</li>
            <li>● Yumurta</li>
            <li>● Balıq (levrek, treska, kambala)</li>
            <li>● Xərçəngkimilər (xərçəng, lobster, karides)</li>
            <li>● Qoz-fındıq (badam, keşyu, qoz)</li>
            <li>● Yer fıstığı</li>
            <li>● Gluten tərkibli taxıllar (buğda)</li>
            <li>● Soya</li>
          </ul>
        </div>

      </div>
      
      <InfoSection />
    </>
  )
}

export default Allergens
