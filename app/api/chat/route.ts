import { NextResponse } from "next/server";
import {prisma} from "@/app/libs/prismaDb";
import { pusherServer } from "@/app/libs/pusher"




export const POST = async (req:Request) => {
    const {message,user,project} = await req.json()
    const newMessage = await prisma.chat.create({
        data:{
            message,
            userId:user.id,
            projectId:project.id
        }
    })
    pusherServer.trigger("chatAll", "new-message", { message: newMessage });
    return NextResponse.json(newMessage);
}
