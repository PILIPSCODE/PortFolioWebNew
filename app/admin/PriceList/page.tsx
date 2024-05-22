"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import EditBlog from "./EditPriceList";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
type Blogs={
  Image:string
  id:string
  Name :string,
  gender :string,
  PosturTubuh :string,
  FotoIndoor :number,
  FotoOutdoor :number,
  VideoBts :number,
  DailtVideo :number,
  Cinematic :number,
  StoryTelling :number,
}
console.log(process.env.UPLOAD_PRESET)

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
const [Blog,SetBlog] =useState<Blogs[]>([])




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
      const res = await axios.delete(`/api/PriceList/${id}`)
      if(res.status === 200) {
        toast.success("Succesfuly Deleted")
      }
    }else if (Sweetal.isDenied) {
      Swal.fire('Canceled')
    }
  }
  return (
    <div className="sm:w-40 md:p-10 p-3 sm:h-screen h-auto w-screen  flex-grow overflow-y-scroll">
      <div className="fixed bottom-10 right-10 z-50 bg-white/60 rounded-full text-black"> 
        <Link href={'/Admin/PriceList/AddPriceList'}><FaPlusCircle  size={55}/></Link>
      </div>
       <h1 className='text-4xl text-black font-bold my-3'>PriceList</h1>
       <div className="flex justify-center">

       </div>
      <div className="flex gap-4 max-md:flex-col flex-wrap">
        {
          Blog.length > 0 ?

        <div className="h-full  overflow-hidden grid md:grid-cols-2 w-full gap-4 rounded-xl md:p-10">


          { Blog.reverse().map((e,index) => (

          <div key={index} className="flex relative items-center w-full bg-black rounded-lg shadow-sm p-5 shadow-white">
             <div className='absolute flex right-2 z-30 bg-black/60 m-2 gap-1 p-1 rounded-lg'>
            <EditBlog service={e}/>
            <h1 className='text-red-600 ' onClick={() => HandleDelete(e.id)}><BsTrash size={25}/></h1> 
          </div>
            <div className="relative h-20 w-20 bg-white rounded-3xl">
              <Image
                src={`${e.Image}`}
                alt="blogs"
                className="object-cover object-top rounded-3xl"
                fill
              />
            </div>
            <div className="bg-black text-white px-3">
              <h1 className="font-bold   ">
                {e.Name}
              </h1>
            </div>
          </div>
          ) )}
         
        </div>
        :
        <div></div>
        }
        <div className=" flex w-full justify-center">
        </div>
      </div>
    </div>
  );
};

export default Page;
