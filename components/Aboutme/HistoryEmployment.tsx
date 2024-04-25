"use client"
import React from 'react'
import { PiBagSimpleFill } from "react-icons/pi";

const HistoryEmployment = () => {
    return (
        <div>
            <div className=''>
                
                <h1 className='px-2 text-3xl  max-md:text-xl  text-black my-14 flex gap-2 items-center bg-white'>  <PiBagSimpleFill/> History Employment</h1>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">1 January 2023 - 31 March 2023</time>
                        <div className="text-lg font-black">internship in Solo Screen</div>
                        My role at solo screen is as an assistant operator and as a product wrapper helper. The 3 months that I got during my internship there is that we have to be consistent in what we do.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">3 July 2023 - 30 September 2023</time>
                        <div className="text-lg font-black">internship in Bunda Photo studio</div>
                        at bunda photo studio I was asked to create a company profile website. with tech stack next js, tailwind css. include blog, upload portfolio photos, admin dashboard to manage the company profile website, and manage the web for 3 months.
                    </div>
                    <hr />
                </li>


            </ul>
        </div>
    )
}

export default HistoryEmployment