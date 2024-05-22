import prisma from "@/app/libs/prismaDb";

export default async function GetProject() {
  try {
    const variants = await prisma.project.findMany();

    return variants;
  } catch (error) {
    return null;
  }
}
