"use client"
import React, { useEffect, useState } from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang, FaPython, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa6";
import { SiDart, SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import { IconType } from 'react-icons'


type Skils = {
    icon: IconType,
    lang: string,
    color: string,
}

const Skill: Skils[] = [
    {
        icon: IoLogoJavascript,
        lang: "Javascript",
        color: "text-yellow-300"
    },
    {
        icon: FaReact,
        lang: "React Js",
        color: "text-blue-400"
    },
    {
        icon: SiNextdotjs,
        lang: "Next Js",
        color: "text-slate-700"
    },
    {
        icon: SiExpress,
        lang: "Express Js",
        color: "text-zinc-500"
    },
    {
        icon: FaNodeJs,
        lang: "Node Js",
        color: "text-green-700"
    },
    {
        icon: SiTailwindcss,
        lang: "Tailwind Css",
        color: "text-blue-400"
    },
    {
        icon: FaBootstrap,
        lang: "Tailwind Css",
        color: "text-purple-600"
    },
    {
        icon: SiMongodb,
        lang: "Mongodb",
        color: "text-green-700"
    },
    {
        icon: FaGolang,
        lang: "Golang",
        color: "text-blue-400"
    },
    {
        icon: FaPython,
        lang: "Python",
        color: "text-yellow-300"
    },
    {
        icon: SiDart,
        lang: "Dart",
        color: "text-blue-200"
    },
]

const Skills = () => {
    const [skills, setSkills] = useState<Skils[]>(Skill)


    useEffect(() => {
        let currentIndex = 0; // Menyimpan index saat ini
        const interval = setInterval(() => {
            setSkills(prevSkills => prevSkills.map((skill, index) => ({ ...skill, color: index === currentIndex ? Skill[index].color : "" })));
            currentIndex = (currentIndex + 1) % Skill.length;
        }, 1000);

        return () => clearInterval(interval);

    }, [])
    return (
        <div>
            <div className='justify-center flex'>
                <h1 className='mx-auto text-3xl  max-md:text-xl bg-white text-black my-14'>Skills</h1>
            </div>
            <div className='flex gap-9 justify-center flex-wrap'>

                {skills.map((items, index) => (
                    <div className={`text-9xl max-md:text-6xl tooltip-top hover:${Skill[1].color} tooltip ${items.color}`} data-tip={items.lang} key={index}><items.icon /></div>
                ))}
            </div>
        </div>
    )
}

export default Skills