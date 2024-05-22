import prisma from "@/app/libs/prismaDb";

export default async function GetService() {
  try {
    const variants = await prisma.service.findMany();

    return variants;
  } catch (error) {
    return null;
  }
}
