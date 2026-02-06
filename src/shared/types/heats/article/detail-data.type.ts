import type {ReactNode} from "react";

export interface DetailDataProps {
    icon?: string | ReactNode;
    label: string;
    value: string | number | string[];
}