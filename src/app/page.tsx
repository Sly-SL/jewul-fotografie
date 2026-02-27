import Bg from "@/public/assets/bg.jpg"
import OrderConsultationForm from "@/shared/components/forms/order-consultation.form";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";
import {BasicP} from "@/shared/components/lib/basic/text/p.text";
import {RoundPhoto} from "@/shared/components/custom/pages/home/round-photo.home";
import Photo from "@/public/assets/jewul-camera.jpg"
import {BasicH2} from "@/shared/components/lib/basic/text/h2.text";
import {getPhotoQuery} from "@/lib/firebase/get-photo.query";
import SocialLinks from "@/shared/components/custom/header/subdivs/subdivs/contact/social-links.contact";
import {BasicH3} from "@/shared/components/lib/basic/text/h3.text";
import CarouselBody from "@/shared/components/custom/body/carousels/carousel.body";
import {getReviewsQuery} from "@/lib/firebase/get-reviews.query";
import {ServicesData} from "@/shared/pages/services/data.services";
import Link from "next/link";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import {cloneElement, isValidElement, type ReactElement} from "react";
import ContactCustom from "@/shared/components/custom/pages/contact.custom";


export default async function Home() {
    const worksData = await getPhotoQuery()
    const commentsData = await getReviewsQuery()
    return (
        <article>
            <section className="relative grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <div
                    style={{
                        backgroundImage: `url(${Bg.src})`,
                    }}
                    className="px-8 flex animate-fade-in-down duration-500 aspect-video w-full items-center justify-center bg-center bg-cover bg-no-repeat"
                    />

                    <article className={"p-12 gap-3 grid grid-rows-2"}>
                        <div>
                            <BasicH1 className={"backdrop-blur-2xl bg-none hover:shadow-white/30 animate-fade-in-down duration-500 shadow-md hover:shadow-xl transition-all"}>
                                Prawdziwy mistrz swojej dziedziny
                            </BasicH1>
                            <BasicP className={'text-black/70 dark:text-white/80 duration-500 animate-fade-in-up'}>Hej, jestem Filip i zajmuję się tworzeniem wyjątkowych zdjęć już wprawie 5 lat. Każde zdjęcie ma historię. Robię je tak, żeby wracać do nich z dumą </BasicP>
                        </div>
                        <div className={"*:mx-20 pt-20"}>
                            <OrderConsultationForm/>
                        </div>
                    </article>
                </section>
                <hr className={"blur-xs"}/>
                <section className="grid lg:grid-cols-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

                    <article className={"animate-fade-in-left grid grid-rows-2 gap-20 duration-1000 p-12"}>
                        <div>
                            <BasicH2 className={"backdrop-blur-xl hover:shadow-white/25 shadow-md hover:shadow-xl transition-all"}>
                                Zawodowiec marzeń i profesjonalista
                            </BasicH2>
                            <BasicP className={'text-black/70 dark:text-white/80'}>Mam 18 lat i fotografią zajmuję się od prawie pięciu lat. Specjalizuję się w reportażach z imprez i wydarzeń młodzieżowych oraz w naturalnych sesjach zdjęciowych. Najbardziej interesują mnie prawdziwe emocje i spontaniczne momenty. Pracuję głównie z młodymi ludźmi, tworząc zdjęcia, które dobrze wyglądają zarówno jako pamiątka, jak i w social mediach. </BasicP>
                        </div>
                        <div className={"grid justify-center"}>
                            <ContactCustom/>
                        </div>
                    </article>

                    <div className={"animate-fade-in-right duration-1000"}>
                        <RoundPhoto image={Photo}/>
                    </div>
                </section>
                <hr className={"blur-xs"}/>
                <section className={"bg-linear-to-r backdrop-blur-2xl from-blue-400/5 via-purple-400/5 to-red-300/5"}>
                    <section className={"m-4 overflow-hidden"}>
                        <CarouselBody sectionName={"Przykłady moich prac"} type={"photo"} data={worksData}/>
                    </section>
                    <hr className={"blur-xs"}/>
                    <section className={"m-4"}>
                        <BasicH3 className={"dark:border-white/80 border-black/80 border-b hover:shadow-white/20 animate-fade-in-up"}>Usługi</BasicH3>
                        <section className={"m-4 gap-8 grid grid-cols-1 md:grid-cols-2"}>
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
                                            <h2 itemProp="name" className="md:text-2xl text-xl font-semibold mb-2 drop-shadow-lg">
                                                {service.title}
                                            </h2>
                                            <p itemProp="description" className="hidden md:grid text-sm text-gray-100 max-w-md">
                                                {service.description || "Profesjonalna usługa dostosowana do Twoich potrzeb."}
                                            </p>
                                            {service.rules && (
                                                <p className="mt-3 text-sm font-semibold text-purple-400" itemProp="offers" itemScope
                                                   itemType="https://schema.org/Offer">
                                        <span itemProp="price">{service.rules.map((rule, i) => (
                                            <span key={i}>{rule} </span>
                                        ))}
                                        </span>
                                                </p>
                                            )}
                                        </div>
                                    </Link>
                                </section>
                            ))}
                        </section>
                    </section>
                    <hr className={"blur-xs"}/>
                    <section className={"m-4 flex"}>
                        <CarouselBody sectionName={"Recenzje"} type={"comment"} data={commentsData}/>
                    </section>
                    <hr className={"blur-xs"}/>
                    <section className="grid lg:grid-cols-2 gap-3 min-h-[50vh] items-center justify-center bg-zinc-50/50 font-sans dark:bg-black/40">
                        <article className={"grid-rows-2 grid gap-10 m-4"}>
                            <BasicH3 className={"backdrop-blur-xl mx-5 text-center text-4xl bg-none hover:shadow-white/20 animate-fade-in-up"}>
                                Zamów konsultację już dzisiaj
                            </BasicH3>

                            <div className={"mx-40"}>
                                <OrderConsultationForm/>
                            </div>
                        </article>
                        <article className={"pt-5 mx-15"}>
                            <SocialLinks />
                        </article>
                    </section>
                </section>
            </article>
  );
}
