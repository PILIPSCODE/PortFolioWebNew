"use client"
import React, { useEffect, useState } from 'react'
import { PiHandWavingBold } from "react-icons/pi";
import Image from 'next/image'
import Navigation from './Navigation';
import { ReactTyped } from "react-typed";
import { motion} from 'framer-motion';
const Home = () => {
    const [time, setTime] = useState(getCurrentTime());
    const [isClient, setIsClient] = useState(false);
    const [Touch, setTouch] = useState(true);


    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        const intervalTouch = setInterval(() => {
            setTouch(false);
        }, 30000);

        document.addEventListener("click", () => {
            setTouch(true)

        })


        return () => clearInterval(interval);
    }, []);

    function getCurrentTime() {
        const now = new Date();

        return {
            hours: String(now.getHours()).padStart(2, '0'),
            minutes: String(now.getMinutes()).padStart(2, '0'),
            seconds: String(now.getSeconds()).padStart(2, '0'),
        };
    }





    return (
        <div className='w-full h-full font-popOne flex overflow-hidden flex-col items-center justify-center'>
            {isClient && (

                <motion.div
                    initial={true}
                    animate={!Touch ? {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", stiffness: 300, damping: 24 }
                    } : { opacity: 0, y: -1000, transition: { duration: 1, delay: 1.5 } }}
                    className='absolute  backdrop-blur-sm md:w-5/6 md:h-5/6 w-full h-full  z-50  bg-black/80 flex flex-col justify-center items-center'>

                    <h1 className='absolute top-20 text-5xl text-yellow-400 max-sm:text-2xl text-center'>&quot;Time is Everything&quot;</h1>
                    <div

                        className={`text-7xl max-sm:text-5xl py-2 border-2 overflow-hidden text-center rounded-lg`}> <span>{time.hours}</span> <span className='border-x-2 px-1'>{time.minutes}</span> <span>{time.seconds}</span>
                    </div>

                    <h1 className='absolute md:bottom-0 bottom-10 max-sm:text-base text-center'>Ketuk Dimana Saja Untuk Bangunkan</h1>
                </motion.div>
            )}
            <motion.div
                className='flex items-center flex-col  '>

                <div className='text-2xl flex items-center gap-2 max-[360px]:text-xl my-5'>
                    <motion.span
                        animate={{
                            rotate: [-30, 30, -30, 30, -30],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                        }}
                        className='text-5xl'><PiHandWavingBold />
                    </motion.span>
                    <h1> <ReactTyped strings={["Hi There I'm Pilipus!"]} showCursor={false} typeSpeed={40} /></h1>
                </div>
                <motion.div
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        delay: 1,
                        duration: 1.5,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0,
                            clipPath: "circle(2.1% at 50% 50%)",

                        },
                        animateState: {
                            opacity: 1,
                            clipPath: "circle(50% at 50% 50%)",

                        },
                        exitState: {
                            clipPath: "circle(50% at 50% 50%)",
                        }
                    }}
                    className=' max-[360px]:w-60 w-72 h-72  max-[360px]:h-60 rounded-full  flex justify-center items-center relative'>
                    <motion.div

                        className='w-5/6 h-5/6 bg-white rounded-full'></motion.div>
                    <Image className='absolute p-7 rounded-full' alt='blob' src={"/pilips.png"} fill />
                    <motion.div
                        className='absolute w-full h-full'
                        animate={{
                            rotate: [0, 360, 0, -360, 0],
                        }}
                        transition={{
                            duration: 8,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                        }}
                    >
                        <Image className='absolute p-4' alt='blob' src={"/Asset 1.png"} fill />
                    </motion.div>
                </motion.div>
                <div className='text-3xl relative left-0   text-center my-5 max-[360px]:text-2xl'>
                    <motion.h1
                        initial={{
                            opacity: 0
                        }}

                        transition={{
                            delay: 4
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className='mb-3'><ReactTyped
                            strings={[
                                "Golang",
                                "Python",
                                "Fullstack Developer",
                                "Popular with",
                                "Next Js(React js)",
                                "Express js(Node js)",
                                "MongoDb",
                                "TailwindCss",
                                "Dart",
                            ]}
                            typeSpeed={40}
                            startDelay={1000}
                            backSpeed={50}
                            loop
                        >
                        </ReactTyped></motion.h1>
                    <Navigation in='Home' />
                </div>
            </motion.div>
        </div>
    )
}

export default Home