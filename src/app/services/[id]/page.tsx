import ServicesSidebar from "@/shared/pages/services/sidebar.services";
import {ServicesData} from "@/shared/pages/services/data.services";
import ServicesPage from "@/app/services/page";
import {ArrowLeft} from "lucide-react";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import Link from "next/link";
import NotFound from "@/app/not-found";

export const dynamic = "force-static";

interface PageProps {
    params: Promise<{ id: string }>;
}

async function Page({ params }: PageProps) {
    const { id } = await params;

    const decodedId = decodeURIComponent(id);

    if(!decodedId) return <ServicesPage/>

    const currentService = ServicesData.find(
        (serv) => serv.id === decodedId
    );

    if (!currentService) return <NotFound/>

    return (
        <article className="flex bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(22,22,23,0.8)] dark:text-white min-h-screen">
            <nav className={"hidden md:flex md:fixed md:inset-y-0 md:left-0 md:w-60 flex-col"}>
                <ServicesSidebar />
            </nav>

            <section className="ml-0 md:ml-60 w-full grid p-6 md:p-10">
                {currentService ? (
                    <article className="max-w-full md:max-w-3xl mx-auto space-y-8 md:space-y-10">
                        {/* Title and description */}
                        <header className="border-b border-white/10 pb-6">
                            <section className="flex md:hidden">
                                <Link className={"flex text-4xl"} href={shortcuts.services}><ArrowLeft size={40}/> Wróć</Link>
                            </section>
                            <h1 className="text-2xl sm:text-4xl pt-5 md:pt-0 font-bold mb-2 tracking-tight text-black dark:text-white">
                                {currentService.title}
                            </h1>
                            <p className="dark:text-gray-300 text-gray-800 leading-relaxed text-sm sm:text-base">
                                {currentService.details}
                            </p>
                        </header>

                        {/* Service Details */}
                        <section>
                            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-purple-400">
                                O usłudze:
                            </h2>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                                {currentService.description}
                            </div>
                        </section>

                        {/* Photo and meta */}
                        <section
                            className="
    relative grid w-full h-40 sm:h-[60vh] overflow-hidden rounded-2xl
    shadow-lg ring-1 ring-black/10 dark:ring-white/10
    transition-all duration-500 ease-out
    hover:shadow-xl hover:scale-[1.01]
    bg-gradient-to-b from-white/70 to-white/40 dark:from-black/60 dark:to-black/40
  "
                        >
                            <h2 className="sr-only">{currentService.metadata}</h2>

                            <div
                                className="
      relative w-full h-full grid place-items-center overflow-hidden
      rounded-2xl
    "
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                                <div className="w-full h-full flex justify-center items-center">
                                    {currentService.image}
                                </div>
                            </div>
                        </section>

                        {/* Rules */}
                        {currentService.rules?.length > 0 && (
                            <section
                                aria-labelledby="offer-rules"
                                className="
      relative overflow-hidden
      border-l-4 border-purple-500
      rounded-r-xl
      bg-gradient-to-r from-purple-50/80 to-white/60
      dark:from-purple-900/30 dark:to-purple-800/10
      p-4 md:p-6
      shadow-md hover:shadow-lg
      transition-all duration-300
    "
                            >
                                {/* декоративный акцент */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

                                <h2
                                    id="offer-rules"
                                    className="
        text-lg sm:text-xl font-semibold mb-3 md:mb-4
        text-purple-600 dark:text-purple-300
        tracking-tight
      "
                                >
                                    Zasady oferty
                                </h2>

                                <ul
                                    className="
        list-disc list-inside
        text-gray-800 dark:text-gray-100
        leading-relaxed space-y-1 md:space-y-2
        max-w-prose
      "
                                >
                                    {currentService.rules.map((rule, i) => (
                                        <li key={i} className="pl-1 text-sm sm:text-base">
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </article>
                ) : (
                    <ServicesPage/>
                )}
            </section>
        </article>
    );
}

export default Page;