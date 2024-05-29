import prisma from "@/app/libs/prismaDb";

export default async function GetProject() {
  try {
    const variants = await prisma.project.findMany({
      include:{
        technology:true
      }
    });

    return variants;
  } catch (error) {
    return null;
  }
}
