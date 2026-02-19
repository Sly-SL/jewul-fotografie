import Image from "next/image";
import type {Photo} from "@/lib/firebase/get-photo.query";

const PhotoBody = ({ photo }: { photo: Photo }) => {
    return (
        photo.image && <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                    src={photo.image}
                    alt={`photoId: ${photo.id}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
    );
};

export default PhotoBody;