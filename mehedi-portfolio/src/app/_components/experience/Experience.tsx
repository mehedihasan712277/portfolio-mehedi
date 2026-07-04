import { StaticImageData } from "next/image";
import freelanceIcon from "@/assets/client.png";
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
    location: string;
    jobType: string;
    details: {
        section1Title: string;
        companyWebsite?: string;
        companyLocation: string;
        section1Content: string;
        section2Title: string;
        section2Content: string[];
    };
}[] = [
    {
        _id: "1",
        time: "April 2026 - Present",
        company: "Bigmod Technologies",
        companyDescription:
            "A software company where I am working remotely as a Frontend Developer, contributing to web projects.",
        role: "Frontend Developer",
        companyLink: "https://bigmodtech.com/",
        logo: bigmodIcon,
        location: "Remote",
        jobType: "Part-time",
        details: {
            section1Title: "Company Details",
            companyWebsite: "https://bigmodtech.com/",
            companyLocation: "Rampura, Dhaka, Bangladesh",
            section1Content:
                "Bigmod Technologies is a software company that builds web and digital products for clients across various industries, with a focus on clean, modern, and scalable frontend engineering.",
            section2Title: "My Role",
            section2Content: [
                "Building and maintaining responsive UI components using React, Next.js, and Tailwind CSS",
                "Collaborating with backend engineers to integrate REST APIs",
                "Optimizing page performance and load times",
                "Translating Figma designs into pixel-accurate, accessible interfaces",
                "Participating in code reviews and improving the team's component library",
            ],
        },
    },
    {
        _id: "2",
        time: "Nov 2024 - May 2025",
        company: "Outlier.ai (Scale AI)",
        companyDescription:
            "An American AI platform focused on advancing generative AI technologies, where I trained AI models to generate stunning website designs.",
        role: "AI Trainer & Reviewer",
        companyLink: "https://outlier.ai",
        logo: outlierIcon,
        location: "Remote",
        jobType: "Contract",
        details: {
            section1Title: "Company Details",
            companyWebsite: "https://outlier.ai",
            companyLocation: "San Francisco, USA",
            section1Content:
                "Outlier.ai, backed by Scale AI, connects skilled professionals with leading AI labs to help train and evaluate large language models across coding, writing, and design tasks.",
            section2Title: "My Role",
            section2Content: [
                "Reviewed and ranked AI-generated frontend code and website layouts",
                "Evaluated outputs for quality, accuracy, and adherence to design principles",
                "Wrote detailed feedback to help fine-tune the model's design and UX understanding",
                "Assessed code correctness across HTML, CSS, and React projects",
            ],
        },
    },
    {
        _id: "3",
        time: "June 2025 - Present",
        company: "Independent / Freelance",
        companyDescription:
            "Working directly with clients to deliver full-stack web solutions, including corporate websites, e-commerce applications, and LMS platforms",
        role: "Full Stack Web Developer",
        companyLink: "",
        logo: freelanceIcon,
        location: "Remote",
        jobType: "Full-time",
        details: {
            section1Title: "Clients",
            companyLocation: "Remote - Worldwide",
            section1Content:
                "Working with small businesses, startups, and individual entrepreneurs across different industries who needed custom corporate websites, online stores, and learning platforms built from the ground up. Some of my client are - City Solution, TheKahaf, Khati, J S Monndt, Vivid Interior & Design, Batch Point, Sparex BD",
            section2Title: "My Services",
            section2Content: [
                "End-to-end full-stack web application development",
                "Corporate and business websites",
                "E-commerce applications with payment integration",
                "LMS platforms with role-based dashboards",
                "UI/UX design and requirement gathering to deployment",
            ],
        },
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
