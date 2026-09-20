import React from 'react'
import PageHeader from '../components/PageHeader'

const Register = () => {
    return (
        <>
            <PageHeader />

            <div className='mt-30 lg:mt-50 w-94/100 lg:w-70/100 mx-auto'>
                <h2 style={{ fontFamily: "Titan" }} className='text-2xl md:text-4xl lg:text-5xl mb-30'>Daha çox pizza təklifləri üçün qeydiyyatdan keçin</h2>
                <div className='flex items-center justify-center'>
                    <input type="email" className='shadow-md w-80 sm:w-150 mb-30 outline-0 pl-10 bg-[#FCFBC5] py-3' />
                </div>
            </div>
        </>
    )
}

export default Register
