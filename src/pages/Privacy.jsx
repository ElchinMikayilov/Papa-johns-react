import React from 'react'
import PageHeader from '../components/PageHeader'

const Privacy = () => {
    return (
        <>
            <PageHeader />

            <div className='mt-25 lg:mt-50 w-94/100 lg:w-70/100 mx-auto mb-15'>
                <h2 style={{ fontFamily: "Titan" }} className='text-3xl md:text-4xl lg:text-5xl mb-10'>Kuki fayılları ilə əlaqəli siyasət</h2>

                <div className='bg-[#f5e8dc] rounded-4xl md:rounded-2xl px-5 py-5 lg:py-7 mb-5'>
                    <h3 className='font-extrabold text-lg md:text-xl lg:text-2xl'>Qüvvəyə minmə tarixi 06.10.2023 (sonuncu yeniləmə 06.10.2023)</h3>
                    <p className='font-[arial] text-sm md:text-base my-2'>Bu Siyasət Papa Johns Azərbaycan saytlarına və tətbiqlərinə tətbiq olunur.</p>
                    <p className='font-[arial] text-sm md:text-base'>Zəhmət olmasa tətbiqimizi yükləməzdən və/və ya xidmətimizdən istifadə etməzdən əvvəl bu istifadə şərtlərini diqqətlə oxuyun.</p>
                </div>

                <div className='bg-[#f5e8dc] rounded-4xl md:rounded-2xl px-5 py-5 lg:py-7 mb-5'>
                    <h2 className='font-extrabold text-xl'>Hansı platformalarda kuki faylları toplayırıq?</h2>
                    <p className='font-[arial] text-sm md:text-base my-3'>Mobil tətbiqimiz kukiləri toplamır.</p>
                    <p className='font-[arial] text-sm md:text-base'>Veb saytımız yalnız Google Analytics üçün kukilər toplayır. Onların kuki siyasətini aşağıdakı <a target='_blank' className='underline' href="https://policies.google.com/technologies/cookies?hl=en-US">LİNK</a>dən istinad kimi istifadə edərək tapa bilərsiniz.</p>
                    <h3 className='font-extrabold text-xl lg:text-2xl mb-3 mt-5'>Siz kukiləri və izləmə alətlərini idarə edə bilərsiniz.</h3>
                    <p className='font-[arial] text-sm md:text-base'>Məsələn, siz internet brauzerinizdə kukiləri söndürə bilərsiniz.</p>
                </div>

                <div className='bg-[#f5e8dc] rounded-4xl md:rounded-2xl px-5 py-5 lg:py-7 mb-5'>
                    <h2 className='font-extrabold text-xl lg:text-2xl'>Daha çox sualınız olarsa, bizimlə əlaqə saxlamaqdan çəkinməyin</h2>
                    <p className='font-[arial] text-sm md:text-base mt-2 mb-5'>Bu Siyasətlə bağlı hər hansı sualınız varsa və ya məlumatlarınızı düzəltmək və ya yeniləmək istəyirsinizsə, müraciətinizi <a href='mailto:comments@papajohns.az' className='underline hover:text-gray-800 cursor-pointer'>comments@papajohns.az</a> e-poçt ünvanına göndərin.</p>
                    <h3 className='font-extrabold text-xl mb-3'>Həmçinin bizə zəng edə bilərsiniz:</h3>
                    <p className='font-[arial] text-sm md:text-base mb-1'>PJA MMC</p>
                    <p className='font-[arial] text-sm md:text-base mb-1'>VÖEN: 1302745801</p>
                    <p className='font-[arial] text-sm md:text-base mb-1'>M. Əliyev küçəsi, ev 138, İndeks AZ1009</p>
                    <p className='font-[arial] text-sm md:text-base mb-1'>Əlaqə nömrəsi: 050 750 72 72</p>
                </div>
            </div>
        </>
    )
}

export default Privacy
