import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/provider/theme-provider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Mehedi",
    description: "Personal portfolio of Md. Mehedi Hasan",

    openGraph: {
        title: "Mehedi | Portfolio",
        description: "Personal portfolio of Md. Mehedi Hasan",
        url: "https://mehedi-personal-portfolio.vercel.app", // change this to your real domain
        siteName: "Mehedi Portfolio",
        images: [
            {
                url: "https://mehedi-personal-portfolio.vercel.app/og-image.png", // IMPORTANT: must be absolute URL
                width: 1200,
                height: 630,
                alt: "Mehedi Portfolio Preview",
            },
        ],
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Mehedi | Portfolio",
        description: "Personal portfolio of Md. Mehedi Hasan",
        images: ["https://mehedi-personal-portfolio.vercel.app/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                "font-sans",
                outfit.variable,
            )}
            suppressHydrationWarning
        >
            <body className="min-h-full w-full">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar></Navbar>
                    <div>{children}</div>
                    <Footer></Footer>
                </ThemeProvider>
            </body>
        </html>
    );
}
