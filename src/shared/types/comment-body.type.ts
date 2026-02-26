import type {StaticImageData} from "next/image";

export interface CommentBodyProps {
    id: string;
    name: string;
    rating: number;
    image?: string | StaticImageData;
    comment: string;
}