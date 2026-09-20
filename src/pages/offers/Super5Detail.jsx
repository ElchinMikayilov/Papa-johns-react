import React from 'react'
import { Link } from 'react-router'
import Header from '../../components/Header'
import image8 from '../../../public/images/offersSection/image8.avif'

const Super5Detail = () => {
    return (
        <div>
            <Header />

            <div className='mt-30 lg:mt-50 mb-10 w-96/100 lg:w-70/100 mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
                <img src={image8} className='w-full h-60 md:w-130 md:h-80 rounded-2xl' />
                <div className='md:w-100 lg:w-full'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>Super 5 Kombo</h2>
                    <h3 className='font-[arial]'>🔥 Super 5 Kombo – Restoranlarımızda xüsusi fürsət!</h3>
                    <h4 className='font-[arial] my-4'>🍕 Kiçik Pizza + Qəlyanaltı + İçki – cəmi 15 AZN!</h4>
                    <p className='font-[arial] mb-3'>Seçimlər:</p>
                    <p className='font-[arial]'>Pizzalar: Çiken BBQ, Klassik Pepperoni, Margarita, Meksika, 4 Pendir</p>
                    <p className='font-[arial] my-5'>Qəlyanaltılar: Pepperoni Rolls, Çiken Poppers, Toyuq qanadları (3 ədəd), Pendirli çubuqlar, Kartof dilimləri</p>
                    <p className='font-[arial]'>İçkilər: Coca Cola, Fanta, Sprite, Bonaqua (qazlı/qazsız), nanəli və sadə ayran</p>
                    <p className='font-[arial] my-5'>📱 Restoranda sifariş edərkən mobil tətbiqə daxil olub, Papa Bonus qazanmaq üçün QR kodu kassadakı əməkdaşa göstərmək mütləqdir.</p>
                    <p className='font-[arial]'>✔️ Kampaniya yalnız həftə içi (B.e–Cüma) keçərlidir.</p>
                    <p className='font-[arial]'>✔️ Yalnız Papa Johns Azerbaijan mobil tətbiqində keçərlidir.</p>
                    <p className='font-[arial]'>✔️ Yalnız restoran içi sifarişlər üçün keçərlidir (Onlayn sifarişlərə aid deyil).</p>
                    <p className='font-[arial]'>✔️ Kampaniya mallda yerləşən restoranlarımızda keçərli deyil.</p>
                </div>
            </div>
        </div>
    )
}

export default Super5Detail
