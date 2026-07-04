import mehedi from "@/assets/mehedi.png";
import { Award, Briefcase, FolderGit2, Users } from "lucide-react";
import Image from "next/image";

// TODO: replace with API response later — shape kept API-ready on purpose
const aboutData = {
    image: mehedi,
    role: "Full-Stack Developer crafting clean, reliable products",
    description:
        "I'm Mehedi Hasan, a full-stack developer focused on clean architecture, thoughtful UI, and shipping products end-to-end.",
    highlights: [
        "Building performant, accessible interfaces with React & TypeScript",
        "Designing scalable APIs and data models on Node.js",
        "Turning ambiguous requirements into shipped, maintainable products",
    ],
    stats: [
        { icon: Briefcase, value: "3+", label: "Years Experience" },
        { icon: FolderGit2, value: "40+", label: "Projects Completed" },
        { icon: Users, value: "20+", label: "Happy Clients" },
        { icon: Award, value: "15+", label: "Technologies" },
    ],
};

const About = () => {
    return (
        <section id="about" className="py-20">
            <div>
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Get to know
                    </span>
                    <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-6xl">
                        About Me
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:gap-16 xl:gap-24">
                    {/* Left: Image */}
                    <div className="flex w-full justify-center sm:w-auto sm:justify-start shrink-0">
                        <div className="relative w-full max-w-70 p-5 sm:max-w-80 sm:p-6 md:max-w-105 lg:max-w-110">
                            <span
                                aria-hidden
                                className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-muted-foreground"
                            />
                            <span
                                aria-hidden
                                className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-muted-foreground"
                            />

                            <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                                <Image
                                    src={aboutData.image}
                                    alt="Mehedi Hasan"
                                    className="aspect-1118/1407 h-auto w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Text + Stats */}
                    <div className="w-full space-y-6">
                        <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-3xl lg:text-2xl">
                            {aboutData.role}
                        </h3>

                        <p className="leading-relaxed text-muted-foreground">
                            {aboutData.description}
                        </p>

                        <ul className="space-y-3 pt-2">
                            {aboutData.highlights.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                                    <span className="text-sm text-foreground/90 sm:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Stats — single uniform grid across all breakpoints */}
                        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-4">
                            {aboutData.stats.map(
                                ({ icon: Icon, value, label }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center gap-1 text-center"
                                    >
                                        <Icon
                                            className="size-5 text-primary"
                                            strokeWidth={1.75}
                                        />
                                        <span className="text-lg font-semibold sm:text-xl">
                                            {value}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {label}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
