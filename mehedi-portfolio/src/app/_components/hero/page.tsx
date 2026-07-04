import Image from "next/image";
import { Download } from "lucide-react";
import facebook from "@/assets/facebook.png";
import whatsapp from "@/assets/whatsapp2.png";
import linkedin from "@/assets/linkedin.png";
import github from "@/assets/github-icon.png";
import { Button } from "@/components/ui/button";

const socials = [
    {
        href: "https://www.facebook.com/share/1CRxz811X9",
        icon: facebook,
        label: "Facebook",
    },
    {
        href: "https://wa.me/8801405748197",
        icon: whatsapp,
        label: "WhatsApp",
    },
    {
        href: "https://www.linkedin.com/in/mdmehedihasan-web-developer",
        icon: linkedin,
        label: "LinkedIn",
    },
    {
        href: "https://github.com/mehedihasan712277",
        icon: github,
        label: "GitHub",
    },
];

const HeroSection = () => {
    return (
        <div
            id="home"
            className="relative flex min-h-[calc(100svh-86px)] items-center overflow-hidden"
        >
            {/* background: dot grid + soft radial fade */}
            <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    backgroundImage:
                        "radial-gradient(color-mix(in oklch, var(--foreground) 14%, transparent) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    maskImage:
                        "radial-gradient(ellipse 60% 55% at 50% 40%, black, transparent)",
                }}
            />

            <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-4 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-4 py-1.5 text-sm text-muted-foreground">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    Available for freelance &amp; full-time roles
                </span>

                <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                    Md. Mehedi Hasan
                </h1>

                <h2 className="text-xl font-medium text-muted-foreground sm:text-2xl lg:text-3xl">
                    Full Stack Web Developer
                </h2>

                <div className="mt-2 flex items-center gap-4">
                    {socials.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="inline-flex items-center justify-center rounded-full border border-input bg-background p-2.5 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            <Image src={icon} alt="" className="h-5 w-5" />
                        </a>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    <a href="#contact">
                        <Button size="lg">Get in touch</Button>
                    </a>
                    <Button variant="outline" size="lg">
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download resume
                        </a>
                    </Button>
                </div>
            </div>

            {/* scroll indicator */}
            <a
                href="#about"
                aria-label="Scroll to about section"
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <span className="flex h-9 w-6 justify-center rounded-full border-2 border-muted-foreground/40 p-1">
                    <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-muted-foreground" />
                </span>
            </a>
        </div>
    );
};

export default HeroSection;
