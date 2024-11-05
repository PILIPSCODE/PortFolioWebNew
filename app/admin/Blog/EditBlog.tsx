"use client"
import React, { useState } from "react";
import { useRef } from "react";
import { BsPencil } from "react-icons/bs";
import "suneditor/dist/css/suneditor.min.css";
import SunEditorCore from "suneditor/src/lib/core";
import SunEditor from "suneditor-react";
import { SubmitButton } from "@/components/Button";
import { useFormState } from "react-dom";
import { EditBlog } from "@/app/libs/action";

type props = {
  service: any
}
const EditBlogs = (props:props) => {
    const editor = useRef<SunEditorCore>();
    const getSunEditorInstance = (sunEditor: SunEditorCore) => {
      editor.current = sunEditor;
    };

  const modalref = useRef<HTMLDialogElement>(null);
  const UpdateProjecttWithId = EditBlog.bind(null, props.service.id);
  const [state, formAction] = useFormState(UpdateProjecttWithId, null);

  return (
    <div>
      <h1 className="text-info" onClick={() => modalref.current?.showModal()}>
        <BsPencil size={20} />
      </h1>
      <dialog ref={modalref} className="modal">
        <form  action={formAction} method="dialog" className="modal-box  h-screen w-11/12 max-w-5xl">
        <div className="flex justify-center">
            <h1 className='text-4xl text-white border-4 rounded-xl border-white my-5 p-2 '>Edit-Blog</h1>
        </div>

        <div onClick={() => modalref.current?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</div>
          <div>
          <input
              type="text"
              name="Title"
              defaultValue={props.service.Title}
              id="Title"
              required
              maxLength={65}
              placeholder="Max-length:65 characters"
              className="input input-bordered my-2 bg-white text-black w-full "
            />
            <div>
          <SunEditor
            height="500"
            setAllPlugins={true}
            name="description"
            defaultValue={props.service.description}
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
              <SubmitButton label="update"/>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default EditBlogs;
