'use server'

import {getSessionQuery} from "@/lib/firebase/get-session.query";
import {NextResponse} from "next/server";
import {getFilteredUsers} from "@/lib/firebase/get-user.query";
import {cookies} from "next/headers";
import {CONSTANTS} from "@/shared/consts/consts.consts";
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

export async function UploadImageAction(imageFile: File | null) {
    if (!imageFile) return null;

    if (!imageFile.type.startsWith('image/')) {
        console.error('file is not image');
        return null;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
        const response = await fetch(
            `https://api.imgbb.com/1/upload?key=${CONSTANTS.IMAGEBB_API_KEY}`,
            {
                method: 'POST',
                body: formData,
            }
        );

        const data = await response.json();

        if (data?.success) {
            const url = data.data.url;

            await addDataWithCustomId("photo", randomUUID(), { image: url });

            return url;
        }

        console.error('Error during uploading on ImgBB:', data?.error);
        return null;

    } catch (error) {
        console.error('Error during uploading on ImgBB:', error);
        return null;
    }
}