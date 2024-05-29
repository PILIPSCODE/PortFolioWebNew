import Aboutme from '@/components/Aboutme/Aboutme'
import Contactus from '@/components/Contactme/ContactMe'
import Footer from '@/components/Contactme/Footer'
import Home from '@/components/Home'
import Projects from '@/components/Project/Project'
import Service from '@/components/Service/Service'
import React from 'react'
import GetProject from './action/GetProject'

async function page() {
  const getProject = await GetProject()
  return (
    <div className='w-screen overflow-x-hidden '>
      <Home/>
      <Aboutme/>
      <Projects DataProject={getProject}/>
      <Service/>
      <Contactus/>
      <Footer/>
    </div>
  )
}

export default page