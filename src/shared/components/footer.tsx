export const revalidate = 60*60*24*31;

import Link from "next/link";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="pointer-events-auto z-[9999] bg-white/80 dark:bg-black/80 dark:text-white text-black px-6 py-8 md:py-12">
            <hr className="my-6 border-gray-700 opacity-30" />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                <div className="text-center md:text-left text-sm md:text-base space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row items-center md:items-start">
                    <span>© 2021-{year}</span>
                    <span className="font-medium text-purple-400">Jewulski</span>
                    <span className="md:inline">&</span>
                    <a
                        href="https://github.com/Sly-SL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors duration-200 font-semibold"
                    >
                        Slysl
                    </a>
                    <span>. All Rights Reserved.</span>
                </div>
                <nav aria-label="Footer navigation" className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base mt-4 md:mt-0">
                    <Link className="hover:text-purple-400 transition-colors duration-200 font-medium" href={shortcuts.privacy}>
                        Privacy Policy
                    </Link>
                    <Link className="hover:text-purple-400 transition-colors duration-200 font-medium" href={shortcuts.terms}>
                        Terms of Service
                    </Link>
                    <Link className="hover:text-purple-400 transition-colors duration-200 font-medium" href={shortcuts.contact}>
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;