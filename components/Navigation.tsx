import React from 'react'
import { BiTask } from "react-icons/bi";
import { AiFillFire, AiFillMail } from "react-icons/ai";
import { LuSmilePlus } from "react-icons/lu";
import { FaBlog, FaBars } from "react-icons/fa";
import { IconType } from 'react-icons'
import { motion } from 'framer-motion';
import Link from 'next/link'
type props = {
    in: string
}

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
        Text: "Blog!",
        Icons: FaBlog,
        BgColor: "bg-white/20"
    },
]
function Navigation(props: props) {
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
                delayChildren: props.in === "Home"?3:1.5,
                staggerChildren: 0.2
            }
        }
    };
    return (

        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={`${props.in === "Home"?"" :"fixed top-0 shadow-sm bg-black/40 w-8/12 backdrop-blur-md flex justify-between max-lg:w-11/12 shadow-white px-2 rounded-lg"}`}
            >
            {Nav.filter((e) => props.in !== "Home"? e.Text !== "Hire Me!":e ).map((items, index) => (
                <Link key={index} href={items.Link}><motion.div variants={item} className={`btn mx-2 text-white my-2 glass ${props.in === "Home"?items.BgColor:"bg-black border-white"}`}> <span className={`${props.in !== "Home"?"max-md:hidden":''}`}>{items.Text}  </span><span className='text-2xl'><items.Icons /></span> </motion.div></Link>
            ))}

        </motion.div>

    )
}

export default Navigation