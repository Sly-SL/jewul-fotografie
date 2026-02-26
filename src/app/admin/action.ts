'use server'

import {getSessionQuery} from "@/lib/firebase/get-session.query";
import {NextResponse} from "next/server";
import {getFilteredUsers} from "@/lib/firebase/get-user.query";
import {cookies} from "next/headers";
import {addDataWithCustomId} from "@/lib/firebase/firebase";
import {randomUUID} from "node:crypto";

export async function AdminAction() {
    const cookiesStore = await cookies();
    const sessionId = cookiesStore.get("session")?.value;

    if(!sessionId) {
        return new NextResponse( "No such session", {status:404});
    }
    console.log(sessionId);

    const session = await getSessionQuery(sessionId);

    if(!session || !session.success) {
        return new NextResponse( "No such session", {status:404});
    }

    const users = await getFilteredUsers("id", session.data.userId);

    console.log(users);

    if (!users.length) {
        return new NextResponse("User not found", { status: 404 });
    }

    const userData=users[0];
    console.log(userData);

    if (!userData.admin) {
        return new NextResponse("Forbidden", { status: 403 });
    }

    return new NextResponse("Successfully logged in", {status:200})
}

export async function AddWorkAction(url:string) {
    const res = await AdminAction()
    if(res.status === 200){
        await addDataWithCustomId("photo",randomUUID(),{"image":url})
    }
}