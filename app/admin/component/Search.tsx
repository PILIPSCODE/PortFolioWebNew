"use client"
import React, { useState } from 'react'

type search ={
    setEvent:React.Dispatch<React.SetStateAction<any>>
    data:any
}

const Search = (props:search) => {
    const [searc,setSearch] = useState('')
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const data = props.data.filter((item:any) => {
        const date = String(item.createdAt).slice(0.10)

        

          return date.includes(searc)
       })
       if(data.length < 1){
           props.setEvent([{Image:"/",Title:"Not Found In this Date",createdAt:"Not Found In this Date",Description:"Not Found In this Date"}])
       }else{
        props.setEvent(data)

       }
        console.log(data)
    }
  return (
    <form onSubmit={(e) => {handleSubmit(e)}} className='flex gap-3 justify-center w-full my-5'>
        <input onChange={(e) => setSearch(e.target.value)} className='input-group-lg w-8/12 max-md:w-11/12 px-2 rounded-xl' placeholder='Example: 2023-08-28' type="text" />
        <button className='btn btn-primary' type="submit">Search</button>
    </form>
  )
}

export default Search