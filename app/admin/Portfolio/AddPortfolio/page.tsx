"use client"

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import Loading from "@/app/Admin/component/loading";
import { useRouter } from "next/navigation";

type Services = {
  Description: String,
  Image: String,
}
const Page = () => {
  const [Description, SetDescripton] = useState("")
  const [loading, Setloading] = useState(false)
  const [Images, SetImage] = useState("")
  const router = useRouter()
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data: Services = {
      Description,
      Image: Images,
    }
    if (data.Description !== "" && data.Image !== "") {
      try {
        Setloading(true)
        const res = await axios.post('/api/Portfolio', data)
        if (res.status === 200) {
          Setloading(false)
          toast.success("Successfully Added")
          SetImage("")
          SetDescripton("")
        }

        router.push('/Admin/Portfolio')
      } catch (error) {
        Setloading(false)
        toast.error("Internal Server Error")
        console.log(error)
      }
    }

  }


  return (
    <div className=" h-screen flex-col overflow-y-scroll flex justify-center items-center w-full">
      <Loading load={loading} text="" />

      <h1 className='text-4xl text-black border-4 max-md:mt-24  rounded-xl border-black p-2   '>Add-Portfolio</h1>
      <form onSubmit={(e) => HandleSubmit(e)} className="grid sm:grid-cols-2 relative shadow-xl gap-4 p-4 w-11/12">
        <div className="w-full max-sm:h-56 flex items-center justify-center p-4">
          <div className={`${Images !== "" ? "hidden" : ""} absolute z-40`}>

            {/* <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={(cloud: any) => {
                SetImage(cloud?.info?.secure_url)
              }
              }
              className={`p-3 rounded-xl bg-black`}
              uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`}
            >
            </CldUploadButton> */}
          </div>
          <div className={` relative p-4 border-2 border-gray-500 bg-gray-600 rounded-lg h-full w-full`}>
            <Image alt="upload" fill src={Images == "" ? "/hero-img.jpg" : Images} className={`object-contain absolute ${Images !== "" ? "" : "hidden"}`} />
          </div>
        </div>
        <div>
          <div className="form-control w-full p-4 ">
            <div className="dropdown dropdown-bottom">
              <div className=" w-full flex justify-center rounded-md flex-wrap bg-base-100">
                <div className="flex  items-center">
                  <div className="bg-white mx-1 text-black p-1 rounded-md items-center flex gap-2">
                    <p>Next js</p>
                    <FaX/>
                  </div>
                  <div className="bg-white mx-1 text-black p-1 rounded-md items-center flex gap-2">
                    <p>Next js</p>
                    <FaX/>
                  </div>

                </div>
                <input className="input input-info rounded-md flex-grow" placeholder="Add Technology here" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 border rounded-md w-full">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
            <label className="label">
              <span className="label-text text-gray-500">Deskripsi</span>
            </label>
            <textarea
              placeholder="Maks 65 Length"
              maxLength={65}
              value={Description}
              onChange={(e) => SetDescripton(e.target.value)}
              required
              className="input input-bordered w-full h-40 resize-none "
            ></textarea>
          </div>
          <div className="flex justify-end">

            <button type="submit" className="border-2  text-black dark:text-white text-xl mt-4 border-blue-600 p-2 rounded-md hover:bg-blue-600 duration-300 flex items-center gap-2">Add</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Page;
