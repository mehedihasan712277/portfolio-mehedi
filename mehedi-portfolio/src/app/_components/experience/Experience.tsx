import { StaticImageData } from "next/image";
import freelanceIcon from "@/assets/mehedi.png";
import outlierIcon from "@/assets/outlier.jpg";
import bigmodIcon from "@/assets/bigmod.jpg";
import ExperienceCard from "./ExperienceCard";

const data: {
    _id: string;
    time: string;
    company: string;
    companyDescription: string;
    role: string;
    companyLink?: string;
    logo: StaticImageData;
}[] = [
    {
        _id: "1",
        time: "April 2026 - Present",
        company: "Bigmod Technologies",
        companyDescription:
            "A software company where I worked remotely as a Frontend Developer, contributing to client-facing web projects.",
        role: "Frontend Developer",
        companyLink: "https://bigmodtech.com/",
        logo: bigmodIcon,
    },
    {
        _id: "2",
        time: "Nov 2024 - May 2025",
        company: "Outlier.ai (Scale AI)",
        companyDescription:
            "An American IT platform that connects subject matter experts with projects aimed at advancing generative AI technologies.",
        role: "AI Trainer & Reviewer",
        companyLink: "https://outlier.ai",
        logo: outlierIcon,
    },
    {
        _id: "3",
        time: "June 2025 - Present",
        company: "Independent / Freelance",
        companyDescription:
            "Working directly with clients across various industries to deliver full-stack web solutions — from corporate portfolios and ERP apps to LMS platforms.",
        role: "Full Stack Web Developer",
        companyLink: "",
        logo: freelanceIcon,
    },
];

const Experience = () => {
    return (
        <div id="experience" className="py-20">
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Career Path
                </span>
                <p className="my-4 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                    Work Experience
                </p>
                <p className="max-w-3xl text-xl tracking-wide text-muted-foreground">
                    Roles and companies that have shaped my skills and
                    perspective.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((ele) => (
                    <ExperienceCard key={ele._id} info={ele} />
                ))}
            </div>
        </div>
    );
};

export default Experience;
