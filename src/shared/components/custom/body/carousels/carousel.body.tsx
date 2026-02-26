import type {CommentBodyProps} from "@/shared/types/comment-body.type";
import type {PhotoType} from "@/shared/types/photo.type";
import {BasicH3} from "@/shared/components/lib/basic/text/h3.text";
import CarouselScrollControls from "@/shared/components/custom/body/carousels/carousel-scroll.controls";
import CommentBody from "@/shared/components/custom/body/comments/comment.body";
import PhotoBody from "@/shared/components/custom/body/photo.body";

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
        <article className="relative grid gap-1">
            <BasicH3 className="dark:border-white/80 hover:shadow-white/20 animate-fade-in-up border-black/80 border-b">
                {sectionName}
            </BasicH3>

            <section
                id={`carousel-section-${sectionName}`}
                aria-label={`Carousel ${sectionName}`}
                className="relative flex gap-4 overflow-x-auto border-black/80 dark:border-white/80 px-4 py-3 scroll-snap-x-mandatory"
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

            {data.length > 1 && (
                <CarouselScrollControls
                    targetId={`carousel-section-${sectionName}`}
                />
            )}
        </article>
    );
};

export default CarouselBody;