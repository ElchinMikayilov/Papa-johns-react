import React from 'react'
import { IoClose } from "react-icons/io5"
import { Link } from 'react-router'

const PrivacyModal = ({ setOpen }) => {
    return (
        <div className="fixed w-88 sm:w-90 lg:w-110 ml-3 bottom-3 right-3 z-[100] bg-white rounded-3xl shadow-2xl p-3 md:px-5 md:py-7">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-5 cursor-pointer"><IoClose className="text-2xl lg:text-4xl" /></button>

            <div className="ml-3">
                <h2 style={{ fontFamily: "Titan" }} className="text-xl leading-6 md:leading-7 md:text-2xl mb-2">Məxfiliyimiz<br /> Qorunur</h2>

                <p className="font-[arial] text-sm md:text-base leading-5 mb-1">Bu vebsayt təcrübənizi yaxşılaşdırmaq və sizi maraqlandıracaq mövzuları göstərmək üçün məlumatlarınızdan istifadə edir.</p>
                <Link to='/privacy' className="underline font-[arial] text-sm md:text-base">Nə üçün?</Link>
            </div>
        </div>
    )
}

export default PrivacyModal