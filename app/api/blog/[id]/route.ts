import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismaDb"

export const PUT = async(req:Request,{params}:{params:{id:string}}) => {
    try {
        const body = await req.json()
        const { Title, description, img} = body;
        const UpdateProject = await prisma.blog.update({
            where:{
                id:params.id
            },
            data:{
                Title,
                description,
                img,
            }
        })
        
        return NextResponse.json(UpdateProject)
    } catch (error) {
        console.log(error)
    }

}
export const DELETE = async(req:Request,{params}:{params:{id:string}}) => {
    try {
        const DeleteProject = await prisma.blog.delete({
            where:{
                id:params.id
            },
        })
      
        
        return NextResponse.json(DeleteProject)
    } catch (error) {
        console.log(error)
    }

}