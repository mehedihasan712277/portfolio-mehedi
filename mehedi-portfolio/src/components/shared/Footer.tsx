import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

const contactInfo = [
    {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/mdmehedihasan-web-developer",
        icon: FaLinkedin,
        external: true,
    },
    {
        title: "GitHub",
        href: "https://github.com/mehedihasan712277",
        icon: FaGithub,
        external: true,
    },
    {
        title: "WhatsApp",
        href: "https://wa.me/8801603435817",
        icon: FaWhatsapp,
        external: true,
    },
    {
        title: "Email",
        href: "mailto:mdmehedihasan.web.developer@gmail.com",
        icon: HiOutlineEnvelope,
        external: false,
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com/share/1CRxz811X9",
        icon: FaFacebook,
        external: true,
    },
    {
        title: "Phone",
        href: "tel:+8801603435817",
        icon: HiOutlinePhone,
        external: false,
    },
];

const Footer = () => {
    return (
        <footer className="bg-secondary pt-20">
            <div className="mxl:max-w-7xl mxl:px-4 mx-auto max-w-6xl px-4 md:px-6">
                <div className="flex flex-col md:items-center justify-between gap-8 pb-12 md:flex-row">
                    <div>
                        <p className="text-3xl font-bold xl:font-extrabold tracking-wide sm:text-5xl xl:text-6xl">
                            Let's build together.
                        </p>
                        <div className="mt-4 flex items-center gap-2.5">
                            <span className="relative flex size-2.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
                            </span>
                            <p className="sm:tracking-widest text-muted-foreground sm:text-lg">
                                Available for new opportunities
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 md:justify-end">
                        {contactInfo.map(
                            ({ title, href, icon: Icon, external }) => (
                                <Link
                                    key={title}
                                    href={href}
                                    title={title}
                                    aria-label={title}
                                    target={external ? "_blank" : undefined}
                                    rel={
                                        external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="group flex size-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent/10 mf:size-12"
                                >
                                    <Icon className="size-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:size-5" />
                                </Link>
                            ),
                        )}
                    </div>
                </div>

                <div className="flex justify-center border-t py-10 text-center text-muted-foreground">
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
