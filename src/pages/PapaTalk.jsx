import React from 'react'
import PageHeader from '../components/PageHeader'
import image from '../../public/images/papaTalk/image.avif'

const PapaTalk = () => {
  const talk = [
    {
      img: "/images/papaTalk/image2.avif",
      title: 'Sifariş edin',
      description: 'Papa Talk sorğusunda iştirak etmək üçün sifariş qəbzinin üzərindəki QR kodu skan edin.',
    },
    {
      img: "/images/papaTalk/image3.avif",
      title: 'Rəyinizi bildirin',
      description: 'Sifariş qəbzinin üzərindəki “Restoran ID” ni qeyd edərək sorğuya keçid alın və sifarişiniz haqqında rəyinizi bildirin.',
    },
    {
      img: "/images/papaTalk/image4.avif",
      title: 'Pizza qazanın',
      description: 'Mükafat lotoreyasında iştirak edərək 1 illik pizza qazanın.',
    },
  ]

  return (
    <div>
      <PageHeader />

      <div className='mt-30 lg:mt-50 w-94/100 lg:w-70/100 mx-auto'>
        <h2 style={{ fontFamily: "Titan" }} className='text-[25px] md:text-5xl lg:text-5xl mb-15'>Papa Talk - 1 İllik Pizza Qazan</h2>

        <div className='flex gap-10 bg-[#f5e8dc] rounded-2xl px-5 py-7 lg:px-15 lg:py-12'>

          <div>
            <h3 className='text-lg lg:text-[27px] md:text-2xl md:leading-7 font-extrabold mb-4 lg:leading-8'>Bəs bilirsən ki, Papa Talk sorğusunda iştirak edərək sən də bir illik pizza ehtiyyatı qazana bilərsən?</h3>
            <h4 className='font-[arial] text-sm lg:text-[16px]'>Qalib olmaq istəyirsənsə</h4>
            <p className='font-[arial] text-sm my-3 md:my-1 lg:text-[16px]'>Sadəcə sifariş qəbzinin və ya qutunun üzərindəki QR kodu telefonuna skan edərək sorğuya keçid et və şansını qaçırma!</p>
            <p className='font-[arial] text-sm mb-3 md:mb-1 lg:my-1 text-[16px]'>*Qeyd: Hər ay bir qalib seçilir və qaliblərə 12 böyük pizza hədiyyə kuponu təqdim olunur.</p>
            <p className='font-[arial] text-sm lg:text-[16px]'>Sorğuda iştirakınız bizim üçün çox önəmlidir və daha yaxşı olmamız üçün fikirləriniz qeydə alınır. Sizə uğurlu qalibiyyət arzulayırıq və iştirakınız üçün təşəkkür edirik.</p>
          </div>

          <img src={image} alt="image" className='md:w-80 h-55 lg:h-full lg:w-90 hidden md:block' />

        </div>
      </div>

      <section className='w-94/100 lg:w-70/100 mx-auto my-20 md:my-30'>
        <h2 style={{ fontFamily: "Titan" }} className='text-center text-xl md:text-2xl lg:text-3xl'>3 Asan Addım</h2>

        <div className='mt-5 lg:mt-10 grid md:grid-cols-3 gap-10 md:gap-5 p-3 md:p-0'>
          {
            talk.map((item, index) => (
              <div key={index} className='text-center'>
                <img src={item.img} alt={item.title} className='w-15 lg:w-20 mx-auto' />
                <h2 className='font-extrabold text-lg mt-2 mb-3'>{item.title}</h2>
                <p className='font-[arial] text-sm lg:text-[16px]'>{item.description}</p>
              </div>
            ))
          }
        </div>
      </section>

    </div>
  )
}

export default PapaTalk
