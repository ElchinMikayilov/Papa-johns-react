import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { getAddress } from '../../services/Service'
import { useNavigate } from 'react-router'

const Restaurants = ({ setAddressData, setOpenModal, openModal }) => {
    const [address, setAddress] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAddress().then(res => setAddress(res))
    }, [])

    return (
        <>
            <PageHeader openModal={openModal} setOpenModal={setOpenModal} />

            <div className='mt-25 lg:mt-55'>
                <h2 className='w-94/100 lg:w-70/100 mx-auto font-bold text-2xl md:text-3xl lg:text-2xl text-[#212529]'>Ən yaxın restoranı tapın</h2>

                <iframe src="https://www.google.com/maps?q=Baku,Azerbaijan&output=embed" className='mt-10 w-full h-120'></iframe>
            </div>

            <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-7 w-94/100 lg:w-70/100 mx-auto my-15'>
                {
                    address.map(item => (
                        <div key={item.id} className='bg-[#F5E8DC] rounded-2xl p-5'>
                            <h2 style={{ fontFamily: "Titan" }} className='text-2xl lg:text-3xl mb-13'>{item.name}</h2>
                            <h3 className='font-extrabold text-lg lg:text-xl'>Ünvan</h3>
                            <p className='font-[arial] text-sm lg:text-base mt-1 mb-4'>{item.address}</p>
                            <h3 className='font-extrabold text-lg lg:text-xl'>İş saatları</h3>
                            <p className='font-[arial] mt-1 mb-4 text-sm lg:text-base'>Restoran içi: {item.workingHours} Al-apar: {item.lastOrder.dineIn} Çatdırılma: {item.lastOrder.takeAway}</p>
                            <button onClick={() => {
                                setAddressData(item)
                                navigate('/menu')
                            }} className='bg-[#cfeb0b] hover:bg-transparent text-sm lg:text-base tracking-widest lg:tracking-normal duration-300 cursor-pointer border rounded-4xl py-2 w-full uppercase'>burdan Sİfarİş verİn</button>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Restaurants
