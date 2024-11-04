import {prisma} from "@/app/libs/prismaDb";
import { Project } from "@prisma/client";

export async function GetProject ():Promise<Project[]> {
    const Project = await prisma.project.findMany({
      include:{
        technology:true
      }
    });

    return Project;
}

export const  GetService = async() => {
    try {
      const Service = await prisma.service.findMany();
  
      return Service;
    } catch (error) {
        throw new Error("Failed to fetch service data");
    }
  }
  
  export const GetBlog = async() => {
    try {
      const variants = await prisma.project.findMany({
        include:{
          technology:true
        }
      });
  
      return variants;
    } catch (error) {
        throw new Error("Failed to fetch blog data");
    }
  }
  