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
        title: "Sesje indywidualne w plenerze",
        description:
            "portrety, lifestyle, zdjęcia na social media",
        image: (
            <Image
                src={Photo3}
                alt="Sesje indywidualne w plenerze"
                title="Sesje indywidualne w plenerze"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Sesja może odbyć się w studio lub plenerze. Dbamy o światło, kadry, atmosferę i prowadzenie przed obiektywem.",
        metadata:
            "sesja zdjęciowa, profesjonalna fotografia, zdjęcia portretowe, branding",
        rules: ["od 300 zł","Profesjonalny sprzęt", "Swobodna atmosfera"],
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
    {
        id: "photo-service6",
        title: "Komunie",
        description: "Reportaż z uroczystości komunijnej oraz spotkania rodzinnego.",
        image: (
            <Image
                src={Photo5}
                alt="Fotografia komunijna – reportaż"
                title="Fotografia komunijna"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "Reportaż z kościoła oraz przyjęcia rodzinnego, naturalne i emocjonalne kadry.",
        metadata: "fotografia komunijna, reportaż komunijny, zdjęcia rodzinne",
        rules: ["od 800 zł"],
    },

    {
        id: "photo-service7",
        title: "Urodziny i osiemnastki",
        description: "Reportaż z imprezy, zdjęcia grupowe i spontaniczne momenty.",
        image: (
            <Image
                src={Photo5}
                alt="Fotografia urodzinowa – reportaż"
                title="Fotografia urodzinowa"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "Dynamiczny reportaż z wydarzenia, emocje i naturalna atmosfera.",
        metadata: "fotografia urodzinowa, osiemnastki, reportaż z imprezy",
        rules: ["od 700 zł"],
    },

    {
        id: "photo-service8",
        title: "Półmetki",
        description: "Reportaż szkolny oraz zdjęcia uczestników wydarzenia.",
        image: (
            <Image
                src={Photo5}
                alt="Fotografia półmetków"
                title="Półmetki – reportaż fotograficzny"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "Zdjęcia grupowe, portrety oraz reportaż z przebiegu wydarzenia.",
        metadata: "półmetki, fotografia szkolna, reportaż młodzieżowy",
        rules: ["od 900 zł"],
    },
    {
        id: "photo-service9",
        title: "Studniówki",
        description: "Pełny reportaż z wydarzenia studniówkowego.",
        image: (
            <Image
                src={Photo5}
                alt="Fotografia studniówkowa"
                title="Studniówki – reportaż fotograficzny"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "Kompleksowa obsługa fotograficzna: przygotowania, bal, after.",
        metadata: "studniówki, reportaż studniówkowy, fotografia szkolna",
        rules: ["od 1200 zł"],
    },
    {
        id:"photo-service10",
        title:"Poprawiny i imprezy po weselach",
        description:"luźny reportaż rodzinny i znajomych",
        image: (
            <Image
                src={Photo5}
                alt="Edycja i retusz zdjęć"
                title="Profesjonalna edycja zdjęć"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "luźny reportaż rodzinny i znajomych",
        metadata:"luźny reportaż rodzinny i znajomych",
        rules: ["od 700 zł"]
    },
    {
        id:"photo-service11",
        title: "Domówki i prywatne imprezy",
        description:"małe wydarzenia w domu lub wynajętym lokalu",
        image: (
            <Image
                src={Photo5}
                alt="Edycja i retusz zdjęć"
                title="Profesjonalna edycja zdjęć"
                loading="lazy"
                placeholder="blur"
            />
        ),
        metadata:"małe wydarzenia w domu lub wynajętym lokalu",
        details:"małe wydarzenia w domu lub wynajętym lokalu",
        rules:["od 500 zł"]
    },
    {
        id:"photo-service12",
        title: "Eventy młodzieżowe i klubowe",
        description:"wydarzenia tematyczne, imprezy DJ, szkolne eventy\n",
        image: (
            <Image
                src={Photo5}
                alt="Edycja i retusz zdjęć"
                title="Profesjonalna edycja zdjęć"
                loading="lazy"
                placeholder="blur"
            />
        ),
        metadata:"wydarzenia tematyczne, imprezy DJ, szkolne eventy",
        details:"wydarzenia tematyczne, imprezy DJ, szkolne eventy",
        rules:["od 400 zł"]
    },
    {
        id: "photo-service13",
        title: "Chrzciny",
        description: "Reportaż z uroczystości chrztu oraz spotkania rodzinnego.",
        image: (
            <Image
                src={Photo5}
                alt="Fotografia chrztu"
                title="Chrzciny – reportaż fotograficzny"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "Naturalne zdjęcia z ceremonii oraz rodzinnej części wydarzenia.",
        metadata: "fotografia chrztu, reportaż rodzinny, chrzciny",
        rules: ["od 700 zł"],
    },
    {
        id:"photo-service14",
        title: "Wydarzenia szkolne",
        description:"zakończenia roku, bale, imprezy klasowe",
        image: (
            <Image
                src={Photo5}
                alt="Edycja i retusz zdjęć"
                title="Profesjonalna edycja zdjęć"
                loading="lazy"
                placeholder="blur"
            />
        ),
        metadata:"zakończenia roku, bale, imprezy klasowe",
        details:"zakończenia roku, bale, imprezy klasowe",
        rules:["od 600 zł"]
    },
    {
        id: "photo-service15",
        title: "Zdjęcia treningowe i fitness",
        description:
            "sesje na siłowni i content sportowy",
        image: (
            <Image
                src={Photo3}
                alt="Sesje indywidualne w plenerze"
                title="Sesje indywidualne w plenerze"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Sesja może odbyć się w studio lub plenerze. Dbamy o światło, kadry, atmosferę i prowadzenie przed obiektywem.",
        metadata:
            "sesja zdjęciowa, profesjonalna fotografia, zdjęcia portretowe, branding",
        rules: ["od 350 zł","Profesjonalny sprzęt", "Swobodna atmosfera"],
    },
    {
        id: "photo-service16",
        title: "Jubileusze i rocznice",
        description: "Uroczystości rodzinne i spotkania okolicznościowe.",
        image: (
            <Image
                src={Photo5}
                alt="Fotografia jubileuszu rodzinnego"
                title="Jubileusze i rocznice"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details: "Reportaż z wydarzenia z naciskiem na relacje i emocje.",
        metadata: "jubileusz, rocznica, fotografia rodzinna",
        rules: ["od 700 zł"],
    },
] as const;