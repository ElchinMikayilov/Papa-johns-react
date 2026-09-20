import React, { useState } from 'react'
import { CiCircleMinus } from "react-icons/ci"
import { CiCirclePlus } from "react-icons/ci"
import { addBasket } from '../../redux/basket/basketSlice'
import { useDispatch } from 'react-redux'
import { IoCloseSharp } from "react-icons/io5"

const CardModal = ({ item, open, setOpen }) => {
    const [count, setCount] = useState(1)

    const dispatch = useDispatch()

    return (
        <>
            {
                open && (
                    <div className='fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center'>
                        <div className='bg-white md:p-4 w-full h-full md:w-full md:max-w-[600px] md:max-h-[90vh] lg:max-h-150 md:rounded-3xl relative'>

                            <button onClick={() => setOpen(false)} className='absolute top-2  right-2  z-10 rounded-full bg-white text-2xl cursor-pointer'><IoCloseSharp /></button>

                            <div className='md:p-4'>
                                <img src={item.img} alt={item.title} />
                                <div className='p-4 md:p-3'>
                                    <h2 style={{ fontFamily: "Titan" }} className='text-xl mt-2'>{item.title}</h2>
                                    <p className='font-[arial] my-2'>{item.composition}</p>
                                    <div className='fixed md:static w-full bottom-1 right-0'>
                                        <div className='flex justify-between md:justify-end gap-1 md:gap-7 items-center py-5 px-3 mt-5 md:pt-5 border-t border-gray-300'>
                                            <div className='flex items-center gap-1.5'>
                                                <CiCircleMinus onClick={() => {
                                                    if (count > 1) {
                                                        setCount(count - 1)
                                                    }
                                                }} className='text-2xl' />
                                                <span className='text-lg'>{count}</span>
                                                <CiCirclePlus onClick={() => setCount(count + 1)} className='text-2xl' />
                                            </div>
                                            <h3 className='font-bold md:text-lg'>{(Number(item.price) * count).toFixed(2)} AZN</h3>
                                            <button onClick={() => {
                                                dispatch(addBasket({ ...item, count }))
                                                setOpen(false)
                                            }} className='uppercase border rounded-[20px] tracking-widest text-sm font-[arial] bg-[#cfeb0b] hover:bg-transparent cursor-pointer px-2 md:px-3 py-2 duration-200'>səbətə əlavə et</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CardModal
