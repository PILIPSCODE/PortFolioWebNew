"use client"
import React from 'react'
import { FaBook } from "react-icons/fa6";
import { motion} from "framer-motion";

const variants = {
    initialState: {
        clipPath: "inset(0 0 100% 0)",

    },
    WhileInView: {
        clipPath: "inset(0 0 0 0)",

    },
}

const dumydata = [
    {
        id:1,
        tanggal: "2012 - 2019",
        education: "Elementary School 1 Ngadirejo"
    },
    {
        id:2,
        tanggal: "2019 - 2021",
        education: "Senior High School 3 Kartasura"
    },
    {
        id:3,
        tanggal: "2021 - 2024",
        education: "Vocation School 6 Sukoharjo"
    },
    {
        id:4,
        tanggal: "2024",
        education: "Institut Teknologi Bisnis Aas (Informatika)"
    },
]

const Education = () => {
    return (
        <div>
            <div>
                <h1 className='px-2 flex gap-2 items-center text-3xl max-md:text-xl bg-white text-black my-14'><FaBook/> Education</h1>
            </div>
            <motion.ul  variants={variants} initial="initialState" whileInView="WhileInView" viewport={{once:true}}   transition={{duration:2}} className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {dumydata.map((e,index) => (
                <li key={e.id}>
                    <hr className={`${index !== 0?"" :"hidden"} bg-white`}/>
                    <motion.div initial={{scale:0,rotate:40}} whileInView={{scale:1, rotate:0}} className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </motion.div>
                    <div className={`${e.id % 2 === 0?"timeline-end": "timeline-start md:text-end"}`}>
                        <time className="font-mono italic">{e.tanggal}</time>
                        <div className="text-lg font-black">{e.education}</div>
                    </div>
                    <hr className='bg-white'/>
                </li>
                ))}
    
            </motion.ul>
        </div>
    )
}

export default Education