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

export default async function Home() {
    const data = await getPhotoQuery()

    return (
    <article>
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div
                style={{
                    backgroundImage: `url(${Bg.src})`,
                }}
                className="px-8 flex animate-fade-in-down duration-500 aspect-video w-full items-center justify-center bg-center bg-cover bg-no-repeat"
            />

            <article className={"p-12 gap-3 grid grid-rows-2"}>
                <div>
                    <BasicH1 className={"backdrop-blur-xl bg-none hover:shadow-white/20 animate-fade-in-down duration-500 shadow-md hover:shadow-xl transition-all"}>
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

            <article className={"animate-fade-in-left duration-1000 p-12 gap-3 grid grid-rows-2"}>
                <BasicH2 className={"backdrop-blur-xl bg-none hover:shadow-white/20 shadow-md hover:shadow-xl transition-all"}>
                    Zawodowiec marzeń
                </BasicH2>
                <BasicP className={'text-black/70 dark:text-white/80'}>Mam 18 lat i fotografią zajmuję się od prawie pięciu lat. Specjalizuję się w reportażach z imprez i wydarzeń młodzieżowych oraz w naturalnych sesjach zdjęciowych. Najbardziej interesują mnie prawdziwe emocje i spontaniczne momenty. Pracuję głównie z młodymi ludźmi, tworząc zdjęcia, które dobrze wyglądają zarówno jako pamiątka, jak i w social mediach. </BasicP>
            </article>

            <div className={"animate-fade-in-right duration-1000"}>
                <RoundPhoto image={Photo}/>
            </div>
        </section>
        <hr className={"blur-xs"}/>
        <section className={"m-4"}>
            <CarouselBody sectionName={"Przykłady moich prac"} data={data}/>
        </section>
        <hr className={"blur-xs"}/>
        <section className="grid m-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <BasicH3 className={"backdrop-blur-xl text-center text-4xl bg-none hover:shadow-white/20 animate-fade-in-up"}>
                Zamów konsultację już dzisiaj
            </BasicH3>

            <OrderConsultationForm/>
            <article className={"pt-5"}>
                <SocialLinks />
            </article>
        </section>
    </article>
  );
}
