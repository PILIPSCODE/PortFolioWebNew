"use client";

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "@/app/Admin/component/loading";
import { useRouter } from "next/navigation";

type Services = {
  Name :string,
  gender :string,
  Image :string,
  PosturTubuh :string,
  FotoIndoor :number,
  FotoOutdoor :number,
  VideoBts :number,
  DailtVideo :number,
  Cinematic :number,
  StoryTelling :number,
};
const Page = () => {
  const [Name, SetName] = useState("");
  const [gender, Setgender] = useState("");
  const [PosturTubuh, SetPosturTubuh] = useState("");
  const [FotoIndoor, SetFotoIndoor] = useState(0);
  const [FotoOutdoor, SetFotoOutdoor] = useState(0);
  const [VideoBts, SetVideoBts] = useState(0);
  const [DailtVideo, SetDailtVideo] = useState(0);
  const [Cinematic, SetCinematic] = useState(0);
  const [StoryTelling, SetStoryTelling] = useState(0);
  const [loading, Setloading] = useState(false);
  const [Images, SetImage] = useState("");
  const router = useRouter()
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Services = {
      Name,
      gender,
      Image:Images,
      PosturTubuh,
      FotoIndoor,
      FotoOutdoor,
      VideoBts,
      DailtVideo,
      Cinematic,
      StoryTelling,

    };
    if (
      data.Name !== "" &&
      data.gender !== "" &&
      data.PosturTubuh !== "" &&
      data.FotoIndoor !== 0 &&
      data.FotoOutdoor !== 0 &&
      data.DailtVideo !== 0 &&
      data.Cinematic!== 0 &&
      data.StoryTelling !== 0 &&
      data.VideoBts !== 0 &&
      data.Image !== "" 
    ) {
      try {
        Setloading(true);
        const res = await axios.post("/api/PriceList", data);
        if (res.status === 200) {
          Setloading(false);
          toast.success("Successfully Added");
          router.push('/Admin/PriceList')
        }
      } catch (error) {
        console.log(error);
        Setloading(false);
        toast.error("Internal Server Error");
      }
    }
  };

  return (
    <div className=" h-screen flex-col overflow-y-scroll flex  items-center w-full">
      <Loading load={loading} text="" />
      <h1 className="text-4xl text-black border-4 mt-20 rounded-xl border-black p-2 ">
        Set-PriceList
      </h1>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="grid  relative shadow-xl gap-4 p-4 w-11/12"
      >
        <div className="w-full  h-custom flex items-center justify-center p-4">
          <div className={`${Images !== "" ? "hidden" : 0} absolute z-40`}>
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={(cloud: any) => {
                SetImage(cloud?.info?.secure_url);
              }}
              className={`p-3 rounded-xl bg-black`}
              uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`}
            ></CldUploadButton>
          </div>
          <div
            className={` relative p-4 border-2 border-gray-500 bg-gray-600 rounded-lg h-full w-full`}
          >
            <Image
              alt="upload"
              fill
              src={Images == "" ? "/hero-img.jpg" : Images}
              className={`object-contain absolute ${
                Images !== "" ? "" : "hidden"
              }`}
            />
          </div>
        </div>
        <div>
          <h1 className="text-black">Example: 100 = 100K</h1>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">Name Model</span>
            </label>
            <input
             type="text"
              onChange={(e) => SetName(e.target.value)}
              required
             defaultValue={Name}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">Gender Model</span>
            </label>
            <input
             type="text"
              onChange={(e) => Setgender(e.target.value)}
              required
             defaultValue={gender}
              placeholder="Example:Model Wanita Hijab/Non Hijab"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">PosturTubuh</span>
            </label>
            <input
             type="text"
              onChange={(e) => SetPosturTubuh(e.target.value)}
              required
             defaultValue={PosturTubuh}
              placeholder="Example:Tinggi Badan 160cm, Lingkar Dada 90cm, Berat Badan 54Kg"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">FotoIndoor</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetFotoIndoor(Number(e.target.value))}
              required
             defaultValue={FotoIndoor}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">FotoOutdoor</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetFotoOutdoor(Number(e.target.value))}
              required
             defaultValue={FotoOutdoor}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">Video Bts</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetVideoBts(Number(e.target.value))}
              required
             defaultValue={VideoBts}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">Daily Video</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetDailtVideo(Number(e.target.value))}
              required
             defaultValue={DailtVideo}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">Cinematic</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetCinematic(Number(e.target.value))}
              required
             defaultValue={Cinematic}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">StoryTelling</span>
            </label>
            <input
             type="number"
              onChange={(e) => SetStoryTelling(Number(e.target.value))}
              required
             defaultValue={StoryTelling}
              placeholder="Type here"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div>
          
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="border-2 text-xl mt-4 text-black dark:text-white border-blue-600 p-2 rounded-md hover:bg-blue-600 duration-300 flex items-center gap-2"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
