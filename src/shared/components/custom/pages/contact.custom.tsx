import {ButtonsContactEnum} from "@/shared/consts/enums/buttons-contact.enum";

const ContactCustom = () => {
    return (
        <div className={"grid grid-cols-1 items-start justify-center"}>
            {ButtonsContactEnum.map((item, i) => (
                <div className={"grid grid-cols-1 pt-2"} key={i}>
                    <label className={"font-bold dark:text-white/80 text-black/80 pb-1 px-1 text-3xl "}>
                        {item.label}
                    </label>

                    {item.buttons.map((button, i) => ((
                        <div key={i} className={item.linkClassName}>
                            {button.element}
                        </div>
                    )))}
                </div>
            ))}
        </div>
    );
};

export default ContactCustom;