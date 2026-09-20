import React from 'react'
import { Link } from 'react-router'
import bonus from '../../../public/images/offersSection/bonus.avif'

const BonusSection = () => {
    return (
        <div className='flex bg-[#f5e8dc] p-6 lg:py-10 lg:px-15 gap-10 lg:gap-15 rounded-3xl mb-15'>

            <div className='w-150'>
                <h2 style={{ fontFamily: "Titan" }} className='text-xl md:text-2xl lg:text-3xl mb-3 text-center md:text-start'>Eksklüziv loyallıq proqramımızdan istifadə edərək hər sifarişdə bonuslar qazanın.</h2>
                <p className='font-[arial] text-sm lg:text-[16px]'>Siz sifariş edin, biz isə sizi sevindirək!</p>
                <ul className='list-disc pl-10 space-y-3 mt-2 mb-7 text-sm lg:text-[16px] font-[arial]'>
                    <li>Saytda alış-veriş edin və hər 10 AZN üçün 100 bonus qazanın. Topladığınız bonusları 10 AZN-dən başlayan növbəti sifarişinizdə hədiyyələrə dəyişə bilərsiniz.</li>
                    <li>Vebsaytımızda hesab yaratdığınız zaman avtomatik olaraq Papa Bonus proqramının üzvü olursunuz.</li>
                    <li>Toplanmış bonusların etibarlılıq müddəti son hesablama tarixindən 180 gündür.</li>
                </ul>
                <Link to='/menu' className='border font-semibold hover:bg-transparent duration-200 cursor-pointer bg-[#cfeb0b] uppercase text-sm md:text-[16px] px-6 lg:px-18 tracking-widest py-1 md:py-2 rounded-4xl'>bonus qazanın</Link>
            </div>

            <img className='hidden md:block rounded-3xl w-100 h-110' src={bonus} alt="bonus" />

        </div>
    )
}

export default BonusSection
