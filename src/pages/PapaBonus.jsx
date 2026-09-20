import React from 'react'
import PageHeader from '../components/PageHeader'
import InfoSection from '../components/common/InfoSection'
import BonusSection from '../components/common/BonusSection'

const PapaBonus = () => {
  const bonus = [
    {
      img: 'images/papaBonus/image1.avif',
      title: 'Abunə ol',
      description: 'Papa Bonus-a qoşulmaq üçün vebsaytda və ya tətbiqdə Qeydiyyatdan keçin.'
    },
    {
      img: 'images/papaBonus/image2.avif',
      title: 'Pizza sifariş edin',
      description: 'Sifariş üçün restoranlarımıza yaxınlaşa və ya onlayn şəkildə sifariş edə bilərsiniz.'
    },
    {
      img: 'images/papaBonus/image3.avif',
      title: 'Bonuslar qazanın',
      description: 'Xərclədiyiniz hər 10 azn üçün 100 bonus xal həsabınıza əlavə olunur'
    },
    {
      img: 'images/papaBonus/image4.avif',
      title: 'Mükafatlar əldə edin',
      description: 'Pulsuz pizza əldə etmək üçün bonuslarınızı istifadə edin!'
    },
  ]

  return (
    <div className='mt-30 lg:mt-50'>

      <PageHeader />

      <div className='w-94/100 lg:w-70/100 mx-auto'>
        <h2 style={{ fontFamily: "Titan" }} className='text-3xl lg:text-5xl mb-10'>Pizza yeyin. Bonuslar qazanın. Buyurun.</h2>

        <BonusSection />

        <div className='mt-20'>
          <h2 style={{ fontFamily: "Titan" }} className='text-center text-xl md:text-2xl lg:text-3xl'>4 Asan Addım</h2>

          <div className='mt-5 lg:mt-10 mb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-2 p-3 md:p-0'>
            {
              bonus.map((item, index) => (
                <div key={index} className='text-center'>
                  <img src={item.img} alt={item.title} className='w-15 lg:w-20 mx-auto' />
                  <h2 className='font-extrabold text-lg mt-2 mb-3'>{item.title}</h2>
                  <p className='font-[arial] text-sm lg:text-[16px]'>{item.description}</p>
                </div>
              ))
            }
          </div>

        </div>

      </div>

      <InfoSection />
    </div>
  )
}

export default PapaBonus