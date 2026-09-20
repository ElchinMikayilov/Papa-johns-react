import React from 'react'
import PageHeader from '../components/PageHeader'
import Feedback from '../components/home/Feedback'
import { useFormik } from 'formik'
import { sendMessageSchema } from '../validations/sendMessageSchema'
import { message } from 'antd'

const Contact = () => {
    const { values, errors, handleChange, handleSubmit, handleReset } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: ''
        },
        onSubmit: (values) => {
            console.log(values)
            message.success('Mesaj uğurla göndərildi')
            handleReset()
        },
        validationSchema: sendMessageSchema
    })
    return (
        <>
            <PageHeader />

            <div className='mt-25 lg:mt-50 w-94/100 lg:w-70/100 mx-auto pb-15'>
                <h2 style={{ fontFamily: "Titan" }} className='text-3xl lg:text-5xl mb-5 lg:mb-10'>Sizin rəy və təkliflərinizi gözləyirik</h2>
                <h3 className='text-xl lg:text-3xl font-bold'>Bizimlə Əlaqə Saxlayın</h3>

                <form onSubmit={handleSubmit} className='md:w-130 mt-5 space-y-5 mb-15 lg:mb-25'>
                    <label className='font-semibold block'>
                        <h2 className='mb-2'>Ad</h2>
                        <input name='name' value={values.name} onChange={handleChange} placeholder='Zəhmət olmasa, adınızı daxil edin' className='border md:text-lg focus:outline-blue-300 placeholder:text-[#0000005b] placeholder:md:text-lg border-[#0000001a] w-full px-4 py-2 md:py-3.5 rounded-md' />
                        {errors.name && <p className='text-red-500'>{errors.name}</p>}
                    </label>
                    <label className='font-semibold block'>
                        <h2 className='mb-2'>Soyad</h2>
                        <input name='surname' value={values.surname} onChange={handleChange} placeholder='Zəhmət olmasa, adınızı daxil edin' className='border md:text-lg focus:outline-blue-300 placeholder:text-[#0000005b] placeholder:md:text-lg border-[#0000001a] w-full px-4 py-2 md:py-3.5 rounded-md' />
                        {errors.surname && <p className='text-red-500'>{errors.surname}</p>}
                    </label>
                    <label className='font-semibold block'>
                        <h2 className='mb-2'>Mobil</h2>
                        <input name='phone' value={values.phone} onChange={handleChange} placeholder='Zəhmət olmasa, adınızı daxil edin' className='border md:text-lg focus:outline-blue-300 placeholder:text-[#0000005b] placeholder:md:text-lg border-[#0000001a] w-full px-4 py-2 lg:py-3.5 rounded-md' />
                        {errors.phone && <p className='text-red-500'>{errors.phone}</p>}
                    </label>
                    <label className='font-semibold block'>
                        <h2 className='mb-2'>Email</h2>
                        <input name='email' value={values.email} onChange={handleChange} placeholder='Zəhmət olmasa, adınızı daxil edin' className='border md:text-lg focus:outline-blue-300 placeholder:text-[#0000005b] placeholder:md:text-lg border-[#0000001a] w-full px-4 py-2 lg:py-3.5 rounded-md' />
                        {errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </label>
                    <label className='font-semibold block'>
                        <h2 className='mb-2'>Mesaj</h2>
                        <textarea name='message' value={values.message} onChange={handleChange} placeholder='Zəhmət olmasa, adınızı daxil edin' className='border md:text-lg focus:outline-blue-300 placeholder:text-[#0000005b] placeholder:md:text-lg border-[#0000001a] w-full px-4 pt-3.5 rounded-md' />
                        {errors.message && <p className='text-red-500'>{errors.message}</p>}
                    </label>

                    <button type='submit' className='uppercase bg-[#cfeb0b] tracking-widest font-[arial] border py-1.5 px-5 text-sm lg:text-base cursor-pointer hover:bg-transparent duration-300 rounded-4xl'>Təstİq etmək</button>
                </form>

                <Feedback />
            </div>
        </>
    )
}

export default Contact
