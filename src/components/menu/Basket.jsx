import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowDown } from "react-icons/io"
import { MdDeliveryDining } from "react-icons/md"
import { IoCloseOutline } from "react-icons/io5"
import { CiCircleMinus } from "react-icons/ci"
import { CiCirclePlus } from "react-icons/ci"
import { FaCirclePlus } from "react-icons/fa6"
import { FaCircleMinus } from "react-icons/fa6"
import { Link, useNavigate } from 'react-router'
import { GiShoppingCart } from "react-icons/gi"
import { removeBasket, increment, decrement } from '../../redux/basket/basketSlice'
import LoginModal from '../ui/LoginModal'
import { AiOutlineShopping } from "react-icons/ai"
import { FaChevronLeft } from "react-icons/fa"

const Basket = ({ setAddressModal, addressData, mobileBasket, setMobileBasket }) => {
    const basket = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [promo, setPromo] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [promoCode, setPromoCode] = useState('')
    const [check, setCheck] = useState(false)

    const total = basket.reduce(
        (sum, item) => sum + Number(item.price) * item.count, 0
    )

    // 
    useEffect(() => {
        const close = () => setPromo(false)

        document.addEventListener('click', close)

        return () => document.removeEventListener('click', close)
    }, [])
    // 

    return (
        <>
            <div className='hidden lg:block w-80 sticky top-60 mb-20 h-fit'>
                <div onClick={() => setAddressModal(true)} className='border border-gray-300 flex items-center justify-between pl-4 pr-2 py-2 rounded-lg'>
                    {
                        addressData ? (<div className='flex items-center gap-1.5 cursor-pointer'>
                            <AiOutlineShopping className='text-lg' />
                            <span className='text-sm'>{addressData.address}</span>
                        </div>)
                            : (<div className='flex text-green-900 items-center gap-1.5 cursor-pointer'>
                                <MdDeliveryDining className='text-lg mt-1' />
                                <span className='text-sm'>Çatdırılma ünvanını daxil edin</span>
                            </div>)
                    }
                    <IoIosArrowDown className='text-lg' />
                </div>

                <div className='h-44 border my-5 border-gray-300 rounded-xl flex flex-col overflow-hidden'>
                    <div className='min-h-0 flex-1 overflow-y-auto px-4 pt-5'>
                        {
                            basket.length > 0 ? (
                                basket.map(item => (
                                    <div key={item.id} className='space-y-1.5 mb-3'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-1'>
                                                <h2 className='font-extrabold text-[17px]'>{item.title}
                                                    {
                                                        item.selectedSize && (' - ' + item.selectedSize.split('-')[0])
                                                    }
                                                </h2>
                                            </div>
                                            <IoCloseOutline onClick={() => dispatch(removeBasket(item.id))} className='cursor-pointer text-lg' />
                                        </div>
                                        {
                                            item.selectedType && (<p className='text-sm font-mono'>{item.selectedType}</p>)
                                        }

                                        <div className='flex items-center gap-10 justify-end'>
                                            <div className='flex items-center gap-1 text-green-900'>
                                                <button onClick={() => dispatch(decrement(item.id))} className='group'><CiCircleMinus className='text-xl cursor-pointer group-hover:hidden' /><FaCircleMinus className='hidden group-hover:block text-xl text-green-900 cursor-pointer' /></button>
                                                <span className='font-[arial]'>{item.count}</span>
                                                <button onClick={() => dispatch(increment(item.id))} className='group'><CiCirclePlus className='text-xl cursor-pointer group-hover:hidden' /> <FaCirclePlus className='hidden group-hover:block text-xl cursor-pointer text-green-900' /></button>
                                            </div>

                                            <p className='font-extrabold'>{Number((item.price) * item.count).toFixed(2)} AZN</p>
                                        </div>

                                    </div>
                                ))
                            )
                                : (
                                    <div className='flex items-center justify-center flex-col h-32 gap- text-[#C9C9C9]'>
                                        <GiShoppingCart className='text-7xl' />
                                        <p className='text-sm'>Səbətiniz boşdur</p>
                                    </div>
                                )
                        }
                    </div>

                    {
                        basket.length > 0 && (<div className='px-4 text-sm font-bold'>
                            <div className='border-t w-full flex items-center py-4 justify-between'>
                                <p className='uppercase'>Yekun</p>
                                <p>{total.toFixed(2)} AZN</p>
                            </div>
                        </div>)
                    }

                </div>

                <div onClick={(e) => { e.stopPropagation(), setPromo(true) }} className={`${promo ? 'p-2' : 'p-3'} border border-gray-300 text-gray-500 text-sm rounded-lg`}>
                    {
                        promo ? (
                            <div className='flex'>
                                <input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} autoFocus className='flex-1 min-w-0 outline-none pl-2' />
                                <button onClick={(e) => {
                                    e.stopPropagation()
                                    !promoCode.trim() ? setPromo(false) : setOpenModal(true)
                                }} className='bg-[#cfeb0b] cursor-pointer shrink-0 border uppercase tracking-[2px] font-[arial] text-black px-4 py-1 rounded-4xl'>Aktİvləşdİr</button>
                            </div>
                        ) : ('Promokodunuz varmı? Onu burda daxil edin')
                    }
                </div>
                <LoginModal openModal={openModal} setOpenModal={setOpenModal} />

                {
                    basket.length > 0 && (<div className='flex items-start mt-5 gap-1'>
                        <input checked={check} onChange={(e) => setCheck(e.target.checked)} type="checkbox" className='w-5 h-5 outline-0' />
                        <div className='mt-1'>
                            <p className='text-sm'><Link to='/404' className='underline cursor-pointer hover:no-underline'>"İstifadə şərtləri"</Link> və <Link to='/404' className='underline cursor-pointer hover:no-underline'>"Məxfilik Siyasəti"</Link> ilə razıyam.</p>
                            {!check && <p className='text-[12px] text-red-500 font-semibold'>Xahiş edirik, öncə "İstifadə şərtləri" və "məxfilik siyasətini" qəbul edin</p>}
                        </div>
                    </div>)
                }
                <button onClick={() => {
                    if (!addressData) {
                        setAddressModal(true)
                        return
                    }
                    navigate('/order')
                }} disabled={!check} className='disabled:bg-[#c9c9c99c] disabled:border-0 disabled:text-white font-[arial] text-[14px] bg-[#cfeb0b] hover:bg-transparent cursor-pointer border w-full py-2.5 duration-200 rounded-4xl tracking-[3px] uppercase mt-3'>sİfarİşİn təsdİqİnə keçİn</button>
            </div>



            {/* MOBİL */}

            <div className={`fixed inset-0 z-[1000] bg-black/40 lg:hidden ${mobileBasket ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`absolute right-0 top-0 h-full w-full bg-white p-5 overflow-y-auto transition-transform duration-700 ease-out ${mobileBasket ? 'translate-x-0' : 'translate-x-full'}`}>

                    <button onClick={() => setMobileBasket(false)} className='absolute top-5 left-3 text-2xl cursor-pointer'><FaChevronLeft /></button>

                    {
                        mobileBasket && (
                            <div className='w-80 sticky top-10 mb-20 w-full h-fit'>
                                <div onClick={() => { setAddressModal(true), setMobileBasket(false) }} className='border border-gray-300 flex items-center justify-between pl-4 pr-2 py-2 rounded-lg'>
                                    {
                                        addressData ? (<div className='flex items-center gap-1.5 cursor-pointer'>
                                            <AiOutlineShopping className='text-lg' />
                                            <span className='text-sm'>{addressData.address}</span>
                                        </div>)
                                            : (<div className='flex text-green-900 items-center gap-1.5 cursor-pointer'>
                                                <MdDeliveryDining className='text-lg mt-1' />
                                                <span className='text-sm'>Çatdırılma ünvanını daxil edin</span>
                                            </div>)
                                    }
                                    <IoIosArrowDown className='text-lg' />
                                </div>

                                <div className='h-55 md:h-44 border my-5 border-gray-300 rounded-xl flex flex-col overflow-hidden'>
                                    <div className='min-h-0 flex-1 overflow-y-auto px-4 pt-5'>
                                        {
                                            basket.length > 0 ? (
                                                basket.map(item => (
                                                    <div key={item.id} className='space-y-1.5 mb-3'>
                                                        <div className='flex items-center justify-between'>
                                                            <div className='flex items-center gap-1'>
                                                                <h2 className='font-extrabold text-[17px]'>{item.title}
                                                                    {
                                                                        item.selectedSize && (' - ' + item.selectedSize.split('-')[0])
                                                                    }
                                                                </h2>
                                                            </div>
                                                            <IoCloseOutline onClick={() => dispatch(removeBasket(item.id))} className='cursor-pointer text-lg' />
                                                        </div>
                                                        {
                                                            item.selectedType && (<p className='text-sm font-mono'>{item.selectedType}</p>)
                                                        }

                                                        <div className='flex items-center gap-10 justify-end'>
                                                            <div className='flex items-center gap-1 text-green-900'>
                                                                <button onClick={() => dispatch(decrement(item.id))} className='group'><CiCircleMinus className='text-xl cursor-pointer group-hover:hidden' /><FaCircleMinus className='hidden group-hover:block text-xl text-green-900 cursor-pointer' /></button>
                                                                <span className='font-[arial]'>{item.count}</span>
                                                                <button onClick={() => dispatch(increment(item.id))} className='group'><CiCirclePlus className='text-xl cursor-pointer group-hover:hidden' /> <FaCirclePlus className='hidden group-hover:block text-xl cursor-pointer text-green-900' /></button>
                                                            </div>

                                                            <p className='font-extrabold'>{Number((item.price) * item.count).toFixed(2)} AZN</p>
                                                        </div>

                                                    </div>
                                                ))
                                            )
                                                : (
                                                    <div className='flex items-center justify-center flex-col h-32 gap- text-[#C9C9C9]'>
                                                        <GiShoppingCart className='text-7xl' />
                                                        <p className='text-sm'>Səbətiniz boşdur</p>
                                                    </div>
                                                )
                                        }
                                    </div>

                                    {
                                        basket.length > 0 && (<div className='px-4 text-sm font-bold'>
                                            <div className='border-t w-full flex items-center py-4 justify-between'>
                                                <p className='uppercase'>Yekun</p>
                                                <p>{total.toFixed(2)} AZN</p>
                                            </div>
                                        </div>)
                                    }

                                </div>

                                <div onClick={(e) => { e.stopPropagation(), setPromo(true) }} className={`${promo ? 'p-2' : 'p-3'} border border-gray-300 text-gray-500 text-sm rounded-lg`}>
                                    {
                                        promo ? (
                                            <div className='flex'>
                                                <input value={promoCode} onChange={(e) => setPromoCode(e.target.value)} autoFocus className='flex-1 min-w-0 outline-none pl-2' />
                                                <button onClick={(e) => {
                                                    e.stopPropagation()
                                                    !promoCode.trim() ? setPromo(false) : setOpenModal(true)
                                                }} className='bg-[#cfeb0b] cursor-pointer shrink-0 border uppercase tracking-[2px] font-[arial] text-black px-4 py-1 rounded-4xl'>Aktİvləşdİr</button>
                                            </div>
                                        ) : ('Promokodunuz varmı? Onu burda daxil edin')
                                    }
                                </div>
                                <LoginModal openModal={openModal} setOpenModal={setOpenModal} />

                                {
                                    basket.length > 0 && (<div className='flex items-start mt-5 gap-1'>
                                        <input checked={check} onChange={(e) => setCheck(e.target.checked)} type="checkbox" className='w-5 h-5 outline-0' />
                                        <div className='mt-1'>
                                            <p className='text-sm'><Link to='/404' className='underline cursor-pointer hover:no-underline'>"İstifadə şərtləri"</Link> və <Link to='/404' className='underline cursor-pointer hover:no-underline'>"Məxfilik Siyasəti"</Link> ilə razıyam.</p>
                                            {!check && <p className='text-[12px] text-red-500 font-semibold'>Xahiş edirik, öncə "İstifadə şərtləri" və "məxfilik siyasətini" qəbul edin</p>}
                                        </div>
                                    </div>)
                                }
                                <button onClick={() => {
                                    if (!addressData) {
                                        setAddressModal(true)
                                        setMobileBasket(false)
                                        return
                                    }
                                    navigate('/order')
                                }} disabled={!check} className='disabled:bg-[#c9c9c99c] disabled:border-0 disabled:text-white font-[arial] text-[14px] bg-[#cfeb0b] hover:bg-transparent cursor-pointer border w-full py-2.5 duration-200 rounded-4xl tracking-[3px] uppercase mt-3'>sİfarİşİn təsdİqİnə keçİn</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Basket
