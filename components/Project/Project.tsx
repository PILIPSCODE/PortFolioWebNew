import React from 'react'
import Carausel from './Carausel';

const Project = () => {
    return (
        <div id='Project' className=' w-screen pt-10  font-popOne relative '>
            <h1 className=' text-5xl max-md:text-3xl md:p-10 p-2 '>Project!</h1>
            <div className='lg:w-8/12  mx-auto  max-lg:w-11/12   text-justify'>
              <Carausel/>
            </div>
        </div>
    )
}

export default Project