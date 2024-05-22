"use client"
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
// import Loading from "../loading";
import { useRouter } from "next/navigation";

type Services = {
    id:string
    Title: string,
    Link:string | null,
    Descripton: string,
  }
const EditService = (props:{service:Services}) => {
  const [Title, SetTitle] = useState(props.service.Title);
  const [Descripton, SetDescripton] = useState(props.service.Descripton);
  const [loading, Setloading] = useState(false);
  const [Link, SetLink] = useState(props.service.Link);


  const modalref = useRef<HTMLDialogElement>(null);
  const router = useRouter()
  const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data= {
        Title, 
        Descripton,
        Link
      }
      if(data.Title !== "" && data.Descripton !== ""  && data.Link !== ""){
       
          
         
            try {
              Setloading(true)
              const res = await axios.post(`/api/Service/${props.service.id}`,data)
              if(res.status === 200){
                Setloading(false)
                toast.success("Successfully Edited")
                router.refresh()
                modalref.current?.close()
              }
            } catch (error) {
              console.log(error)
              Setloading(false)
              toast.error("Internal Server Error")
            }
          
           
           
     
          
      }
  }
  return (
    <div>
      <h1 className="text-info" onClick={() => modalref.current?.showModal()}>
        <BsPencil size={20} />
      </h1>
      <dialog ref={modalref} className="modal">
      {/* <Loading load={loading} text=""/> */}
        <form onSubmit={(e) => HandleSubmit(e)} method="dialog" className="modal-box w-11/12 max-w-5xl">
        <div className="flex justify-center">
            <h1 className='text-4xl text-white border-4 rounded-xl border-white  p-2 '>Edit-Service</h1>
        </div>
        <div onClick={() => modalref.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</div>
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-gray-500">Layanan</span>
              </label>
              <input
                type="text"
                onChange={(e) => SetTitle(e.target.value)}
                required
                defaultValue={props.service.Title}
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
                maxLength={200}
                defaultValue={props.service.Descripton}
                onChange={(e) => SetDescripton(e.target.value)}
                required
                className="input input-bordered w-full h-40 resize-none "
              ></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-gray-500">
                  Deskripsi Harga
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                required
                defaultValue={props.service.Link || ""}
                onChange={(e) => SetLink(e.target.value)}
                className="input input-bordered w-full "
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="border-2 text-xl mt-4  text-white border-blue-600 p-2 rounded-md hover:bg-blue-600 duration-300 flex items-center gap-2"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default EditService;
