import React, { useEffect, useState } from "react";

import { GetBlog } from "@/app/libs/data";
import Blogs from "../component/Blog/Blog";

type Blogs={
  isLiked:boolean
  Title: string,
  Descripton:string
  Image:string
  createdAt:Date
  id:string
}

const Page = async({searchParams}:{
  searchParams: { [key: string]: string | string[] | undefined },
}) => {
const Blog = await GetBlog()

  
  return (
    <div className="sm:w-40 md:p-10 p-3 sm:h-screen h-auto w-screen  flex-grow overflow-y-scroll">
      <Blogs blog={Blog} searchParams={searchParams}/>
    </div>
  );
};

export default Page;
