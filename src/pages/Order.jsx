import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'
import { IoCloseSharp } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeBasket } from '../redux/basket/basketSlice'
import { LuMoveLeft } from "react-icons/lu"
import { Link, useNavigate } from 'react-router'
import LoginModal from '../components/ui/LoginModal'
import { message } from 'antd'

message.config({ top: 150 })

const Order = () => {
    const [openModal, setOpenModal] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
        time: ''
    })

    const basket = useSelector(state => state.basket.basket)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const total = basket.reduce((sum, item) => sum + Number(item.price) * item.count, 0)
    const address = JSON.parse(localStorage.getItem('address'))


    const now = new Date()
    const currentTime = now.toLocaleTimeString('az-AZ', {
        hour: '2-digit',
        minute: '2-digit'
    })
    const [timeType, setTimeType] = useState('nowTime')


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!e.target.checkValidity()) {
            message.error('Məlumatları düzgün doldurun!')
            return
        }

        console.log({
            products: basket.map(item => item.title).join(', '),
            address: address?.address,
            time: timeType === 'nowTime' ? currentTime : formData.time,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            comment: formData.comment,
        })

        message.success('Sifarişiniz uğurla göndərildi!')

        setFormData({
            name: '',
            email: '',
            phone: '',
            comment: '',
            time: ''
        })
    }

    return (
        <div className='mt-18 md:mt-24 lg:mt-44 w-90/100 md:w-96/100 lg:w-70/100 mx-auto mb-10'>
            <PageHeader setOpenModal={setOpenModal} />

            <Link to='/menu' className='flex items-center gap-1 my-3 md:my-7 group cursor-pointer'>
                <LuMoveLeft className='text-lg transition-transform duration-300 group-hover:-translate-x-2' />
                <span className='text-lg'>Menyuya qayıdın</span>
            </Link>

            <div className='flex flex-col md:flex-row gap-7 md:gap-0 md:justify-between'>
                <div className='md:w-[60%]'>
                    <h2 className='font-extrabold text-2xl'>Səbətiniz</h2>

                    <div className='space-y-11 mt-4 md:my-8 md:ml-3'>
                        {
                            basket.map(item => (
                                <div key={item.id}>
                                    <div className='relative flex md:h-35 w-full justify-between'>

                                        <div className='flex h-full gap-2 md:gap-4 lg:gap-8'>
                                            <img className='w-30 h-20 md:w-40 md:h-30 lg:w-50 lg:h-full rounded-2xl' src={item.img} alt={item.title} />
                                            <h3 className='font-extrabold md:text-lg w-46 sm:w-full'>{item.title}</h3>
                                        </div>

                                        <div className='hidden md:flex flex-col items-end justify-between h-full'>
                                            <button className='cursor-pointer' onClick={() => {
                                                if (basket.length == 1) {
                                                    navigate('/menu')
                                                }
                                                dispatch(removeBasket(item.id))
                                            }}><IoCloseSharp className='text-2xl' /></button>

                                            <div className='flex items-center gap-3 justify-end'>
                                                <div className='flex items-center gap-1 text-green-900'>
                                                    <button onClick={() => dispatch(decrement(item.id))} className='group'><CiCircleMinus className='text-xl cursor-pointer group-hover:hidden' /><FaCircleMinus className='hidden group-hover:block text-xl text-green-900 cursor-pointer' /></button>
                                                    <span className='font-[arial]'>{item.count}</span>
                                                    <button onClick={() => dispatch(increment(item.id))} className='group'><CiCirclePlus className='text-xl cursor-pointer group-hover:hidden' /> <FaCirclePlus className='hidden group-hover:block text-xl cursor-pointer text-green-900' /></button>
                                                </div>

                                                <p className='font-extrabold'>{(Number(item.price) * item.count).toFixed(2)} AZN</p>
                                            </div>
                                        </div>

                                        <button className='cursor-pointer absolute right-0 md:hidden' onClick={() => {
                                            if (basket.length == 1) {
                                                navigate('/menu')
                                            }
                                            dispatch(removeBasket(item.id))
                                        }}><IoCloseSharp className='text-2xl' /></button>
                                    </div>

                                    <div className='flex items-center gap-3 justify-end md:hidden'>
                                        <div className='flex items-center gap-1.5 text-green-900'>
                                            <button onClick={() => dispatch(decrement(item.id))} className='group'><CiCircleMinus className='text-xl cursor-pointer group-hover:hidden' /><FaCircleMinus className='hidden group-hover:block text-xl text-green-900 cursor-pointer' /></button>
                                            <span className='font-[arial]'>{item.count}</span>
                                            <button onClick={() => dispatch(increment(item.id))} className='group'><CiCirclePlus className='text-xl cursor-pointer group-hover:hidden' /> <FaCirclePlus className='hidden group-hover:block text-xl cursor-pointer text-green-900' /></button>
                                        </div>

                                        <p className='font-extrabold'>{(Number(item.price) * item.count).toFixed(2)} AZN</p>
                                    </div>

                                </div>
                            ))

                        }

                        <div>
                            <div className='flex justify-between items-center border-y pt-5 pb-2'>
                                <span className='text-xl'>Cəmi:</span>
                                <span className='font-bold text-lg'>{total.toFixed(2)} AZN</span>
                            </div>
                            <div className='flex pt-2 justify-between items-center text-green-900'>
                                <span className='text-2xl font-extrabold'>Cəmi:</span>
                                <span className='text-2xl font-extrabold'>{total.toFixed(2)} AZN</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='mt-3 md:mt-0 md:w-[33%]'>
                    <h2 className='font-extrabold text-2xl'>Ünvan və ödəniş</h2>
                    <div className='mt-3 md:mt-7'>
                        <p className='text-sm text-gray-500'>Restorandan al-apar</p>
                        <h3 className='text-sm font-semibold mt-1 mb-2.5'>{address?.address}</h3>
                        <iframe src={address?.maps} className='rounded-lg w-full'></iframe>
                    </div>

                    <form onSubmit={handleSubmit} method='post' className='flex flex-col gap-3 my-6'>
                        <label className='text-sm'>
                            <span className='text-gray-400'>Ad-apar üçün vaxt</span> <br />
                            <select value={timeType} onChange={(e) => setTimeType(e.target.value)} className='border w-full py-2 pl-3 outline-0 cursor-pointer border-[#dedede] mt-1.5 rounded-lg'>
                                <option value="nowTime">Mümkün qədər tez ({currentTime})</option>
                                <option value="time">Vaxt</option>
                            </select>
                            {timeType === 'time' && (
                                <input value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} type="time" className='border w-full py-2 pl-3 focus:outline-blue-500 mt-1 border-[#dedede] rounded-lg' />
                            )}
                        </label>
                        <label className='text-sm'>
                            <span className='text-gray-400'>Ad (mütləqdir)</span> <br />
                            <input minLength={3} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required type="text" className='border w-full py-2 pl-3 focus:outline-blue-500 mt-1 border-[#dedede] rounded-lg' />
                        </label>
                        <label className='text-sm'>
                            <span className='text-gray-400'>Email (mütləqdir)</span> <br />
                            <input value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required type="email" className='border w-full py-2 pl-3 focus:outline-blue-500 border-[#dedede] mt-1 rounded-lg' />
                        </label>
                        <label className='text-sm'>
                            <span className='text-gray-400'>Telefon nömrəsi (mütləqdir)</span> <br />
                            <input value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                required type="tel" pattern="(050|051|055|070|077|099|010|060|011|012)[0-9]{7}"
                                className='border focus:outline-blue-500 w-full py-2 pl-3 border-[#dedede] mt-1 rounded-lg' />
                        </label>
                        <label className='text-sm'>
                            <span className='text-gray-400'>Şərh</span> <br />
                            <input maxLength={30} value={formData.comment}
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                type="text" className='border w-full py-2 pb-15 focus:outline-blue-500 pl-3 border-[#dedede] rounded-lg mt-1' />
                        </label>
                        <label className='text-sm'>
                            <span className='text-gray-400'>Ödəniş növü</span> <br />
                            <select className='border w-full cursor-pointer py-2 pl-3 outline-0 border-[#dedede] mt-1 rounded-lg'>
                                <option>Seçilməyib</option>
                                <option value="card">Onlayn-Yeni kart əlavə et</option>
                            </select>
                        </label>

                        <button type='submit' className={`uppercase my-7 cursor-pointer duration-300 tracking-widest rounded-4xl py-4 ${formData.name && formData.email && formData.phone ? ' bg-[#cfeb0b] text-black border' : 'bg-[#C9C9C9] text-white'
                            }`}>sİfarİşİ təsdİq et: {total.toFixed(2)} AZN</button>
                    </form>

                </div>
            </div>

            <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Order
