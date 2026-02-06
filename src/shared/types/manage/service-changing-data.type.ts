import {StaticImageData} from "next/image";

export type ServiceChangingProps = {
    name: string;
    about: string;
    description: string;
    rules: string[];
    image:File | string | StaticImageData,
}