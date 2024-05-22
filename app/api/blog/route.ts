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
    const { Title, description, img} = body;
    

    if(description !== "" && Title !=="" && img !== ""){

     
      const createproject = await prisma.blog.create({
          data:{
              Title,
              img,
              description,
          },
      })
      

      return NextResponse.json(createproject)
    }
    return NextResponse.json(body)
    
            
  } catch (error) {
    console.log(error);
  }
};
