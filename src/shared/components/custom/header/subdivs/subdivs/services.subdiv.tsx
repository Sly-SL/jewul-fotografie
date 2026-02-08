import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import Link from "next/link";
import type {CascadeShortcutsType} from "@/shared/types/shortcuts.type";
import {shortcuts, shortcutsService} from "@/shared/consts/enums/shortcuts.enum";


const consultation: CascadeShortcutsType = `${shortcuts.services}${shortcutsService.consultation}`;
const mentoring:CascadeShortcutsType =  `${shortcuts.services}${shortcutsService.mentoring}`;
const agreement: CascadeShortcutsType =  `${shortcuts.services}${shortcutsService.agreement}`;
const club: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["teanagers-events-and-clubs"]}`
const photoEdition: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["photo-edition"]}`
const individualSession: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["individual-session"]}`
const home: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["home-and-close-parties"]}`
const school: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["school-events"]}`
const fit: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["gym-sessions"]}`
const jubilees: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["jubilees-and-anniversaries"]}`
const birthdays: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["birthdays-and-eightings"]}`
const halfways: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["halfways"]}`
const afterparty: CascadeShortcutsType = `${shortcuts.services}${shortcutsService["wedding-afterpaty-and-parties"]}`
const christening: CascadeShortcutsType = `${shortcuts.services}${shortcutsService.christening}`

const Buttons:{label:string,linkClassName:string,buttons:
        {
            name:string,
            href:CascadeShortcutsType,
        }[]
}[]=[
    {label:"",linkClassName:'text-2xl hover:scale-[1.02] duration-300',buttons:[
            {name:"Konsultacja telefoniczna", href:consultation},
            {name:"Urodziny i osiemnastki", href:birthdays},
            {name:"Półmetki", href:halfways},
            {name:"Chrzciny", href:christening},
            {name:"Poprawiny i imprezy po weselach", href:afterparty},
        ]},
    {label:"",linkClassName:'text-lg hover:scale-[1.02] duration-300',buttons:[
            {name:"Mentoring Fotograficzny", href:mentoring},
            {name:"Eventy młodzieżowe i klubowe", href:club},
            {name:"Sesje indywidualne w plenerze", href: individualSession},
            {name:"Podpisanie umowy", href:agreement },
            {name:"Edycja i Retusz Zdjęć", href:photoEdition},
        ]},
    {label:"",linkClassName:'text-md hover:scale-[1.02] duration-300',buttons:[
            {name:"Domówki i prywatne imprezy", href:home},
            {name:"Wydarzenia szkolne", href:school},
            {name:"Zdjęcia treningowe i fitness", href:fit},
            {name:"Jubileusze i rocznice", href: jubilees}
        ]}
]

const ServicesSubdiv = () => {
    return (
        <SubdivConstructor id={"services"}>
            <section className={"grid grid-cols-3 items-start justify-center gap-18"}>
                {Buttons.map((item, i) => (
                    <div className={"grid grid-cols-1 gap-1"} key={i}>
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