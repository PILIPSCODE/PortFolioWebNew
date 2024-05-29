"use client"
import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
import "suneditor/dist/css/suneditor.min.css";
import { useRouter } from "next/navigation";
import SunEditorCore from "suneditor/src/lib/core";
import SunEditor, { buttonList } from "suneditor-react";

type Services = {
    id:string
    Title: string,
    createdAt:Date,
    Descripton: string,
    Image:string
  }
const EditBlog = (props:{service:Services}) => {
    const editor = useRef<SunEditorCore>();
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
      editor.current = sunEditor;
    };
  const [Descripton, SetDescripton] = useState(props.service.Descripton);
  const [loading, Setloading] = useState(false);
  


  const modalref = useRef<HTMLDialogElement>(null);
  const router = useRouter()
  const HandleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data= {
        Descripton,
      }
      if(data.Descripton !== ""){
       
          
         
            try {
              Setloading(true)
              const res = await axios.post(`/api/Blog/${props.service.id}`,data)
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
        <form onSubmit={(e) => HandleSubmit(e)} method="dialog" className="modal-box  h-screen w-11/12 max-w-5xl">
        <div className="flex justify-center">
            <h1 className='text-4xl text-white border-4 rounded-xl border-white my-5 p-2 '>Edit-Blog</h1>
        </div>
        <div onClick={() => modalref.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</div>
          <div>
            <div>
          <SunEditor
            height="500"
            setAllPlugins={true}
            onChange={(e) => SetDescripton(e)}
            setContents={Descripton}
            setOptions={{
              buttonList:  [
                ["undo", "redo", "font", "fontSize", "formatBlock"],
                ["bold", "underline", "italic", "strike", "subscript", "superscript", "removeFormat"],
                ['fontColor', 'hiliteColor', 'outdent', 'indent', 'align', 'horizontalRule','list',"table"],
                ["link", "fullScreen", "showBlocks", "codeView", "preview", "save"]
            ],
              placeholder: "Use Full Screen mode to Easy Write",
            }}
            getSunEditorInstance={getSunEditorInstance}
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

export default EditBlog;
