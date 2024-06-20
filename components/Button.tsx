import { ButtonHTMLAttributes, ReactNode } from "react"

import {VariantProps, cva} from 'class-variance-authority'
import cn from "@/utils/cn"


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant>{
    children: ReactNode,
}


export default function Button({ children,className,variant,size, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(buttonVariant({variant,size,className}))}>
            {children}
        </button>
    )
}

const buttonVariant = cva("rounded-md border-2", {
    variants:{
        variant:{
            info:"btn btn-info ",
            danger:"btn-danger",
            succes:"btn-succes",
            default:"bg-base-300 btn"
        },
        size:{
            sm:"text-sm py-0 px-1",
            md:"text-base py-1 px-2",
            lg:"text-xl py-2 px-4",
        }
    },
    defaultVariants:{
        variant:"default",
        size:"md"
    }
})

