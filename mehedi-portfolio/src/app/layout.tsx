import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/provider/theme-provider";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Md. Mehedi Hasan",
    description: "Full Stack Web Developer",
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
                    defaultTheme="system"
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
