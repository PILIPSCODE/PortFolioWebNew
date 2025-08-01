"use client"

import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [admin, setAdmin] = useState({ email: "", password: "" })

    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        if (session?.status === "authenticated") {
            router.push("/admin")
        }
    }, [session.status])





    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await signIn("credentials", {
            email: admin.email,
            password: admin.password
        })

        if (res?.error) {
            alert(res.error)
        } else {
            router.push("/admin")
        }
    }
    return (
        <div className='h-screen font-poppins w-full flex justify-center items-center'>
            <form onSubmit={(e) => handleSubmit(e)} className=' w-96 p-5 rounded-md shadow-md shadow-white'>
                <h1 className='text-center text-xl mb-5'>Welcome to Admin Page</h1>
                <div>
                    <h2>Name</h2>
                    <input type="text" required onChange={(e) => setAdmin({ ...admin, email: e.target.value })} placeholder="type here" className='input input-md w-full' />
                </div>
                <div className='mt-2'>
                    <h2>Password</h2>
                    <input type="password" required onChange={(e) => setAdmin({ ...admin, password: e.target.value })} placeholder="type here" className='input input-md w-full' />
                </div>
                <div className='w-full flex justify-end mt-5'>
                    <button className='btn btn-primary '>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Page