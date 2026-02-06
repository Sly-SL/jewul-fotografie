import type {ReactNode} from "react";

export interface FireplaceProps {
    id: string;
    name: string,
    producent: string,
    image?: {
        kind: "node";
        content: ReactNode;
    } | {
        kind: "gallery";
        images: string[];
    };
    description: string,
    price: number,
    detailData?:{
        kindOfHeating:string;
        kindOfFuel:string[];
        realisationTime: string,
        examples: string[],
    }
}