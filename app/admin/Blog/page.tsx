"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import EditBlog from "./EditBlog";
import Link from "next/link";
import {  FaHeart, FaPlusCircle } from "react-icons/fa";
import PaginationControls from "../component/PaginationControls";
import Search from "../component/Search";
import Like from "./Like";

type Blogs={
  isLiked:boolean
  Title: string,
  Descripton:string
  Image:string
  createdAt:Date
  id:string
}

const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
const [Blog,SetBlog] =useState<Blogs[]>([])
const [search,setSearch] = useState<Blogs[]>([])
const [like,setlike] = useState(false)

  useEffect(() => {
    const Blogs = async () => {
      const res = await fetch("/api/Blog")
      SetBlog(await res.json())
    }
    Blogs()
  },[])




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
      const res = await axios.delete(`/api/Blog/${id}`)
      if(res.status === 200) {
        toast.success("Succesfuly Deleted")
      }
    }else if (Sweetal.isDenied) {
      Swal.fire('Canceled')
    }
  }
  const page = searchParams['page'] ?? '1'
  const per_page = '9'
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...
  const entries = Blog.slice(start, end)
  return (
    <div className="sm:w-40 md:p-10 p-3 sm:h-screen h-auto w-screen  flex-grow overflow-y-scroll">
      <div className="fixed bottom-10 right-10 z-50 rounded-full bg-white/60 text-black"> 
        <Link href={'/admin/Blog/AddBlog'}><FaPlusCircle  size={55}/></Link>
      </div>
       <h1 className='text-4xl text-black font-bold my-3'>All Blogs</h1>
       <div className="flex justify-center items-center">

       <Search setEvent={setSearch}  data={Blog}/>
       </div>
       <div className="text-red-600 absolute top-5 right-8" onClick={() => setlike(!like)}>
       <FaHeart size={25}/>
       </div>
      <div className="flex gap-4 max-md:flex-col flex-wrap">
        {
          entries.length > 0 ?

        <div className="h-full  overflow-hidden grid md:grid-cols-2 w-full gap-4 rounded-xl md:p-10">


          {(search.length > 0? search: entries.filter(e => (like?e.isLiked === true:e)) ).reverse().map((e,index) => (

          <div key={index} className="flex relative  w-full bg-black rounded-lg shadow-sm p-5 shadow-white">
             <div className='absolute flex right-2 h-full items-center top-0 z-30 m-2 gap-1 p-1 rounded-lg'>
            <EditBlog service={e}/>
            <h1 className='text-red-600 ' onClick={() => HandleDelete(e.id)}><BsTrash size={25}/></h1> 
           <Like id={e.id} liked={e.isLiked}/>
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
              <p className="font-bold max-sm:text-base ">
                Title: {e.Title.trim().slice(0,38)}...
              </p>
              <div className="flex justify-between py-5 max-sm:text-sm">
                <p className="max-sm:text-sm">CreatedAt:{String(e.createdAt).slice(0, 10)}</p>
              </div>
            </div>
          </div>
          ) )}
         
        </div>
        :
        <div></div>
        }
        <div className=" flex w-full justify-center">

         <PaginationControls
      Route='/admin/Blog'
        length={Blog.length}
        hasNextPage={end < Blog.length}
        hasPrevPage={start > 0}
      />
        </div>
      </div>
    </div>
  );
};

export default Page;
