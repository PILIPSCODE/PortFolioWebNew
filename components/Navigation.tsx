"use client"
import React, { useEffect, useState } from 'react'
import { BiTask } from "react-icons/bi";
import { AiFillFire, AiFillMail } from "react-icons/ai";
import { LuSmilePlus } from "react-icons/lu";
import { FaBlog, FaHeart } from "react-icons/fa";
import { IconType } from 'react-icons'
import { motion } from 'framer-motion';
import Link from 'next/link'

type Navigation = {
    Link: string,
    Text: string,
    Icons: IconType,
    BgColor: string
}
const Nav: Navigation[] = [
    {
        Link: "/",
        Text: "Hire Me!",
        Icons: BiTask,
        BgColor: "bg-blue-600"
    },
    {
        Link: "/aboutme",
        Text: "About Me!",
        Icons: LuSmilePlus,
        BgColor: "bg-yellow-600"
    },
    {
        Link: "/",
        Text: "Project!",
        Icons: AiFillFire,
        BgColor: "bg-orange-600"
    },
    {
        Link: "/",
        Text: "Contact!",
        Icons: AiFillMail,
        BgColor: "bg-green-600"
    },
    {
        Link: "/",
        Text: "Service!",
        Icons: FaHeart,
        BgColor: "bg-red-600"
    },
    {
        Link: "/",
        Text: "Blog!",
        Icons: FaBlog,
        BgColor: "bg-slate-600"
    },
]

const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 3,
            staggerChildren: 0.2
        }
    }
};
function Navigation() {
    return (
        <div className=' md:w-10/12 m-auto w-full'>
            <NavigationScroll />
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {Nav.map((items, index) => (
                    <Link key={index} href={items.Link}><motion.div variants={item} className={`btn mx-2 text-white my-2 glass ${items.BgColor} `}> <span>{items.Text}  </span><span className='text-2xl'><items.Icons /></span> </motion.div></Link>
                ))}

            </motion.div>
        </div>

    )
}

function NavigationScroll() {
    const [scroll, setonScrool] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            let scY = window.scrollY
            if (scY <= window.innerHeight) {
                setonScrool(false)
            } else {
                setonScrool(true)
            }
        })
    }, [])
    return (
        <motion.div
            initial={{ opacity: 0, y: -100, }}
            animate={scroll ? {
                opacity: 1, y: 0, transition: {
                    delayChildren: 3,
                    staggerChildren: 0.2
                }
            } : { opacity: 0, y: -100, }}
            className={`w-full left-0 z-50 top-0 flex gap-3 justify-center items-center fixed  `}>
            <div className='bg-black/80 p-5 md:w-9/12 w-full justify-around gap-5 backdrop-blur-sm flex shadow-sm shadow-white rounded-md'>
                {Nav.map((items, index) => (
                    <div key={index} data-tip={items.Text} className={`flex max-md:tooltip max-md:tooltip-bottom hover:text-white/50  text-white/white items-center text-xl gap-2`}>
                        <items.Icons />
                        <h1 className='max-md:hidden'>{items.Text}</h1>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}


export default Navigation