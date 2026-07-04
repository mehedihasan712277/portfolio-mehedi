import mehedi from "@/assets/mehedi.png";
import { Award, Briefcase, FolderGit2, Users } from "lucide-react";
import Image from "next/image";

// TODO: replace with API response later — shape kept API-ready on purpose
const aboutData = {
    image: mehedi,
    role: "Full-Stack Developer",
    description:
        "I'm Mehedi Hasan, a full-stack developer focused on clean architecture, thoughtful UI, and shipping products end-to-end.",
    highlights: [
        "Building performant, accessible interfaces with React & TypeScript",
        "Designing scalable APIs and data models on Node.js",
        "Turning ambiguous requirements into shipped, maintainable products",
    ],
    stats: [
        {
            icon: Briefcase,
            value: "01 +",
            label: "Years Experience",
            color: "text-blue-500",
        },
        {
            icon: FolderGit2,
            value: "5+",
            label: "Projects Completed",
            color: "text-emerald-500",
        },
        {
            icon: Users,
            value: "4+",
            label: "Happy Clients",
            color: "text-amber-500",
        },
        // { icon: Award, value: "15+", label: "Technologies", color: "text-violet-500" },
    ],
};

const About = () => {
    const [badgeStat, ...restStats] = aboutData.stats;

    return (
        <section id="about" className="py-20">
            <div>
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        Get to know
                    </span>
                    <p className="mt-3 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                        About Me
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:gap-16 xl:gap-24">
                    {/* Left: Image */}
                    <div className="flex w-full justify-center sm:w-auto sm:justify-start shrink-0">
                        <div className="relative w-full p-5 sm:max-w-80 sm:p-6 md:max-w-90 lg:max-w-110">
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

                            {/* Badge stat — only on screens smaller than sm */}
                            <div className="absolute bottom-2 right-2 rounded-xl  bg-yellow-500 px-3 py-2 sm:hidden">
                                <div className="flex items-center gap-2">
                                    <badgeStat.icon
                                        className={`size-5 text-black`}
                                        strokeWidth={2}
                                    />
                                    <span className="text-sm font-semibold text-black">
                                        {badgeStat.value}
                                    </span>
                                </div>
                                <span className="text-xs text-black">
                                    {badgeStat.label}
                                </span>
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
                        <div className="hidden lg:grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-3">
                            {aboutData.stats.map(
                                ({ icon: Icon, value, label, color }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center gap-1 text-center"
                                    >
                                        <div className="flex gap-2 items-center">
                                            <Icon
                                                className={`size-6 xl:size-10 ${color}`}
                                                strokeWidth={1}
                                            />
                                            <span className="lg:text-xl xl:text-2xl font-semibold sm:text-xl">
                                                {value}
                                            </span>
                                        </div>
                                        <span className="text-sm xl:text-[16px] text-muted-foreground">
                                            {label}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>

                {/* stats cards in smaller laptop, tab & mobile devices */}
                <div className="lg:hidden mt-6 sm:mt-12">
                    <div className="grid grid-cols-2 gap-3 rounded-2xl sm:border sm:border-border sm:bg-card sm:grid-cols-3 sm:gap-4 sm:p-5">
                        {aboutData.stats.map(
                            ({ icon: Icon, value, label, color }, index) => (
                                <div
                                    key={label}
                                    className={`flex-col items-center gap-1 rounded-xl bg-card p-3 text-center sm:flex sm:bg-transparent sm:p-0 ${
                                        index === 0 ? "hidden sm:flex" : "flex"
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            className={`size-5 sm:size-6 md:size-10 ${color}`}
                                            strokeWidth={2}
                                        />
                                        <span className="text-lg font-semibold sm:text-xl md:text-2xl">
                                            {value}
                                        </span>
                                    </div>
                                    <span className="text-xs text-muted-foreground sm:text-sm md:text-[16px]">
                                        {label}
                                    </span>
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
