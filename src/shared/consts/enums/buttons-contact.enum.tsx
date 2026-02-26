import type {ReactNode} from "react";
import {House, Mail, Phone} from "lucide-react";
import Link from "next/link";

export const ButtonsContactEnum: {
    label: string,
    linkClassName: string,
    buttons: {
        element: ReactNode,
    }[]
}[] = [
    {
        label: "Kontakt",
        linkClassName: "inline-flex items-center dark:text-white/80 text-black/80 gap-2 text-base  hover:scale-[1.02] duration-300 sm:text-lg",
        buttons: [
            { element: <a href={"tel:+48 796 032 801"} className="inline-flex items-center gap-2"><Phone /> {"+48 796 032 801"}</a> },
            { element: <a className="inline-flex items-center gap-2" href="mailto:jewulskifotografia@gmail.com"><Mail /> jewulskifotografia@gmail.com</a> },
            { element: <Link href={"https://maps.app.goo.gl/ccjCT7E7AquW8ZKn7"} className="inline-flex items-center gap-2"><House /> 33-100 Tarnów</Link> }
        ]
    }
]