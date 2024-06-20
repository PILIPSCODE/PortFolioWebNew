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



// import { NextResponse } from "next/server";
// import prisma from "@/app/libs/prismaDb";
// import { Service } from "@prisma/client";


// export const POST = async (body:Service) => {
//   try {
//     const { title, } = body;
    

//     if(description !== "" && name !=="" && img !== ""){

     
//       const createproject = await prisma.service.create({
//           data:{
//               title:title,
              
//           },
//       })
//       return NextResponse.json(createproject)
//     }
//     return NextResponse.json(body)
    
            
//   } catch (error) {
//     console.log(error);
//   }
// };

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
