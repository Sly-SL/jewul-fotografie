"use client";

import {useEffect, useLayoutEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";

const SidebarChangeButton = ({ className }: { className?: string }) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useLayoutEffect(() => {
        const t = setTimeout(() => setOpen(false), 0);
        return () => clearTimeout(t);
    }, [pathname]);

    useEffect(() => {
        const target = document.getElementById("global-sidebar");

        if (!target) return;

        const valueToRemove = !open ? "block" : "hidden";
        const value = open ? "block" : "hidden";

        target.classList.add(value);
        target.classList.remove(valueToRemove);
    }, [open]);

    return (
        <li className={className}>
            <button   aria-label={open ? "Close menu" : "Open menu"}
                      onClick={() => setOpen(prev => !prev)} >
                <motion.div
                    key={open ? "x" : "menu"}
                    initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    {open ? <X size={40} /> : <Menu size={40} />}
                </motion.div>
            </button>
        </li>
    );
};

export default SidebarChangeButton;