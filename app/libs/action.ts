"use server"
import prisma from "@/app/libs/prismaDb";
import { Services, ServicesWithRelation, Technology } from "@/interface";
import { Blog } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const AddPortfolio = async (body:Services) => {
  try {
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
        data:technology.map((e:string) => {
            return {
              technology:e,
              projectId:createproject.id
            }
        })
      })
      return createproject
    }
            
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
  revalidatePath("/admin/Portfolio");
  redirect("/admin/Portfolio")
};

export const DeletePortfolio = async (id:string) => {

  try {
    
    await prisma.technolgy.deleteMany({
      where: {
        projectId: id,
      },
    });
    await prisma.project.delete({
      where: {
        id: id,
      },
    });
    
    return "succesfuly deleted"
  } catch (error) {
    console.log(error)
  }
  revalidatePath("/");
  revalidatePath("/admin/Portfolio");
  redirect("/admin/Portfolio")
};

export const UpdatePortfolio = async (body:ServicesWithRelation,id:string) => {
  try {

    const { name, description, img, technology, link, github} = body;
    const UpdateProject = await prisma.project.update({
      where: {
        id: id,
      },
      data: {
        name,
        link,
        github,
        description,
        img,
      },
    });

     await prisma.technolgy.deleteMany({
      where: {
        projectId: UpdateProject.id,
      },
    });

    await prisma.technolgy.createMany({
      data: technology.map((e:any) => {
        return {
          technology: e.technology,
          projectId: UpdateProject.id,
        };
      }),
    });

    return UpdateProject;
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
  revalidatePath("/admin/Portfolio");
};


export const AddBlog = async (body:Blog) => {
  try {
    const { Title, description, img} = body;
    

    if(description !== "" && Title !=="" && img !== ""){

     
      const createproject = await prisma.blog.create({
          data:{
              Title,
              img,
              description,
          },
      })
      

      return createproject
    }
    
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/");
  revalidatePath("/admin/Blog");
  redirect("/admin/Blog")
};
