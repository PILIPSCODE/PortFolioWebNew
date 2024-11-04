import { NextResponse } from "next/server"
import {prisma} from "@/app/libs/prismaDb"

export const GET= async(req:Request) => {
    try {
        
        const Project = await prisma.project.findMany()
        
        return NextResponse.json(Project)
    } catch (error) {
        console.log(error)
    }

}