'use server'

import type {CommentBodyProps} from "@/shared/types/comment-body.type";
import {addDataWithCustomId} from "@/lib/firebase/firebase";
import {randomUUID} from "node:crypto";
import {NextResponse} from "next/server";

export async function AddReviewAction(data:Omit<CommentBodyProps, "id">){
    if(!data.name || !data.comment){
        return new NextResponse("Not a valid data", {status: 400});
    }
    await addDataWithCustomId("review", randomUUID(),{
        "name":data.name,
        "comment":data.comment,
        "image":data.image,
        "rating": data.rating,
    })
}