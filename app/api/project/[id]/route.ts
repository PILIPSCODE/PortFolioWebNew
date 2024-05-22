import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";
import { technology } from "@/interface";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await req.json();
    const { name, description, img, technology } = body;
    const UpdateProject = await prisma.project.update({
      where: {
        id: params.id,
      },
      data: {
        name,
        description,
        img,
      },
    });

    const DeleteTechnologybyid = await prisma.technolgy.deleteMany({
      where: {
        projectId: UpdateProject.id,
      },
    });

    const UpdateTechnology = await prisma.technolgy.createMany({
      data: technology.map((e: technology) => {
        return {
          link: e.link,
          technology: e.technology,
          projectId: UpdateProject.id,
        };
      }),
    });

    return NextResponse.json(UpdateProject);
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  await prisma.technolgy.deleteMany({
    where: {
      projectId: params.id,
    },
  });
  await prisma.project.delete({
    where: {
      id: params.id,
    },
  });
  
  return NextResponse.json({ msg: "Product Deleted" });
};
