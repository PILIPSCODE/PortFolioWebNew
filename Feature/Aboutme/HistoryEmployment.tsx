"use client"
import React from 'react'
import { PiBagSimpleFill } from "react-icons/pi";
import {motion} from "framer-motion"

const dumydata = [
    {
        id:1,
        tanggal: "1 January 2023 - 31 March 2023",
        tempat:"internship in Solo Screen",
        deskripsi: " My role at solo screen is as an assistant operator and as a product wrapper helper. The 3 months that I got during my internship there is that we have to be consistent in what we do."
    },
    {
        id:2,
        tanggal: "3 July 2023 - 30 September 2023",
        tempat:"internship in Bunda Photo studio",
        deskripsi: "at bunda photo studio I was asked to create a company profile website. with tech stack next js, tailwind css. include blog, upload portfolio photos, admin dashboard to manage the company profile website, and manage the web for 3 months."
       
    },
]
const variants = {
    initialState: {
        clipPath: "inset(0 0 100% 0)",

    },
    WhileInView: {
        clipPath: "inset(0 0 0 0)",

    },
}

const HistoryEmployment = () => {

    return (
        <div>
            <div className=''>
                
                <h1 className='px-2 text-3xl  max-md:text-xl  text-black my-14 flex gap-2 items-center bg-white'>  <PiBagSimpleFill/> History Employment</h1>
            </div>
            <motion.ul variants={variants} initial="initialState" whileInView="WhileInView" viewport={{once:true}}  transition={{duration:2}} className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
               {dumydata.map((items, index) => (
                <li key={items.id}>
                    <hr className={`${index === 0? "hidden" : ""} bg-white`}/>
                    <motion.div initial={{scale:0,rotate:40}} whileInView={{scale:1, rotate:0}} className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </motion.div>
                    <div className={`${ items.id % 2 === 0 ? "timeline-end" :"timeline-start text-end max-md:text-start"}  mb-10`}>
                        <time className="font-mono italic ">{items.tanggal}</time>
                        <div className="text-lg font-black">{items.tempat}</div>
                        {items.deskripsi}
                    </div>
                    <hr className='bg-white' />
                </li>
               ))}


            </motion.ul>
        </div>
    )
}

export default HistoryEmployment