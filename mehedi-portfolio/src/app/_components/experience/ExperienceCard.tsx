import Image, { StaticImageData } from "next/image";
import { Briefcase, MapPin, Clock, Globe } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface ExperienceDetails {
    section1Title: string;
    companyWebsite?: string;
    companyLocation: string;
    section1Content: string;
    section2Title: string;
    section2Content: string[];
}

interface Experience {
    _id: string;
    time: string;
    company: string;
    companyDescription: string;
    role: string;
    companyLink?: string;
    logo: StaticImageData;
    location: string;
    jobType: string;
    details: ExperienceDetails;
}

interface ExperienceCardProps {
    info: Experience;
}

// color maps — extend these if you add more variants later
const locationColorMap: Record<string, string> = {
    Remote: " text-emerald-400",
    "On site": " text-orange-400",
    Hybrid: " text-sky-400",
};

const jobTypeColorMap: Record<string, string> = {
    "Full-time": "text-violet-400",
    "Part-time": "text-amber-400",
    Contract: "text-rose-400",
};

// fallback for anything not in the map
const defaultBadgeColor =
    "border-border/60 bg-background/60 text-muted-foreground";

const ExperienceCard = ({ info }: ExperienceCardProps) => {
    const locationColor = locationColorMap[info.location] ?? defaultBadgeColor;
    const jobTypeColor = jobTypeColorMap[info.jobType] ?? defaultBadgeColor;

    return (
        <div className="group relative flex flex-col justify-between border border-border/60 bg-card/40 gap-6 rounded-3xl   p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/70 hover:shadow-xl hover:shadow-black/20 sm:p-8">
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
            <div className="relative flex justify-between items-center gap-3 border-t border-border/60 pt-4 transition-colors duration-300 group-hover:border-accent">
                <Dialog>
                    <DialogTrigger
                        render={
                            <button
                                type="button"
                                className="bg-card px-4 py-1.5 rounded-full cursor-pointer text-[10px] border border-border tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-accent group-hover:text-foreground"
                            >
                                Details
                            </button>
                        }
                    />
                    <DialogContent className="md:max-w-3xl">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2.5">
                                <Image
                                    src={info.logo}
                                    alt={`${info.company} logo`}
                                    width={28}
                                    height={28}
                                    className="size-7 shrink-0 rounded-md object-contain"
                                />
                                {info.role} - {info.company}
                            </DialogTitle>
                            <DialogDescription>{info.time}</DialogDescription>
                        </DialogHeader>
                        <div className="-mx-4 max-h-[65vh] overflow-y-auto px-4">
                            {/* section 1 */}
                            <div className="mb-5">
                                <h4 className="mb-1.5 text-sm font-semibold tracking-wide text-foreground">
                                    {info.details.section1Title}
                                </h4>
                                <p className="mb-2 leading-relaxed text-muted-foreground">
                                    {info.details.section1Content}
                                </p>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                                    {info.details.companyWebsite && (
                                        <a
                                            href={info.details.companyWebsite}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 hover:text-foreground"
                                        >
                                            <Globe className="size-3.5" />
                                            {info.details.companyWebsite.replace(
                                                /^https?:\/\//,
                                                "",
                                            )}
                                        </a>
                                    )}
                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin className="size-3.5" />
                                        {info.details.companyLocation}
                                    </span>
                                </div>
                            </div>

                            {/* section 2 */}
                            <div className="mb-4">
                                <h4 className="mb-1.5 text-sm font-semibold tracking-wide text-foreground">
                                    {info.details.section2Title}
                                </h4>
                                <ul className="list-disc space-y-1.5 pl-5 leading-relaxed text-muted-foreground">
                                    {info.details.section2Content.map(
                                        (item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <div className="flex flex-wrap items-center gap-1.5">
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${locationColor}`}
                                >
                                    <MapPin className="size-3.5" />
                                    {info.location}
                                </span>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${jobTypeColor}`}
                                >
                                    <Clock className="size-3.5" />
                                    {info.jobType}
                                </span>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>

                {/* location + job type */}
                <div className="flex flex-wrap items-center gap-2 xl:gap-3">
                    <span
                        className={`inline-flex items-center gap-1 text-sm  ${locationColor}`}
                    >
                        <MapPin className="size-3.5" />
                        {info.location}
                    </span>
                    <span
                        className={`inline-flex items-center gap-1 text-sm  ${jobTypeColor}`}
                    >
                        <Clock className="size-3.5" />
                        {info.jobType}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
