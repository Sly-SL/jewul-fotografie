import Bg from "@/public/assets/bg.jpg"
import OrderConsultationForm from "@/shared/components/forms/order-consultation.form";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";
import {BasicP} from "@/shared/components/lib/basic/text/p.text";

export default function Home() {
  return (
    <article>
        <section className="grid lg:grid-cols-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div
                style={{
                    backgroundImage: `url(${Bg.src})`,
                }}
                className="flex h-[60vh] flex-col items-center justify-center p-8 bg-cover bg-center"
            />

            <article className={"p-12 gap-3 grid grid-rows-2"}>
                <div>
                    <BasicH1 className={" animate-fade-in-up"}>
                        Prawdziwy mistrz swojej dziedziny
                    </BasicH1>
                    <BasicP className={'text-black/70 dark:text-white/80 animate-fade-in-up'}>Hej, jestem Filip i zajmuję się tworzeniem wyjątkowych zdjęć już wprawie 5 lat. Każde zdjęcie ma historię. Robię je tak, żeby wracać do nich z dumą </BasicP>
                </div>
                <div className={"*:mx-20 pt-20"}>
                    <OrderConsultationForm/>
                </div>
            </article>
        </section>
    </article>
  );
}
