import Aboutme from '@/components/Aboutme/Aboutme'
import Home from '@/components/Home'
import Project from '@/components/Project/Project'
import Service from '@/components/Service/Service'

import React from 'react'

function page() {
  return (
    <div className='w-screen overflow-x-hidden '>
      <Home/>
      <Aboutme/>
      <Project/>
      <Service/>
    </div>
  )
}

export default page