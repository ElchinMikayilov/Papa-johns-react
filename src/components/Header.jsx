import React, { useEffect, useState } from 'react'
import Logo from './ui/Logo'
import { TfiWorld } from "react-icons/tfi"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Link, Links, NavLink, useLocation } from 'react-router'
import { HiMiniBars3 } from "react-icons/hi2"
import { paths } from '../router/Router'

const Header = () => {
  const [language, setLanguage] = useState(false)
  const [mobilLanguage, setMobilLanguage] = useState(false)
  const [menu, setMenu] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setMenu(false)
    setMobilLanguage(false)
  }, [location.pathname])

  return (
    <div className='fixed top-0 left-0 z-50 w-full bg-white shadow-[1px_1px_6px_2px_#dbdbdb]'>
      <div className='lg:w-70/100 mx-auto'>
        <div className='flex items-center justify-between my-2.5'>
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
            <Link to='/menu' className='lg:hidden text-[12px] border border-black rounded-4xl bg-[#cfeb0b] px-5 py-1 tracking-widest'>SİFARİŞ ET</Link>
            <button className={`p-1 h-full transition duration-300 ${menu ? "bg-gray-300" : "bg-transparent"}`}
              onClick={() => setMenu(!menu)}><HiMiniBars3 /></button>
          </div>
        </div>
        {<div className={`lg:hidden absolute w-full top-10 right-0 bg-white overflow-hidden transition-[max-height] duration-1000 ease-in-out ${menu ? "max-h-[550px]" : "max-h-0"}`}>
          <div className='flex flex-col text-[#222] font-bold px-4 py-5'>
            <Link to="/menu">Menyu</Link>
            {
              paths.map((item, index) => <Link key={index} to={item.path}>{item.title}</Link>)
            }
            <p className='font-medium'>İnqrediyentlər</p>
            <p className='font-medium'>Allergenlər</p>
            <p className='font-medium'>Restoranlar</p>
            <p className='font-medium'>Sual-Cavab</p>
            <Link to='/menu' className='mt-5 text-center w-35 text-[12px] border border-black rounded-4xl bg-[#cfeb0b] px-5 py-1 tracking-widest'>SİFARİŞ ET</Link>
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
              paths.map((item, index) => <NavLink end={item.path === '/offers'} className={({ isActive }) =>
                `rounded-[20px] py-1 px-2.5 hover:text-black hover:bg-[#f0f0f0] ${isActive ? "bg-black text-white" : "hover:text-black hover:bg-[#f0f0f0]"}`
              } key={index} to={item.path}>{item.title}</NavLink>)
            }
          </nav>
          <Link to='/menu' className='cursor-pointer border hover:bg-white duration-300 border-black rounded-4xl bg-[#cfeb0b] px-5 py-1 tracking-widest'>SİFARİŞ ET</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
