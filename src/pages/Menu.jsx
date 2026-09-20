import PageHeader from '../components/PageHeader'
import Basket from '../components/menu/Basket'
import { useEffect, useState } from 'react'
import MenuCategory from '../components/menu/MenuCategory'
import { getKampaniyalar, getPapadias, getPizza, getLunch, getSalat, getPasta, getSouses, getDrink, getDesert, getPizzaParty } from '../services/Service'
import Mukafatlar from './Mukafatlar'
import AddressModal from '../components/ui/AddressModal'
import { useSelector } from 'react-redux'
import { BsFillBasket2Fill } from "react-icons/bs"

const categories = [
  {
    id: "kampaniyalar",
    title: "Kampaniyalar",
    getData: getKampaniyalar
  },
  {
    id: "papadias",
    title: "Papadias",
    getData: getPapadias
  },
  {
    id: "pizza",
    title: "Pizza",
    getData: getPizza
  },
  {
    id: "lunch",
    title: "Lunch",
    getData: getLunch
  },
  {
    id: "salat",
    title: "Salat",
    getData: getSalat
  },
  {
    id: 'pasta',
    title: 'Pasta',
    getData: getPasta
  },
  {
    id: 'souses',
    title: 'Souses',
    getData: getSouses
  },
  {
    id: 'drink',
    title: 'Drink',
    getData: getDrink
  },
  {
    id: 'desert',
    title: 'Desert',
    getData: getDesert
  },
  {
    id: 'pizzaparty',
    title: 'Pizzaparty',
    getData: getPizzaParty
  }
]

const Menu = ({ addressData, setAddressData, openModal, setOpenModal }) => {
  const basketItems = useSelector(state => state.basket.basket)
  const total = basketItems.reduce((sum, item) => sum + Number(item.price) * item.count, 0)
  const basketCount = basketItems.reduce((sum, item) => sum + item.count, 0)

  const [reward, setReward] = useState(false)
  const [basket, setBasket] = useState([])
  const [mobileBasket, setMobileBasket] = useState(false)
  const [addressModal, setAddressModal] = useState(false)

  useEffect(() => {
    if (!addressData) {
      setTimeout(() => {
        setAddressModal(true)
      }, 1000)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [reward])

  return (
    <>
      <div className='mt-33 md:mt-44 lg:mt-60 md:mb-30'>
        <PageHeader setReward={setReward} openModal={openModal} setOpenModal={setOpenModal} />

        <div className='w-90/100 lg:w-70/100 mx-auto flex gap-8'>

          <div className='flex-1 space-y-7 lg:space-y-13'>
            {reward ? (<Mukafatlar setOpenModal={setOpenModal} />) :
              (categories.map(item => (<MenuCategory key={item.id} id={item.id} title={item.title} getData={item.getData} />)))}
          </div>

          <Basket basket={basket} setBasket={setBasket} setAddressModal={setAddressModal} addressData={addressData} mobileBasket={mobileBasket} setMobileBasket={setMobileBasket} />
        </div>
      </div>
      <AddressModal addressModal={addressModal} setAddressModal={setAddressModal} setAddressData={setAddressData} />

      {
        basketItems.length > 0 && !addressModal && (
          <div onClick={() => setMobileBasket(true)} className='lg:hidden fixed bottom-0 left-0 w-full bg-[#2d5d2a] text-white p-4 z-50'>
            <div className='flex justify-between items-center'>
              <div className='flex relative'>
                <BsFillBasket2Fill className='text-xl' />
                <p className='absolute -top-1 -right-3'>{basketCount}</p>
              </div>
              <span className='text-sm font-[arial]'>{total.toFixed(2)} AZN</span>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Menu
