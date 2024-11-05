"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import SunEditorCore from "suneditor/src/lib/core";
import { SubmitButton } from "@/components/Button";
import { AddBlog } from "@/app/libs/action";
import { useFormState } from "react-dom";

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
  const [Images, SetImage] = useState("");
  const PostBlog = AddBlog.bind(null, Images);
  const [state, formAction] = useFormState(PostBlog, null)


  return (
    <div className=" h-screen max-md:pt-24 flex-col overflow-y-scroll flex justify-center items-center w-full">

      <h1 className="text-4xl text-black border-4 max-md:mt-60 rounded-xl border-black p-2 ">
        Add-Blog
      </h1>
      <form
      action={formAction}
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
              name="Title"
              id="Title"
              required
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
              name="description"
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

          <div className="flex justify-end">
            <SubmitButton label="save"/>
             
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
