import Image from 'next/image'
import React from 'react'
import { FaCopyright, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-black text-white border-t  font-popOne'>
            <div className=' relative  '>
                <div className='md:w-9/12 w-full mx-auto md:items-center p-4 max-md:flex-col flex justify-between'>
                    <div >
                        <div className='flex items-center gap-2  md:justify-center'>
                            <Image src={'/pilips.png'} className='bg-white rounded-full' width={60} height={60} alt='logo' />
                            <h1 className='font-Abril text-3xl '>Pilipus</h1>
                        </div>
                        
                    </div>
                    <h1 className='text-xl mt-2 md:text-center  md:w-1/4'>&quot;Time is Everything, so dont spend your time to being lazy&quot;"</h1>
                </div>
                <div className=' w-full flex justify-center mt-8 mb-3 text-white'>
                    <h1 className='flex text-lg items-center gap-1'>Copy Right <FaCopyright /> 2024 By Pilips</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer