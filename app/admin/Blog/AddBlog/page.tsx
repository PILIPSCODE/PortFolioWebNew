"use client";

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import SunEditorCore from "suneditor/src/lib/core";
import { buttonList } from "suneditor-react";
import { useRouter } from "next/navigation";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

type Services = {
  Title: String;
  Descripton: String;
  Image: String;
};
const Page = () => {
  const editor = useRef<SunEditorCore>();
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const [Title, SetTitle] = useState("");
  const [Descripton, SetDescripton] = useState("");
  const [loading, Setloading] = useState(false);
  const [Images, SetImage] = useState("");
  const router = useRouter()
  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Services = {
      Title,
      Descripton,
      Image: Images,
    };
    if (
      data.Title !== "" &&
      data.Descripton !== "<p><br></p>" &&
      data.Image !== ""
    ) {
      try {
        Setloading(true);
        const res = await axios.post("/api/Blog", data);
        if (res.status === 200) {
          Setloading(false);
          toast.success("Successfully Added");
          SetImage("");
          SetTitle("");
          SetDescripton("");
          router.push("/Admin/Blog")
        }
      } catch (error) {
        console.log(error);
        Setloading(false);
        toast.error("Internal Server Error || Title Sudah Dipakai");
      }
    }
  };

  return (
    <div className=" h-screen max-md:pt-24 flex-col overflow-y-scroll flex justify-center items-center w-full">

      <h1 className="text-4xl text-black border-4 max-md:mt-60 rounded-xl border-black p-2 ">
        Add-Blog
      </h1>
      <form
        onSubmit={(e) => HandleSubmit(e)}
        className="grid lg:grid-cols-2 relative shadow-xl gap-4 p-4 w-11/12"
      >
        <div className="w-full lg:h-full h-56 flex items-center justify-center p-4">
          <div className={`${Images !== "" ? "hidden" : ""} absolute z-40`}>
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
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold  text-black">Title</span>
            </label>
            <input
              type="text"
              onChange={(e) => SetTitle(e.target.value)}
              required
              value={Title}
              maxLength={65}
              placeholder="Max-length:65 characters"
              className="input input-bordered bg-white text-black w-full "
            />
          </div>
          <div>
            <span className="label-text text-black font-bold mb-2">
              Description
            </span>
            <SunEditor
              height="200"
              setAllPlugins={true}
              onChange={(e) => SetDescripton(e)}
              setContents={Descripton}
              setOptions={{
                buttonList:  [
                  ["undo", "redo", "font", "fontSize", "formatBlock"],
                  ["bold", "underline", "italic", "strike", "subscript", "superscript", "removeFormat"],
                  ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule', "list", "table"],
                  ["link", "fullScreen", "showBlocks", "codeView", "preview", "save"]
              ],
                placeholder: "Use Full Screen mode to Easy Write",
              }}
              getSunEditorInstance={getSunEditorInstance}
            />
          </div>
          {/* <div className="form-control w-full ">
        <label className="label">
          <span className="label-text text-gray-500">Deskripsi</span>
        </label>
        <textarea
          placeholder="Maks 200 Length"
          maxLength={200}
          value={Descripton}
          onChange={(e) => SetDescripton(e.target.value)}
          required
          className="input input-bordered w-full h-40 resize-none "
        ></textarea>
      </div> */}

          <div className="flex justify-end">
            <button
              type="submit"
              className="border-2 text-xl text-black dark:text-white mt-4 border-blue-600 p-2 rounded-md hover:bg-blue-600 duration-300 flex items-center gap-2"
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
