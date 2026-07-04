import Image, { StaticImageData } from "next/image";
import { Briefcase } from "lucide-react";

interface Experience {
    _id: string;
    time: string;
    company: string;
    companyDescription: string;
    role: string;
    companyLink?: string;
    logo: StaticImageData;
}

interface ExperienceCardProps {
    info: Experience;
}

const ExperienceCard = ({ info }: ExperienceCardProps) => {
    return (
        <div className="group relative flex flex-col justify-between gap-6 rounded-3xl  bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/70 hover:shadow-xl hover:shadow-black/20 sm:p-8">
            {/* content */}
            <div className="relative flex flex-col gap-3">
                {/* time badge */}
                <span className="w-fit rounded-full border border-border/60 px-3 py-0.5 text-[11px] font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
                    {info.time}
                </span>

                {/* role + icon */}
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl leading-snug tracking-tight text-foreground">
                        {info.role}
                    </h3>
                    <span className="shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                        <Briefcase className="size-5" />
                    </span>
                </div>

                {/* company - logo + name */}
                <div className="flex items-center gap-2.5">
                    <Image
                        src={info.logo}
                        alt={`${info.company} logo`}
                        width={28}
                        height={28}
                        className="size-7 shrink-0 rounded-md object-contain"
                    />

                    {info.companyLink ? (
                        <a
                            href={info.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit border-b border-foreground/30 text-base font-semibold text-foreground transition-colors duration-200 hover:border-foreground hover:text-foreground"
                        >
                            {info.company}
                        </a>
                    ) : (
                        <p className="text-base font-semibold text-foreground">
                            {info.company}
                        </p>
                    )}
                </div>

                {/* description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                    {info.companyDescription}
                </p>
            </div>

            {/* bottom row */}
            <div className="relative flex items-center gap-3 border-t border-border/60 pt-4 transition-colors duration-300 group-hover:border-accent">
                <span className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase transition-colors duration-300 group-hover:text-foreground">
                    Experience
                </span>
            </div>
        </div>
    );
};

export default ExperienceCard;
