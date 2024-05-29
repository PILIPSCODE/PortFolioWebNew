"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillPlusCircle } from 'react-icons/ai'
import {BsTrash } from 'react-icons/bs'
import EditService from './EditService'
import Swal from 'sweetalert2'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { FaPlusCircle } from 'react-icons/fa'

type Services = {
  id:string
  Title: string,
  Link :string | null,
  Descripton: string,
  Image :string,
}


const Service = () => {
const [Services,SetServices] = useState<Services[]>([])
const router = useRouter()


  const HandleDelete = async(id:string) => {
    const Sweetal = await Swal.fire({
      title: 'Do you want to Delete?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor:"#d33",
      denyButtonColor:"#3085d6",
      denyButtonText: `Don't Delete`,
    })

    if(Sweetal.isConfirmed){
      const res = await axios.delete(`/api/Service/${id}`)
      if(res.status === 200) {
        toast.success("Succesfuly Deleted")
        router.refresh()
      }
    }else if (Sweetal.isDenied) {
      Swal.fire('Canceled')
    }
  }


    return (
        <div className='sm:w-40 p-10 sm:h-screen w-screen h-auto flex-grow overflow-y-scroll'>
        <h1 className='text-4xl font-bold text-black '>Service</h1>
        <div className='flex gap-4 max-md:flex-col flex-wrap max-sm:mt-5'>
  
  {Services.length > 0 ?
      <div  className={`h-full  overflow-hidden grid md:grid-cols-2 w-full gap-4 rounded-xl md:p-10`}>
  
  {Services.reverse().map((e,index) => (

        <div key={index} className='w-full relative grid grid-cols-2 gap-2 max-xl:grid-cols-1  bg-black p-3 rounded-lg'>
         <div className="max-xl:h-60 h-60 relative w-full max-sm:h-44">
          <div className='absolute flex z-30 bg-black/60 m-2 gap-1 p-1 rounded-lg'>
            <EditService service={e}/>
            <h1 className='text-red-600 ' onClick={() => HandleDelete(e.id)}><BsTrash size={25}/></h1> 
          </div>
           <Image src={e.Image} fill alt="Photo-shoot" className="object-cover rounded-lg shadow-xl object-top"/>
         <div className="w-full absolute bg-black/50 flex justify-around text-base res px-4 text-white bottom-0">
          <p>{e.Link}</p>
         </div>
         </div>
         <div className=" lg:text-base text-white">
           <h1 className="lg:text-3xl text-xl  text-orange-500 font-bold">{e.Title}</h1>
           <p className="mt-3 text-base ">{e.Descripton}</p>
         </div>
        </div>
  ))}
  
       </div>
       :<div></div>
  }
        </div>
  <div className="fixed bottom-10 right-10 bg-white/60 z-50 rounded-full text-black"> 
        <Link href={'/admin/Service/AddService'}><FaPlusCircle  size={55}/></Link>
      </div>
      </div>
    )
}

export default Service