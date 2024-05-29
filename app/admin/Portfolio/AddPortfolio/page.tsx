"use client"

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";


type Services = {
  name: string,
  description: string,
  img: string,
  technology: string[],
  link: string,
  github: string,
}
const Page = () => {
  const [formData, setFromData] = useState<Services>({ name: "", description: "", img: "", technology: [], link: "", github: "" })
  const [technology, setTecnology] = useState("")

  const router = useRouter()
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      if (formData.description !== "" && formData.img !== "" && formData.name !== "" && formData.technology.length !== 0) {
        const res = await axios.post('/api/project', formData)
        if (res.status === 200) {
          toast.success("Successfully Added")
        }

        router.push('/admin/Portfolio')
      }
    } catch (error) {
      toast.error("Internal Server Error")
      console.log(error)
    }

  }


  return (
    <div className=" h-screen flex-col overflow-y-scroll flex justify-center items-center w-full">

      <h1 className='text-4xl text-black border-4 max-md:mt-24  rounded-xl border-black p-2   '>Add-Portfolio</h1>
      <form onSubmit={(e) => HandleSubmit(e)} className="grid sm:grid-cols-2 relative shadow-xl gap-4 p-4 w-11/12">
        <div className="w-full max-sm:h-56 flex items-center justify-center p-4">
          <div className={`${formData.img} !== "" ? "hidden" : ""} absolute z-40`}>

            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={(cloud: any) => {
                setFromData({ ...formData, img: cloud?.info?.secure_url })
              }
              }
              className={`p-3 rounded-xl bg-black`}
              uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`}
            >
            </CldUploadButton>
          </div>
          <div className={` relative p-4 border-2 border-gray-500 bg-gray-600 rounded-lg h-full w-full`}>
            <Image alt="upload" fill src={formData.img == "" ? "/hero-img.jpg" : formData.img} className={`object-contain absolute ${formData.img !== "" ? "" : "hidden"}`} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500">Project Name</span>
            </label>
            <input
              type="text"
              onChange={(e) => setFromData({ ...formData, name: e.target.value })}
              required
              value={formData.name}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="dropdown dropdown-bottom">
            <label className="label">
              <span className="label-text text-gray-500">Tech Stack</span>
            </label>
            <div className=" w-full flex  justify-center rounded-md flex-wrap bg-base-100">

              <div className="flex my-2  items-center">
                {formData.technology.map((e, index) => (
                  <div key={index} className="bg-white mx-1 text-black p-1 rounded-md items-center flex gap-2">
                    <p>{e}</p>
                    <FaX />
                  </div>
                ))}

              </div>

              <input
                onChange={(e) => setTecnology(e.target.value)}
                value={technology}
                className="input  rounded-md flex-grow" placeholder="Add Technology here" />
            </div>
            {
              technology !== "" ?
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 border rounded-md w-full">
                  <li className="w-full" onClick={() => setFromData({ ...formData, technology: [...formData.technology, technology] })}>Add {technology}</li>
                </ul>
                :
                ""
            }
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500">Github Link</span>
            </label>
            <input
              type="text"
              onChange={(e) => setFromData({ ...formData, github: e.target.value })}
              value={formData.github}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500">Web Link</span>
            </label>
            <input
              type="text"
              onChange={(e) => setFromData({ ...formData, link: e.target.value })}
              value={formData.link}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <label className="label">
            <span className="label-text text-gray-500">Deskripsi</span>
          </label>
          <textarea
            placeholder="Maks 65 Length"
            maxLength={65}
            value={formData.description}
            onChange={(e) => setFromData({ ...formData, description: e.target.value })}
            required
            className="input input-bordered w-full h-40 resize-none "
          ></textarea>
          <div className="flex w-full justify-end">

            <button type="submit" className="border-2  text-black dark:text-white text-xl mt-4 border-blue-600 p-2 rounded-md hover:bg-blue-600 duration-300 flex items-center gap-2">Add</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Page;
