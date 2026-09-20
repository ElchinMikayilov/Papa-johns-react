import React from 'react'
import { Link, useParams } from 'react-router'
import Header from '../../components/Header'


const details = [   
    {
        id: 3,
        title: "Rastik & 4 Pendir",
        titleDescription: "Dostlarla görüşlərin əvəzolunmaz ziyafət kombosu! 🥳",
        img: "/images/offersSection/image3.png",
        shortDescription: "Zəngin ləzzətlər masanızı bəzəyəcək.",
        items: [
            "🍕 Orta Rastik",
            "🍕 Orta 4 Pendir",
            "🍟 Kartof dilimləri",
            "🥖 Sarımsaqlı Çubuqlar",
            "🥤 2 ədəd Coca-Cola 0.5L",
            "🔥 Cəmi 39 AZN!"
        ],
        conditions: [
            "✓ Müddət: 1 Avqust – 31 Avqust",
            "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
            "✓ Kampaniyaya 500 ml həcmli qazlı içkilər daxildir.",
            "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 390 bonus qazanırsınız!"
        ]
    },
    {
        id: 4,
        title: "Böyük Papa Miks",
        titleDescription: "Yay istilərində sərinlədən və doyduran kombo!",
        img: "/images/offersSection/image4.png",
        shortDescription: "🍦 Yaxınlarınla bölüşmək üçün ən dadlı seçim.",
        items: [
            "🍕 Papa Miks",
            "🥐 Pepperoni Rolls",
            "🍨 4 ədəd dondurma",
            "🔥 Cəmi 25 AZN!"
        ],
        conditions: [
            "✓ Müddət: 1 Avqust – 31 Avqust",
            "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
            "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 250 bonus qazanırsınız!"
        ]
    },
    {
        id: 5,
        title: "Super Papa & Marqarita",
        titleDescription: "İki böyük ləzzət bir arada! 🤩",
        img: "/images/offersSection/image5.png",
        shortDescription: "Aclığa son qoyacaq klassik seçimlər.",
        items: [
            "🍕 Böyük Super Papa",
            "🍕 Böyük Marqarita",
            "🔥 CƏMİ 33 AZN!",
        ],
        conditions: [
            "✓ Müddət: 1 Avqust – 31 Avqust",
            "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
            "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 330 bonus qazanırsınız!"
        ]
    },
    {
        id: 6,
        title: "Qarışıq Ət & Vegetarian",
        titleDescription: "Fərqli dadlar axtaranlar üçün mükəmməl seçim! 😍",
        img: "/images/offersSection/image6.png",
        shortDescription: "İki fərqli pizza və dadlı qəlyanaltı bir arada.",
        items: [
            "🍕 Kiçik Qarışıq Ət",
            "🍕 Kiçik Vegetarian",
            "🔥Pepperoni Rolls",
            "🔥 CƏMİ 29 AZN!",
        ],
        conditions: [
            "✓ Müddət: 1 Avqust – 31 Avqust",
            "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
            "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 290 bonus qazanırsınız!"
        ]
    },
    {
        id: 7,
        title: "Kiçik Çiken BBQ",
        titleDescription: "Günün dadlı fasiləsi! 😋",
        img: "/images/offersSection/image7.png",
        shortDescription: "Sevimli ləzzətlərin bir araya gəldiyi xüsusi təklif.",
        items: [
            "🍕 Kiçik Çiken BBQ",
            "🧀 Pendirli Çubuqlar",
            "🍟 Kartof dilimləri",
            "🔥 CƏMİ 19 AZN!",
        ],
        conditions: [
            "✓ Müddət: 1 Avqust – 31 Avqust",
            "✓ Kampaniya restoran içi, al-apar və çatdırılma üçün keçərlidir.",
            "✓ Bu kampaniyanı restoran içi, sayt və ya tətbiq vasitəsilə sifariş etdikdə 190 bonus qazanırsınız!"
        ]
    }
]


const OfferDetail = () => {
    const { id } = useParams()
    const item = details.find(item => item.id === Number(id))

    return (
        <>
            <Header />

            <div key={item.id} className='mt-30 lg:mt-50 mb-10 w-90/100 lg:w-70/100 mx-auto flex flex-col lg:flex-row gap-5 lg:gap-10 text-sm lg:text-[16px] bg-[#f5e8dc] p-5 md:p-10 rounded-4xl'>
                <img src={item.img} alt={item.title} className='w-full h-60 lg:w-120 md:h-100 rounded-2xl' />
                <div>
                    <h2 style={{ fontFamily: "Titan" }} className='text-xl lg:text-3xl my-2'>{item.title}</h2>
                    <h3 className='font-[arial]'>{item.titleDescription}</h3>
                    <h4 className='font-[arial] my-4'>{item.shortDescription}</h4>
                    {item.items.map((text, index) => <p key={index} className='font-[arial]'>{text}</p>)}
                    <div className='mt-4'>
                        {item.conditions.map((text, index) => <p key={index} className='font-[arial]'>{text}</p>)}
                    </div>
                    <Link to='/menu' className='border block w-max py-1.5 px-10 md:px-20 mt-3 lg:mt-1 font-semibold uppercase bg-[#cfeb0b] tracking-widest rounded-4xl hover:bg-transparent duration-300 cursor-pointer'>SİFARİŞ ET</Link>
                </div>
            </div>
        </>
    )
}

export default OfferDetail
