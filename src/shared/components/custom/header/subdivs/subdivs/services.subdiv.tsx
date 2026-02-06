import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import Link from "next/link";
import type {CascadeShortcutsType} from "@/shared/types/shortcuts.type";
import {shortcuts, shortcutsService} from "@/shared/consts/enums/shortcuts.enum";


const consultation: CascadeShortcutsType = `${shortcuts.services}${shortcutsService.consultation}`;
const mentoring:CascadeShortcutsType =  `${shortcuts.services}${shortcutsService.mentoring}`;
const agreement: CascadeShortcutsType =  `${shortcuts.services}${shortcutsService.agreement}`;
const photoSession: CascadeShortcutsType = `${shortcuts.services}${shortcutsService.photosession}`
const photoEdition: CascadeShortcutsType = `${shortcuts.services}${shortcutsService.photosession}`


const Buttons:{label:string,linkClassName:string,buttons:
        {
            name:string,
            href:CascadeShortcutsType,
        }[]
}[]=[
    {label:"",linkClassName:'text-xl hover:scale-[1.02] duration-300',buttons:[
            {name:"Konsultacja telefoniczna", href:consultation},
            {name:"Mentoring", href:mentoring},
        ]},
    {label:"",linkClassName:'text-lg hover:scale-[1.02] duration-300',buttons:[
            {name:"Profesjonalna Fotosesja", href: photoSession},
            {name:"Podpisanie umowy", href:agreement },
            {name:"Edycja zdjęć", href:photoEdition},

        ]},
]

const ServicesSubdiv = () => {
    return (
        <SubdivConstructor id={"services"}>
            <section className={"grid grid-cols-2 items-start justify-center gap-18"}>
                {Buttons.map((item, i) => (
                    <div className={"grid grid-cols-1"} key={i}>
                        <label className={"text-sm font-light pb-1 text-[rgb(72,72,74)] dark:text-[rgb(134,134,139)]"}>
                            {item.label}
                        </label>

                        {item.buttons.map((button, i) => ((
                            <Link className={item.linkClassName+" hover:text-black text-black/90 dark:text-white/90 dark:hover:text-white font-medium"} href={button.href} key={i}>
                                {button.name}
                            </Link>
                        )))}
                    </div>
                ))}
            </section>
        </SubdivConstructor>
    );
};

export default ServicesSubdiv;