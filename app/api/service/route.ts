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
