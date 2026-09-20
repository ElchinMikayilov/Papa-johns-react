import React, { useEffect, useState } from 'react'
import Logo from './ui/Logo'
import { TfiWorld } from "react-icons/tfi"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Link, NavLink, useLocation } from 'react-router'
import { HiMiniBars3 } from "react-icons/hi2"
import { paths } from '../router/Router'
import { getCategory } from '../services/Service'
import { FaStar } from "react-icons/fa"
import LoginModal from './ui/LoginModal'

const PageHeader = ({ setReward, openModal, setOpenModal }) => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    getCategory().then(res => setCategory(res))
  }, [])

  const [language, setLanguage] = useState(false)
  const [mobilLanguage, setMobilLanguage] = useState(false)
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('kampaniyalar')

  const location = useLocation()

  useEffect(() => {
    setMenu(false)
    setMobilLanguage(false)
  }, [location.pathname])


  return (
    <div className='fixed top-0 left-0 z-50 w-full bg-white shadow-[1px_1px_6px_2px_#dbdbdb]'>
      <div className='lg:w-70/100 mx-auto'>
        <div className='flex items-center justify-between my-2.5 pb-2 border-b border-gray-200'>
          <Link to='/'><Logo /></Link>
          <div className='relative hidden lg:block'>
            <div onClick={() => setLanguage(!language)} className='flex items-center cursor-pointer p-2.5'>
              <TfiWorld className='text-2xl mr-2' />
              <span className='font-bold text-lg'>Azərbaycanca</span>
              <RiArrowDropDownLine className='text-2xl' />
            </div>
            {
              language && (
                <div className="absolute right-0 bg-[#f5e8dc] rounded-[10px] p-2 w-53 font-bold text-lg">
                  <p className="py-2 px-3 cursor-pointer">Azərbaycanca</p>
                  <p className="py-2 px-3 cursor-pointer">English</p>
                </div>
              )
            }
          </div>
          <div className='flex items-center gap-3 mr-4 lg:hidden'>
            {
              location.pathname === '/menu' || location.pathname === '/about/restaurants' ? (
                <button onClick={() => setOpenModal(true)} className='lg:hidden text-[12px] border border-black rounded-4xl bg-[#cfeb0b] px-5 py-1 tracking-widest'>Daxil ol</button>
              ) : (
                <Link to='/menu' className='lg:hidden text-[12px] border border-black rounded-4xl bg-[#cfeb0b] px-5 py-1 tracking-widest'>SİFARİŞ ET</Link>
              )
            }
            <button className={`p-1 h-full transition duration-300 ${menu ? "bg-gray-300" : "bg-transparent"}`}
              onClick={() => setMenu(!menu)}><HiMiniBars3 /></button>
          </div>
        </div>

        {<div className={`lg:hidden absolute w-full top-10 right-0 bg-white overflow-hidden transition-[max-height] duration-1000 ease-in-out ${menu ? "max-h-[550px]" : "max-h-0"}`}>
          <div className='flex flex-col text-lg text-[#222] font-bold px-4 py-5'>
            <Link to="/menu">Menyu</Link>
            {
              paths.map((item, index) => <Link key={index} to={item.path}>{item.title}</Link>)
            }
            {
              location.pathname.startsWith('/about') && (<>
                <Link to='/about/ingredients' className='font-medium'>İnqrediyentlər</Link>
                <Link to='/about/allergens' className='font-medium'>Allergenlər</Link>
                <Link to='/about/restaurants' className='font-medium'>Restoranlar</Link>
                <Link to='/about/faq' className='font-medium'>Sual-Cavab</Link>
              </>
              )
            }
          </div>

          <div className='relative border-y border-gray-200'>
            <div onClick={() => setMobilLanguage(!mobilLanguage)} className='flex items-center justify-between'>
              <div className='flex items-center py-4 px-2.5'>
                <TfiWorld className='text-xl mr-2' />
                <span className='font-bold text-md'>Azərbaycanca</span>
              </div>
              <RiArrowDropDownLine className='text-2xl' />
            </div>
            {
              mobilLanguage && (
                <div className="right-0 w-full font-bold text-md bg-white border-b border-gray-200">
                  <p className="py-1 px-3 cursor-pointer">Azərbaycanca</p>
                  <p className="py-1 px-3 cursor-pointer">English</p>
                </div>
              )
            }
          </div>
        </div>}

        <div className='hidden lg:flex items-center justify-between h-[58px]'>
          <nav className='space-x-2.5 text-[18px] font-bold text-[#222]'>
            <NavLink end to="/menu" className={({ isActive }) => `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black !text-white hover:bg-black hover:text-white" : ""}`}>
              Menyu</NavLink>
            {
              paths.map((item, index) => <NavLink end={item.path === '/about'} className={({ isActive }) =>
                `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black !text-white hover:bg-black hover:text-white" : "hover:bg-[#f0f0f0] hover:text-black"}`
              } key={index} to={item.path}>{item.title}</NavLink>)
            }
          </nav>

          {
            location.pathname.startsWith("/about") && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md">
                <div className="lg:w-70/100 mx-auto space-x-3 mb-3 mt-1 text-lg">
                  <NavLink className={({ isActive }) =>
                    `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black !text-white hover:bg-black hover:text-white" : "hover:bg-[#f0f0f0] hover:text-black"}`
                  } to="/about/ingredients">İnqrediyentlər</NavLink>
                  <NavLink className={({ isActive }) =>
                    `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black !text-white hover:bg-black hover:text-white" : "hover:bg-[#f0f0f0] hover:text-black"}`
                  } to="/about/allergens">Allergenlər</NavLink>
                  <NavLink className={({ isActive }) =>
                    `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black !text-white hover:bg-black hover:text-white" : "hover:bg-[#f0f0f0] hover:text-black"}`
                  } to="/about/restaurants">Restoranlar</NavLink>
                  <NavLink className={({ isActive }) =>
                    `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black !text-white hover:bg-black hover:text-white" : "hover:bg-[#f0f0f0] hover:text-black"}`
                  } to="/about/faq">Sual-Cavab</NavLink>
                </div>
              </div>
            )
          }

          {
            location.pathname === '/menu' || location.pathname === '/about/restaurants' ? (
              <button onClick={() => setOpenModal(true)} className='cursor-pointer border hover:bg-white duration-300 border-black text-[15px] rounded-4xl bg-[#cfeb0b] px-6 py-2 tracking-widest'>DAXİL OL</button>
            ) : (
              <Link to='/menu' className='cursor-pointer border hover:bg-white duration-300 border-black text-[15px] rounded-4xl bg-[#cfeb0b] px-6 py-2 tracking-widest'>SİFARİŞ ET</Link>
            )
          }
        </div>

        {location.pathname === "/menu" && (

          <div className="flex md:flex-wrap lg:mt-2 lg:gap-2 overflow-x-auto h-full md:overflow-visible whitespace-nowrap scrollbar-hide">

            <button onClick={() => { setActive("mukafatlar"), setReward(true) }} className={`${active === "mukafatlar" ? 'bg-black text-white' : "hover:bg-[#f0f0f0]"} flex items-center cursor-pointer gap-1 capitalize font-[arial] mb-2 mx-1.5 lg:mx-0 text-sm md:text-[17px] lg:text-[18px] rounded-[20px] py-0.5 md:py-1 px-2 md:px-2.5`}>
              <FaStar className='mb-1' />Mükafatlar</button>
            {
              category.map(item => (
                <a key={item.id} href={`#${item.slug}`} onClick={() => { setActive(item.slug), setReward(false) }}
                  className={`capitalize font-[arial] mb-2 mx-1.5 lg:mx-0 text-sm md:text-[17px] lg:text-[18px] rounded-[20px] py-0.5 md:py-1 px-2 md:px-2.5 
                  ${active === item.slug ? "bg-black text-white" : "hover:bg-[#f0f0f0]"}`}>
                  {item.category}</a>
              ))
            }
          </div>
        )}

      </div>

      <LoginModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default PageHeader
