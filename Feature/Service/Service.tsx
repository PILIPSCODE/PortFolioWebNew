
import React from 'react'
import Carausel from './Carausel'
import { GetService } from '@/app/libs/data';



const Service = async() => {
    const getService = await GetService()
    return (
        <div id='Service' className=' w-screen mt-20   font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl  md:p-20 pt-20 p-2  '>Service!</h1>
            <div className='lg:w-8/12 w-11/12 mx-auto font-poppins'>
            <p className=' max-md:w-full md:text-center shadow-orange-200 text-2xl text-justify  mx-auto my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti provident dolorum eius modi magni delectus ratione voluptate, non doloribus. Perferendis.</p>


                <Carausel getService={getService} />


            </div>
        </div>
    )
}

export default Service