import React from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import image2 from '../../../public/images/offersSection/image2.png'

const CroissantDetail = () => {
    return (
        <div>
            <Header />

            <div className='mt-30 lg:mt-50 mb-10 w-96/100 lg:w-70/100 mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
                <img src={image2} className='w-full h-60 md:w-120 md:h-100 rounded-2xl' />
                <div>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>Yeni CROISSANT PIZZA</h2>
                    <h3 className='font-[arial]'>Bu dilim, bildiyin dilim deyil... 🧀🥐</h3>
                    <h3 className='font-[arial] my-4'>Yeni Croissant Pizza-nı kəşf etməyin tam vaxtıdır!</h3>
                    <h4 className='font-[arial]'>İndi bütün filiallarımızda cəmi 33 AZN-ə.</h4>
                    <p className='font-[arial] my-4 md:w-100 lg:w-full'>Sifariş vermək çox asandır:👉 Papa Johns tətbiqi və ya saytımız vasitəsilə📞 Və ya birbaşa *7272 nömrəsinə zəng edərək</p>
                    <p className='font-[arial]'>Aşiq olmağa hazırsan? 😍</p>
                    <Link to='/menu' className='border block w-max py-1.5 px-5 md:px-18 mt-3 lg:mt-1 font-semibold uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-300 cursor-pointer'>SİFARİŞ ET</Link>
                </div>
            </div>
        </div>
    )
}

export default CroissantDetail
