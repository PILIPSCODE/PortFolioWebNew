import React from 'react'
import {  FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'

const Contactus = () => {
    return (
        <div className=' font-popOne  ' id='contactus'>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Contact!</h1>
            <div className='p-10 overflow-hidden  grid md:grid-cols-2 '>
                <div
                className='md:pl-10 text-justify pl-2 text-lg '
                >
                    <h1 className='text-2xl max-md:text-lg'>I&apos;love to communicate with you! If you&apos;re interested in collaborating, have any questions, or just want to say hello, feel free to contact me. send message in here!!!</h1>
                    <div className='flex max-sm:justify-center  text-3xl my-5  gap-2'>
                            <FaInstagram />
                            <FaTiktok />
                            <FaWhatsapp />
                        </div>
                </div>
                <div className='md:px-10 max-md:pt-6 text-2xl'>
                    <div>
                        <h1>Name</h1>
                        <input type="text" placeholder='Type Here' className='w-full text-lg border  text-white px-2 mt-1 h-14 bg-black ' />
                    </div>
                    <div className=' my-5'>
                        <h1>Email/Instagram</h1>
                        <input type="text" placeholder='Type Here' className='w-full  px-2 text-lg border bg-none mt-1 text-white h-14 bg-black ' />
                    </div>
                    <div className=' mb-5'>
                        <h1>Masukan</h1>
                        <textarea placeholder='Type Here' className='resize-none p-2 text-lg border  text-white mt-1 w-full h-32 bg-black' />
                    </div>
                    <div className='flex justify-end text-white'>

                        <button className='cursor-pointer border border-white rounded-lg btn-lg btn  bg-black'>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus