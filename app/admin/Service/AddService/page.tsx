"use client"

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "@/app/Admin/component/loading";
import { useRouter } from "next/navigation";

type Services = {
  Title: String,
  Link :String,
  Descripton: String,
  Image :String,
}
const Page = () => {
const [Title,SetTitle] = useState("")
const [ Descripton,SetDescripton] = useState("")
const [loading,Setloading] = useState(false)
const [Link,SetLink] = useState("")
const [Images,SetImage] = useState("")
const router = useRouter()

const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const data:Services = {
    Title,
    Link,
    Descripton,
    Image: Images,
  }
  if(data.Title !== "" && data.Descripton !== "" && data.Image !== "" && data.Link !== ""){
    try {
      Setloading(true)
      const res = await axios.post('/api/Service',data)
      if(res.status === 200){
        Setloading(false)
        toast.success("Successfully Added")
        SetImage("")
        SetLink("")
        SetTitle("")
        SetDescripton("")
      }
      router.push('/Admin/Service')
    } catch (error) {
      console.log(error)
      Setloading(false)
      toast.error("Internal Server Error")
    }
  }

}


  return (
    <div className=" h-screen flex-col overflow-y-scroll flex justify-center items-center w-full">
      <Loading load={loading} text=""/>
      <h1 className='text-4xl text-black border-4 rounded-xl max-md:mt-24  border-black p-2  '>Add-Service</h1>
      <form onSubmit={(e) => HandleSubmit(e)} className="grid sm:grid-cols-2 relative shadow-xl gap-4 p-4 w-11/12">
        <div className="w-full max-sm:h-56 flex items-center justify-center p-4">
          <div className={`${Images !== ""?"hidden" : ""} absolute z-40`}>

        <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={(cloud: any) => {
                SetImage(cloud?.info?.secure_url)
              }
              }
              className={`p-3 rounded-xl bg-black`}
              uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`}
            >
            </CldUploadButton>
          </div>
          <div className={` relative p-4 border-2 border-gray-500 bg-gray-600 rounded-lg h-full w-full`}>
          <Image alt="upload" fill src={Images == ""? "/hero-img.jpg":Images} className={`object-contain absolute ${Images !== "" ?"" :"hidden"}`}/>
          </div>
        </div>
        <div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text text-gray-500">Layanan</span>
        </label>
        <input
          type="text"
          onChange={(e) => SetTitle(e.target.value)}
          required
          value={Title}
          placeholder="Type here"
          className="input input-bordered w-full "
        />
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text text-gray-500">Deskripsi</span>
        </label>
        <textarea
          placeholder="Maks 200 Length"
          maxLength={170}
          value={Descripton}
          onChange={(e) => SetDescripton(e.target.value)}
          required
          className="input input-bordered w-full h-40 resize-none "
        ></textarea>
      </div>
      <div className="form-control w-full ">
        <label className="label">
          <span className="label-text text-gray-500"> Deskripsi Harga</span>
          
        </label>
        <input
          type="text"
          placeholder="Type here"
          required
          value={Link}
          onChange={(e) => SetLink(e.target.value)}
          className="input input-bordered w-full "
        />
      </div>
      <div className="flex justify-end">

        <button type="submit" className="border-2 text-black dark:text-white text-xl mt-4 border-blue-600 p-2 rounded-md hover:bg-blue-600 duration-300 flex items-center gap-2">Add</button>
      </div>
        </div>

      </form>
    </div>
  );
};

export default Page;
