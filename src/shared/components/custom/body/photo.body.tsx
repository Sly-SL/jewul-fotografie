import Image from "next/image";
import {PhotoType} from "@/shared/types/photo.type";

const PhotoBody = ({ photo }: { photo: PhotoType }) => {
    return (
        photo.image &&
        <div className="group relative hover:scale-[1.02] w-full snap-start max-w-sm shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">

            <div className="relative w-full aspect-video min-h-[180px]">
                <Image
                    src={photo.image}
                    alt={`photoId: ${photo.id}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.03]"
                />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
    );
};

export default PhotoBody;