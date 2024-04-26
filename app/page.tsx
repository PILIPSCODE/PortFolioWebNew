import Aboutme from '@/components/Aboutme/Aboutme'
import Home from '@/components/Home'
import Project from '@/components/Project/Project'

import React from 'react'

function page() {
  return (
    <div className='w-screen overflow-x-hidden '>
      <Home/>
      <Aboutme/>
      <Project/>
    </div>
  )
}

export default page