import htmlIcon from "@/assets/html.png";
import cssIcon from "@/assets/css.png";
import tailwindIcon from "@/assets/tailwind.png";
import muiIcon from "@/assets/mui.png";
import shadcnIcon from "@/assets/shadcn.png";
import jsIcon from "@/assets/javascript.png";
import tsIcon from "@/assets/typescript.png";
import cIcon from "@/assets/c.png";
import pythonIcon from "@/assets/python.png";
import reactIcon from "@/assets/react.png";
import nextjsIcon from "@/assets/nextjs.png";
import nodejsIcon from "@/assets/nodejs.png";
import expressIcon from "@/assets/expressjs.png";
import mongodbIcon from "@/assets/mongodb.png";
import mongooseIcon from "@/assets/mongoose.png";
import postgresqlIcon from "@/assets/postgresql.png";
import prismaIcon from "@/assets/prisma.png";
import firebaseIcon from "@/assets/firebase.png";
import figmaIcon from "@/assets/figma.png";
import canvaIcon from "@/assets/canva.png";
import photoshopIcon from "@/assets/photoshop.png";
import gitIcon from "@/assets/git.png";
import githubIcon from "@/assets/github.png";
import vercelIcon from "@/assets/vercel.png";
import netlifyIcon from "@/assets/netlify.png";
import cpanelIcon from "@/assets/cpanel.png";
import hpanelIcon from "@/assets/hpanel.png";
import webuzoIcon from "@/assets/webuzo.png";
import vpsIcon from "@/assets/vps.png";
import linuxIcon from "@/assets/linux.png";
import Image, { StaticImageData } from "next/image";
import {
    Code2,
    LayoutPanelLeft,
    Server,
    Palette,
    Rocket,
    Sparkles,
    BadgeCheck,
    Smartphone,
    Gauge,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";

type SkillIcon = StaticImageData | LucideIcon;

interface SkillItem {
    name: string;
    icon: SkillIcon;
}

interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: SkillItem[];
    // Tailwind classes are kept as full literal strings below (not built
    // dynamically via template strings) so the JIT compiler can detect them.
    color: {
        border: string;
        bg: string;
        text: string;
    };
}

// TODO: replace with data fetched from the API
const skillCategories: SkillCategory[] = [
    {
        title: "Programming Language",
        icon: Code2,
        color: {
            border: "border-blue-500/40",
            bg: "bg-blue-500/10",
            text: "text-blue-500",
        },
        skills: [
            { name: "JavaScript", icon: jsIcon },
            { name: "TypeScript", icon: tsIcon },
            { name: "Python", icon: pythonIcon },
            { name: "C", icon: cIcon },
        ],
    },
    {
        title: "Frontend",
        icon: LayoutPanelLeft,
        color: {
            border: "border-cyan-500/40",
            bg: "bg-cyan-500/10",
            text: "text-cyan-500",
        },
        skills: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "Next.js", icon: nextjsIcon },
            { name: "React.js", icon: reactIcon },
            { name: "Tailwind CSS", icon: tailwindIcon },
            { name: "shadcn/ui", icon: shadcnIcon },
            { name: "MUI", icon: muiIcon },
        ],
    },
    {
        title: "Backend & Database",
        icon: Server,
        color: {
            border: "border-emerald-500/40",
            bg: "bg-emerald-500/10",
            text: "text-emerald-500",
        },
        skills: [
            { name: "Node.js", icon: nodejsIcon },
            { name: "Express.js", icon: expressIcon },
            { name: "MongoDB", icon: mongodbIcon },
            { name: "Mongoose", icon: mongooseIcon },
            { name: "PostgreSQL", icon: postgresqlIcon },
            { name: "Prisma", icon: prismaIcon },
            { name: "Firebase", icon: firebaseIcon },
        ],
    },
    {
        title: "Design Tools",
        icon: Palette,
        color: {
            border: "border-pink-500/40",
            bg: "bg-pink-500/10",
            text: "text-pink-500",
        },
        skills: [
            { name: "Figma", icon: figmaIcon },
            { name: "Canva", icon: canvaIcon },
            { name: "Adobe Photoshop", icon: photoshopIcon },
        ],
    },
    {
        title: "Deployment & Version Control",
        icon: Rocket,
        color: {
            border: "border-orange-500/40",
            bg: "bg-orange-500/10",
            text: "text-orange-500",
        },
        skills: [
            { name: "VPS", icon: vpsIcon },
            { name: "hPanel", icon: hpanelIcon },
            { name: "cPanel", icon: cpanelIcon },
            { name: "Webuzo", icon: webuzoIcon },
            { name: "Vercel", icon: vercelIcon },
            { name: "Netlify", icon: netlifyIcon },
            { name: "Git", icon: gitIcon },
            { name: "GitHub", icon: githubIcon },
            { name: "Linux", icon: linuxIcon },
        ],
    },
    {
        title: "Others",
        icon: Sparkles,
        color: {
            border: "border-violet-500/40",
            bg: "bg-violet-500/10",
            text: "text-violet-500",
        },
        skills: [
            { name: "Best Practices", icon: BadgeCheck },
            { name: "Responsive Design", icon: Smartphone },
            { name: "Optimization", icon: Gauge },
            { name: "Security", icon: ShieldCheck },
        ],
    },
];

const isImageIcon = (icon: SkillIcon): icon is StaticImageData =>
    typeof icon === "object" && icon !== null && "src" in icon;

const Skill = () => {
    return (
        <div id="skills" className="py-20">
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Technical Arsenal
                </span>
                <p className="my-4 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                    Mastering the Modern Stack
                </p>
                <p className="max-w-3xl text-xl tracking-wide text-muted-foreground">
                    A comprehensive view of the technologies and tools I
                    leverage to build scalable, high-performance applications.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="group rounded-3xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/70 hover:shadow-xl hover:shadow-black/20 sm:p-8"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div
                                className={`flex size-12 shrink-0 items-center justify-center rounded-xl border transition-colors ${category.color.border} ${category.color.bg}`}
                            >
                                <category.icon
                                    className={`size-5 ${category.color.text}`}
                                />
                            </div>
                            <p className="text-xl font-semibold text-foreground">
                                {category.title}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3.5 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-accent hover:bg-accent/10"
                                >
                                    {isImageIcon(skill.icon) ? (
                                        <Image
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="size-5 shrink-0 object-contain"
                                        />
                                    ) : (
                                        <skill.icon className="size-4 shrink-0 text-muted-foreground" />
                                    )}
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skill;
