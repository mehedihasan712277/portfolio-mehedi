"use client";
import Image, { StaticImageData } from "next/image";
import { CheckCircle2, Layers, ExternalLink, Info } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

interface TechIcon {
    name: string;
    icon: StaticImageData;
}

interface ProblemSolved {
    title: string;
    description: string[];
}

interface TechStack {
    frontend?: TechIcon[];
    backend?: TechIcon[];
    database?: TechIcon[];
    deployment?: string[];
}

interface ProjectMeta {
    company?: string;
    type: "team" | "solo";
    role: string;
}

interface ProjectGithub {
    frontend: string;
    backend: string;
    admin?: string;
}

interface ProjectData {
    title: string;
    client?: string;
    liveLink?: string;
    subtitle: string;
    image: StaticImageData;
    bgImage?: StaticImageData;
    meta: ProjectMeta;
    clientRequirements?: string[];
    problemsSolved?: ProblemSolved[];
    techStack: TechStack;
    github?: ProjectGithub;
}

const iconCategories: {
    key: "frontend" | "backend" | "database";
    label: string;
}[] = [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
];

interface ProblemsSolvedSectionProps {
    projects: ProjectData[];
}

const ProblemsSolvedSection = ({ projects }: ProblemsSolvedSectionProps) => {
    return (
        <div className="space-y-16 md:space-y-24">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-12 p-4 md:p-8 border border-border rounded-2xl hover:border-accent-foreground transition-colors duration-300"
                >
                    {/* left: content */}
                    <div className="flex flex-1 flex-col gap-5">
                        <h2 className="text-3xl tracking-wide text-foreground md:text-4xl">
                            {project.title}
                        </h2>

                        {/* meta badges */}
                        <div className="flex flex-wrap items-center gap-2">
                            {project.meta.company && (
                                <Badge
                                    variant="secondary"
                                    className="px-4 py-3"
                                >
                                    {project.meta.company}
                                </Badge>
                            )}
                            <Badge
                                variant="secondary"
                                className="capitalize px-4 py-3"
                            >
                                {project.meta.type}
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-3">
                                {project.meta.role}
                            </Badge>
                        </div>

                        {/* enlarged subtitle */}
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-lg">
                            {project.subtitle}
                        </p>

                        {/* buttons row */}
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-card/70"
                                >
                                    Visit Live Site
                                    <ExternalLink className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            )}

                            {project.github?.frontend && (
                                <a
                                    href={project.github.frontend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-card/70"
                                >
                                    Frontend Repo
                                    <ExternalLink className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            )}

                            {project.github?.backend && (
                                <a
                                    href={project.github.backend}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-card/70"
                                >
                                    Backend Repo
                                    <ExternalLink className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            )}

                            {project.github?.admin && (
                                <a
                                    href={project.github.admin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-card/70"
                                >
                                    Admin Repo
                                    <ExternalLink className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                </a>
                            )}

                            <Dialog>
                                <DialogTrigger
                                    render={
                                        <button
                                            type="button"
                                            className="group/link inline-flex shrink-0 items-center gap-2 rounded-full border border-border/60 bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-card/70"
                                        >
                                            Details
                                            <Info className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </button>
                                    }
                                />

                                <DialogContent className="sm:max-w-2xl">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl">
                                            {project.title}
                                        </DialogTitle>
                                        {project.client && (
                                            <DialogDescription>
                                                Client:{" "}
                                                <span className="text-foreground">
                                                    {project.client}
                                                </span>
                                            </DialogDescription>
                                        )}
                                    </DialogHeader>

                                    {/* scrollable body */}
                                    <div className="-mx-4 max-h-[65vh] space-y-8 overflow-y-auto px-4 pt-2 scrollbar-gutter-stable [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
                                        {/* client requirements */}
                                        {project.clientRequirements &&
                                            project.clientRequirements.length >
                                                0 && (
                                                <div>
                                                    <h3 className="mb-4 text-sm font-semibold tracking-widest text-green-600 uppercase">
                                                        Client Requirements
                                                    </h3>
                                                    <ul className="grid gap-3 sm:grid-cols-2">
                                                        {project.clientRequirements.map(
                                                            (req) => (
                                                                <li
                                                                    key={req}
                                                                    className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                                                                >
                                                                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                                                                    <span>
                                                                        {req}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                        {/* what I solved */}
                                        {project.problemsSolved &&
                                            project.problemsSolved.length >
                                                0 && (
                                                <div>
                                                    <h3 className="mb-4 text-sm font-semibold tracking-widest text-green-600 uppercase">
                                                        What I Solved
                                                    </h3>
                                                    <Accordion>
                                                        {project.problemsSolved.map(
                                                            (problem) => (
                                                                <AccordionItem
                                                                    key={
                                                                        problem.title
                                                                    }
                                                                    value={
                                                                        problem.title
                                                                    }
                                                                >
                                                                    <AccordionTrigger className="text-left tracking-wide font-normal text-foreground hover:no-underline">
                                                                        {
                                                                            problem.title
                                                                        }
                                                                    </AccordionTrigger>
                                                                    <AccordionContent>
                                                                        <ul className="space-y-2">
                                                                            {problem.description.map(
                                                                                (
                                                                                    item,
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            item
                                                                                        }
                                                                                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                                                                                    >
                                                                                        <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                                                                                        <span>
                                                                                            {
                                                                                                item
                                                                                            }
                                                                                        </span>
                                                                                    </li>
                                                                                ),
                                                                            )}
                                                                        </ul>
                                                                    </AccordionContent>
                                                                </AccordionItem>
                                                            ),
                                                        )}
                                                    </Accordion>
                                                </div>
                                            )}

                                        {/* tech stack */}
                                        <div>
                                            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                                                <Layers className="size-4" />
                                                Tech Stack
                                            </h3>
                                            <div className="space-y-4">
                                                {iconCategories.map(
                                                    ({ key, label }) => {
                                                        const items =
                                                            project.techStack[
                                                                key
                                                            ];

                                                        if (
                                                            !items ||
                                                            items.length === 0
                                                        ) {
                                                            return null;
                                                        }

                                                        return (
                                                            <div
                                                                key={key}
                                                                className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
                                                            >
                                                                <span className="w-36 shrink-0 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                                                    {label}
                                                                </span>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {items.map(
                                                                        (
                                                                            tech,
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    tech.name
                                                                                }
                                                                                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                                                                            >
                                                                                <Image
                                                                                    src={
                                                                                        tech.icon
                                                                                    }
                                                                                    alt={
                                                                                        tech.name
                                                                                    }
                                                                                    className="size-4 shrink-0 object-contain"
                                                                                />
                                                                                {
                                                                                    tech.name
                                                                                }
                                                                            </span>
                                                                        ),
                                                                    )}
                                                                </div>
                                                            </div>
                                                        );
                                                    },
                                                )}

                                                {/* deployment - no icons */}
                                                {project.techStack.deployment &&
                                                    project.techStack.deployment
                                                        .length > 0 && (
                                                        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
                                                            <span className="w-36 shrink-0 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                                                                Deployment &
                                                                Infra
                                                            </span>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.techStack.deployment.map(
                                                                    (item) => (
                                                                        <span
                                                                            key={
                                                                                item
                                                                            }
                                                                            className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90"
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </span>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    {/* right: image */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-border/60 bg-card lg:aspect-square lg:w-[45%] lg:shrink-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="relative object-contain"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProblemsSolvedSection;
