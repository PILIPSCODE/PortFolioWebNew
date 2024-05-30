"use client"
import React, { useEffect, useState } from 'react'

import Image from 'next/image';
import { calculateAge } from '@/app/utils/calculateAge';
// import Skills from './Skills';
import Education from './Education';
import HistoryEmployment from './HistoryEmployment';



const Aboutme = () => {
    const [age, setAge] = useState(0);


    useEffect(() => {

        const dobDay = 29;
        const dobMonth = 5;
        const dobYear = 2006;

        setAge(calculateAge(dobDay, dobMonth, dobYear));
    }, []);

    return (
        <div id='Aboutme' className=' w-screen pt-20  font-popOne relative '>


            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>About Me!</h1>
            <div className='lg:w-8/12   mx-auto flex items-center flex-col justify-center  max-lg:w-11/12 p-4 sm:pt-20 text-justify'>
                <div>
                    <div className='relative w-28 sm:h-36 sm:w-36 h-28' style={{ float: 'left', marginRight: '20px' }}>
                        <Image fill alt='person' src={"/pilips.png"} className=" p-2 bg-white rounded-full" />
                    </div>
                    <h1 className='md:text-2xl text-base text-justify '>
                        Hello everyone, my full name is Pilipus Kuncoro Wismoady. I am {age} years old, Knowledgeable in user interface and debugging process. Experienced Web Developer proficient in all stages of advanced web development.  Mastering intermediate-high Javascript programming language, beginner in Golang, beginner in Python, beginner in Dart, Fast Learner and Adaptable, able to work together in a team.
                    </h1>

                    {/* <Skills /> */}

                    <Education/>

                    <HistoryEmployment/>

                </div>
            </div>
        </div>
    );
}

export default Aboutme;
