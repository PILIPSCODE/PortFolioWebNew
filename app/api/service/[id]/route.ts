// import { NextResponse } from "next/server"
// import prisma from "@/app/libs/prismaDb"

// export const PUT = async(req:Request,{params}:{params:{id:string}}) => {
//     try {
//         const body = await req.json()
//         const { name, description, img} = body;
//         const UpdateProject = await prisma.service.update({
//             where:{
//                 id:params.id
//             },
//             data:{
//                 name,
//                 description,
//                 img,
//             }
//         })
        
//         return NextResponse.json(UpdateProject)
//     } catch (error) {
//         console.log(error)
//     }

// }
// export const DELETE = async(req:Request,{params}:{params:{id:string}}) => {
//     try {
//         const DeleteProject = await prisma.service.delete({
//             where:{
//                 id:params.id
//             },
//         })
        
//         return NextResponse.json(DeleteProject)
//     } catch (error) {
//         console.log(error)
//     }

// }