import React from 'react'
import appStore from '../../assets/images/appStore.svg'
import googlePlay from '../../assets/images/googlePlay.svg'
import phone from '../../assets/images/phone.webp'

const InfoSection = () => {
    return (
        <div>
            <div className='bg-black text-white'>
                <div className='w-90/100 md:w-70/100 mx-auto py-15'>

                    <div className='lg:hidden text-center'>
                        <h2 style={{ fontFamily: "Titan" }} className='text-[28px]'>Bizim tətbiqimizi yükləyin</h2>
                        <h3 className='mt-3 mb-8'>və sevimli pizzanızı çatdırılma və ya al-apar üçün <br /> sifariş edin.</h3>
                        <div className='flex items-center justify-center flex-col gap-3'>
                            <a target='_blank' href="https://apps.apple.com/us/app/papa-johns-azerbaijan/id6471289182"><img className='w-30' src={appStore} alt="appStore" /></a>
                            <a target='_blank' href="https://play.google.com/store/apps/details?id=com.loyaltyplant.partner.papajohnsaz"><img className='w-30' src={googlePlay} alt="googlePlay" /></a>
                        </div>
                    </div>

                    <div className="hidden lg:block bg-cover bg-center h-150" style={{ backgroundImage: `url(${phone})` }}>
                        <div className='pt-30'>
                            <h2 style={{ fontFamily: "Titan" }} className='text-6xl'>Bizim tətbiqimizi <br /> yükləyin</h2>
                            <h3 className='mt-3 mb-8 text-[17px]'>və sevimli pizzanızı çatdırılma və ya al-apar üçün <br /> sifariş edin.</h3>
                            <div className='flex gap-5'>
                                <a target='_blank' href="https://apps.apple.com/us/app/papa-johns-azerbaijan/id6471289182"><img className='w-40' src={appStore} alt="appStore" /></a>
                                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.loyaltyplant.partner.papajohnsaz"><img className='w-40' src={googlePlay} alt="googlePlay" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-90/100 lg:w-70/100 mx-auto flex flex-col md:flex-row text-center md:text-start gap-8 my-20 font-[arial]'>
                <div className='flex-1'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl md:text-lg lg:text-[23px]'>Bizə zəng edin, restoranımızda qonaq olun və ya onlayn sifariş edin</h2>
                    <p className='mt-3 md:text-sm lg:text-lg'>Restoranlarımıza gəlin, al-apar edin və ya çatdırılma üçün *7272 nömrəsinə zəng edin.</p>
                </div>
                <div className='flex-1'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl md:text-lg lg:text-[23px]'>Keyfiyyət Möhürü</h2>
                    <p className='mt-3 md:text-sm lg:text-lg'>Məhsullarınızın sobadan bi̇rbaşa qapınıza qədər təhlükəsiz çatdırılmasını təmi̇n edi̇r.</p>
                </div>
                <div className='flex-1'>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl md:text-lg lg:text-[23px]'>Dünyada 6000-dən çox restoran</h2>
                    <p className='mt-3 md:text-sm lg:text-lg'>Bəli, biz qlobalıq! Bizim pizzalarımız dünyanın hər bir yerində - Afrika, Avropa, Asiya, Şimali və Cənubi Amerika və bütün dünya müştəriləri tərəfindən bəyənilir.</p>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
