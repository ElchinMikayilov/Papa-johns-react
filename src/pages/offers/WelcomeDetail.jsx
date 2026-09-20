import React from 'react'
import Header from '../../components/Header'
import image1 from '../../../public/images/offersSection/image1.avif'
import { Link } from 'react-router'

const WelcomeDetail = () => {
    return (
        <div>
            <Header />

            <div className='mt-30 lg:mt-50 mb-10 w-96/100 lg:w-70/100 mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
                <img src={image1} className='w-full h-60 md:w-130 md:h-80 rounded-2xl' />
                <div>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>Xoş Gəldin Hədiyyəsi!</h2>
                    <h3 className='font-[arial]'>Yeni tətbiqimizdə sevdiyiniz pizzanı əldə edin! 🍕</h3>
                    <h4 className='font-[arial] my-4'>Tətbiqdə 30 AZN-dən başlayan ilk sifarişinizdə Kiçik Klassik Pepperoni pizzası hədiyyə!</h4>
                    <p className='font-[arial]'>İndi sifariş verin və hədiyyənizi əldə edin! 🍕</p>
                    <p className='font-[arial]'>Təklif yalnız mobil tətbiqdən keçərlidir.</p>
                    <p className='font-[arial]'>Tətbiqi QR-dan yüklə və hədiyyəni əldə et! ⏳</p>
                    <Link to='/offers/welcome/download' className='border block w-max py-1.5 px-5 md:px-10 mt-3 lg:mt-7 font-semibold uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-300 cursor-pointer'>Tətbiqi yüklə</Link>
                </div>
            </div>
        </div>
    )
}

export default WelcomeDetail
