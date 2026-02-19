import {getPhotoQuery, type Photo} from "@/lib/firebase/get-photo.query";
import PhotoBody from "@/shared/components/custom/body/photo.body";

const Page = async () => {
    const data = await getPhotoQuery()
    return (
        <div className={"grid px-5 lg:grid-cols-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"}>
            {data && data.map((photo: Photo) => (
                <PhotoBody key={photo.id} photo={photo}/>
            ))}
        </div>
    );
};

export default Page;