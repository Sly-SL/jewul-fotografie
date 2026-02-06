import type {ReactElement} from "react";
import Image from "next/image";

import Install1 from "@/public/assets/services/install1.webp";
import Install2 from "@/public/assets/services/install2.webp";
import Install3 from "@/public/assets/services/install3.webp";
import Install4 from "@/public/assets/services/install4.webp";
import Install5 from "@/public/assets/services/install5.webp";
import Install6 from "@/public/assets/services/install6.webp";
import Install7 from "@/public/assets/services/install7.webp";
import Install8 from "@/public/assets/services/install8.webp";

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
        id:"default-service1",
        title: "Konsultacja Telefoniczna – Doradztwo Kominkowe",
        description:
            "Skontaktuj się z naszym ekspertem, aby omówić potrzeby dotyczące montażu i projektu kominka. Oferujemy fachowe doradztwo przed realizacją.",
        image: (
            <Image
                src={Install1}
                alt="Konsultacja telefoniczna z ekspertem kominkowym"
                title="Konsultacja telefoniczna – doradztwo przed montażem kominka"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Podczas konsultacji omawiamy Twoje oczekiwania, styl wnętrza i wymagania techniczne. Na tej podstawie dobieramy idealne rozwiązanie kominkowe.",
        metadata:
            "konsultacja kominkowa, doradztwo montaż kominka, ekspert kominki, projekt kominka, plan instalacji kominka",
        rules: ["Darmowa konsultacja telefoniczna", "Pomoc w doborze modelu kominka"],
    },
    {
        id:"default-service2",
        title: "Pomiary i Analiza Techniczna",
        description:
            "Nasz wykwalifikowany specjalista odwiedzi Twój dom, aby wykonać dokładne pomiary przestrzeni i przewodu kominowego.",
        image: (
            <Image
                src={Install2}
                alt="Pomiary kominka i przestrzeni montażowej"
                title="Pomiary techniczne przed montażem kominka"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Precyzyjne pomiary gwarantują bezpieczeństwo i wydajność instalacji kominkowej. Analizujemy także konstrukcję budynku i warunki ciągu kominowego.",
        metadata:
            "pomiary kominka, instalacja kominkowa, przygotowanie montażu, pomiar przewodu kominowego",
        rules: ["Dokładne pomiary", "Sprawdzenie bezpieczeństwa instalacji"],
    },
    {
        id:"default-service3",
        title: "Podpisanie Umowy i Gwarancja",
        description:
            "Zadbamy o pełną ochronę prawną i gwarancję satysfakcji. Każda instalacja jest objęta pisemną umową i gwarancją producenta.",
        image: (
            <Image
                src={Install3}
                alt="Podpisanie umowy i gwarancja montażu kominka"
                title="Umowa i gwarancja kominka – pełna ochrona klienta"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Transparentne warunki, pełna ochrona prawna i gwarancja na wszystkie wykonane prace oraz zastosowane materiały.",
        metadata:
            "umowa montaż kominka, gwarancja kominek, bezpieczeństwo klienta, ochrona prawna",
        rules: ["Pisemna umowa", "Pełna gwarancja producenta i wykonawcy"],
    },
    {
        id:"default-service4",
        title: "Prace Montażowe Komina",
        description:
            "Zespół techników wykonuje profesjonalny montaż systemu kominowego zgodnie z obowiązującymi normami i przepisami.",
        image: (
            <Image
                src={Install4}
                alt="Montaż komina przez specjalistów"
                title="Profesjonalny montaż komina i systemu odprowadzania spalin"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Korzystamy wyłącznie z certyfikowanych materiałów. Każdy etap jest dokładnie weryfikowany przez kierownika projektu.",
        metadata:
            "montaż komina, system kominowy, bezpieczna instalacja kominka, prace techniczne komin",
        rules: ["Bezpieczny montaż", "Certyfikowane materiały"],
    },
    {
        id:"default-service5",
        title: "Instalacja Wkładu Kominkowego",
        description:
            "Montujemy wybrany przez Państwa wkład kominkowy i podłączamy go do systemu kominowego z zachowaniem wszystkich norm bezpieczeństwa.",
        image: (
            <Image
                src={Install5}
                alt="Montaż wkładu kominkowego w domu"
                title="Instalacja wkładu kominkowego – profesjonalny montaż"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Dopasowujemy wkład kominkowy do architektury wnętrza i wymagań technicznych. Zapewniamy szczelność i optymalny ciąg spalin.",
        metadata:
            "montaż wkładu kominkowego, podłączenie kominka, instalacja paleniska, szczelność kominka",
        rules: ["Profesjonalny montaż", "Dostosowanie do projektu wnętrza"],
    },
    {
        id:"default-service6",
        title: "Rozprowadzenie Ciepła w Domu",
        description:
            "Instalujemy system rozprowadzania ciepła z kominka po całym domu – gwarancja komfortu i efektywności energetycznej.",
        image: (
            <Image
                src={Install6}
                alt="System rozprowadzania ciepła z kominka w domu"
                title="Rozprowadzenie ciepła z kominka w domu – DGP"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Dzięki technologii DGP (Dystrybucja Gorącego Powietrza) ciepło z kominka rozprowadzane jest równomiernie do każdego pomieszczenia.",
        metadata:
            "rozprowadzenie ciepła kominek, DGP system, ogrzewanie domu kominkiem, dystrybucja gorącego powietrza",
        rules: ["Efektywna dystrybucja ciepła", "System DGP"],
    },
    {
        id:"default-service7",
        title: "Montaż Obudowy Kominkowej",
        description:
            "Wykonujemy obudowę kominka z wykorzystaniem technologicznych płyt izolacyjnych i wysokotemperaturowych klejów.",
        image: (
            <Image
                src={Install7}
                alt="Montaż nowoczesnej obudowy kominka"
                title="Obudowa kominka – nowoczesne technologie montażu"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Obudowy wykonujemy z precyzją, gwarantując estetykę i bezpieczeństwo użytkowania. Możliwość wykończenia betonem architektonicznym lub kamieniem.",
        metadata:
            "obudowa kominka, montaż obudowy, izolacja kominka, nowoczesny kominek, płyty izolacyjne",
        rules: ["Bezpieczne materiały", "Estetyczne wykończenie"],
    },
    {
        id:"default-service8",
        title: "Wykończenie Kominka i Odbiór Końcowy",
        description:
            "Ostatni etap to perfekcyjne wykończenie kominka – tynkowanie, malowanie, montaż ozdobnych elementów i odbiór techniczny.",
        image: (
            <Image
                src={Install8}
                alt="Wykończenie kominka i odbiór techniczny"
                title="Wykończenie kominka – etap końcowy instalacji"
                loading="lazy"
                placeholder="blur"
            />
        ),
        details:
            "Zapewniamy kompleksowe wykończenie zgodne z projektem i preferencjami klienta. Po zakończeniu wykonujemy odbiór techniczny i test ciągu kominowego.",
        metadata:
            "wykończenie kominka, odbiór techniczny kominka, malowanie obudowy kominka, montaż ozdób",
        rules: ["Perfekcyjne wykończenie", "Odbiór techniczny po montażu"],
    },
];