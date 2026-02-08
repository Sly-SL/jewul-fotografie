import type {ReactNode} from "react";
import {House, Mail, Phone} from "lucide-react";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";
import SocialLinks from "@/shared/components/custom/header/subdivs/subdivs/contact/social-links.contact";
import OrderConsultationForm from "@/shared/components/forms/order-consultation.form";

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
            { element: <a className="inline-flex items-center gap-2" href="mailto:jewulfotografia@gmail.com"><Mail /> jewulfotografia@gmail.com</a> },
            { element: <a href={"https://maps.app.goo.gl/fif8GiDj7Gm4kpPY8"} className="inline-flex items-center gap-2"><House />  33-100 Tarnów</a> }
        ]
    }
]

const Contact = () => {

    return (
        <article
            className="h-full pb-[10%] bg-white/70 dark:bg-black/80 overflow-hidden sm:px-[5%] mt-10 sm-mt-0"
        >
            <BasicH1 className={"animate-fade-in-down text-purple-100 duration-500"}>W razie jakichkolwiek pytań<br/> Skontaktuj się ze mną</BasicH1>
            <div className="grid grid-cols-1 pt-5 md:pt-10 lg:grid-cols-2 gap-8">

                <section>
                    <article className={"grid grid-cols-1 gap-5 items-start"}>
                        {Buttons.map((item, i) => (
                            <section className={"grid grid-cols-1 pt-2 border-t dark:border-amber-50 border-amber-900"} key={i}>
                                <h2 className={"font-bold dark:text-white/80 text-black/80 pb-1 md:text-3xl text-xl"}>
                                    {item.label}
                                </h2>

                                {item.buttons.map((button, i) => ((
                                    <section key={i} className={item.linkClassName}>
                                        {button.element}
                                    </section>
                                )))}
                            </section>
                        ))}
                    </article>
                    <article className={"pt-5"}>
                        <SocialLinks />
                    </article>
                </section>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164166.28180925737!2d20.759752197624163!3d49.99076922218058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602f55871f414b73%3A0x984fdd2d68c54659!2sFilip%20Jewulski%20Fotografia%20%7C%20Tarn%C3%B3w!5e0!3m2!1sen!2spl!4v1770409789612!5m2!1sen!2spl"
                    className={"rounded-md flex w-full h-[50vh] hover:scale-[1.02] duration-300"}
                    allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                <section>
                    <OrderConsultationForm/>
                </section>
            </div>
        </article>
    );
};

export default Contact;