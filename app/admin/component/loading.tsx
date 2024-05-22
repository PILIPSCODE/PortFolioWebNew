import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

function Loading(load:{load:boolean,text:string}) {
  return (
    <div className={`${load.load? "" :"hidden"} flex top-3 text-2xl text-stone-50 justify-center z-50  absolute`}>
    <div className="bg-black p-3  gap-2 items-center rounded-md  flex">
    <h1 className="loading"><BiLoaderCircle size={25}/></h1>
    <h1 className="rounded-lg">Sabar Ya kak {load.text} 😊😊😊</h1>
    </div>
    </div>
  )
}

export default Loading