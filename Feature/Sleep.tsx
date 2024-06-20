"use client"
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const Sleep = () => {
    const [time, setTime] = useState(getCurrentTime());
    const [isClient, setIsClient] = useState(false);
    const [Touch, setTouch] = useState(true);


    useEffect(() => {
        setIsClient(true);
        const interval = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

    
        const startSleepInterval = () => {
            return setInterval(() => {
                setTouch(false);
            }, 60000);
        };

        let sleep = startSleepInterval();

        const handleClick = () => {
            setTouch(true);
            clearInterval(sleep); 
            sleep = startSleepInterval(); 
        };

        document.addEventListener("click", handleClick);

        console.log(Touch);
        return () => {
            clearInterval(interval);
            clearInterval(sleep)
         
        } 
    }, []);


    function getCurrentTime() {
        const now = new Date();

        return {
            hours: String(now.getHours()).padStart(2, '0'),
            minutes: String(now.getMinutes()).padStart(2, '0'),
            seconds: String(now.getSeconds()).padStart(2, '0'),
        };
    }
    return isClient && (

        <motion.div
            initial={false}
            animate={!Touch  ? {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 }
            } : { opacity: 0, y: -1000, transition: { duration: 0.7} }}
            className='fixed  backdrop-blur-sm w-screen left-0 h-screen font-popOne top-0  z-50  bg-black/80 flex flex-col justify-center items-center'>

            <h1 className='absolute top-20 text-5xl text-yellow-400 max-sm:text-2xl text-center'>&quot;Time is Everything&quot;</h1>
            <h1 className='absolute top-36 break-words text-4xl text-white max-sm:text-xl text-center'>why are you still here, go out and take action</h1>
            <div

                className={`text-7xl max-sm:text-5xl py-2 border-2 overflow-hidden text-center rounded-lg`}> <span>{time.hours}</span> <span className='border-x-2 px-1'>{time.minutes}</span> <span>{time.seconds}</span>
            </div>

            <h1 className='absolute bottom-10 max-sm:text-base text-center'>Ketuk Dimana Saja Untuk Bangunkan</h1>
        </motion.div>
    )
}

export default Sleep