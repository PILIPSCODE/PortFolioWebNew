"use client"
import React from 'react'
import Carausel from './Carausel'

const Service = () => {
    return (
        <div id='Service' className=' w-screen pt-20 h-screen font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Service!</h1>
            <div className=' mx-auto  flex items-center h-full   text-justify'>

                
                <Carausel/>
                

            </div>
        </div>
    )
}

export default Service