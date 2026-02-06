import {User} from "lucide-react";
import Image from "next/image";
import {BasicH2} from "@/shared/components/lib/basic/text/h2.text";
import {BasicP} from "@/shared/components/lib/basic/text/p.text";
import {type CommentBodyProps} from "@/shared/types/comment-body.type";


const CommentBody = ({ data }: { data: CommentBodyProps }) => {
    const safeRating = Math.min(100, Math.max(0, data.rating));

    return (
        <article className="rounded-2xl bg-white/10 h-full relative border-3 w-full shadow-2xl border-orange-500/50 p-5 space-y-4">

            {/* Avatar */}
            <section className="w-20 h-20 relative rounded-full overflow-hidden bg-black/10 flex items-center justify-center">
                {data.image ? (
                    <Image
                        src={data.image}
                        alt={`${data.name} avatar`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <User size={20} className="text-gray-400" />
                )}
            </section>

            {/* Text */}
            <section className="space-y-1 pb-5">
                <BasicH2>{data.name}</BasicH2>
                <BasicP>{data.comment}</BasicP>
            </section>

            {/* Rating */}
            <div className="absolute text-sm bottom-3 left-3 text-gray-400">
                Ocena: {safeRating} / 100
            </div>

        </article>
    );
};

export default CommentBody;