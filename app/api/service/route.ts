import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";
import { technology } from "@/interface";



export const GET = async (req:Request,res:NextResponse) => {
  try {

    const project = await prisma.service.findMany()
    
    return NextResponse.json(project)
    
  } catch (error) {
    console.log(error)
  }
}

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const body = await req.json();
    const { name, description, img} = body;
    

    if(description !== "" && name !=="" && img !== ""){

     
      const createproject = await prisma.service.create({
          data:{
              name:name,
              img:img,
              description:description,
          },
      })
      return NextResponse.json(createproject)
    }
    return NextResponse.json(body)
    
            
  } catch (error) {
    console.log(error);
  }
};
