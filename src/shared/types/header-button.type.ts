import type {ReactNode} from "react";
import type {CascadeShortcutsType} from "@/shared/types/shortcuts.type";

export type ButtonHeaderProps = {
    link: CascadeShortcutsType;
    children: ReactNode;
    className?: string;
    getElementByIdAction?: string;
    id?: string;
}