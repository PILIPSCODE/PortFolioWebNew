"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsCheck2Circle, BsPencil, BsTrash, BsX } from "react-icons/bs";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import PaginationControls from "../PaginationControls";
import Search from "../Search";
import { ServicesWithRelation } from "@/interface";
import { DeletePortfolio, UpdatePortfolio } from "@/app/libs/action";
import Button from "@/components/Button";
import Input from "@/components/Input";
import InputVariant from "@/components/InputVariant";


const Portfolio = ({
  searchParams,
  Portfolio,
}: {
  searchParams: { [key: string]: string | string[] | undefined }, Portfolio: ServicesWithRelation[];
}) => {
  const [search, setSearch] = useState<ServicesWithRelation[]>([])
  const [isEdit, SetIsEdit] = useState("");
  const [Edit, SetEdit] = useState<ServicesWithRelation>({ name: "", description: "", github: "", link: "", technology: [],img:"",id:"",createdAt: new Date()});
  const HandleDelete = async (id: string) => {
    const Sweetal = await Swal.fire({
      title: "Do you want to Delete?",
      showDenyButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d33",
      denyButtonColor: "#3085d6",
      denyButtonText: `Don't Delete`,
    });

    if (Sweetal.isConfirmed) {
      const res = await DeletePortfolio(id)
      toast.success(res);
    } else if (Sweetal.isDenied) {
      Swal.fire("Canceled");
    }
  };

  const HandleEdit = async(id: string) => {
    if (id === "") {
       SetIsEdit("")
    }
    else {
      await UpdatePortfolio(Edit,id)
      toast.success("Succefuly Edited")
      SetIsEdit("")
    }
  }
 
  const page = searchParams["page"] ?? "1";
  const per_page = "4";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);
  const entries = Portfolio.slice(start, end)

  return (
    <div className="w-full h-full">
      <div className="fixed bottom-10 right-10 text-black rounded-full bg-white/25">
        <Link href={"/admin/Portfolio/AddPortfolio"}>
          <FaPlusCircle size={55} />
        </Link>
      </div>
      <h1 className="text-4xl text-white font-bold my-3">Portfolio</h1>
      <div className="flex justify-center">
        <Search setEvent={setSearch} data={Portfolio} />
      </div>
      <div className="flex gap-4 max-md:flex-col flex-wrap">
        {Portfolio.length > 0 ? (
          <div className="h-full  overflow-hidden grid lg:grid-cols-2 w-full gap-4 mt-3 rounded-xl md:p-10">
            {(search.length > 0 ? search : entries).reverse().map((e, index) => (
              <div
                key={index}
                className="flex relative flex-col items-center w-full bg-black border rounded-lg shadow-sm p-5 shadow-white"
              >
                <div className={`${isEdit === e.id ? "" : "hidden"} absolute flex left-5 z-30 backdrop-blur-md m-2 gap-1  rounded-lg`}>
                  <Button
                    className="text-green-600 "
                    onClick={() => HandleEdit(e.id)}
                  >
                    <BsCheck2Circle size={25} />
                  </Button>
                  <Button
                    className="text-red-600 "
                    onClick={() => HandleEdit("")}
                  >
                    <BsX size={25} />
                  </Button>
                </div>
                <div className="absolute flex right-5 z-30 backdrop-blur-md m-2 gap-1  rounded-lg">
                  <Button
                    className="text-red-600 "
                    onClick={() => HandleDelete(e.id)}
                  >
                    <BsTrash size={25} />
                  </Button>
                  <Button
                    className="text-blue-600 "
                    onClick={() => {SetIsEdit(e.id),SetEdit(e)}}
                  >
                    <BsPencil size={25} />
                  </Button>
                </div>
                <div className="relative  h-60  w-full bg-white rounded-3xl flex ">
                  <Image
                    src={`${e.img}`}
                    alt="blogs"
                    className="object-cover object-top rounded-3xl"
                    fill
                  />
                </div>
                <div className={` ${isEdit !== e.id ? "pointer-events-none" : ""} relative mt-4 w-full text-white`}>
                  <Input
                    value={e.id === isEdit ? String(Edit.name) : String(e.name)}
                    className={`${isEdit !== e.id ? "bg-transparent  border-none" : "input-info rounded-md"} pl-4  font-bold text-xl`}
                    onChange={(e) => SetEdit({ ...Edit, name: e.target.value })}
                    type="text" />
                  <textarea
                    value={e.id === isEdit ? String(Edit.description) : String(e.description)}
                    onChange={(e) => SetEdit({ ...Edit, description: e.target.value })}
                    className={`textarea w-full ${isEdit !== e.id ? "bg-transparent" : " textarea-primary bg-transparent"} mt-3   resize-none`}
                    />
                  <InputVariant SetData={SetEdit} Data={Edit} isEdit={isEdit !== e.id ?false:true} variant={e.technology}/>
                  {isEdit === e.id?
                    <div>
                      <Input className="input-info" value={e.github} placeholder="Link Github Here"/>
                      <Input className="input-info" value={e.link} placeholder="Link Live Here"/>
                    </div>
                    :
                    <></>
                  }
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        <div className=" flex w-full justify-center">
          <PaginationControls
            Route="/admin/Portfolio"
            length={Portfolio.length}
            hasNextPage={end < Portfolio.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
