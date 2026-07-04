import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa6";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { ArrowUpRight } from "lucide-react";

const contactInfo = [
    {
        title: "Email",
        value: "mehedihasan712277@gmail.com",
        href: "mailto:mehedihasan712277@gmail.com",
        icon: HiOutlineEnvelope,
        external: false,
    },
    {
        title: "Phone",
        value: "+880 1603-435817",
        href: "tel:+8801603435817",
        icon: HiOutlinePhone,
        external: false,
    },
    {
        title: "WhatsApp",
        value: "Chat on WhatsApp",
        href: "https://wa.me/8801603435817",
        icon: FaWhatsapp,
        external: true,
    },
    {
        title: "LinkedIn",
        value: "mdmehedihasan-web-developer",
        href: "https://www.linkedin.com/in/mdmehedihasan-web-developer",
        icon: FaLinkedin,
        external: true,
    },
    {
        title: "GitHub",
        value: "mehedihasan712277",
        href: "https://github.com/mehedihasan712277",
        icon: FaGithub,
        external: true,
    },
    {
        title: "Facebook",
        value: "Message on Facebook",
        href: "https://www.facebook.com/share/1CRxz811X9",
        icon: FaFacebook,
        external: true,
    },
];

const Contact = () => {
    return (
        <div id="contact" className="py-20">
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    Get In Touch
                </span>
                <p className="my-4 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                    Contact Me
                </p>
                <p className="max-w-3xl text-xl tracking-wide text-muted-foreground">
                    Have a project in mind or just want to say hi? Reach out
                    through any of the channels below.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {contactInfo.map(
                    ({ title, value, href, icon: Icon, external }) => (
                        <Link
                            key={title}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="group relative flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/70 hover:shadow-xl hover:shadow-black/20"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
                                    <Icon className="size-5" />
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
                                        {title}
                                    </span>
                                    <span className="truncate text-base font-semibold text-foreground">
                                        {value}
                                    </span>
                                </div>
                            </div>
                            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                        </Link>
                    ),
                )}
            </div>
        </div>
    );
};

export default Contact;
