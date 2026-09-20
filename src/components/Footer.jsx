import React from 'react'
import { Link } from 'react-router'
import Logo from './ui/Logo'
import logoImage from '../assets/images/logo2.avif'
import talk from '../assets/images/talk.avif'
import bonus from '../assets/images/bonus.avif'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import youtube from '../assets/images/youtube.svg'
import tiktok from '../assets/images/tiktok.avif'
import papa from '../assets/images/papa.svg'
import cardImage from '../assets/images/card.avif'

const Footer = () => {
  return (
    <div className='bg-[#65a17a] py-12'>
      <div className='lg:w-70/100 px-5 lg:px-0 mx-auto text-white'>

        <div className='flex justify-between lg:items-center flex-col lg:flex-row gap-10 lg:gap-0'>
          <div className='flex gap-20'>
            <nav> 
              <h2 className='mb-2 font-bold text-[20px]'>Şirkətimiz</h2>
              <ul className='space-y-1.5'>
                <li><Link className='hover:underline duration-300 outline-0' to='/about'>Haqqımızda</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='about/restaurants'>Restoranlar</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='about/ingredients'>İnqrediyentlər</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='/papaBonus'>Papa Bonus</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='/papaTalk'>Papa Talk</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='about/allergens'>Allergenlər</Link></li>
              </ul>
            </nav>
            <nav>
              <h2 className='mb-2 font-bold text-[20px]'>Dəsktək</h2>
              <ul className='space-y-1.5'>
                <li><Link className='hover:underline duration-300 outline-0' to='/contact'>Bizimlə əlaqə</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='/register'>Qeydiyyatdan keçin</Link></li>
                <li><Link className='hover:underline duration-300 outline-0' to='about/faq'>Sual-Cavab</Link></li>
                <li><a href="mailto:comments@papajohns.az" className='hover:underline outline-0 duration-300'>Bizim dəstəyimiz</a></li>
              </ul>
            </nav>
          </div>
          <div className='bg-[#FCFBC5] border border-[#EDEE9E] rounded-[4px] w-80 lg:w-[624px] h-12'></div>
        </div>

        <div className='flex lg:items-center justify-between flex-col lg:flex-row gap-10 lg:gap-0 mt-15 pb-6 border-b border-gray-300'>
          <h2 className='lg:text-3xl font-bold'>Daha Yaxşı İnqrediyentlər. Daha Yaxşı Pizza.</h2>
          <Link to='/'><img src={logoImage} alt="logo" className='w-40' /></Link>
        </div>

        <div className='flex lg:items-center justify-between gap-5 lg:gap-0 flex-col lg:flex-row mt-5 mb-10'>
          <div className='text-sm space-x-3'>
            <Link className='hover:underline'>Məxfilik siyasəti</Link>
            <Link className='hover:underline'>Kuki fayılları ilə əlaqəli siyasət</Link>
            <Link className='hover:underline'>Şərtlər və Qaydalar</Link>
            <Link className='hover:underline'>Xəritə</Link>
          </div>
          <div className='flex items-center gap-6'>
            <img className='w-20' src={talk} alt="image" />
            <img className='w-50' src={bonus} alt="image" />
          </div>
          <div className='flex items-center gap-4'>
            <a target='_blank' href="https://www.facebook.com/papajohns.az/"><img src={facebook} alt="facebook" /></a>
            <a target='_blank' href="https://www.youtube.com/@papajohnsazerbaijan"><img src={youtube} alt="youtube" /></a>
            <a target='_blank' href="https://www.tiktok.com/@azpapajohns?lang=ru-RU" className='w-7'><img src={tiktok} alt="tiktok" /></a>
            <a target='_blank' href="https://www.instagram.com/azpapajohns/"><img src={instagram} alt="instagram" /></a>
            <a target='_blank' className='w-10' href="https://www.tripadvisor.com/Restaurant_Review-g293934-d3415853-Reviews-Papa_John_s-Baku_Absheron_Region.html"><img src={papa} alt="image" /></a>
          </div>
        </div>

        <div>
          <h3>Mövcud ödəniş üsulları:</h3>
          <img className='my-4' src={cardImage} alt="card" />
          <p className='text-sm lg:text-md'>©2026 Papa Johns International, Inc. Bütün hüquqlar qorunur. Məhsulların qiymətləri dəyişə bilər. İçkilər ilə bağlı bütün ticarət nişanları təchizatçı tərəfdaşlarımızın qeydiyyatlı ticarət nişanlarıdır. Bəzi təkliflər bir neçə pizzaların alınmasını tələb edir. Bəzi təkliflər yalnız onlayn mövcuddur. Kampaniyalar, kombo və endirimlər eyni zamanda istifadə edilə və toplana bilməz. Saytda göstərilən məhsulların şəkli həmin məhsulun real görünüşündən fərqlənə bilər. Sifarişlər təyin olunmuş çatdırılma sahəsində yerinə yetirilir. Çatdırılma 10 AZN-dən sifariş etdikdə həyata keçirilir.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
