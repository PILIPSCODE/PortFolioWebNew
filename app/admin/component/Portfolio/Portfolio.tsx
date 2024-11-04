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
import { useRouter} from "next/navigation";
import { ServicesWithRelation } from "@/interface";
import { DeletePortfolio, UpdatePortfolio } from "@/app/libs/action";
import Button, { DeleteButton } from "@/components/Button";

import EditPortfolio from "./EditPortfolio";


const Portfolio = ({
  searchParams,
  Portfolio,
}: {
  searchParams: { [key: string]: string | string[] | undefined }, Portfolio: any;
}) => {
  const [search, setSearch] = useState<ServicesWithRelation[]>([])
  const [isEdit, SetIsEdit] = useState("");

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

  const router = useRouter()

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
            {(search.length > 0 ? search : entries).reverse().map((e: any, index: any) => (
              <div
                key={index}
                className="flex relative flex-col items-center w-full bg-black border rounded-lg shadow-sm p-5 shadow-white"
              >

                <div className="absolute flex right-5 z-30 backdrop-blur-md m-2 gap-1  rounded-lg">
                  <DeleteButton id={e.id}/>
                  <Button
                    className="text-blue-600 "
                    onClick={() => router.push(`/admin/Portfolio/?id=${e.id}`) }
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
                <EditPortfolio setEdit={SetIsEdit} isEdit={isEdit !== "" ? isEdit : ""} e={e} />
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
