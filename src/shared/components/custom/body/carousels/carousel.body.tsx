import type {PhotoType} from "@/shared/types/photo.type";
import PhotoBody from "@/shared/components/custom/body/photo.body";
import {BasicH3} from "@/shared/components/lib/basic/text/h3.text";
import CarouselScrollControls from "@/shared/components/custom/body/carousels/carousel-scroll.controls";

const CarouselBody = ({sectionName,data}:{sectionName:string,data:PhotoType[]}) => {
    return (
        <article className="relative grid gap-1">
            <BasicH3 className={"dark:border-white/80 border-black/80 border-b"}>{sectionName}</BasicH3>
            <section
                id={`carousel-section-${sectionName}`}
                aria-label={`Carousel ${sectionName + 1}`}
                className={"overflow-x-auto relative border-black/80 dark:border-white/80 flex gap-4 scroll-snap-x-mandatory px-4 py-3"}>
                {data.map((item) => (
                    <PhotoBody photo={item} key={item.id} />
                ))}
            </section>

            {data.length > 1 && (
                <CarouselScrollControls targetId={`carousel-section-${sectionName}`} />
            )}
        </article>
    );
};

export default CarouselBody;