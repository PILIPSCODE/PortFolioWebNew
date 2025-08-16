"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaGithub } from 'react-icons/fa6'

const sertificateList = [
    {
        nama: "",
        img: "/Sertificate/Basic_ai.png"
    },
    {
        nama: "",
        img: "/Sertificate/Basic_data_Science.png"
    },
    {
        nama: "",
        img: "/Sertificate/Basic_data_visualitation.png"
    },
    {
        nama: "",
        img: "/Sertificate/Basic_machine_learning.png"
    },
    {
        nama: "",
        img: "/Sertificate/Basic_python.png"
    },
    {
        nama: "",
        img: "/Sertificate/Basic_Sql.png"
    },
    {
        nama: "",
        img: "/Sertificate/Dsacc_idcamp.png"
    },
    {
        nama: "",
        img: "/Sertificate/Intermediate_mlords.png"
    },
    {
        nama: "",
        img: "/Sertificate/Expert_data_science.png"
    },
    {
        nama: "",
        img: "/Sertificate/Expert_machine_learning.png"
    },
    {
        nama: "",
        img: "/Sertificate/mlacc_idcamp.png"
    },
    {
        nama: "",
        img: "/Sertificate/mlops.png"
    },
    {
        nama: "",
        img: "/Sertificate/pkl2.jpg"
    },
    {
        nama: "",
        img: "/Sertificate/pkl4.jpg"
    },

]


const ProjectCLient = () => {

    const [showmore, setShowmore] = useState(0)
    const logic = showmore + 4 < sertificateList.length

    const handleClick = () => {
        if (logic) {
            setShowmore(showmore + 2)
        } else {
            setShowmore(0)
        }

    }


    return (
        <div className='lg:w-8/12  mx-auto  max-lg:w-11/12    text-justify'>
            <div className='grid md:grid-cols-2 gap-10 mt-10  w-full lg:pr-4'>
                {sertificateList?.slice(0, 4 + showmore).map((e: any, index: any) => (
                    e.img !== null ?
                        <div key={e.id} className="card  bg-base-100 shadow-lg rounded-lg shadow-white focus-within:outline-orange-500 focus-within:shadow-orange-500 ">
                            <figure className=' relative '>
                                <Image src={e.img} alt='card-img' width={864} height={448} className='object-contain rounded-lg' />
                                <div className='h-full w-full text-2xl focus-within:opacity-100  absolute flex justify-center items-center bg-black/50 opacity-0 duration-300 hover:opacity-100'>

                                </div>
                            </figure>
                        </div>
                        :
                        ""
                ))}
            </div>
            <div className='flex justify-center'>
                <button onClick={handleClick} className='mx-auto btn border-4 bg-black text-white  my-10'>{logic ? "Show More" : "Show Less"}</button>
            </div>
        </div>
    )
}

export default ProjectCLient