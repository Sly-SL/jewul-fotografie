import Link from "next/link";
import {ServicesData} from "@/shared/pages/services/data.services";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";

const ServicesSidebar = () => {
    return (
        <aside className="absolute left-0 pt-25 h-full w-60 bg-white/90 text-black border-purple-200/95   dark:bg-[rgba(22,22,23,0.8)] border-r overflow-y-auto dark:border-white/20 dark:text-white flex flex-col p-4 gap-2">
            <Link
                href={shortcuts.services}
                className="font-semibold border-b-3 border-purple-500 text-lg mb-3 hover:text-purple-300 transition-colors"
            >
                Nasze usługi
            </Link>

            {ServicesData.map((service) => (
                <Link
                    key={service.title}
                    href={`${shortcuts.services}/${service.id}`}
                    className="border-b border-white/20 py-2 hover:text-purple-300 transition-colors"
                >
                    {service.title}
                </Link>
            ))}
        </aside>
    );
};

export default ServicesSidebar;