interface EducationItem {
    degree: string;
    institution: string;
    group: string | null;
    duration: string;
    badges: string[];
}

const educationalInfo: EducationItem[] = [
    {
        degree: "BSc in Textile Engineering (Management)",
        institution: "Bangladesh University of Textiles",
        group: null,
        duration: "2022 — Present",
        badges: [
            // "Level 4, Term 2 — Final semester",
            "Appeared in BSc final exam",
        ],
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Chittagong College",
        group: "Science",
        duration: "2020",
        badges: ["GPA 5.00 / 5.00"],
    },
    {
        degree: "Secondary School Certificate (SSC)",
        institution: "Bangladesh Navy School & College, Chittagong",
        group: "Science",
        duration: "2018",
        badges: ["GPA 5.00 / 5.00", "Scholarship awarded"],
    },
];

const Education = () => {
    return (
        <div id="education" className="py-20">
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Academic Path
                </span>
                <p className="my-4 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                    My Educational Background
                </p>
                <p className="max-w-3xl text-xl tracking-wide text-muted-foreground">
                    From secondary school to university — the academic
                    milestones that shaped my foundation and curiosity for
                    technology.
                </p>
            </div>

            <div className="space-y-5">
                {educationalInfo.map((edu) => (
                    <div
                        key={edu.degree}
                        className="group rounded-2xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/70 hover:shadow-xl hover:shadow-black/20 sm:p-8"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                                    {edu.degree}
                                </h3>
                                <p className="text-sm text-muted-foreground sm:text-base">
                                    {edu.institution}
                                    {edu.group && (
                                        <span className="text-muted-foreground/70">
                                            {" "}
                                            &middot; {edu.group}
                                        </span>
                                    )}
                                </p>
                            </div>

                            <span className="shrink-0 rounded-full border border-border bg-accent/10 px-3 py-1 text-xs font-medium text-accent-foreground sm:text-sm">
                                {edu.duration}
                            </span>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {edu.badges.map((badge) => {
                                const isScholarship =
                                    badge.toLowerCase() ===
                                    "scholarship awarded";

                                return (
                                    <span
                                        key={badge}
                                        className={
                                            isScholarship
                                                ? "rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 sm:text-sm"
                                                : "rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground/90 sm:text-sm"
                                        }
                                    >
                                        {badge}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
