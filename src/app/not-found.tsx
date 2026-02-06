import Link from "next/link";

export const dynamic = "force-static";

const NotFound = () => {
    return (
        <div className="flex flex-col text-center items-center justify-center min-h-screen dark:text-white">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-8">Uppss! Strona którą szukasz jest niedostępna.<br/> Sprawdź czy posiadasz uprawnienia na jej przegłąd</p>
            <Link href="/" className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
                Wróć
            </Link>
        </div>
    );
};

export default NotFound;