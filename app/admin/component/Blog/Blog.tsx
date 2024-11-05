"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {  FaHeart, FaPlusCircle } from "react-icons/fa";
import { DeleteButton, DeleteButtoni } from "@/components/Button";
import EditBlog from '../../Blog/EditBlog';
import PaginationControls from '../PaginationControls';

function Blogs({
    searchParams,
    blog
}: {
    searchParams: { [key: string]: string | string[] | undefined },
    blog:any
}) {
    const page = searchParams['page'] ?? '1'
    const per_page = '9'
    const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
    const end = start + Number(per_page) // 5, 10, 15 ...
    const entries = blog.slice(start, end)
    return (
        <div>
            <div className="fixed bottom-10 right-10 z-50 rounded-full bg-white/60 text-black">
                <Link href={'/admin/Blog/AddBlog'}><FaPlusCircle size={55} /></Link>
            </div>
            <h1 className='text-4xl text-black font-bold my-3'>All Blogs</h1>
            <div className="flex justify-center items-center">

                {/* <Search  data={Blog}/> */}
            </div>
            <div className="flex gap-4 max-md:flex-col flex-wrap">
                {
                    entries.length > 0 ?

                        <div className="h-full  overflow-hidden grid md:grid-cols-2 w-full gap-4 rounded-xl md:p-10">


                            {entries.reverse().map((e:any, index:any) => (

                                <div key={index} className="flex relative  w-full bg-black rounded-lg shadow-sm p-5 shadow-white">
                                    <div className='absolute flex right-2 h-full items-center top-0 z-30 m-2 gap-1 p-1 rounded-lg'>
                                        <EditBlog service={e} />
                                        <DeleteButtoni id={e.id} />

                                    </div>
                                    <div className="relative h-20 w-20 bg-white rounded-3xl">
                                        <Image
                                            src={`${e.img}`}
                                            alt="blogs"
                                            className="object-cover object-top rounded-3xl"
                                            fill
                                        />
                                    </div>
                                    <div className="bg-black text-white px-3">
                                        <p className="font-bold max-sm:text-base ">
                                            Title: {e?.Title ? e.Title.trim().slice(0, 38) + '...' : 'Tidak ada judul'}
                                        </p>
                                        <div className="flex justify-between py-5 max-sm:text-sm">
                                            <p className="max-sm:text-sm">CreatedAt:{e?.createdAt ? String(e.createdAt).slice(0, 10) : 'Tidak ada tanggal'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        :
                        <div></div>
                }
                <div className=" flex w-full justify-center">

                    <PaginationControls
                        Route='/admin/Blog'
                        length={blog.length}
                        hasNextPage={end < blog.length}
                        hasPrevPage={start > 0}
                    />
                </div>
            </div>
        </div>
    )
}

export default Blogs