import React from 'react'

const AddressSkeleton = () => {
    return (
        <div className='border border-[#C9C9C9] p-2 rounded-lg animate-pulse'>
            <div className='h-4 w-32 bg-gray-200 rounded'></div>
            <div className='flex items-center gap-1 my-1.5 ml-1'>
                <div className='w-5 h-5 bg-gray-200 rounded-full'>
                </div>
                <div className='h-3 w-52 bg-gray-200 rounded'>
                </div>
            </div>
            <div className='flex gap-1 ml-1.5'>
                <div className='w-5 h-5 bg-gray-200 rounded-full'>
                </div>
                <div className='h-3 w-full bg-gray-200 rounded'>
                </div>
            </div>
        </div>
    )
}

export default AddressSkeleton
