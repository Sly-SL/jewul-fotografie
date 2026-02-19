import {AdminAction} from "@/app/admin/action";
import NotFound from "@/app/not-found";
import Bg from "@/public/assets/bg.jpg";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";
import {BasicP} from "@/shared/components/lib/basic/text/p.text";
import {AddPhotoForm} from "@/shared/components/forms/add-photo.form";

const Page = async () => {
    const guard = await AdminAction();

    if (!guard || guard.status != 200)
        return <NotFound />;


    return(
        <section className="grid min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div
                style={{
                    backgroundImage: `url(${Bg.src})`,
                }}
                className="px-8 absolute flex animate-fade-in-down duration-500 aspect-video w-full items-center justify-center bg-center bg-cover bg-no-repeat"
            />

            <article className={"p-12 gap-3 grid grid-rows-2"}>
                <div className={"relative rounded-2xl overflow-hidden p-2  bg-white/5 backdrop-blur-[25px] shadow-lg"}>
                    <BasicH1 className={"bg-none hover:shadow-white/20 animate-fade-in-down duration-500 hover:shadow-xl transition-all"}>
                        Dodaj zdjęcie
                    </BasicH1>
                    <BasicP className={'text-black/70 text-center dark:text-white/80 duration-500 animate-fade-in-up'}>Dodaj plik i się automatycznie umieści na stronie </BasicP>
                </div>
                <div className={"relative inset-0"}>
                    <AddPhotoForm/>
                </div>
            </article>
        </section>
    );
};

export default Page;