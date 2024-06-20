import Aboutme from '@/Feature/Aboutme/Aboutme'
import Contactus from '@/Feature/Contactme/ContactMe'
import Footer from '@/Feature/Contactme/Footer'
import Home from '@/Feature/Home'
import Projects from '@/Feature/Project/Project'
import Service from '@/Feature/Service/Service'
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
