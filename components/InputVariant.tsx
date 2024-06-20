"use client"
import React, { InputHTMLAttributes, useState } from 'react'
import Input from './Input'
import { Services, ServicesWithRelation } from '@/interface'
import { FaX } from 'react-icons/fa6'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

type Props = {
    variant: data[]
    SetData:React.Dispatch<React.SetStateAction<ServicesWithRelation>>
    isEdit:boolean,
    Data:ServicesWithRelation
}

type data = {
      technology: string | null;
}
const InputVariant = (props:Props, {className}: InputProps) => {
  const [value, setValue] = useState("")

  const handleAdd = () => {
    props.SetData({...props.Data, technology: [...props.Data.technology, {technology:value}]})
    setValue("")
  } 

  const handleDelete = (id:string) => {
    props.SetData({...props.Data, technology:props.Data.technology.filter((e) => e.technology !== id ) })
    setValue("")
  } 

    return (
        <div className=''>
            <div className=" w-full flex  justify-center rounded-md flex-wrap ">

                <div className="flex my-2  flex-wrap items-center">
                    {(!props.isEdit?props.variant:props.Data.technology).map((e, index) => (
                        <div key={index} className="bg-white mx-1 text-black p-1 my-1 rounded-md items-center flex gap-2">
                            <p>{e.technology}</p>
                            {
                                props.isEdit?
                                <FaX onClick={() => handleDelete(String(e.technology))}/>
                                :
                                <div></div>
                            }
                        </div>
                    ))}

                </div>

                <Input
                value={value}
                className={`${props.isEdit? "input-info":"hidden"}`}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add Technology here" />
            </div>
            {
                value !== "" && props.isEdit?
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-2 shadow bg-base-100 border rounded-md w-full">
                        <li className="w-full" onClick={handleAdd}>Tambah {value}</li>
                    </ul>
                    :
                    ""
            }
        </div>
    )
}

export default InputVariant