import React from 'react'
import PageHeader from '../../components/PageHeader'
import InfoSection from '../../components/common/InfoSection'

const Ingredients = () => {
    return (
        <>
            <PageHeader />

            <main className='mt-30 lg:mt-55 w-94/100 lg:w-70/100 mx-auto'>

                <section className='mb-20 lg:mb-30'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-3xl lg:text-5xl mb-15'>Daha Yaxşı İnqrediyentlər. Daha Yaxşı Pizza.</h2>

                    <div className='flex justify-between md:gap-7 lg:gap-0 bg-[#f5e8dc] px-5 py-7 lg:px-15 lg:py-10 rounded-2xl lg:rounded-3xl'>
                        <div className='lg:w-130'>
                            <h2 className='font-extrabold text-lg md:text-2xl md:mb-3 lg:text-[27px]'>Xəmirimizin sadə sirrini öyrənin</h2>
                            <p className='font-[arial] text-sm lg:text-base md:leading-6 lg:leading-7'>Hər zaman təzə, heç vaxt dondurulmayan xəmirimiz yüksək proteinli un, filtirdən keçirilmiş su, soya yağı, şəkər, duz və mayadan ibarət 6 sadə inqrediyentdən hazırlanır. Bizim xəmiri fərqli edən isə, tərkibində süni dad və rənglər, yüksək fruktozalı qarğıdalı siropu, natrium stirol laktilat, kalsium sulfat, kalsium fosfat, l-sistein və Datem kimi zərərli maddələrin olmamasıdır.</p>
                        </div>

                        <img src="/images/aboutIngredients/image1.avif" alt="image" className='w-85 hidden md:block' />
                    </div>
                </section>

                <section className='mb-15 lg:mb-30'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl mb-10'>Xəmir topundan pizza bazasına qədər cəmi 50 saniyə</h2>

                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                        <img src="/images/aboutIngredients/image2.avif" alt="image" />
                        <img src="/images/aboutIngredients/image3.avif" alt="image" />
                        <img src="/images/aboutIngredients/image4.avif" alt="image" />
                        <img src="/images/aboutIngredients/image5.avif" alt="image" />
                    </div>
                </section>

                <section className='mb-15 lg:mb-30'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl mb-10'>Pendir məhsulları və Pizza sousu</h2>

                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                        <div>
                            <img src="/images/aboutIngredients/image6.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Mozzarella</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image7.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Cheddar</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image8.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Feta</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image9.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Pizza Sousu</h3>
                        </div>
                    </div>
                </section>

                <section className='mb-15 lg:mb-20'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl mb-10'>Ət məhsulları</h2>

                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                        <div>
                            <img src="/images/aboutIngredients/image10.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Mal Əti</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image11.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Qril Toyuq</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image12.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>İtalyan Sosisləri</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image13.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Pepperoni</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image14.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Vetçina</h3>
                        </div>
                    </div>
                </section>

                <section className='mb-15 lg:mb-20'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl mb-10'>Tərəvəzlər</h2>

                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                        <div>
                            <img src="/images/aboutIngredients/image15.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Yaşıl Bibər</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image16.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Şampinyon Göbələkləri</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image17.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Təzə Pomidor</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image18.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Ananas</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image19.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Qara Zeytun</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image20.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Halapeno Bibəri</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image21.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Qarğıdalı</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image22.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Pepperonçini</h3>
                        </div>
                        <div>
                            <img src="/images/aboutIngredients/image23.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Xiyar Turşusu</h3>
                        </div>
                    </div>
                </section>

                <section className='mb-15 lg:mb-20'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl mb-10'>Balıq və Dəniz məhsulları</h2>

                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5 lg:gap-10'>
                        <div>
                            <img src="/images/aboutIngredients/image24.avif" alt="image" className='rounded-t-2xl' />
                            <h3 className='pl-5 pt-2 font-extrabold font-[arial]'>Ton Balığı</h3>
                        </div>
                    </div>
                </section>

            </main>
            <InfoSection />
        </>
    )
}

export default Ingredients
