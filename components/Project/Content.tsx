
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaEye, FaGithub } from 'react-icons/fa6'
type getProject = ({
    technology: {
        id: string;
        technology: string | null;
        projectId: string;
    }[];
} & {
    id: string;
    name: string | null;
    img: string | null;
    link: string;
    github: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
})[] | null
type props = {
    DataProject:getProject
}
const Content = (props:props) => {
    return (
        <div className='grid md:grid-cols-2 gap-10 mt-10  w-full lg:pr-4'>
            {props.DataProject?.map((e,index) => (
                e.img !== null?
            <div key={index} className="card  bg-base-100 shadow-lg rounded-lg shadow-white focus-within:outline-orange-500 focus-within:shadow-orange-500 outline">
                <figure className='h-2/3 relative '>
                    <Image src={e.img} alt='card-img' width={752} height={256}  className='object-contain'/>
                    <div className='h-full w-full text-2xl focus-within:opacity-100  absolute flex justify-center items-center bg-black/50 opacity-0 duration-300 hover:opacity-100'>
                        <div className=' flex gap-4 p-2 bg-white rounded-3xl text-black'>
                        <Link href={e.link}><FaEye/></Link>
                        <Link href={e.github}><FaGithub/></Link>
                        </div>
                    </div>
                </figure>
                <div className="card-body rounded-b-md text-black bg-white">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{e.description}</p>
                    <div className="card-actions pt-1  justify-end">
                        {e.technology.map((e,index) => (
                        <div key={index} className="badge text-black bg-white">{e.technology}</div>
                        ))}
                    </div>
                </div>
            </div>
            :
            ""
            ))}
          
        </div>
    )
}

export default Content