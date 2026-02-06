import type {StaticImageData} from "next/image";

export interface BlogArticleChangingProps {
    name: string;
    content: string;
    image: string[] | StaticImageData[]|File[];
}