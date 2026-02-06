import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import ContactForm from "@/shared/components/forms/contact.form";
import SocialLinks from "@/shared/components/custom/header/subdivs/subdivs/contact/social-links.contact";

const ContactSubdiv = () => {
    return (
        <SubdivConstructor id="contact">
            <section className="w-full h-full grid grid-cols-2 gap-30">
                <ContactForm/>
                <div className={"text-2xl text-center"}>
                    <SocialLinks/>
                </div>
            </section>
        </SubdivConstructor>
    );
};

export default ContactSubdiv;