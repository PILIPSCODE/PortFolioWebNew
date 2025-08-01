import Aboutme from '@/Feature/Aboutme/Aboutme'
import Contactus from '@/Feature/Contactme/ContactMe'
import Footer from '@/Feature/Contactme/Footer'
import Home from '@/Feature/Home'
import Projects from '@/Feature/Project/Project'
import Service from '@/Feature/Service/Service'
import Blogpage from '@/Feature/Blog/Blog'
import Sertifikat from '@/Feature/Sertifikat/Sertifikat'

export default async function Page() {
  return (
    <div className='w-screen overflow-x-hidden '>
      <Home />
      <Aboutme />
      <Projects />
      <Sertifikat />
      <Service />
      <Blogpage />
      <Contactus />
      <Footer />
    </div>
  )
}
