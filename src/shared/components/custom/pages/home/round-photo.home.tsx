import Image, {type StaticImageData} from "next/image";

export const RoundPhoto = ({ image }: { image: StaticImageData }) => (
    <div className="flex items-center justify-center sm:p-12 py-2">
        <div
            className="relative group"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            {/* Glow background (desktop only) */}
            <div className="absolute -inset-6 z-0 hidden sm:block opacity-25">
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-violet-600 via-indigo-500 to-purple-600 blur-2xl animate-spin-slower" />
                <div className="absolute inset-0 rounded-full bg-linear-to-l from-fuchsia-500 via-rose-500 to-pink-600 blur-2xl animate-pulse-slow opacity-50" />
                <div className="absolute inset-0 rounded-full bg-linear-to-t from-blue-600 via-cyan-500 to-teal-400 blur-2xl animate-float opacity-50" />
            </div>

            <div className="relative z-10">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)]">

                    {/* Border */}
                    <div className="absolute inset-0 z-20 rounded-full border-4 border-white/20 transition-all duration-700 group-hover:border-white/40" />

                    {/* Overlays (desktop only) */}
                    <div className="absolute inset-0 z-10 hidden sm:block bg-linear-to-b from-black/20 via-transparent to-black/40 transition-opacity duration-700 group-hover:opacity-0" />
                    <div className="absolute inset-0 z-10 hidden sm:block bg-linear-to-t from-purple-500/20 via-transparent to-blue-500/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    {/* Image */}
                    <Image
                        src={image}
                        alt="Profile"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                    {/* Advanced hover (desktop only) */}
                    <div className="absolute inset-0 z-30 hidden sm:block opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
                        <div className="absolute inset-0 bg-linear-to-bl from-transparent via-white/10 to-transparent translate-y-full transition-transform duration-1000 delay-100 group-hover:-translate-y-full" />
                        <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 transition-transform duration-700 animate-pulse-slow group-hover:scale-100" />
                    </div>

                </div>
            </div>
        </div>
    </div>
);