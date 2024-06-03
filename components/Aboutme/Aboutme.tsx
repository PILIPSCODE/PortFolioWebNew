"use client"
import React, { useEffect, useState } from 'react'
import { motion} from "framer-motion";
import Image from 'next/image';
import { calculateAge } from '@/app/utils/calculateAge';
import Skills from './Skills';
import Education from './Education';
import HistoryEmployment from './HistoryEmployment';



const Aboutme = () => {
    const [age, setAge] = useState(0);
    const TextAbout = `Hello everyone, my full name is Pilipus Kuncoro Wismoady. I am ${age} years old, Knowledgeable in user interface and debugging process. Experienced Web Developer proficient in all stages of advanced web development.  Mastering intermediate-high Javascript programming language, beginner in Golang, beginner in Python, beginner in Dart, Fast Learner and Adaptable, able to work together in a team.`.split(" ")

    useEffect(() => {

        const dobDay = 29;
        const dobMonth = 5;
        const dobYear = 2006;

        setAge(calculateAge(dobDay, dobMonth, dobYear));
    }, []);

    const variants = {
        initialState: {
            opacity: 0,
            clipPath: "circle(2.1% at 50% 50%)",

        },
        WhileInView: {
            opacity: 1,
            clipPath: "circle(50% at 50% 50%)",

        },
    }

    return (
        <div id='Aboutme' className=' w-screen pt-20  font-popOne relative '>


            <motion.h1 initial={{opacity:0, x:-100}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className=' text-5xl max-md:text-3xl md:p-10 p-2 '>About Me!</motion.h1>
            <div className='lg:w-8/12   mx-auto flex items-center flex-col justify-center  max-lg:w-11/12 p-4 sm:pt-20 text-justify'>
                <div>
                    <motion.div
                        whileInView="WhileInView"
                        initial="initialState"
                        variants={variants}
                        transition={{
                            delay: 1,
                            duration: 0.5,
                        }}
                        className='relative w-28 sm:h-36 sm:w-36 h-28' style={{ float: 'left', marginRight: '20px' }}>
                        <Image fill alt='person' src={"/pilips.png"} className=" p-2 bg-white rounded-full" />
                    </motion.div>
                    <motion.h1
                        className='md:text-2xl text-base text-justify '>
                        {TextAbout.map((char, index) => (
                            <motion.span
                                initial={{ opacity: 0}}
                                whileInView={{
                                    opacity: 1
                                }}
                                viewport={{once:true}}
                                transition={{ duration: 1.5, delay: 1 * index / 60 }}
                                key={index}>{char}
                                {" "}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <Skills />

                    <Education />

                    <HistoryEmployment />

                </div>
            </div>
        </div>
    );
}

export default Aboutme;
