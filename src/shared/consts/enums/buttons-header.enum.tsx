import type {ButtonHeaderProps} from "@/shared/types/header-button.type";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import Image from "next/image";

const bisnesLogo = "/assets/logo.jpg";

export const SUBDIV = "-subdiv"

export const BUTTONS: ButtonHeaderProps[] = [
    {
        link:shortcuts.home,
        children:<Image src={bisnesLogo} alt={"Jewul-Fotografie"} height={150} width={250} />,
        id:shortcuts.home.slice(1),
    },
    {
        link:shortcuts.services,
        children:"Usługi",
        id: shortcuts.services.slice(1),
        getElementByIdAction: shortcuts.services.slice(1) + SUBDIV
    },
    {
        link:shortcuts.works,
        children:"Przykłady prac",
        id: shortcuts.works.slice(1),
        getElementByIdAction: shortcuts.works.slice(1) + SUBDIV
    },
    {
        link:shortcuts.reviews,
        children:"Recenzje",
        id:shortcuts.reviews.slice(1),
        getElementByIdAction:shortcuts.reviews.slice(1) + SUBDIV
    },
    {
        link:shortcuts.about,
        children:"O mnie",
        id:shortcuts.about.slice(1),
        getElementByIdAction: shortcuts.about.slice(1) + SUBDIV
    },
    {
        link:shortcuts.contact,
        children:"Kontakt",
        id:shortcuts.contact.slice(1),
        getElementByIdAction: shortcuts.contact.slice(1) + SUBDIV
    },


] as const;