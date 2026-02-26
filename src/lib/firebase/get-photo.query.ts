'use server'

import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";
import type {PhotoType} from "@/shared/types/photo.type";

export async function getPhotoQuery(): Promise<PhotoType[]> {
    const ref = collection(db, "photo");
    const snap = await getDocs(ref);

    if (snap.empty) return [];

    return snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<PhotoType, "id">),
    }));
}