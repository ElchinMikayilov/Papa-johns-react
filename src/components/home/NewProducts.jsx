import React from 'react'
import NewProductCard from './NewProductCard'

const newProducts = [
    {
        id: 1,
        title: "Croissant Klassik Pepperoni",
        image: "/images/newProducts/image1.png",
        desc: "Kruassan xəmir, Pizza sousu, Pepperoni, Ekstra Mozzarella"
    },
    {
        id: 2,
        title: "Croissant Çiken BBQ",
        image: "/images/newProducts/image2.png",
        desc: "Kruassan xəmir, Pizza Sousu, Qril Toyuğu, Göbələk, Mozzarella, Barbekyu Sousu"
    },
    {
        id: 3,
        title: "Croissant Nyu Orleans",
        image: "/images/newProducts/image4.png",
        desc: "Kruassan xəmir, Sarımsaq Sousu, Qril Toyuğu, Qarğıdalı, Göbələk, Yaşıl Bibər, Mozzarella"
    },
    {
        id: 4,
        title: "Croissant Marqarita",
        image: "/images/newProducts/image3.png",
        desc: "Kruassan xəmir, Pizza sousu, Ekstra Mozzarella, Pomidor, Oreqano"
    }
]

const NewProducts = () => {
    return (
        <div className='w-90/100 lg:w-70/100 mx-auto my-15 lg:my-20'>
            <div>
                <h2 style={{ fontFamily: "Titan" }} className='font-bold text-2xl md:text-3xl lg:text-5xl'>Yeni Kruassan pizzalarımızı dadmısınız?</h2>
                <h3 className='font-bold text-xl text-center md:text-start lg:text-3xl mt-8 mb-4'>Xırtıldayan kənarlar, unudulmaz dad!</h3>
                <p className='text-sm md:text-[16px] font-semibold'>Kruassan xəmirində hazırlanan yeni pizzalarımız artıq satışdadır.</p>
                <p className='text-sm md:text-[16px] font-semibold mt-1 mb-3 md:mb-10'>Klassik Pepperoni, Çiken BBQ, Nyu Orleans və Marqarita ilə hər zövqə uyğun ləzzəti kəşf edin. Sizi bütün restoranlarımızda gözləyirik.</p>
            </div>
            <div className='grid grid-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
                {
                    newProducts.map((item) => <NewProductCard key={item.id} item={item}  />)
                }
            </div>
        </div>
    )
}

export default NewProducts
