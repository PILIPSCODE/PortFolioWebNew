import Aboutme from '@/components/Aboutme/Aboutme'
import Contactus from '@/components/Contactme/ContactMe'
import Footer from '@/components/Contactme/Footer'
import Home from '@/components/Home'
import Projects from '@/components/Project/Project'
import Service from '@/components/Service/Service'
import { Suspense } from "react";

export default function Page () {

  return (
    <div className='w-screen overflow-x-hidden '>
      <Home/>
      <Aboutme/>
      <Suspense>
      <Projects />
      </Suspense>
      <Service/>
      <Contactus/>
      <Footer/>
    </div>
  )
}
