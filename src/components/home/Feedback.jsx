import React from 'react'
import { Link } from 'react-router'
import image from '../../assets/images/menuSectionImage.avif'

const Feedback = () => {
    return (
        <div className='flex bg-[#f5e8dc] rounded-2xl p-6 lg:p-15 gap-10 items-center'>
            <img className='h-[200px] lg:h-[300px] hidden md:block' src={image} alt="papaTalk" />

            <div>
                <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl'>Biz rəyləri sevirik, ona görə də fikrinizi bizə bildirin.</h2>
                <p className='my-5 md:my-1 font-[arial] text-sm lg:text-[16px]'>PapaTalk sorğu sistemidir və sifarişinizin haqqında rəyinizi bizə bildirmək şansınızdır. Daha yaxşı olmamız və daha yaxşı xidmət göstərməmiz üçün rəyiniz çox vacibdir.</p>
                <p className='font-[arial] mb-5 text-sm'>Ən maraqlısı isə, Siz rəyinizi bildirərək bir illik pizza ehtiyatı qazanmaq şansını əldə edirsiniz.</p>
                <Link to='/papaTalk' className='bg-[#cfeb0b] uppercase border border-black rounded-3xl font-[arial] px-2 py-1 text-sm lg:text-[16px] lg:px-5 lg:py-2.5 hover:bg-transparent duration-300 tracking-widest'>ətraflı</Link>
            </div>
        </div>
    )
}

export default Feedback
