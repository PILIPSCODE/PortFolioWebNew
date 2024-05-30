import prisma from "@/app/libs/prismaDb";

export const GetProject = async() => {
  try {
    const Project = await prisma.project.findMany({
      include:{
        technology:true
      }
    });

    return Project;
  } catch (error) {
    throw new Error("Failed to fetch contact data");
  }
}

export const  GetService = async() => {
    try {
      const Service = await prisma.service.findMany();
  
      return Service;
    } catch (error) {
        throw new Error("Failed to fetch contact data");
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
        throw new Error("Failed to fetch contact data");
    }
  }
  