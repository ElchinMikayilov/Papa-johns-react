import React, { useState } from 'react'
import CardModal from './CardModal'
import PizzaModal from './PizzaModal'
import { useSelector } from 'react-redux'

const Card = ({ item }) => {
    const basket = useSelector(state => state.basket.basket)

    const { title, img, price } = item
    const [open, setOpen] = useState(false)

    return (
        <>
            <div onClick={() => setOpen(true)} className='group hover:shadow-md duration-200 rounded-xl cursor-pointer'>
                <div className='relative'>
                    <img className='rounded-xl' src={img} alt={title} />

                    {
                        basket.find(card => card.id === item.id) && (
                            <div className='absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center'>
                                <span className='text-white text-4xl font-bold font-[arial]'>
                                    {basket.find(card => card.id === item.id).count}
                                </span>
                            </div>
                        )
                    }
                </div>
                <div className='p-3'>
                    <h2 style={{ fontFamily: "Titan" }} className='mb-2 text-sm md:text-lg h-10 md:h-14'>{title}</h2>
                    <h3 className='text-sm font-[arial] mb-3 bg-[#0000001a] w-max py-1 px-3 rounded-2xl lg:bg-white lg:p-0'>{(Number(price).toFixed(2))} AZN</h3>
                    <button onClick={() => setOpen(true)} className='hidden lg:block uppercase border rounded-[20px] tracking-widest text-sm font-[arial] bg-[#cfeb0b] hover:bg-transparent cursor-pointer px-3 py-0.5 opacity-0 group-hover:opacity-100 duration-300'>Səbətə əlavə et</button>
                </div>
            </div>
            {
                item.variations?.length > 0 ? <PizzaModal item={item} open={open} setOpen={setOpen} />
                    : <CardModal item={item} open={open} setOpen={setOpen} />
            }
        </>
    )
}

export default Card
