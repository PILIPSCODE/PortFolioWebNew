"use client"
import React, { useEffect, useState } from 'react'
import { signIn,useSession } from 'next-auth/react'
import {useRouter} from "next/navigation"
function Page() {
  const router = useRouter()
  const session = useSession()
  useEffect(() => {
    if(session?.status === "authenticated"){
      router.push("/Admin")
    }
  },[])
  const [password,setPassword] = useState({password:""})
  const handleSubmit =(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signIn("credentials",{...password,redirect:false}).then(() => {
      router.push("/Admin")
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='h-screen w-full text-black flex justify-center items-center bg-black'>
      <div className='bg-white/80 rounded-xl p-4 font-poppins font-bold flex-col flex items-center'>
      <input type="password" placeholder='Password?' className='h-12 rounded-xl text-black px-2' onChange={(e) => setPassword({password:e.target.value})}/>
      </div>
    </form>
  )
}

export default Page