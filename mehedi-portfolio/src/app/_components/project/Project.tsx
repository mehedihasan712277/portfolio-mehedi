import Image, { StaticImageData } from "next/image";
import { CheckCircle2, Layers, ExternalLink } from "lucide-react";
import nextjsIcon from "@/assets/nextjs.png";
import tsIcon from "@/assets/typescript.png";
import expressIcon from "@/assets/expressjs.png";
import mongodbIcon from "@/assets/mongodb.png";
import mongooseIcon from "@/assets/mongoose.png";

const projects = [
    {
        title: "Corporate Website with Custom Admin Panel",
        client: "City Solution Bd",
        liveLink: "https://citysolution.com.bd/",
        subtitle:
            "A complete rebuild focused on performance, SEO, and an easy-to-manage content system.",

        clientRequirements: [
            "Build a fast, smooth, and SEO-friendly website to replace the previous slow and glitchy version.",
            "Reduce page loading time and improve overall website performance.",
            "Provide a custom admin dashboard so the client can manage all website content without editing code.",
        ],

        problemsSolved: [
            {
                title: "🚀 Rebuilt the Website for Speed & SEO",
                description: [
                    "Rebuilt the website from scratch with a clean, modern design.",
                    "Organized the content to better highlight the client's services and build trust.",
                    "Applied SEO best practices to improve user experience and search engine visibility.",
                ],
            },
            {
                title: "⚡ Improved Performance from GTmetrix Grade E to Grade A",
                description: [
                    "Used Next.js Static Site Generation (SSG) for faster page loads.",
                    "Optimized images and reduced unnecessary JavaScript.",
                    "Improved the GTmetrix score from Grade E to Grade A by following performance best practices.",
                ],
            },
            {
                title: "🔍 Improved Search Engine Visibility",
                description: [
                    "Added XML sitemap and robots.txt.",
                    "Configured Open Graph metadata for better social sharing.",
                    "Set up Google Search Console to improve website indexing.",
                ],
            },
            {
                title: "🛠️ Built a Custom Admin Dashboard",
                description: [
                    "Developed a secure admin panel for managing website content.",
                    "Made the interface simple and user-friendly for non-technical users.",
                    "Replaced the previous static workflow with a dynamic content management system.",
                ],
            },
            {
                title: "🌐 Modernized Deployment & Infrastructure",
                description: [
                    "Migrated the website from cPanel hosting to Vercel.",
                    "Configured the existing domain for the new deployment.",
                    "Set up and managed the client's business email.",
                ],
            },
        ],

        techStack: {
            frontend: [
                { name: "Next.js", icon: nextjsIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
            backend: [
                { name: "Express.js", icon: expressIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
            database: [
                { name: "MongoDB", icon: mongodbIcon },
                { name: "Mongoose ODM", icon: mongooseIcon },
            ],
            deployment: [
                "Vercel",
                "Domain Configuration",
                "Business Email Configuration",
            ],
        },
    },
];

const iconCategories: {
    key: "frontend" | "backend" | "database";
    label: string;
}[] = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
];

interface TechIcon {
    name: string;
    icon: StaticImageData;
}

const Project = () => {
    return (
        <div id="projects" className="py-20">
            {/* ------------------------heading part --------------------- */}
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    previous work
                </span>

                <p className="my-4 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                    Solutions I've Delivered
                </p>

                <p className="max-w-3xl text-xl tracking-wide text-muted-foreground">
                    Businesses where I helped improve website performance,
                    designed and built new websites, fixed bugs, and added new
                    features.
                </p>
            </div>

            {/* ---------------previous problem solved section---------------- */}
            <div className="space-y-20">
                {projects.map((project) => (
                    <div key={project.title} className="space-y-10">
                        {/* project header */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
                                    {project.title}
                                </h2>
                                <p className="mb-2 text-sm font-medium tracking-wide text-muted-foreground">
                                    Client:{" "}
                                    <span className="text-foreground">
                                        {project.client}
                                    </span>
                                </p>
                                <p className="max-w-2xl text-lg text-muted-foreground">
                                    {project.subtitle}
                                </p>
                            </div>

                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-card/70"
                                >
                                    Visit Live Site
                                    <ExternalLink className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            )}
                        </div>

                        {/* client requirements */}
                        <div className="rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8">
                            <h3 className="mb-5 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                                Client Requirements
                            </h3>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {project.clientRequirements.map((req) => (
                                    <li
                                        key={req}
                                        className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                                    >
                                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* problems solved */}
                        <div>
                            <h3 className="mb-5 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                                What I Solved
                            </h3>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                {project.problemsSolved.map((problem) => (
                                    <div
                                        key={problem.title}
                                        className="group rounded-3xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/70 hover:shadow-xl hover:shadow-black/20 sm:p-7"
                                    >
                                        <h4 className="mb-3 text-lg font-semibold text-foreground">
                                            {problem.title}
                                        </h4>
                                        <ul className="space-y-2">
                                            {problem.description.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                                                >
                                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* tech stack */}
                        <div className="rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8">
                            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                                <Layers className="size-4" />
                                Tech Stack
                            </h3>
                            <div className="space-y-4">
                                {iconCategories.map(({ key, label }) => (
                                    <div
                                        key={key}
                                        className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
                                    >
                                        <span className="w-36 shrink-0 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                            {label}
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {(
                                                project.techStack[
                                                    key
                                                ] as TechIcon[]
                                            ).map((tech) => (
                                                <span
                                                    key={tech.name}
                                                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                                                >
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="size-4 shrink-0 object-contain"
                                                    />
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* deployment - no icons */}
                                <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                                    <span className="w-36 shrink-0 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                        Deployment & Infra
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.deployment.map(
                                            (item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                                                >
                                                    {item}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
