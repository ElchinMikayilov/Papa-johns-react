import React, { useEffect, useState } from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { MdDeliveryDining } from 'react-icons/md'
import { CiLocationOn } from "react-icons/ci"
import { GoClock } from "react-icons/go"
import { getAddress } from '../../services/Service'
import AddressSkeleton from '../skeleton/AddressSkeleton'
import { FaChevronLeft } from "react-icons/fa"

const AddressModal = ({ addressModal, setAddressModal, setAddressData }) => {
  const [type, setType] = useState(true)
  const [locationModal, setLocationModal] = useState(false)
  const [search, setSearch] = useState('')
  const [addresses, setAddresses] = useState([])
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAddress().then(res => {
      setAddresses(res)
    })
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {addressModal && (
        <div className='fixed inset-0 md:px-2 z-50 flex md:items-center justify-center bg-black/40'>

          <div className='md:w-[1100px] md:h-[600px] bg-white md:rounded-4xl md:overflow-hidden flex relative'>

            <div className='md:w-[40%] p-5 mt-5 md:mt-0'>

              <div className='flex gap-3 mt-2'>
                <button onClick={() => setType(false)} className={`${type ? 'border-gray-300' : 'border-black'} cursor-pointer flex w-full justify-center items-center gap-1.5 border-2 px-4 py-2 rounded-4xl`}>
                  <HiOutlineShoppingBag className='text-xl' />
                  <p className='text-sm'>Al-apar</p>
                </button>

                <button onClick={() => setType(true)} className={`${type ? 'border-black' : 'border-gray-300'} cursor-pointer flex w-full justify-center items-center gap-1.5 border-2 px-4 py-2 rounded-4xl`}>
                  <MdDeliveryDining className='text-xl' />
                  <p className='text-sm'>Çatdırılma</p>
                </button>
              </div>

              {type ? (
                <div className='mt-6 p-3 h-125 flex flex-col justify-between'>
                  <div>
                    <h2 className='font-bold mb-2 text-lg uppercase'>Çatdırılma ünvanını daxil edin</h2>
                    <input type='text' placeholder='Çatdırılma ünvanı' className='border border-[#C9C9C9] text-sm placeholder:text-gray-500 font-[arial] w-full mt-4 py-2 px-4 rounded-lg outline-none' />
                    <button onClick={() => setLocationModal(true)} className='mt-3 text-sm cursor-pointer font-[arial]'>Yerimi avtomatik müəyyən et</button>
                  </div>
                  <button className='bg-[#C9C9C9] text-white w-full py-3 rounded-4xl uppercase font-semibold tracking-widest text-lg'>bu ünvana çatdır</button>
                </div>
              ) : (
                <div>
                  <h2 className='my-7 mb-3 uppercase font-[arial] text-lg font-bold'>Al-apar</h2>
                  <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Restoran axtarışı' className='border w-full pl-5 py-2 text-sm font-[arial] outline-0 rounded-lg border-[#C9C9C9]' />

                  <div className='space-y-3 mt-5 h-90 md:h-80 mb-3 overflow-y-scroll'>
                    {
                      loading ? (
                        addresses.map(item => <AddressSkeleton />)
                      ) : (
                        addresses.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                          .map(item => (
                            <div key={item.id} onClick={() => setSelectedAddress(item)} className={`border cursor-pointer p-2 rounded-lg cursor-pointer 
                          ${selectedAddress?.id === item.id ? 'border-green-800 border-2' : 'border-[#C9C9C9]'}`}>
                              <h2 className='uppercase text-green-900 font-bold text-sm'>{item.name}</h2>
                              <h3 className='flex items-center gap-1 my-1.5 ml-1'><CiLocationOn className='text-xl' /> <span className='text-sm mt-0.5 font-[arial]'>{item.address}</span></h3>
                              <h4 className='flex gap-1 ml-1.5'><GoClock className='text-xl' /> <span className='text-sm font-[arial] mt-0.5'>Restoran içi: {item.workingHours} Al-apar: {item.lastOrder.dineIn} Çatdırılma: {item.lastOrder.takeAway}</span></h4>
                            </div>
                          ))
                      )
                    }
                  </div>

                  {
                    selectedAddress && (
                      <button onClick={() => {
                        localStorage.setItem('address', JSON.stringify(selectedAddress))
                        setAddressData(selectedAddress)
                        setAddressModal(false)
                      }} className='border-2 border-gray-500 hover:bg-[#cfeb0b] duration-200 cursor-pointer w-full uppercase tracking-[3px] text-sm py-4 rounded-4xl'>burdan sİfarİş et</button>
                    )
                  }

                </div>
              )}


              {locationModal && (
                <div className='fixed inset-0 z-[60] flex items-center justify-center bg-black/40'>
                  <div className='bg-white w-120 px-6 pt-6 pb-3 rounded-4xl'>
                    <h2 className='font-[arial] border-b pb-3 text-2xl border-gray-300'>Xəbərdarlıq</h2>
                    <p className='py-4 font-[arial]'>Məkan girişinə icazə verilməyib. Zəhmət olmasa brauzer ayarlarında məkan girişinə icazə verin və yenidən cəhd edin.</p>

                    <div className='flex items-center justify-center mt-20'>
                      <button onClick={() => setLocationModal(false)} className='bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-lg font-bold'>OK</button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className='w-[60%] hidden md:block'>
              <iframe className='w-full h-full border-0' src={selectedAddress ? selectedAddress.maps :
                'https://www.google.com/maps?q=Baku,Azerbaijan&output=embed'
              }></iframe>
            </div>

            <button onClick={() => setAddressModal(false)} className='hidden md:block absolute top-3 right-3 bg-white rounded-full w-8 h-8 shadow cursor-pointer'>✕</button>
            <button onClick={() => setAddressModal(false)} className='md:hidden absolute top-3 left-3 cursor-pointer flex items-center gap-1 text-green-900 font-[arial]'><FaChevronLeft /> <span className='text-sm'>to menu</span></button>

          </div>
        </div>
      )}
    </>
  )
}

export default AddressModal
