import type {ReactElement} from "react";
import {cloneElement, isValidElement} from "react";
import {ServicesData} from "@/shared/pages/services/data.services";
import ServicesSidebar from "@/shared/pages/services/sidebar.services";
import Link from "next/link";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";

export const dynamic = "force-static";

const ServicesPage = () => {
    return (
        <div className="flex dark:text-white text-black min-h-screen">
            <aside className={"hidden md:flex md:fixed md:inset-y-0 scroll-y-auto md:left-0 md:w-60 flex-col"}>
                <ServicesSidebar />
            </aside>

            <article className="ml-0 md:ml-60 w-full p-6 md:p-10 pt-8">
                <section className="max-w-full md:max-w-4xl mx-auto space-y-8 md:space-y-12">
                    {/* Header */}
                    <header className="border-b border-white/40 dark:border-white/10 pb-6">
                        <h1 className="text-3xl sm:text-5xl font-bold mb-3 tracking-tight">Usługi</h1>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                            <strong>Uwaga:</strong> ceny mogą się różnić w zależności od regionu.
                        </p>
                    </header>

                    {/* Services */}
                    {ServicesData.map((service, i) => (
                        <section
                            key={i}
                            itemScope
                            itemType="https://schema.org/Service"
                            className="relative rounded-2xl overflow-hidden transition-all duration-500 group
             bg-white/10 dark:bg-black/10 hover:scale-102 dark:shadow-sm hover:dark:shadow-5xl backdrop-blur-md"
                        >
                            <meta itemProp="name" content={service.title}/>
                            <meta itemProp="description" content={service.description}/>
                            <meta itemProp="offers" itemScope itemType="https://schema.org/Offer"/>
                            <meta itemProp="price" content={service.rules.join(", ")}/>

                            {/* Background image */}
                            <Link href={shortcuts.services + "/" + service.id}>
                                <div className="absolute inset-0 -z-10">
                                    {isValidElement(service.image)
                                        ? cloneElement(service.image as ReactElement<{fill?:boolean,className?:string}>, {
                                            className:
                                                "object-cover w-full h-full dark:opacity-90 dark:group-hover:opacity-100 transition-all duration-500",
                                        })
                                        : service.image}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"/>
                                </div>

                                {/* Content */}
                                <div className="relative p-8 flex flex-col justify-end h-60 sm:h-72 text-white ">
                                    <h2 itemProp="name" className="text-2xl  sm:text-3xl font-semibold mb-2 drop-shadow-lg">
                                        {service.title}
                                    </h2>
                                    <p itemProp="description" className="hidden md:grid text-sm text-gray-100 max-w-md">
                                        {service.description || "Profesjonalna usługa dostosowana do Twoich potrzeb."}
                                    </p>
                                    {service.rules && (
                                        <p className="mt-3 text-lg font-semibold text-purple-400" itemProp="offers" itemScope
                                           itemType="https://schema.org/Offer">
                                        <span itemProp="price">{service.rules.map((rule, i) => (
                                            <span key={i}>{rule} </span>
                                        ))}</span>
                                        </p>
                                    )}
                                </div>
                            </Link>
                        </section>
                    ))}
                </section>
            </article>
        </div>
    )
        ;
};

export default ServicesPage;