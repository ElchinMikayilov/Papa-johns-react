import React from 'react'
import { Link, useParams } from 'react-router'
import Header from '../../components/Header'

const details = [
    {
        id: 1,
        title: "Pizza Party",
        img: "/images/offersSection/image11.avif",
        titleDescription: [
            "Dostlarla əylənmək?",
            "Korporativ yığıncaq?",
            "Sinif yoldaşlarınla görüş?",
            "Bəlkə universitetin uzun mühazirələrdən sonra yorulub bir party keçirmək?",
            "Papa John’s YENİ PİZZA PARTY MENYULARI ilə sənə gəlir!!!"
        ],
        menuTitle: "7 NƏFƏRLİK MENYU - 85 AZN",
        items: "KLASSİK PEPPERONİ, ÇİKEN BBQ VƏ MARQARİTA (BÖYÜK), 2 ÇİKEN POPPERS, 2 KARTOF DİLİMLƏRİ, 1 PEPPERONİ ROLLS (8 ƏDƏD), 7 ƏDƏD İÇKİ (QAZLI İÇKİLƏR, AYRAN VƏ YA SADƏ SU)"
    },
      {
        id: 2,
        title: "Pizza Party",
        img: "/images/offersSection/image12.avif",
        titleDescription: [
            "Dostlarla əylənmək?",
            "Korporativ yığıncaq?",
            "Sinif yoldaşlarınla görüş?",
            "Bəlkə universitetin uzun mühazirələrdən sonra yorulub bir party keçirmək?",
            "Papa John’s YENİ PİZZA PARTY MENYULARI ilə sənə gəlir!!!"
        ],
        menuTitle: "‍10 NƏFƏRLİK MENYU - 105 AZN",
        items: "KLASSİK PEPPERONİ, ÇİKEN BBQ, MARQARİTA VƏ SUPER PAPA (BÖYÜK) 2 ÇİKEN POPPERS, 2 KARTOF DİLİMLƏRİ,  2 PEPPERONİ ROLLS (8 ƏDƏD) 10 ƏDƏD İÇKİ (QAZLI İÇKİLƏR, AYRAN VƏ YA SADƏ SU)"
    },
      {
        id: 8,
        title: "Pizza Party",
        img: "/images/offersSection/image13.avif",
        titleDescription: [
            "Dostlarla əylənmək?",
            "Korporativ yığıncaq?",
            "Sinif yoldaşlarınla görüş?",
            "Bəlkə universitetin uzun mühazirələrdən sonra yorulub bir party keçirmək?",
            "Papa John’s YENİ PİZZA PARTY MENYULARI ilə sənə gəlir!!!"
        ],
        menuTitle: "‍15 NƏFƏRLİK MENYU - 135 AZN",
        items: "‍KLASSİK PEPPERONİ, ÇİKEN BBQ, MARQARİTA, MEKSİKA, ÇİKEN RANÇ VƏ SUPER PAPA (BÖYÜK) 3 ÇİKEN POPPERS, 3 KARTOF DİLİMLƏRİ,  3 PEPPERONİ ROLLS (8 ƏDƏD) 15 ƏDƏD İÇKİ (QAZLI İÇKİLƏR, AYRAN VƏ YA SADƏ SU)"
    },
]

const PartyDetail = () => {
    const { id } = useParams()
    const item = details.find(item => item.id === Number(id))
    return (
        <>
            <Header />
            <div key={item.id} className='mt-30 lg:mt-50 mb-10 w-90/100 lg:w-70/100 mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
                <img src={item.img} alt={item.title} className='w-full lg:w-120 h-full rounded-2xl' />
                <div>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>{item.title}</h2>
                    {item.titleDescription.map((text,index)=><h3 key={index} className='font-semibold'>{text}</h3>)}
                    <h4 className='font-extrabold mt-4 mb-1'>{item.menuTitle}</h4>
                    <p className='font-semibold'>{item.items}</p>
                    <Link to='/menu' className='border block w-max py-1.5 px-10 md:px-20 mt-5 font-semibold uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-300 cursor-pointer'>SİFARİŞ ET</Link>
                </div>
            </div>
        </>
    )
}

export default PartyDetail
