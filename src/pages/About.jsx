import React from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router'
import InfoSection from '../components/common/InfoSection'

const About = () => {
  const about = [
    {
      title: 'Hər kəs üçün',
      img: 'images/about/image3.avif',
      description: 'Müxtəliflik, bərabərlik, inklüzivlik və komanda işi.'
    },
    {
      title: 'Doğru işlər görmək',
      img: 'images/about/image4.avif',
      description: 'Ədalət, xasiyyət və cəmiyyət.'
    },
    {
      title: 'Öncəliklə İnsanlar',
      img: 'images/about/image5.avif',
      description: 'Müştəri və komanda üzərinə fokuslanmaq.'
    },
    {
      title: 'Qalib Gəlmək üçün İnnovasiyalar',
      img: 'images/about/image6.avif',
      description: 'Fərqli düşünün və dəyişiklikdən qorxmayın.'
    },
    {
      title: 'Əylənin!',
      img: 'images/about/image7.avif',
      description: 'Bu pizzadır - əyləncəli olmalıdır!'
    },
  ]

  return (
    <>
      <PageHeader />

      <div className='mt-30 lg:mt-60 w-94/100 lg:w-70/100 mx-auto'>

        <section className='mb-20'>
          <h2 style={{ fontFamily: "Titan" }} className='text-3xl lg:text-5xl mb-15'>Özümüz və Pizzamız Haqqında</h2>

          <div className='flex flex-col mb-10 sm:flex-row gap-4 md:gap-7 lg:gap-20 bg-[#f5e8dc] p-5 lg:py-10 lg:px-15 rounded-2xl'>
            <img src="/images/about/image1.avif" alt="image" className='md:w-80 lg:w-100 h-50 lg:h-70' />

            <div>
              <h3 style={{ fontFamily: "Titan" }} className='text-xl text-center md:text-start md:text-2xl lg:text-3xl'>Daha yaxşı inqrediyentlər. Daha yaxşı pizza.</h3>
              <p className='md:w-80 lg:w-full my-5 text-sm font-[arial] lg:text-[16px] lg:leading-[27px]'>Biz bilirik ki, bir şeyə nə qədər əmək sərf etsən, bir o qədər çox bəhrəsini görərsən. Beləliklə, ABŞ-ın İndiana ştatında hazırlanan ilk Papa Johns pizzasından tutmuş bu günə qədər, 45 ölkədə 5000-dən çox restoran ilə biz həmişə ən yaxşı pizza hazırlamaq üçün ən yaxşı inqrediyentlərdən istifadə etmişik.</p>
              <p className='md:w-80 lg:w-full font-[arial] text-sm lg:text-[16px] md:mb-7 lg:leading-[27px]'>Heç vaxt dondurulmayan təzə xəmirimiz, xüsusi pizza sousumuz, italyan pendirimiz, təzə tərəvəzlər və keyfiyyətli ət növləri haqqında hər şeyi öyrənin.</p>
              <Link to='/about/ingredients' className='hidden md:inline border rounded-4xl uppercase hover:bg-transparent duration-300 px-5 lg:px-7 py-1 lg:py-2.5 tracking-widest text-sm lg:font-semibold bg-[#cfeb0b]'>daha ətraflı</Link>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row bg-[#f5e8dc] rounded-2xl p-5 md:py-10 md:px-5 lg:py-10 lg:px-15 gap-3 md:gap-5 lg:gap-10'>
            <div>
              <h2 style={{ fontFamily: "Titan" }} className='text-xl md:text-2xl lg:text-3xl'>Biz komandamızı sevirik</h2>
              <p className='font-[arial] text-sm lg:text-[16px] md:leading-[24px] my-2 lg:mt-3 lg:mb-5 lg:leading-7'>Əsas inancımız sadədir - işçilərimizin qayğısına qalmaq, onları həvəsləndirmək, dəstəkləmək, təlimatlandırmaq, onlara ən yaxşı inqrediyentləri və ən yaxşı avadanlıqları verərək ən yüksək keyfiyyətli pizza hazırlamaqdır.</p>
              <p className='font-[arial] text-sm leading-[24px] lg:text-[16px] lg:leading-7'>Bizi hər gün ruhlandıran budur və buna görə də biz, davamlı olaraq ən yaxşı pizza və ən yaxşı xidməti təklif etmək üçün çalışırıq.</p>
            </div>

            <img src="images/about/image2.avif" alt="image" className='h-60 md:h-50 sm:w-95 lg:h-70' />
          </div>

        </section>


        <section className='mb-20 lg:mb-30'>
          <h2 style={{ fontFamily: "Titan" }} className='text-center text-xl md:text-2xl lg:text-3xl'>Biz Necə İşləyirik</h2>

          <div className='mt-5 lg:mt-10 grid sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-5 p-3 md:p-0'>
            {
              about.map((item, index) => (
                <div key={index} className='text-center'>
                  <img src={item.img} alt='image' className='w-15 lg:w-20 mx-auto' />
                  <h2 className='font-extrabold text-lg mt-2 mb-3'>{item.title}</h2>
                  <p className='font-[arial] text-sm lg:text-[16px]'>{item.description}</p>
                </div>
              ))
            }
          </div>
        </section>


        <section className='mb-10 md:mb-15'>
          <h2 style={{ fontFamily: "Titan" }} className='text-3xl lg:text-5xl mb-10 lg:mb-15'>Uğurumuzun Sirri</h2>

          <div className='grid sm:grid-cols-3 gap-5 mb-10'>
            <div className='bg-[#f5e8dc] rounded-2xl md:h-90 lg:h-122'>
              <img src="images/about/image8.avif" alt="image" className='rounded-t-2xl md:h-40 lg:h-60 w-full' />
              <div className='p-5'>
                <h2 className='font-extrabold text-lg'>Həmişə daha çox çalışan</h2>
              </div>
            </div>
            <div className='bg-[#f5e8dc] rounded-2xl md:h-90 lg:h-122'>
              <img src="images/about/image9.avif" alt="image" className='rounded-t-2xl md:h-40 lg:h-60 w-full' />
              <div className='p-5'>
                <h2 className='font-extrabold text-lg'>Keyfiyyət birinci yerdədir</h2>
              </div>
            </div>
            <div className='bg-[#f5e8dc] rounded-2xl md:h-90 lg:h-122'>
              <img src="images/about/image10.avif" alt="image" className='rounded-t-2xl md:h-40 lg:h-60 w-full' />
              <div className='p-5'>
                <h2 className='font-extrabold text-lg'>Sadəcə Pizza Deyil</h2>
              </div>
            </div>
          </div>

          <div className='flex bg-[#f5e8dc] gap-5 lg:gap-10 items-center p-5 md:p-10 lg:p-15 rounded-3xl'>
            <img src="images/about/image11.avif" alt="image" className='md:w-80 md:h-60 lg:w-90 lg:h-70 hidden md:block'/>
            <div>
              <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl'>Biz rəyləri sevirik, ona görə də fikrinizi bizə bildirin.</h2>
              <p className='font-[arial] text-sm lg:text-base my-5 md:my-2'>PapaTalk sorğu sistemidir və sifarişinizin haqqında rəyinizi bizə bildirmək şansınızdır. Daha yaxşı olmamız və daha yaxşı xidmət göstərməmiz üçün rəyiniz çox vacibdir.</p>
              <p className='font-[arial] text-sm lg:text-base'>Ən maraqlısı isə, Siz rəyinizi bildirərək bir illik pizza ehtiyatı qazanmaq şansını əldə edirsiniz.</p>
              <Link to='/papaTalk' className='border inline-block tracking-widest hover:bg-transparent bg-[#cfeb0b] px-2 text-sm lg:text-base md:py-1.5 mt-4 md:px-7 rounded-4xl duration-300 uppercase'>ətraflı</Link>
            </div>
          </div>

        </section>

      </div>

      <InfoSection />
    </>
  )
}

export default About
