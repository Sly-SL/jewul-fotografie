export const dynamic = "force-static"

import Link from "next/link"

const Page = () => {
    return (
        <article className="flex flex-col text-center items-center justify-center min-h-screen dark:text-white">
            <h1 className="text-6xl font-bold text-purple-500 mb-4">Sukces!</h1>
            <p className="text-xl mb-8"><b>Twoje zgloszenie zostalo przyjęte!</b><br/> Nasz pracownik z działu obslugi niedlugo się skontaktuje z wami</p>
            <Link href="/" className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
                Wróć
            </Link>
        </article>
    );
};

export default Page;