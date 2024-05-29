import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";
import { technology } from "@/interface";



export const GET = async (req:Request,res:NextResponse) => {
  try {

    const project = await prisma.project.findMany()
    
    return NextResponse.json(project)
    
  } catch (error) {
    console.log(error)
  }
}

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const body = await req.json();
    const { name, description, img,technology, github, link} = body;
    

    if(description !== "" && name !=="" && img !== ""){

     
      const createproject = await prisma.project.create({
          data:{
              name:name,
              img:img,
              github:github,
              link:link,
              description:description,
          },
          include:{
            technology:true
          }
      })
      
      await prisma.technolgy.createMany({
        data:technology.map((e:technology) => {
            return {
              technology:e,
              projectId:createproject.id
            }
        })
      })

      return NextResponse.json(createproject)
    }
    return NextResponse.json(body)
    
            
  } catch (error) {
    console.log(error);
  }
};
