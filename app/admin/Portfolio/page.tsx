import React from 'react'
import Portfolio from '../component/Portfolio/Portfolio'
import { GetProject } from '@/app/libs/data';

const Page = async({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const data = await GetProject()
  return (
    <div className='sm:w-40 md:p-10 p-3 sm:h-screen h-auto w-screen  flex-grow overflow-y-scroll'>
      <Portfolio searchParams={searchParams} Portfolio={data}/>
    </div>
  )
 }

export default Page 