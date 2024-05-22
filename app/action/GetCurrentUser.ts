import getSS from "./GetSession";
import prisma from "@/app/libs/prismaDb";

export default async function GetCurrentUser() {
  try {
    const sesions = await getSS();
    if(sesions === null) return null
 
    const userCurrent = await prisma.user.findFirst({
      where: {
        email: sesions?.user?.email,
      },

    });
   
    return userCurrent;
  } catch (error) {
    console.log(error)
  }
}
