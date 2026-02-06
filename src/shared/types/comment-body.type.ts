import type {StaticImageData} from "next/image";

export interface CommentBodyProps {
    name: string;
    rating: number;
    image?: string | StaticImageData;
    comment: string;
    ordersIds?: string[];
}