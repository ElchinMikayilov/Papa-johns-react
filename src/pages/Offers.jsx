import React from 'react'
import PageHeader from '../components/PageHeader'
import InfoSection from '../components/common/InfoSection'
import image1 from '../../public/images/offersSection/image1.avif'
import image2 from '../../public/images/offersSection/image2.png'
import image8 from '../../public/images/offersSection/image8.avif'
import image9 from '../../public/images/offersSection/image9.avif'
import image10 from '../../public/images/offersSection/image10.avif'
import { Link } from 'react-router'
import BonusSection from '../components/common/BonusSection'

const Offers = () => {
  const card = [
    {
      id: 3,
      img: "/images/offersSection/image3.png",
      title: "Rastik & 4 Pendir",
      description: [
        "✓ Müddət: 1 Avqust – 31 Avqust",
        "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
        "✓ Kampaniyaya 500 ml həcmli qazlı içkilər daxildir.",
        "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 390 bonus qazanırsınız!"
      ],
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
    {
      id: 4,
      img: "/images/offersSection/image4.png",
      title: "Böyük Papa Miks",
      description: [
        "✓ Müddət: 1 Avqust – 31 Avqust",
        "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
        "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 250 bonus qazanırsınız!"
      ],
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
    {
      id: 5,
      img: "/images/offersSection/image5.png",
      title: "İKİ BÖYÜK Super Papa & Marqarita",
      description: [
        "✓ Müddət: 1 Avqust – 31 Avqust",
        "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
        "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 330 bonus qazanırsınız!"
      ],
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
    {
      id: 6,
      img: "/images/offersSection/image6.png",
      title: "Qarışıq Ət & Vegetarian",
      description: [
        "✓ Müddət: 1 Avqust – 31 Avqust",
        "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
        "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 290 bonus qazanırsınız!"
      ],
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
    {
      id: 7,
      img: "/images/offersSection/image7.png",
      title: "Kiçik Çiken BBQ",
      description: [
        "✓ Müddət: 1 Avqust – 31 Avqust",
        "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
        "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 290 bonus qazanırsınız!"
      ],
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
  ]

  const card2 = [
    {
      id: 1,
      img: "/images/offersSection/image11.avif",
      title: "Pizza party 7 nəfərlik",
      description: "Klassi̇k Pepperoni̇, Çi̇ken BBQ Və Marqari̇ta (Böyük) 2 Çi̇ken Poppers, 2 Kartof Di̇li̇mləri̇, 1 Pepperoni̇ Rolls (8 Ədəd), 7 Ədəd İçki̇ (Qazli İçki̇lər, Ayran Və Ya Sadə Su)",
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
    {
      id: 2,
      img: "/images/offersSection/image12.avif",
      title: "Pizza party 10 nəfərlik",
      description: "Klassi̇k Pepperoni̇, Çi̇ken BBQ, Marqari̇ta Və Super Papa (Böyük), 2 Çi̇ken Poppers, 2 Kartof Di̇li̇mləri̇, 2 Pepperoni̇ Rolls (8 Ədəd), 10 Ədəd İçki̇ (Qazli İçki̇lər, Ayran Və Ya Sadə Su)",
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
    {
      id: 8,
      img: "/images/offersSection/image13.avif",
      title: "Pizza party 15 nəfərlik",
      description: "Klassi̇k Pepperoni̇, Çi̇ken Bbq, Marqari̇ta, Meksi̇ka, Çi̇ken Ranç Və Super Papa (Böyük), 3 Çi̇ken Poppers, 3 Kartof Di̇li̇mləri̇, 3 Pepperoni̇ Rolls (8 Ədəd), 15 Ədəd İçki̇ (Qazli İçki̇lər, Ayran Və Ya Sadə Su)",
      button: "SİFARİŞ ET",
      detailButton: "ƏTRAFLI MƏLUMAT"
    },
  ]

  return (
    <div className='mt-30 md:mt-25 lg:mt-50'>
      <PageHeader />
      <div className='w-90/100 lg:w-70/100 mx-auto'>
        <h2 style={{ fontFamily: "Titan" }} className='text-2xl md:text-4xl lg:text-5xl'>Hər gün ən yaxşı pizza təkliflərini tapın</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-15'>

          <div className='h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
            <img className='rounded-xl' src={image1} alt='image' />
            <div className='p-4'>
              <h2 className='font-extrabold text-lg mb-3'>Xoş Gəldin Hədiyyəsi!</h2>
              <p className='font-[arial]'>🍕 Tətbiqdə 30 AZN-dən başlayan ilk sifarişinizdə Kiçik Klassik Pepperoni pizzası hədiyyə!</p>
            </div>
            <Link to='/offers/welcome' className='border tracking-widest px-3 py-2 uppercase rounded-4xl ml-3 mt-auto mb-3 w-max hover:bg-white duration-200 cursor-pointer'>Ətraflı məlumat</Link>
          </div>

          <div className='h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
            <img className='rounded-xl' src={image2} alt='image' />
            <div className='p-4'>
              <h2 className='font-extrabold text-lg mb-3'>Yeni Croissant Pizzalar</h2>
              <p className='font-[arial]'>Yeni Croissant Pizza-nı kəşf etməyin tam vaxtıdır!</p>
              <p className='font-[arial] mt-3'>İndi bütün filiallarımızda cəmi 33 AZN-ə.</p>
            </div>
            <Link to='/offers/croissant' className='border tracking-widest px-3 py-2 uppercase rounded-4xl ml-3 mt-auto mb-3 w-max hover:bg-white duration-200 cursor-pointer'>Ətraflı məlumat</Link>
          </div>

          {
            card.map(item => (
              <div key={item.id} className='h-135 lg:h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
                <img className='rounded-xl' src={item.img} alt={item.title} />
                <div className='p-4'>
                  <h2 className='font-extrabold text-lg mb-3'>{item.title}</h2>
                  {item.description.map((text, index) => <p key={index} className='font-[arial] text-sm'>{text}</p>)}
                </div>

                <div className='flex flex-col md:flex-row items-center mx-2 justify-between mt-auto mb-3 gap-2'>
                  <Link to='/menu' className='border text-center w-full py-1 md:py-2 uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-200 cursor-pointer'>{item.button}</Link>
                  <Link to={`/offers/${item.id}`} className='border w-full text-center py-1 md:py-2 uppercase rounded-4xl hover:bg-white duration-200 cursor-pointer'>{item.detailButton}</Link>
                </div>

              </div>
            ))
          }

          <div className='lg:h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
            <img className='rounded-xl' src={image8} alt='image' />
            <div className='p-4'>
              <h2 className='font-extrabold text-lg mb-3'>Super 5 Kombo</h2>
              <p className='font-[arial] text-sm'>✔️ Kampaniya yalnız həftə içi (B.e–Cümə) keçərlidir.</p>
              <p className='font-[arial] text-sm'>✔️ Yalnız Papa Johns Azerbaijan mobil tətbiqində keçərlidir.</p>
              <p className='font-[arial] text-sm'>✔️ Yalnız restoran içi sifarişlər üçün keçərlidir (Onlayn sifarişlərə aid deyil).</p>
              <p className='font-[arial] text-sm'>✔️ Kampaniya mallda yerləşən restoranlarımızda keçərli deyil.</p>
            </div>
            <Link to='/offres/super5' className='border tracking-widest px-3 py-2 uppercase rounded-4xl ml-3 mt-auto mb-3 w-max hover:bg-white duration-200 cursor-pointer'>Ətraflı məlumat</Link>
          </div>

          <div className='h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
            <img className='rounded-xl' src={image9} alt='image' />
            <div className='p-4'>
              <h2 className='font-extrabold text-lg mb-3'>Bol Bol Combo</h2>
              <p className='font-[arial] text-sm'>Kampaniyaya 0.5 litr həcmli qazlı içkilər daxildir.</p>
              <p className='font-[arial] text-sm font-semibold my-0.5'>Yalnız al-apar sifarişləri üçün keçərlidir.</p>
              <p className='font-[arial] text-sm'>‍Keçərlidir: 28 Mall, Park Bulvar, Gənclik Mall, Dəniz Mall, Şüvəlan Park, Crescent Mall və Xırdalan.</p>
            </div>
            <Link to='/offers/bol-bol-combo' className='border tracking-widest px-3 py-2 uppercase rounded-4xl ml-3 mt-auto mb-3 w-max hover:bg-white duration-200 cursor-pointer'>Ətraflı məlumat</Link>
          </div>

          <div className='h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
            <img className='rounded-xl' src={image10} alt='image' />
            <div className='p-4'>
              <h2 className='font-extrabold text-lg mb-3'>Star Pizza</h2>
              <p className='font-[arial]'>⭐ Star Marqarita – 14 AZN</p>
              <p className='font-[arial]'>⭐ Star Klassik Pepperoni – 15 AZN</p>
              <p className='font-[arial]'>⭐ Star Vestern Barbekyu – 17 AZN</p>
              <p className='font-[arial]'>⭐ Star Çiken Barbekyu – 17 AZN</p>
            </div>
            <div className='flex flex-col md:flex-row items-center mx-2 justify-between mt-auto mb-3 gap-2'>
              <Link to='/menu' className='border text-center w-full py-1 md:py-2 uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-200 cursor-pointer'>SİfarİŞ ET</Link>
              <Link to='/offers/star-pizza' className='border text-center w-full py-1 md:py-2 uppercase rounded-4xl hover:bg-white duration-200 cursor-pointer'>Ətraflı məlumat</Link>
            </div>
          </div>

          {
            card2.map(item => (
              <div key={item.id} className='h-135 lg:h-130 rounded-xl bg-[#f5e8dc] flex flex-col'>
                <img className='rounded-xl' src={item.img} alt={item.title} />
                <div className='p-4'>
                  <h2 className='font-extrabold text-lg mb-3'>{item.title}</h2>
                  <p className='font-[arial]'>{item.description}</p>
                </div>

                <div className='flex flex-col md:flex-row items-center mx-2 justify-between mt-auto mb-3 gap-2'>
                  <Link to='/menu' className='border text-center w-full py-1 md:py-2 uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-200 cursor-pointer'>{item.button}</Link>
                  <Link to={`/offers/party/${item.id}`} className='border w-full text-center py-1 md:py-2 uppercase rounded-4xl hover:bg-white duration-200 cursor-pointer'>{item.detailButton}</Link>
                </div>

              </div>
            ))
          }
        </div>

        <BonusSection />

      </div>
      <InfoSection />
    </div>
  )
}

export default Offers
