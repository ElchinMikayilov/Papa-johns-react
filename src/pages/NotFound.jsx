import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <h2 style={{ fontFamily: "Titan" }} className='text-4xl md:text-6xl lg:text-7xl'>Page Not Found</h2>
      <p className='font-semibold text-lg px-4 lg:px-0 text-center md:text-xl mt-3 md:mt-5 mb-5 md:mb-10'>The page you are looking for doesn't exist or has been moved.</p>
      <Link to='/' className='uppercase border hover:bg-transparent duration-300 rounded-4xl py-2.5 px-7 bg-[#cfeb0b]'>Go Back to Safety</Link>
    </div>
  )
}

export default NotFound
