import React from 'react'
import { GetBlog, GetProject } from '@/app/libs/data'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaGithub } from 'react-icons/fa6'


const Blogpage = async () => {
    const DataBlog = await GetBlog()
    return (
        <div id='Blog' className=' w-screen pt-10  font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Blog</h1>
            <div className='lg:w-8/12  mx-auto  max-lg:w-11/12    text-justify'>
                <div className='grid md:grid-cols-2 gap-10 mt-10  w-full lg:pr-4'>
                    {DataBlog?.map((e: any, index: any) => (
                        e.img !== null ?
                            <div key={e.id} className="card  bg-base-100 shadow-lg rounded-lg shadow-white focus-within:outline-orange-500 focus-within:shadow-orange-500 outline">
                                <figure className=' relative '>
                                    <Image src={e.img} alt='card-img' width={864} height={448} className='object-contain' />
                                </figure>
                                <div className="card-body rounded-b-md text-black bg-white">
                                    <p className='text-xl'>{e.Title}</p>
                                    <div className='text-sm my-2'>
                                        {/* <p dangerouslySetInnerHTML={{__html:e.description}}></p> */}
                                        <p >{e?.createdAt ? String(e.createdAt).slice(0, 10) : 'Tidak ada tanggal'}</p>
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

export default Blogpage