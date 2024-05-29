import React from 'react'
import { FaBars, FaDollarSign } from 'react-icons/fa'
import { AiOutlineLogout } from "react-icons/ai";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { SiBloglovin } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import Link from 'next/link';
import { signOut} from "next-auth/react";
import { BsImage } from "react-icons/bs";
const Drawer = () => {
  return (
    <div>
        <div className="drawer z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary m-3 drawer-button"><FaBars/></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4  min-h-full bg-black text-white">
    <div className="mt-3 p-2 flex flex-col items-center gap-4">
        <Link href={"/"}>
          <h1 className="bg-black text-white p-1 font-bold rounded-md mb-5">Admin</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right "
        data-tip="Dashboard"
      >
        <Link className="gap-2 flex items-center" href={`/admin`}>
          <RxDashboard size={25} />
        <h1 className="text-xl ">Dasboard</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right  "
        data-tip="Portfolio"
      >
        <Link className="gap-2 flex items-center" href={`/admin/Portfolio`}>
          <BsImage size={25} />
        <h1 className="text-xl ">Portfolio</h1>
        </Link>
      </div>

      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right  "
        data-tip="Service"
      >
        <Link className="gap-2 flex items-center" href={`/admin/Service`}>
          <FcSelfServiceKiosk size={25} />
        <h1 className="text-xl ">Service</h1>
        </Link>
      </div>
      <div
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right  "
        data-tip="Blog"
      >
        <Link className="gap-2 flex items-center" href={`/admin/Blog`}>
          <SiBloglovin size={25} />
        <h1 className="text-xl ">Blog</h1>
        </Link>
      </div>
      <div
       onClick={() => signOut()}
        className=" p-2  tooltip max-sm:mx-0 mx-2 tooltip-right  gap-2 flex items-center "
        data-tip="Logout"
      >
        <AiOutlineLogout size={25} />
        <h1 className="text-xl ">Logout</h1>
      </div>
      
    </ul>
  </div>
</div>
    </div>
  )
}

export default Drawer