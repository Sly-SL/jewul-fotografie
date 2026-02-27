import type {CommentBodyProps} from "@/shared/types/comment-body.type";
import type {PhotoType} from "@/shared/types/photo.type";
import {BasicH3} from "@/shared/components/lib/basic/text/h3.text";
import CarouselScrollControls from "@/shared/components/custom/body/carousels/carousel-scroll.controls";
import CommentBody from "@/shared/components/custom/body/comments/comment.body";
import PhotoBody from "@/shared/components/custom/body/photo.body";
import {shortcuts} from "@/shared/consts/enums/shortcuts.enum";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const CarouselBody = ({
                          sectionName,
                          data,
                          type,
                      }: {
    sectionName: string;
    type: "photo" | "comment";
    data: PhotoType[] | CommentBodyProps[];
}) => {
    return (
        <article className="relative grid gap-1 w-full">
            <BasicH3 className="dark:border-white/80 hover:shadow-white/20 animate-fade-in-up border-black/80 border-b">
                {sectionName}
            </BasicH3>

            <div className={"flex items-stretch gap-4"}>
                <section
                    id={`carousel-section-${sectionName}`}
                    aria-label={`Carousel ${sectionName}`}
                    className="flex duration-300 gap-4 overflow-x-auto flex-1 border-black/80 dark:border-white/80 px-4 py-3 scroll-snap-x-mandatory"
                    style={{ scrollPaddingRight: '2rem' }}
                >
                    {type === "photo" &&
                        (data as PhotoType[]).map((item) => (
                            <PhotoBody photo={item} key={item.id} />
                        ))}

                    {type === "comment" &&
                        (data as CommentBodyProps[]).map((item) => (
                            <CommentBody data={item} key={item.id} />
                        ))}
                </section>
                {type === "comment" && <div className={"flex hover:scale-[1.02] duration-300 gap-4 overflow-x-auto flex-1 min-w-0 border-black/80 dark:border-white/80 px-4 py-3 scroll-snap-x-mandatory"}>
                    <Link href={shortcuts.reviews} className="rounded-2xl bg-white/10 h-full relative border-3 w-full max-w-2xs shadow-2xl border-purple-500/50 p-5 space-y-4">
                        <p className="dark:text-white text-black opacity-70 text-xl">Zobacz wszystkie opinie</p>
                        <ArrowRight size={55}/>
                    </Link>
                </div>}
            </div>

            {data.length > 1 && (
                <CarouselScrollControls
                    targetId={`carousel-section-${sectionName}`}
                />
            )}
        </article>
    );
};

export default CarouselBody;