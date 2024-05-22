import React from 'react'
import TotalBlogViews from './component/DashBoard/TotalBlogViews'
// import Billboard from './component/DashBoard/Bilboard'
import Views from './component/DashBoard/View'

import User from './component/DashBoard/User'






export default async function Dasboard() {

  return (

    <div className='sm:w-40 md:p-10 p-3 sm:h-screen h-auto w-screen  flex-grow overflow-y-scroll'>
      <h1 className='text-4xl text-black font-bold'>Dashboard</h1>
      <div className='max-md:flex grid grid-cols-2 gap-4 max-md:flex-col '>
      <Views/>
      <TotalBlogViews/>
      </div>
      <h1 className='text-4xl mt-5 text-black font-bold'>Billboard</h1>
      {/* <Billboard/> */}
      <User/>
    </div>
  )

}

