import {getPhotoQuery} from "@/lib/firebase/get-photo.query";
import PhotoBody from "@/shared/components/custom/body/photo.body";
import {PhotoType} from "@/shared/types/photo.type";

const Page = async () => {
    const data = await getPhotoQuery()
    return (
        <div className="grid min-h-screen grid-cols-1 place-items-center gap-8 px-5 bg-zinc-50 font-sans dark:bg-black md:grid-cols-2 lg:grid-cols-3">
            {data?.map((photo: PhotoType) => (
                <PhotoBody key={photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default Page;