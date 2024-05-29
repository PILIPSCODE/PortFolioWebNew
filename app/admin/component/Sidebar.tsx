"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { SiBloglovin } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { signOut,useSession} from "next-auth/react";
import { BsImage } from "react-icons/bs";
import Drawer from "./Drawer";
import { FaDollarSign } from "react-icons/fa";

const SideBar = () => {
    const [auth,setAuth] = useState(false);
    const session = useSession()
    useEffect(() => {
        if(session.status === "authenticated") {
            setAuth(true)
        }else{
            setAuth(false)
        }
    },[session,auth]);
  return (
    <div className={`${auth? "" :"hidden"}`}>
    <div className="sm:hidden">
      <Drawer/>
    </div>
    <div className={`h-screen max-sm:hidden bg-black  text-white flex flex-col gap-8 max-md:items-center font-poppins `}>
      <div className="mt-3 p-2 max-sm:hidden">
        <Link href={"/"}>
          <h1 className="bg-black text-white p-1 font-bold rounded-md">Admin</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right max-md:tooltip-bottom "
        data-tip="Dashboard"
      >
        <Link className="gap-2 flex items-center" href={`/admin`}>
          <RxDashboard size={25} />
        <h1 className="text-xl max-md:hidden">Dasboard</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right max-md:tooltip-bottom "
        data-tip="Portfolio"
      >
        <Link className="gap-2 flex items-center" href={`/admin/Portfolio`}>
          <BsImage size={25} />
        <h1 className="text-xl max-md:hidden">Portfolio</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right max-md:tooltip-bottom "
        data-tip="Service"
      >
        <Link className="gap-2 flex items-center" href={`/admin/Service`}>
        <FcSelfServiceKiosk size={25} />
          
        <h1 className="text-xl max-md:hidden">Service</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right max-md:tooltip-bottom "
        data-tip="Blog"
      >
        <Link className="gap-2 flex items-center" href={`/admin/Blog`}>
          <SiBloglovin size={25} />
        <h1 className="text-xl max-md:hidden">Blog</h1>
        </Link>
      </div>
      <div
       onClick={() => signOut()}
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right max-md:tooltip-bottom gap-2 flex items-center "
        data-tip="Logout"
      >
        <AiOutlineLogout size={25} />
        <h1 className="text-xl max-md:hidden">Logout</h1>
      </div>
    </div>
    </div>
  );
};

export default SideBar;
