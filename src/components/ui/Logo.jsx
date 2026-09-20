import React from 'react'
import logoImage from '../../assets/images/logo.avif'

const Logo = () => {
  return (
    <div className='px-3 lg:p-2.5'>
      <img src={logoImage} className='w-28 lg:w-full outline-0' alt="Logo" />
    </div>
  )
}

export default Logo