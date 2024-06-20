import { InputHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   
}


export default function Input({className, ...props }: InputProps) {
    return (
        <input
        {...props}
        className={twMerge("w-full  px-2 text-lg border bg-none mt-1 text-white h-14 bg-black ",className)}/>
    )
}

