import {type FireplaceProps} from "@/shared/types/heats/fireplace/fireplace.type";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";
import {BasicH2} from "@/shared/components/lib/basic/text/h2.text";
import TypingText from "@/shared/components/custom/typing-text.custom";
import Image from "next/image";
import KindOfFuel from "@/public/assets/fireplaces/kind-of-fuels.webp"
import KindOfHitting from "@/public/assets/fireplaces/kind-of-hitting.webp"
import RealizationTime from "@/public/assets/fireplaces/clock.webp"
import {cloneElement, isValidElement, type ReactElement} from "react";


export const FireplacePage = ({ data }: { data: FireplaceProps }) => {
    return (
        <article className="relative w-screen min-h-screen flex flex-col pb-32">

            {/* =============== HERO =============== */}
            <section className="grid relative w-screen h-[80vh] items-center justify-center overflow-hidden">
                {/* Image */}
                <section className="absolute top-0 inset-0 z-0">
                    <section className="w-screen relative max-h-screen ">
                        {data.image?.kind === "node" && isValidElement(data.image.content)
                            ? cloneElement(data.image.content as ReactElement<{ className?: string }>, {
                            className:
                                "w-full h-[80vh] object-cover dark:opacity-90 transition-all duration-500",
                            })
                            : data.image?.kind === 'node' && data.image?.content}
                    </section>
                </section>
                {/* Subtle fog gradient */}
                <div className="absolute inset-0 bg-linear-to-b z-10 from-transparent via-black/40 to-black/50" />

                {/* Centered title */}
                <article className="relative z-20 text-center backdrop-blur-sm px-6 py-4 rounded-xl bg-black/30 border border-white/10 shadow-xl">
                    <BasicH1 className="text-5xl md:text-7xl text-white font-extrabold tracking-tight drop-shadow-2xl">
                        {data.name}
                    </BasicH1>
                    <BasicH2 className="text-white/80 md:text-2xl text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </BasicH2>
                </article>
            </section>



            {/* =============== PHOTO =============== */}
            <section className="mt-10 w-full bg-gradient-to-r from-orange-800/45 hover:animate-fade-in-up via-black/10 to-black/15 from py-5 px-10 md:px-20">
                <div className="w-full h-[300px] md:h-[400px]  rounded-3xl border border-white/5 overflow-hidden relative">
                    {data.image && data.image.kind === "node" && isValidElement(data.image.content)
                        ? cloneElement(data.image.content as ReactElement<{ className?: string }>, {
                        className:
                        "object-fill w-full h-[300px] md:h-[400px] dark:opacity-90 dark:group-hover:opacity-100 transition-all duration-500",
                    })
                        : data.image?.kind === 'node' && data.image?.content}
                </div>
            </section>

            {/* =============== PRODUCENT =============== */}
            <section className=" w-full bg-gradient-to-r from-orange-800/45 via-black/10 to-black/15 py-5 px-10 md:px-20">
                <div className="w-full h-[300px] md:h-[400px] bg-gradient-to-r from-orange-800/90 to-orange-300/55 rounded-3xl border border-white/5">
                    <article className="p-10 md:p-16 flex flex-col justify-center h-full">
                        <h3 className="text-lg md:text-5xl font-bold text-white mb-4 drop-shadow-xl">{data.producent} — design, który tworzy przestrzeń</h3>
                        <section className="text-white/80 max-w-2xl pt-8 md:pt-0 drop-shadow-sm text-sm">
                            <TypingText/><br/><br className={"block md:hidden"}/> Modele łączą nowoczesną architekturę, funkcjonalność i niepowtarzalny klimat.
                        </section>
                    </article>
                </div>
            </section>

            {/* =============== KIND OF FUEL =============== */}
            <section className={"w-full py-5 bg-gradient-to-r from-orange-800/45 via-black/10 to-black/15 px-10 md:px-20"}>
                <article className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-r from-black/55 via-black/10 to-black/15 rounded-3xl border border-white/5">
                    <Image
                        src={KindOfFuel}
                        alt="KindOfFuel"
                        fill
                        className={"-z-50"}
                        style={{ objectFit: "cover" }}
                    />
                    <section className="p-10 md:p-16 flex flex-col justify-center h-full relative z-10">
                        <h3 className="text-sm md:text-3xl font-bold max-w-2xl text-white mb-4 drop-shadow-xl">
                            {data.detailData?.kindOfFuel.map((kind, i) => (
                                <span key={i} className="text-white text-lg md:text-5xl">{kind} </span>
                            ))}
                            — Źródla energii idealne do kominków, pieców i kotłów. Sprawdź rodzaje drewna opałowego i brykietu, porównaj efektywność, kaloryczność i ekonomiczność dla domu i mieszkania.
                        </h3>
                    </section>
                </article>
            </section>

            <section className={"w-full py-5 bg-gradient-to-r from-orange-800/45 via-black/10 to-black/15 px-10 md:px-20"}>
                <article className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-r from-black/15 via-black/10 to-black/55 rounded-3xl border border-white/5">
                    <Image
                        src={KindOfHitting}
                        alt="KindOfHitting"
                        fill
                        className={"-z-50"}
                        style={{ objectFit: "cover" }}
                    />
                    <section className="p-10 md:p-16 flex justify-end animate-bounce-smooth items-center h-full z-10">
                        <h3 className="text-sm md:text-3xl font-bold max-w-2xl text-end text-white mb-4 drop-shadow-xl">
                                <span className="text-white text-md md:text-5xl">{data.detailData?.kindOfHeating} </span>
                            — Różnorodne metody ogrzewania domu i mieszkania — od kominków i pieców po nowoczesne kotły i systemy grzewcze. Poznaj dostępne rozwiązania, porównaj ich efektywność, koszt eksploatacji oraz wydajność cieplną, aby wybrać najlepszy sposób ogrzewania dla swojej przestrzeni
                        </h3>
                    </section>
                </article>
            </section>
            <section className={"w-full py-5 bg-gradient-to-r from-orange-800/45 via-black/10 to-black/15 px-10 md:px-20"}>
                <article className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gradient-to-r from-black/15 via-black/35 to-black/15 rounded-3xl border border-white/10">
                    <Image
                        src={RealizationTime}
                        alt="Realization Time"
                        fill
                        className={"-z-50"}
                        style={{ objectFit: "cover" }}
                    />
                    <section className="p-10 md:p-16 flex justify-center animate-bounce-smooth items-center h-full z-10">
                        <h3 className="text-sm md:text-3xl font-bold max-w-2xl text-center text-white mb-4 drop-shadow-xl">
                            <span className="text-white text-md md:text-5xl">{data.detailData?.realisationTime} </span>
                            — Szybki czas realizacji kominka połączony z precyzyjnym wykonaniem, doborem odpowiednich materiałów i gwarancją wysokiej efektywności cieplnej. Oferujemy kompleksowe podejście do montażu kominków, aby zapewnić maksymalny komfort i oszczędność energii.
                        </h3>
                    </section>
                </article>
            </section>

            <section className="mt-14 px-4 md:px-10 shadow-2xl shadow-black/80">
                <BasicH2 className="text-2xl font-semibold mb-6">Pewnie ci wpadnie w oko</BasicH2>

                <article className="flex gap-6 overflow-x-auto p-6 scrollbar-thin scrollbar-thumb-gray-600">
                    {/*{FireplacesEnum.map((fireplace: FireplaceProps, i: number) => (
                        <Link key={i} href={`${shortcuts.fireplaces}/${fireplace.id}`}>
                            <article
                                className={`
                        min-w-[200px] md:min-w-[260px]
                        cursor-pointer transition-all duration-200
                        rounded-xl overflow-hidden
                        hover:scale-[1.04] hover:brightness-110
                        hover:ring-4 hover:ring-orange-500
                        shadow-[0_0_20px_rgba(255,140,0,0.6)]`}
                            >
                                <section className="w-full pointer-events-none h-[60px] md:h-[160px] overflow-hidden bg-black/50">
                                    {fireplace.image && fireplace.image.kind === "node" && fireplace.image.content}
                                </section>

                                <section className="p-3 bg-black/50 backdrop-blur-sm border-t border-white/10 pointer-events-auto">
                                    <BasicH2 className="text-white text-lg text-center">
                                        {fireplace.name}
                                    </BasicH2>
                                </section>
                            </article>
                        </Link>
                    ))}*/}
                </article>
            </section>

        </article>
    );
};