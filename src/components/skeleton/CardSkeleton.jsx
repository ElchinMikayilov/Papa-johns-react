import React from 'react'

const CardSkeleton = () => {
    return (
        <div className='rounded-xl animate-pulse'> <div className='w-full h-56 bg-gray-200 rounded-xl'></div>
            <div className='p-3'>
                <div className='h-5 w-3/4 bg-gray-200 rounded mb-3'></div>
                <div className='h-4 w-20 bg-gray-200 rounded mb-3'></div>
                <div className='h-7 w-32 bg-gray-200 rounded-[20px]'>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton
