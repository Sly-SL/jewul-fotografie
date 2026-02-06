import type {Metadata} from "next";
import type {ReactNode} from "react";
import {Montserrat} from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/header";
import Footer from "@/shared/components/footer";
import {Toaster} from "@/shared/components/lib/basic/sonner/root.sonner";
import CookieBannerClient from "@/shared/components/custom/cookie-banner.ssr";
import "@/shared/consts/consts.consts";

export const revalidate = 3600;

const montserrat = Montserrat({
    variable: "--font-montserrat",
    weight: ["100","200", "300","400", "500", "600", "700","800"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Jewulski Fotografie",
    description: "Każde zdjęcie ma historię. Robię je tak, żeby wracać do nich z dumą ",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="pl">
        <body className={` ${montserrat.variable} antialiased`}>
                <Header />
                <main id={"root"} className="pt-20">
                    {children}
                    <CookieBannerClient />
                </main>
                <Footer />
                <Toaster />

        </body>
        </html>
    );
}