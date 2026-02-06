"use client";

import {ChevronLeft, ChevronRight} from "lucide-react";

export default function CarouselScrollControls({
                                                   targetId,
                                               }: {
    targetId: string;
}) {
    const scroll = (dir: "left" | "right") => {
        const el = document.getElementById(targetId);
        if (!el) return;

        const amount = el.clientWidth * 0.6;

        el.scrollBy({
            left: dir === "left" ? -amount : amount,
            behavior: "smooth",
        });
    };

    return (
        <>
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    scroll("left");
                }}
                aria-label="Previous slide"
                className="absolute left-0 border-black dark:border-white border top-1/2 overflow-visible -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-black/80 p-2 hover:scale-110 transition"
            >
                <ChevronLeft />
            </button>

            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    scroll("right");
                }}
                aria-label="Next slide"
                className="absolute border-black dark:border-white border right-0 top-1/2 overflow-visible -translate-y-1/2 z-10 rounded-full bg-white/80 dark:bg-black/80 p-2 hover:scale-110 transition"
            >
                <ChevronRight />
            </button>
        </>
    );
}