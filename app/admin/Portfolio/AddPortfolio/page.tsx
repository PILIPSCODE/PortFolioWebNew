"use client"

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { AddPortfolio } from "@/app/libs/action";
import { EditTechnologyPortfolio, Services } from "@/interface";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import Button, { SubmitButton } from "@/components/Button";
import { useFormState } from "react-dom";



const Page = () => {
  const [formData, setFromData] = useState<EditTechnologyPortfolio>({ technology: [],id:""})
  const [technology, setTecnology] = useState("")


  const PostPortfolio = AddPortfolio.bind(null, formData);
  const [state, formAction] = useFormState(PostPortfolio, null);

  return (
    <div className=" h-screen flex-col overflow-y-scroll flex justify-center items-center w-full">

      <h1 className='text-4xl text-black border-4 max-md:mt-24  rounded-xl border-black p-2   '>Add-Portfolio</h1>
      <form action={formAction} className="grid sm:grid-cols-2 relative shadow-xl gap-4 p-4 w-11/12">
        <div className="w-full max-sm:h-56 flex items-center justify-center p-4">
          <div className={`${formData.id} !== "" ? "hidden" : ""} absolute z-40`}>

            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={(cloud: any) => {
                setFromData({ ...formData, id: cloud?.info?.secure_url })
              }
              }
              className={`p-3 rounded-xl bg-black`}
              uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`}
            >
            </CldUploadButton>
          </div>
          <div className={` relative p-4 border-2 border-gray-500 bg-gray-600 rounded-lg h-full w-full`}>
            <Image alt="upload" fill src={formData.id == "" ? "/hero-img.jpg" : formData.id} className={`object-contain absolute ${formData.id !== "" ? "" : "hidden"}`} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500">Project Name</span>
            </label>
            <Input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Type here"
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
                    <p>{e.technology}</p>
                    <FaX />
                  </div>
                ))}

              </div>

              <Input
                onChange={(e) => setTecnology(e.target.value)}
                value={technology}
                placeholder="Add Technology here" />
            </div>
            {
              technology !== "" ?
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 border rounded-md w-full">
                  <li className="w-full" onClick={() => setFromData({ ...formData, technology: [...formData.technology, { technology: technology, id: "osoks" }] })}>Add {technology}</li>
                </ul>
                :
                ""
            }
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500">Github Link</span>
            </label>
            <Input
              type="text"
              name="github"
              id="github"
              placeholder="Type here"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-gray-500">Web Link</span>
            </label>
            <Input
              type="text"
              name="link"
              id="link"
              placeholder="Type here"
            />
          </div>
          <label className="label">
            <span className="label-text text-gray-500">Deskripsi</span>
          </label>
          <textarea
            placeholder="Maks 65 Length"
            maxLength={65}
            name="description"
            id=""
            required
            className="bg-black text-white  border p-3 w-full h-40 resize-none "
          ></textarea>
          <div className="flex w-full justify-end">

            <SubmitButton label="save"/>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Page;
