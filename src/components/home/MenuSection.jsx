import React from 'react'
import MenuSectionCard from './MenuSectionCard'
import { Link } from 'react-router'
import Feedback from '../home/Feedback'

const menuSection = [
    {
        id: 1,
        title: "Daha yaxşı inqrediyentlər. Daha yaxşı pizza.",
        image: "/images/menuSection/image3.avif",
        desc: "Çox sadədir. Həmişə də belə olub. İlk pizzamızdan bəri!",
        link: 'Haqqımızda',
        path: '/about'
    },
    {
        id: 2,
        title: "Hər Gün Xüsusi Pizza Təklifləri",
        image: "/images/menuSection/image2.avif",
        desc: "Hər tədbir və hər büdcə üçün xüsusi pizza təkliflərimiz var.",
        link: 'Təkliflər',
        path: "/offers"
    },
    {
        id: 3,
        title: "Sizə yaxın restoranı tapın",
        image: "/images/menuSection/image1.avif",
        desc: "Papa Johns 18 restoranı ilə xidmətinizdədir.",
        link: 'Restoranlar',
        path: 'about/restaurants'
    },
]

const MenuSection = () => {
    return (
        <div className='w-90/100 lg:w-70/100 mx-auto mb-15'>
            <h2 style={{ fontFamily: "Titan" }} className='text-4xl lg:text-5xl'>Daha çox məlumat əldə etmək istəyirsinizmi?</h2>

            <div className='grid md:grid-cols-3 gap-5 mt-15 mb-6 lg:mb-10'>
                {
                    menuSection.map(item => <MenuSectionCard key={item.id} item={item} />)
                }
            </div>
            <Feedback />
        </div>
    )
}

export default MenuSection
