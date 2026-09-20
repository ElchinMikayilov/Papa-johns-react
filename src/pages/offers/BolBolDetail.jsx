import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router'
import image9 from '../../../public/images/offersSection/image9.avif'


const BolBolDetail = () => {
    return (
        <div>
            <Header />

            <div className='mt-30 lg:mt-50 mb-10 w-96/100 lg:w-70/100 mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
                <img src={image9} className='w-full h-60 md:w-130 md:h-80 rounded-2xl' />
                <div className='md:w-100 lg:w-full'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>Bol Bol Combo</h2>
                    <h3 className='font-[arial] font-semibold'>Bol-Bol Kombolar dostlarınız və ailənizlə dadlı anların ən sərfəli forması.</h3>
                    <h4 className='font-[arial]'>‍Sevdiklərinizlə birlikdə daha çox paylaşım və daha dadlı seçimlər üçün aşağıdakı kombolardan birini seçin:</h4>
                    <p className='font-[arial] mt-3 font-semibold'>Təkli Kombolar</p>
                    <p className='font-[arial]'>Pepperoni Rolls Təkli – Pepperoni rolls (8 ədəd)  kartof dilimləri  1 içki + 1 pizza sousu + 1 pepperonçini — CƏMİ 9.90 AZN</p>
                    <p className='font-[arial]'>Kalzone Təkli – İstənilən Kalzone  kartof dilimləri  1 içki + 1 pizza sousu + 1 pepperonçini — CƏMİ 9.90 AZN</p>
                    <p className='font-[arial]'>Mini Pizza Təkli – İstənilən Mini pizza  kartof dilimləri  1 içki + 1 pizza sousu + 1 pepperonçini — CƏMİ 10.90 AZN</p>
                    <p className='font-[arial] mb-5'>Papadias Təkli – İstənilən Papadias  kartof dilimləri  1 içki + 1 sarımsaq sousu + 1 pepperonçini — CƏMİ 12.90 AZN</p>
                    <p className='font-[arial] font-semibold mb-1'>Cütlü Kombolar</p>
                    <p className='font-[arial] mb-1'>Kalzone Cütlü Max – İstənilən Kalzone  Pepperoni rolls (8 ədəd) + kartof dilimləri  2 içki + 2 pizza sousu + 2 pepperonçini — CƏMİ 16.90 AZN</p>
                    <p className='font-[arial] mb-1'>Mini Pizza Cütlü Max – İstənilən Mini pizza  Pepperoni rolls (8 ədəd) + kartof dilimləri  2 içki + 2 pizza sousu + 2 pepperonçini — CƏMİ 17.90 AZN</p>
                    <p className='font-[arial] mb-5'>Papadias Cütlü Max – İstənilən Papadias  Pepperoni rolls (8 ədəd) + kartof dilimləri  2 içki + 1 pizza sousu + 1 sarımsaq sousu + 2 pepperonçini — CƏMİ 18.90 AZN</p>
                    <p className='font-[arial]'>Kampaniyaya 0.5 litr həcmli qazlı içkilər daxildir.</p>
                    <p className='font-semibold font-[arial]'>Yalnız al-apar sifarişləri üçün keçərlidir.</p>
                    <p className='font-[arial]'>Keçərlidir: 28 Mall, Park Bulvar, Gənclik Mall, Dəniz Mall, Şüvəlan Park, Crescent Mall və Xırdalan.</p>
                </div>
            </div>
        </div>
    )
}

export default BolBolDetail
