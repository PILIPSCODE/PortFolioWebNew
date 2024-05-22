"use client"
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
import Loading from "@/app/Admin/component/loading";
import { useRouter } from "next/navigation";


type Services = {
  Name :string,
  gender :string,
  PosturTubuh :string,
  FotoIndoor :number,
  id:string
  FotoOutdoor :number,
  VideoBts :number,
  DailtVideo :number,
  Cinematic :number,
  StoryTelling :number,
};
const EditBlog = (props:{service:Services}) => {
   
  const [Name, SetName] = useState(props.service.Name);
  const [gender, Setgender] = useState(props.service.gender);
  const [PosturTubuh, SetPosturTubuh] = useState(props.service.PosturTubuh);
  const [FotoIndoor, SetFotoIndoor] = useState(props.service.FotoIndoor);
  const [FotoOutdoor, SetFotoOutdoor] = useState(props.service.FotoOutdoor);
  const [VideoBts, SetVideoBts] = useState(props.service.VideoBts);
  const [DailtVideo, SetDailtVideo] = useState(props.service.DailtVideo)
  const [Cinematic, SetCinematic] = useState(props.service.Cinematic);
  const [StoryTelling, SetStoryTelling] = useState(props.service.StoryTelling);
  const [loading, Setloading] = useState(false);
  


  const modalref = useRef<HTMLDialogElement>(null);
  const router = useRouter()
  console.log(props.service)
  const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data= {
      Name,
      gender,
      PosturTubuh,
      FotoIndoor,
      FotoOutdoor,
      VideoBts,
      DailtVideo,
      Cinematic,
      StoryTelling,
      }
       
          
         
            try {
              Setloading(true)
              const res = await axios.post(`/api/PriceList/${props.service.id}`,data)
              if(res.status === 200){
                Setloading(false)
                toast.success("Successfully Edited")
                modalref.current?.close()
                router.refresh()
              }
            } catch (error) {
              console.log(error)
              Setloading(false)
              toast.error("Internal Server Error")
            }
        
  }
  return (
    <div>
      <h1 className="text-info" onClick={() => modalref.current?.showModal()}>
        <BsPencil size={20} />
      </h1>
      <dialog ref={modalref} className="modal">
      <Loading load={loading} text=""/>
        <form onSubmit={(e) => HandleSubmit(e)} method="dialog" className="modal-box bg-black text-white  h-screen w-11/12 max-w-5xl">
        <div className="flex justify-center">
            <h1 className='text-4xl text-white border-4 rounded-xl border-white  p-2 '>Edit-PriceList</h1>
        </div>
        <div onClick={() => modalref.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</div>
          <div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold ">Name Model</span>
            </label>
            <input
             type="text"
              onChange={(e) => SetName(e.target.value)}
              required
              defaultValue={props.service.Name}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">Gender Model</span>
            </label>
            <input
             type="text"
              onChange={(e) => Setgender(e.target.value)}
              required
             defaultValue={props.service.gender}
              placeholder="Example:Model Wanita Hijab/Non Hijab"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">PosturTubuh</span>
            </label>
            <input
             type="text"
              onChange={(e) => SetPosturTubuh(e.target.value)}
              required
             defaultValue={props.service.PosturTubuh}
              placeholder="Example:Tinggi Badan 160cm, Lingkar Dada 90cm, Berat Badan 54Kg"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">FotoIndoor</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetFotoIndoor(Number(e.target.value))}
              required
             defaultValue={props.service.FotoIndoor}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">FotoOutdoor</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetFotoOutdoor(Number(e.target.value))}
              required
             defaultValue={props.service.FotoOutdoor}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">Video Bts</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetVideoBts(Number(e.target.value))}
              required
             defaultValue={props.service.VideoBts}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">Daily Video</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetDailtVideo(Number(e.target.value))}
              required
             defaultValue={props.service.DailtVideo}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">Cinematic</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetCinematic(Number(e.target.value))}
              required
             defaultValue={props.service.Cinematic}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-white">StoryTelling</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetStoryTelling(Number(e.target.value))}
              required
             defaultValue={props.service.StoryTelling}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div>
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

export default EditBlog;
