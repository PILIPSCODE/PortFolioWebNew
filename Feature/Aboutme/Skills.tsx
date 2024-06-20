"use client"
import React, { useEffect, useState } from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang, FaPython, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa6";
import { SiDart, SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb, SiGithub, SiPostman, SiGit, SiVisualstudiocode, SiRedux } from "react-icons/si";
import { IconType } from 'react-icons'
import { motion} from "framer-motion";


type Skils = {
    Icon: IconType,
    lang: string,
    active:boolean
}

const Skill: Skils[] = [
    {
        Icon: IoLogoJavascript,
        lang: "Javascript",
        active:false,
    },
    {
        Icon: FaReact,
        lang: "React Js",
        active:false,

    },
    {
        Icon: SiRedux,
        lang: "Redux",
        active:false,

    },
    {
        Icon: SiNextdotjs,
        lang: "Next Js",
        active:false,

        
    },
    {
        Icon: SiExpress,
        lang: "Express Js",
        active:false,

       
    },
    {
        Icon: FaNodeJs,
        lang: "Node Js",
        active:false,

       
    },
    {
        Icon: SiTailwindcss,
        lang: "Tailwind",
        active:false,
       
    },
    {
        Icon: FaBootstrap,
        lang: "Bootstrap",
        active:false,
    },
    {
        Icon: SiMongodb,
        lang: "Mongodb",
        active:false,

    },
    {
        Icon: FaGolang,
        lang: "Golang",
        active:false,
    },
    {
        Icon: FaPython,
        lang: "Python",
        active:false,

    },
    {
        Icon: SiDart,
        lang: "Dart",
        active:false,

    },
    {
        Icon: SiGithub,
        lang: "GitHub",
        active:false,

    },
    {
        Icon: SiGit,
        lang: "Git",
        active:false,

    },
    {
        Icon: SiPostman,
        lang: "PostMan",
        active:false,

    },
    {
        Icon: SiVisualstudiocode,
        lang: "Vs Code",
        active:false,

    },
]

const Skills = () => {
    const [skills, setSkills] = useState<Skils[]>(Skill)


    useEffect(() => {
        let currentIndex = 0; // Menyimpan index saat ini
        const interval = setInterval(() => {
            setSkills(prevSkills => prevSkills.map((skill, index) => ({ ...skill, active: index === currentIndex ? true : false })));
            currentIndex = (currentIndex + 1) % Skill.length;
        }, 500);

        return () => clearInterval(interval);

    }, [])
    return (
        <div>
            <div className='justify-center flex'>
                <motion.h1
                initial={{ scale:0 }}
                whileInView={{
                    scale:1 ,
                }}
                viewport={{once:true}}
                transition={{ duration: 0.5}}
                className='mx-auto text-3xl  max-md:text-xl bg-white text-black my-14'>Skills</motion.h1>
            </div>
            <div className='flex gap-10 justify-center flex-wrap'>

                {skills.map((items, index) => (
                    <motion.span 
                    initial={{ scale:0 }}
                    whileInView={{
                        scale:1 ,
                    }}
                    viewport={{once:true}}
                    transition={{ duration: 0.5, delay:index/6 }}
                    key={index}>
                        <IconsSkill active={items.active}   Icon={items.Icon} lang={items.lang} />
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

const IconsSkill = ({ Icon, lang ,active}: Skils) => {
    return (

        <div className={` tooltip-top text-6xl max-md:text-4xl duration-200 text/ tooltip  ${active?"text-white scale-125 tooltip-open":"text-white/65"} hover:scale-125 hover:text-white`} data-tip={lang}><Icon /></div>


    )
}

export default Skills