import Link from "next/link";

const navLinks = [
    { title: "Home", href: "#home" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
];

const Footer = () => {
    return (
        <footer className="border-t border-border/60 bg-secondary">
            <div className="mxl:max-w-7xl mxl:px-4 mx-auto max-w-6xl px-4 py-12 md:px-6">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
                    {/* brand + status */}
                    <div className="flex flex-col items-center gap-3 md:items-start">
                        <p className="text-xl xl:text-4xl font-bold tracking-wide text-foreground">
                            Let's Build Together
                        </p>
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                            </span>
                            <p className="text-sm text-muted-foreground">
                                Available for new opportunities
                            </p>
                        </div>
                    </div>

                    {/* nav links */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
                        {navLinks.map(({ title, href }) => (
                            <Link
                                key={title}
                                href={href}
                                className="transition-colors duration-300 hover:text-foreground"
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-10 flex items-center justify-center border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Md. Mehedi Hasan. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
