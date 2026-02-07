import type {ReactElement} from "react";
import Image from "next/image";

import Photo1 from "@/public/assets/services/photo1.webp";
import Photo2 from "@/public/assets/services/photo2.jpg";
import Photo3 from "@/public/assets/services/photo3.jpg";
import Photo4 from "@/public/assets/services/photo4.webp";
import Photo5 from "@/public/assets/services/photo5.jpeg";

export interface ServicesDataInterface {
    id: string;
    title: string;
    description: string;
    image: ReactElement;
    details: string;
    metadata: string;
    rules: string[];
    price?: number;
}

export const ServicesData: ServicesDataInterface[] = [
    {
        id: "photo-service1",
        title: "Konsultacja Telefoniczna",
        description:
            "Indywidualna rozmowa, podczas której omawiamy Twoje potrzeby, cel sesji oraz wizję końcowego efektu.",
        image: (
            <Image
                src={Photo1}
                alt="Konsultacja telefoniczna z fotografem"
                title="Konsultacja telefoniczna – fotografia"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Podczas konsultacji ustalamy styl zdjęć, przeznaczenie materiału (social media, branding, portfolio) oraz zakres współpracy.",
        metadata:
            "konsultacja fotograficzna, rozmowa z fotografem, planowanie sesji zdjęciowej",
        rules: ["Indywidualne podejście", "Bez zobowiązań"],
    },
    {
        id: "photo-service2",
        title: "Mentoring Fotograficzny",
        description:
            "Sesja mentoringowa dla osób, które chcą rozwinąć swoje umiejętności fotograficzne lub świadomie zbudować wizerunek.",
        image: (
            <Image
                src={Photo2}
                alt="Mentoring fotograficzny"
                title="Mentoring fotograficzny 1:1"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Analiza Twoich zdjęć, omówienie stylu, pracy ze światłem, pozowania oraz budowania spójnej estetyki.",
        metadata:
            "mentoring fotograficzny, nauka fotografii, rozwój fotografa",
        rules: ["Praca 1:1", "Praktyczne wskazówki"],
    },
    {
        id: "photo-service3",
        title: "Profesjonalna Sesja Zdjęciowa",
        description:
            "Kompleksowa realizacja sesji zdjęciowej dopasowanej do Twojego wizerunku i celu.",
        image: (
            <Image
                src={Photo3}
                alt="Profesjonalna sesja zdjęciowa"
                title="Profesjonalna sesja zdjęciowa"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Sesja może odbyć się w studio lub plenerze. Dbamy o światło, kadry, atmosferę i prowadzenie przed obiektywem.",
        metadata:
            "sesja zdjęciowa, profesjonalna fotografia, zdjęcia portretowe, branding",
        rules: ["Profesjonalny sprzęt", "Swobodna atmosfera"],
    },
    {
        id: "photo-service4",
        title: "Podpisanie Umowy",
        description:
            "Transparentne warunki współpracy i jasne zasady wykorzystania zdjęć.",
        image: (
            <Image
                src={Photo4}
                alt="Podpisanie umowy fotograficznej"
                title="Umowa fotograficzna"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Umowa obejmuje zakres sesji, prawa autorskie, terminy realizacji oraz sposób przekazania materiałów.",
        metadata:
            "umowa fotograficzna, prawa autorskie, współpraca z fotografem",
        rules: ["Jasne warunki", "Pełne bezpieczeństwo prawne"],
    },
    {
        id: "photo-service5",
        title: "Edycja i Retusz Zdjęć",
        description:
            "Staranna selekcja oraz profesjonalna obróbka zdjęć zgodna z ustaloną estetyką.",
        image: (
            <Image
                src={Photo5}
                alt="Edycja i retusz zdjęć"
                title="Profesjonalna edycja zdjęć"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Korekta kolorów, światła, retusz skóry oraz finalne przygotowanie zdjęć do publikacji.",
        metadata:
            "edycja zdjęć, retusz fotograficzny, obróbka zdjęć",
        rules: ["Naturalny efekt", "Wysoka jakość finalna"],
    },
] as const;