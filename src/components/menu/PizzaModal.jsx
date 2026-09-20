import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addBasket } from "../../redux/basket/basketSlice"
import { IoCloseSharp } from "react-icons/io5"

const PizzaModal = ({ item, open, setOpen }) => {
    const dispatch = useDispatch()

    const [size, setSize] = useState(item.variations[0])
    const [type, setType] = useState('Ənənəvi')
    const [openType, setOpenType] = useState(false)

    const types = [...new Set(item.variations.map(item => item.type))]

    const filterData = item.variations.filter(
        item => item.type === type
    )

    return (
        <>
            {
                open && (
                    <div className='fixed md:px-2 inset-0 z-[1000] bg-black/50 flex items-center justify-center'>
                        <div className='bg-white pb-24 md:pb-0 w-full h-full md:w-full md:max-w-[900px] md:max-h-[90vh] overflow-y-scroll lg:overflow-auto md:h-auto md:px-3 md:py-5 md:rounded-3xl relative'>

                            <button onClick={() => setOpen(false)}
                                className='absolute top-3 right-3 z-10 bg-white shadow-md rounded-full text-2xl cursor-pointer'><IoCloseSharp /></button>


                            <div className='flex flex-col md:flex-row gap-5 md:p-4'>
                                <div className='md:w-150'>
                                    <img className='md:rounded-2xl' src={item.img} alt={item.title} />
                                    <div className='px-5 md:px-0'>
                                        <h2 className='font-[arial] font-bold text-xl mt-4 md:mt-6 mb-1'>{item.title}</h2>
                                        <p>{item.composition}</p>
                                    </div>
                                </div>
                                <div className='md:w-150'>
                                    <div className='md:grid md:grid-cols-2 ml-3 md:ml-0'>
                                        {
                                            filterData.map((item, index) => (
                                                <button onClick={() => { setSize(item), setType(item.type) }} key={index} className={`${size === item ? 'border-green-600' : 'border-gray-400'} border m-1.5 px-5 text-sm font-[arial] cursor-pointer py-2 rounded-4xl`}>{item.size}</button>
                                            ))
                                        }
                                    </div>
                                    <div onClick={() => setOpenType(!openType)} className='pl-5 md:pl-0 mt-4 cursor-pointer'>
                                        <h2 className='font-[arial] text-lg font-bold'>Xəmirin növünü seçin</h2>
                                        <p className='text-gray-700 font-mono'>{size?.type}</p>
                                    </div>
                                    <div className='flex gap-3 mt-3 ml-4 md:ml-0'>
                                        {
                                            openType && types.map((typeName, index) => (
                                                <button key={index} onClick={() => {

                                                    setType(typeName)

                                                    const data = item.variations.find(variation => variation.type === typeName && variation.size === size.size)

                                                    setSize(data || item.variations.find(variation => variation.type === typeName))
                                                    setOpenType(false)

                                                }} className={`${type === typeName ? 'border-green-600' : 'border-gray-400'} w-40 relative font-[arial] h-18 cursor-pointer pl-2 pt-1.5 rounded-lg border flex items-start justify-start`}>
                                                    {typeName}
                                                    {
                                                        type === typeName && <FaCheckCircle className='absolute bottom-2 right-2 text-green-700 text-lg' />
                                                    }
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className='fixed bottom-0 bg-white md:static w-full flex justify-end items-center gap-5 p-5'>
                                {<p className='text-[17px]'>{Number(size?.price).toFixed(2)} AZN</p>}
                                <button onClick={() => {
                                    dispatch(addBasket({
                                        ...item,
                                        selectedSize: size.size,
                                        selectedType: size.type,
                                        price: size.price,
                                        count: 1
                                    }))
                                    setOpen(false)
                                }} className='uppercase border rounded-[20px] tracking-widest text-sm font-[arial] bg-[#cfeb0b] hover:bg-transparent cursor-pointer px-3 py-2 duration-200'>səbətə əlavə et</button>
                            </div>


                        </div>
                    </div>
                )
            }
        </>
    )
}

export default PizzaModal
