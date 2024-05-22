"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa";
import EditPortfolio from "./EditPortfolio";
import PaginationControls from "../component/PaginationControls";
import Search from "../component/Search";
type Blogs = {
  Title: string;
  Description: string;
  Image: string;
  createdAt: Date;
  id: string;
};
const Page = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const [Portfolio, SetPortfolio] = useState<Blogs[]>([]);
const [search,setSearch] = useState<Blogs[]>([])


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
      const res = await axios.delete(`/api/Portfolio/${id}`);
      if (res.status === 200) {
        toast.success("Succesfuly Deleted");
      }
    } else if (Sweetal.isDenied) {
      Swal.fire("Canceled");
    }
  };

  const page = searchParams["page"] ?? "1";
  const per_page = "9";
  const start = (Number(page) - 1) * Number(per_page); // 0, 5, 10 ...
  const end = start + Number(per_page); // 5, 10, 15 ...
  const entries = Portfolio.slice(start, end)
  return (
    <div className="sm:w-40 md:p-10 p-3 sm:h-screen h-auto w-screen  flex-grow overflow-y-scroll">
      <div className="fixed bottom-10 right-10 text-black rounded-full bg-white/25">
        <Link href={"/admin/Portfolio/AddPortfolio"}>
          <FaPlusCircle size={55} />
        </Link>
      </div>
      <h1 className="text-4xl text-black font-bold my-3">Portfolio</h1>
      <div className="flex justify-center">
        <Search setEvent={setSearch} data={Portfolio} />
      </div>
      <div className="flex gap-4 max-md:flex-col flex-wrap">
        {Portfolio.length > 0 ? (
          <div className="h-full  overflow-hidden grid md:grid-cols-2 w-full gap-4 rounded-xl md:p-10">
            {(search.length > 0 ? search :entries).reverse().map((e, index) => (
              <div
                key={index}
                className="flex relative flex-col items-center w-full bg-black rounded-lg shadow-sm p-5 shadow-white"
              >
                <div className="absolute flex right-2 z-30 bg-black/60 m-2 gap-1 p-1 rounded-lg">
                  <EditPortfolio service={e} />
                  <h1
                    className="text-red-600 "
                    onClick={() => HandleDelete(e.id)}
                  >
                    <BsTrash size={25} />
                  </h1>
                </div>
                <div className="relative h-20 lg:h-60 lg:w-60 w-20 bg-white rounded-3xl flex ">
                  <Image
                    src={`${e.Image}`}
                    alt="blogs"
                    className="object-cover object-top rounded-3xl"
                    fill
                  />
                </div>
                <div className="bg-zinc-900 relative mt-4 w-full text-white px-3">
                  <div className="flex justify-between py-5">
                    <p>{e.Description}</p>
                  </div>
                  <p className="text-sm absolute right-1 bottom-1">
                    {String(e.createdAt).slice(0, 10)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
         <div></div>
        )}
        <div className=" flex w-full justify-center">
          <PaginationControls
            Route="/Admin/Portfolio"
            length={Portfolio.length}
            hasNextPage={end < Portfolio.length}
            hasPrevPage={start > 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
