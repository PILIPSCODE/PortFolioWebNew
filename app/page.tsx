import Aboutme from '@/components/Aboutme/Aboutme'
import Contactus from '@/components/Contactme/ContactMe'
import Footer from '@/components/Contactme/Footer'
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
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default page