import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router'
import image10 from '../../../public/images/offersSection/image10.avif'

const StarPizzaDetail = () => {
  return (
    <div>
      <Header />

      <div className='mt-30 lg:mt-50 mb-10 w-96/100 lg:w-70/100 mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
        <img src={image10} className='w-full h-60 md:w-130 md:h-80 rounded-2xl' />
        <div className='md:w-100'>
          <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>Star Pizza</h2>
          <h3 className='font-[arial]'>Yeni ləzzət səhnəyə çıxır, ulduz kimi parlayır! ⭐✨</h3>
          <h4 className='font-[arial] my-4'>Təzə xəmir, pendirlə doldurulmuş ulduz kənarları və unudulmaz dad – yeni Star pizzalarını sınayın! 🍕</h4>
          <p className='font-[arial]'>⭐ Star Marqarita – 14 AZN</p>
          <p className='font-[arial]'>⭐ Star Klassik Pepperoni – 15 AZN</p>
          <p className='font-[arial]'>⭐ Star Vestern Barbekyu – 17 AZN</p>
          <p className='font-[arial]'>⭐ Star Çiken Barbekyu – 17 AZN</p>
          <p className='font-[arial] mt-5'>Sən ilk hansını dadacaqsan? 😍🍕</p>
          <Link to='/menu' className='border block w-max py-2 px-5 md:px-15 lg:px-20 mt-3 lg:mt-7 font-semibold uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-300 cursor-pointer'>SİFARİŞ ET</Link>
        </div>
      </div>
    </div>
  )
}

export default StarPizzaDetail
