export const dynamic = "force-static"

import type {ComponentType, FC, ReactNode, SVGProps} from "react"
import {ArrowUpRight, Globe, House, Mail, Phone} from "lucide-react"
import Link from "next/link";

const Buttons: {
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


export const GoogleMaps: FC = () => {
    return (
        <Link href={"https://maps.app.goo.gl/ccjCT7E7AquW8ZKn7"} className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
            <div className="relative group">
                <div className="absolute -inset-6 opacity-50 z-0 hidden sm:block animate-pulse">
                    <div className="absolute inset-0 bg-gray-600 rounded-full blur-2xl" />
                </div>

                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-sm">
                    <div className="absolute inset-0 border-2 border-white/20 rounded-full z-20" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />

                    <div className="w-full h-full rounded-full">
                        <iframe
                            title="Mapa lokalizacji"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164166.28180925737!2d20.759752197624163!3d49.99076922218058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602f55871f414b73%3A0x984fdd2d68c54659!2sFilip%20Jewulski%20Fotografia%20%7C%20Tarn%C3%B3w!5e0!3m2!1sen!2spl!4v1770409789612!5m2!1sen!2spl"
                            width="100%"
                            height="100%"
                            className="rounded-full border-0 transform transition-transform duration-500 ease-out pointer-events-auto group-hover:scale-110 group-hover:translate-x-1 group-hover:translate-y-1"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>

                    <div className="absolute inset-0 rounded-full border-4 border-white/10 z-20"/>
                </div>
            </div>
        </Link>
    );
};

interface StatCardProps {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    color: string;
    value: string | number;
    label: string;
    description: string;
}

const StatCard = ({icon: Icon, color, value, label, description}: StatCardProps) => {
    return (
        <div
            className="relative group"
        >
            <div className={`relative z-10 dark:bg-gray-900/40 bg-gray-200 backdrop-blur rounded-xl p-4 border border-white/10 h-full flex flex-col justify-between overflow-hidden`}>
                <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

                <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center dark:bg-white/10 bg-white/90">
                        <Icon className="w-6 h-6 dark:text-white text-black" />
                    </div>
                    <span
                        className="text-xl font-bold dark:text-white text-black"
                    >
                        {value}
                    </span>
                </div>

                <div>
                    <p className="text-xs font-bold uppercase dark:text-gray-300 text-gray-800 mb-1">{label}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-xs dark:text-gray-300 text-gray-800">{description}</p>
                        <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </div>
    )
};

const AboutPage = () => {

    const startDate = new Date("2021-05-12");
    const today = new Date();
    const YearExperience =
        today.getFullYear() - startDate.getFullYear() -
        (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);


    function getYearWord(n:number) {
        if (n === 1) return "rok";

        const lastDigit = n % 10;
        const lastTwoDigits = n % 100;

        if (
            lastDigit >= 2 &&
            lastDigit <= 4 &&
            !(lastTwoDigits >= 12 && lastTwoDigits <= 14)
        ) {
            return "lata";
        }

        return "lat";
    }

    const value = `${YearExperience} ${getYearWord(YearExperience)}`;

    const statsData = [
        {
            icon: Globe,
            color: "from-white/20 to-gray-200/20",
            value: value,
            label: "Jestem na rynku",
            description: "Ciągle zmieniamy się dla was!",
        },
    ];

    return (
        <section
            className="h-auto pb-[10%] text-white overflow-hidden sm:px-[5%] mt-10 sm-mt-0"
            id="About"
        >
            <div className="grid lg:grid-cols-2 gap-8 justify-center items-center">
                <div>
                    <GoogleMaps />
                </div>


                <div className={"grid grid-rows-2 items-center"}>
                    <div>
                        <h1 className={"font-bold text-2xl pt-5 text-black dark:text-white"}>Filip Jewulski Fotografie</h1>

                        <div
                            className="grid grid-cols-1 pt-8 grid-rows-1 gap-3 cursor-pointer"
                        >
                            {statsData.map((stat) => (
                                <StatCard key={stat.label} {...stat} />
                            ))}
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 items-start justify-center"}>
                        {Buttons.map((item, i) => (
                            <div className={"grid grid-cols-1 pt-2 border-t dark:border-amber-50 border-amber-900"} key={i}>
                                <label className={"font-bold dark:text-white/80 text-black/80 pb-1 px-1 text-3xl "}>
                                    {item.label}
                                </label>

                                {item.buttons.map((button, i) => ((
                                    <div key={i} className={item.linkClassName}>
                                        {button.element}
                                    </div>
                                )))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;