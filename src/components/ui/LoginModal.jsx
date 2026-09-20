import { Modal } from 'antd'
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { AiOutlineMail } from "react-icons/ai"

const LoginModal = ({ openModal, setOpenModal }) => {
    return (
        <Modal
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={null}
        >
            <div className='p-3 lg:h-130'>
                <h2 className='font-[arial] text-3xl font-bold'>Giriş edin</h2>
                <p className='font-[arial] text-lg tracking-wider my-5'>Sifarişinizi ödəmək üçün daxil olun</p>

                <div className='space-y-5'>
                    <div className='bg-[#4060B8] px-8 py-3 rounded-lg'>
                        <a target='_blank' href="https://www.facebook.com/?locale=tr_TR" className='flex items-center gap-6'>
                            <FaFacebookSquare className='text-3xl text-white' />
                            <p className='text-lg font-bold text-white'>Facebook</p>
                        </a>
                    </div>
                    <div className='border border-gray-300 px-8 py-3 rounded-lg'>
                        <a target='_blank' href="https://workspace.google.com/gmail/" className='flex items-center gap-6'>
                            <FcGoogle className='text-3xl' />
                            <p className='text-lg font-bold text-black'>Google</p>
                        </a>
                    </div>
                    <div className='border border-gray-300 px-8 py-3 rounded-lg'>
                        <a target='_blank' href="https://www.mail.com/" className='flex items-center gap-6 '>
                            <AiOutlineMail className='text-3xl text-black' />
                            <p className='text-lg font-bold text-black'>Email</p>
                        </a>
                    </div>
                    <h3 className='text-gray-600'>Qeydiyyatdan keçdikdə, <span className='underline hover:no-underline cursor-pointer'>"İstifadə şərtləri"</span> və <span className='underline hover:no-underline cursor-pointer'>"Məxfilik siyasəti"</span> ilə razılaşırsınız</h3>
                </div>

            </div>
        </Modal>
    )
}

export default LoginModal
