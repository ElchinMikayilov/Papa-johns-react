import React from 'react'
import { Link } from 'react-router'

const MenuSectionCard = ({ item }) => {
    const { title, image, desc, link, path } = item
    return (
        <div className='rounded-2xl lg:rounded-xl bg-[#f5e8dc]'>
            <img className='rounded-t-2xl lg:rounded-t-xl' src={image} alt={title} />
            <div className='p-3 lg:py-3 lg:px-5'>
                <h2 className='font-extrabold text-[17px] md:min-h-18 lg:min-h-12'>{title}</h2>
                <p className='mt-3 mb-3 lg:mb-12 font-semibold md:min-h-18'>{desc}</p>
                <Link to={path} className='underline hover:text-gray-600'>{link}</Link>
            </div>
        </div>
    )
}

export default MenuSectionCard
