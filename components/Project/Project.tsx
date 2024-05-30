import React from 'react'
import { GetProject } from '@/app/libs/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaGithub } from 'react-icons/fa6'
const Project = async () => {
    const DataProject = await GetProject()
    return (
        <div id='Project' className=' w-screen pt-10  font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Project!</h1>
            <div className='lg:w-8/12  mx-auto  max-lg:w-11/12    text-justify'>
                <div className='grid md:grid-cols-2 gap-10 mt-10  w-full lg:pr-4'>
                    {DataProject?.map((e, index) => (
                        e.img !== null ?
                            <div key={e.id} className="card  bg-base-100 shadow-lg rounded-lg shadow-white focus-within:outline-orange-500 focus-within:shadow-orange-500 outline">
                                <figure className=' relative h-64'>
                                    <Image src={e.img} alt='card-img' fill className='object-cover' />
                                    <div className='h-full w-full text-2xl focus-within:opacity-100  absolute flex justify-center items-center bg-black/50 opacity-0 duration-300 hover:opacity-100'>
                                        <div className=' flex gap-4 p-2 bg-white rounded-3xl text-black'>
                                            <Link className={`${e.link !== ""? "" : "text-red-600 pointer-events-none"}`} href={e.link}><FaEye /></Link>
                                            <Link className={`${e.github !== ""? "" : "text-red-600 pointer-events-none"}`}  href={e.github}><FaGithub /></Link>
                                        </div>
                                    </div>
                                </figure>
                                <div className="card-body rounded-b-md text-black bg-white">
                                    <h2 className="card-title">
                                        {e.name}
                                        <div className={`${index === 0? "" : "hidden"} badge badge-secondary`}>NEW</div>
                                    </h2>
                                    <p>{e.description}</p>
                                    <div className="card-actions pt-2  justify-center">
                                        {e.technology.map((e, index) => (
                                            <div key={index} className="badge border border-black text-black bg-white">{e.technology}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Project