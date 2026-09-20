import React from 'react'
import { Link } from 'react-router'

const NewProductCard = ({ item }) => {
    const { title, desc, image } = item
    return (
        <div>
            <img src={image} alt={title} />
            <div className='p-2'>
                <h2 className='font-extrabold text-xl md:text-[15px] lg:text-[17px]'>{title}</h2>
                <div className='md:py-3 lg:p-3 font-semibold'>
                    <p className='my-2 md:my-0 md:min-h-27 text-sm lg:text-[16px]'>{desc}</p>
                    <Link to='/menu' className='underline hover:text-gray-600 font-semibold md:font-normal text-sm md:text-[16px]'>Sifariş et</Link>
                </div>
            </div>
        </div>
    )
}

export default NewProductCard
