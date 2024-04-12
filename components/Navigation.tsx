import React from 'react'
import { BiTask } from "react-icons/bi";
import { AiFillFire, AiFillMail } from "react-icons/ai";
import { LuSmilePlus } from "react-icons/lu";
import { FaBlog } from "react-icons/fa";
import { IconType } from 'react-icons'
import { motion } from 'framer-motion';
type props = {
    in: string
}

type Navigation = {
    Link:string,
    Text:string,
    Icons:IconType,
    BgColor:string
}
const Nav:Navigation[] = [
    {
        Link: "",
        Text:"Hire Me!",
        Icons:BiTask,
        BgColor:"bg-blue-600"
    },
    {
        Link: "",
        Text:"About Me!",
        Icons:LuSmilePlus ,
        BgColor:"bg-yellow-600"
    },
    {
        Link: "",
        Text:"Project!",
        Icons:AiFillFire,
        BgColor:"bg-orange-600"
    },
    {
        Link: "",
        Text:"Contact!",
        Icons:AiFillMail,
        BgColor:"bg-green-600"
    },
    {
        Link: "",
        Text:"Blog!",
        Icons:FaBlog,
        BgColor:"bg-white/20"
    },
]
function Navigation(props: props) {
    const item = {
        hidden: { y: 20, opacity: 0 },
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
    return (
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={`${props.in === "Home" ? "" : "absolute"} bottom-20`}>
            {Nav.map((items,index) => (
            <motion.button key={index} variants={item}  className={`btn mx-2 text-white my-2 glass ${items.BgColor}`}>{items.Text}  <span className='text-2xl'><items.Icons/></span> </motion.button>
            ))}
            
        </motion.div>
    )
}

export default Navigation