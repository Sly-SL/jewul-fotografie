'use server'

import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase/firebase";

export type Photo = {
    id: string;
    image: string;
};

export async function getPhotoQuery(): Promise<Photo[]> {
    const ref = collection(db, "photo");
    const snap = await getDocs(ref);

    if (snap.empty) return [];

    return snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Photo, "id">),
    }));
}