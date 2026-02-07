export const dynamic = "force-static"

export const FireplaceSkeletonPage = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col pb-32 animate-pulse">

            {/* =============== HERO SKELETON =============== */}
            <div className="grid w-full h-[90vh] items-center justify-center overflow-hidden relative">

                {/* Fake image */}
                <div className="absolute animate-pulse duration-300 inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 -z-50" />

                {/* Fake gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

                {/* Fake centered block */}
                <div className="relative z-20 text-center backdrop-blur-sm px-6 py-6 rounded-xl bg-black/30 border border-white/10 shadow-xl">
                    <div className="w-64 md:w-96 h-10 md:h-16 bg-white/20 rounded-lg mx-auto"/>
                    <div className="w-80 md:w-[28rem] h-6 bg-white/10 rounded-md mx-auto mt-6"/>
                </div>
            </div>

            {/* =============== SPECS BAR SKELETON =============== */}
            <div className="w-full flex justify-center mt-[-60px] z-30">
                <div className="grid grid-cols-2 md:grid-cols-4 w-[90%] backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl shadow-2xl p-6 gap-6">

                    {[1,2,3,4].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-2 text-center">
                            <div className="h-8 w-8 rounded-full bg-white/20"/>
                            <div className="h-4 w-24 bg-white/20 rounded-md"/>
                            <div className="h-4 w-20 bg-white/10 rounded-md"/>
                        </div>
                    ))}

                </div>
            </div>

            {/* =============== ARCHITECTURAL STRIP SKELETON =============== */}
            <div className="mt-20 w-full px-10 md:px-20">
                <div className="w-full h-[300px] md:h-[400px] bg-zinc-800/40 rounded-3xl shadow-xl border border-white/5">

                    <div className="p-10 md:p-16 flex flex-col justify-center h-full gap-6">
                        <div className="h-10 md:h-14 w-72 md:w-[28rem] bg-white/20 rounded-lg"/>
                        <div className="h-5 w-80 bg-white/10 rounded-md"/>
                        <div className="h-5 w-64 bg-white/10 rounded-md"/>
                    </div>

                </div>
            </div>

        </section>
    );
};