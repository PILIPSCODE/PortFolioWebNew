import Aboutme from '@/components/Aboutme/Aboutme'
import Home from '@/components/Home'

import React from 'react'

function page() {
  return (
    <div className='w-screen overflow-x-hidden '>
      <Home/>
      <Aboutme/>
    </div>
  )
}

export default page