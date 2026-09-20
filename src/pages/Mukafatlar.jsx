import React from 'react'

const Mukafatlar = ({ setOpenModal }) => {
  return (
    <div className='h-100'>
      <h2 className='font-[arial] mb-5'>Bonuslar və eksklüziv təkliflər əldə etmək üçün elektron ünvanınızı təsdiqləyin</h2>
      <button onClick={() =>setOpenModal(true)} className='uppercase bg-[#cfeb0b] hover:bg-transparent cursor-pointer duration-300 border rounded-4xl py-2 px-4 lg:px-6 lg:py-3 tracking-widest'>daxİl ol</button>
    </div>
  )
}

export default Mukafatlar
