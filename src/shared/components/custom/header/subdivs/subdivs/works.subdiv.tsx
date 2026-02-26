import SubdivConstructor from "@/shared/components/custom/header/subdivs/subdiv-constructor.subdiv";
import type {PhotoType} from "@/shared/types/photo.type";
import PhotoBody from "@/shared/components/custom/body/photo.body";
import {getPhotoQuery} from "@/lib/firebase/get-photo.query";
import {BasicH1} from "@/shared/components/lib/basic/text/h1.text";

const WorksSubdiv = async () => {
    const data = await getPhotoQuery()
    return (
        <SubdivConstructor id={"works"}>
            <section className="p-2">
                <BasicH1 className="text-start text-black/70 dark:text-white/80">
                    Przykłady moich prac
                </BasicH1>

                <div className="flex gap-8 py-3 px-5">
                    {data?.map((photo: PhotoType) => (
                        <div key={photo.id} className="snap-center shrink-0">
                            <PhotoBody photo={photo} />
                        </div>
                    ))}
                </div>
            </section>
        </SubdivConstructor>
    );
};

export default WorksSubdiv;