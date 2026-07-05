import nextjsIcon from "@/assets/nextjs.png";
import tsIcon from "@/assets/typescript.png";
import expressIcon from "@/assets/expressjs.png";
import mongodbIcon from "@/assets/mongodb.png";
import mongooseIcon from "@/assets/mongoose.png";
import citySolutionImg from "@/assets/website.png";
import tution from "@/assets/tutionhouse.webp";
import quran from "@/assets/quran-project.png";

import ProblemsSolvedSection from "./ProblemsSolvedSection";

const projects = [
    {
        title: "Corporate Website with Custom Admin Panel",
        client: "City Solution Bd",
        liveLink: "https://citysolution.com.bd/",
        subtitle:
            "A complete rebuild of the website from the ground up, focused on delivering improved performance, improved SEO, and a modern user experience. The project included developing a fully customized admin panel that enables administrators to manage website content and other dynamic data efficiently without requiring technical knowledge.",
        image: citySolutionImg,
        bgImage: citySolutionImg,

        meta: {
            company: "City Solution Bd",
            type: "solo" as const,
            role: "Full Stack Developer",
        },

        clientRequirements: [
            "Build a fast, smooth, and SEO-friendly website to replace the previous slow and glitchy version.",
            "Reduce page loading time and improve overall website performance.",
            "Provide a custom admin dashboard so the client can manage all website content without editing code.",
        ],

        problemsSolved: [
            {
                title: "🚀 Rebuilt the Website for Speed & SEO",
                description: [
                    "Rebuilt the website from scratch with a clean, modern design.",
                    "Organized the content to better highlight the client's services and build trust.",
                    "Applied SEO best practices to improve user experience and search engine visibility.",
                ],
            },
            {
                title: "⚡ Improved Performance from GTmetrix Grade E to Grade A",
                description: [
                    "Used Next.js Static Site Generation (SSG) for faster page loads.",
                    "Optimized images and reduced unnecessary JavaScript.",
                    "Improved the GTmetrix score from Grade E to Grade A by following performance best practices.",
                ],
            },
            {
                title: "🔍 Improved Search Engine Visibility",
                description: [
                    "Added XML sitemap and robots.txt.",
                    "Configured Open Graph metadata for better social sharing.",
                    "Set up Google Search Console to improve website indexing.",
                ],
            },
            {
                title: "🛠️ Built a Custom Admin Dashboard",
                description: [
                    "Developed a secure admin panel for managing website content.",
                    "Made the interface simple and user-friendly for non-technical users.",
                    "Replaced the previous static workflow with a dynamic content management system.",
                ],
            },
            {
                title: "🌐 Modernized Deployment & Infrastructure",
                description: [
                    "Migrated the website from cPanel hosting to Vercel.",
                    "Configured the existing domain for the new deployment.",
                    "Set up and managed the client's business email.",
                ],
            },
        ],

        techStack: {
            frontend: [
                { name: "Next.js", icon: nextjsIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
            backend: [
                { name: "Express.js", icon: expressIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
            database: [
                { name: "MongoDB", icon: mongodbIcon },
                { name: "Mongoose ODM", icon: mongooseIcon },
            ],
            deployment: [
                "Vercel",
                "Domain Configuration",
                "Business Email Configuration",
            ],
        },

        // github: {
        //     frontend: "https://github.com/your-username/city-solution-frontend",
        //     backend: "https://github.com/your-username/city-solution-backend",
        //     admin: "https://github.com/your-username/city-solution-admin",
        // },
    },
    {
        // personal project - no client, no client requirements
        title: "Tuition House: A Tution Media Platform in Bangladesh",
        // no client field - this is a personal/self-initiated project
        liveLink: "https://tuitionhouse.org/",
        subtitle:
            "It's an online tutoring and tuition marketplace that connects students with tutors for a variety of academic needs. The platform simplifies finding the right tutor by matching students with qualified educators based on their learning needs.",
        image: tution, // dummy image, replace with actual project screenshot
        bgImage: citySolutionImg, // dummy background image

        meta: {
            // no company field - personal project
            company: "Tuition House",
            type: "team" as const,
            role: "Front End Developer",
        },

        // no clientRequirements - personal project

        problemsSolved: [
            {
                title: "Resolved UI and API Issues",
                description: [
                    "Fixed multiple frontend UI bugs to improve usability and consistency across the platform.",
                    "Resolved API-related issues, ensuring stable data fetching, form submissions, and smoother user interactions.",
                ],
            },
            {
                title: "Implemented New Features",
                description: [
                    "Developed a real-time chatbox for seamless communication between users.",
                    "Added a teacher details management table in the admin panel, implemented sorting functionality, and fixed debouncing issues to improve search performance.",
                ],
            },
            {
                title: "Enhanced Teacher Profile Management",
                description: [
                    "Built and improved the teacher profile section with a cleaner, more informative layout.",
                    "Fixed various bugs related to profile management, data updates, and overall user experience.",
                ],
            },
        ],

        techStack: {
            frontend: [
                { name: "Next.js", icon: nextjsIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
        },

        // github: {
        //     frontend: "https://github.com/your-username/quran-app-frontend",
        //     backend: "https://github.com/your-username/quran-app-backend",

        // },
    },
    {
        // personal project - no client, no client requirements
        title: "Quran App",
        // no client field - this is a personal/self-initiated project
        liveLink: "https://quran-app-demo.vercel.app/",
        subtitle:
            "The Quran web app is fast and easy to use, providing a smooth reading experience with SSG. It includes powerful surah and translation search, along with a settings panel where users can change the font style and font size to read more comfortably. The website is fully responsive, so it works perfectly on desktops, tablets, and mobile devices.",
        image: quran, // dummy image, replace with actual project screenshot
        bgImage: citySolutionImg, // dummy background image

        meta: {
            // no company field - personal project
            company: "Demo",
            type: "solo" as const,
            role: "Full Stack Developer",
        },

        // no clientRequirements - personal project

        problemsSolved: [
            {
                title: "📖 Built a Clean Reading Experience",
                description: [
                    "Designed a simple, distraction-free reading layout for surahs and ayahs.",
                    "Added adjustable font sizes and Arabic script rendering for readability.",
                ],
            },
            {
                title: "🌍 Added Multi-language Translations",
                description: [
                    "Integrated multiple translation sources for different languages.",
                    "Allowed users to toggle translations on and off per ayah.",
                ],
            },
        ],

        techStack: {
            frontend: [
                { name: "Next.js", icon: nextjsIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
            backend: [
                { name: "Express.js", icon: expressIcon },
                { name: "TypeScript", icon: tsIcon },
            ],
            database: [
                { name: "MongoDB", icon: mongodbIcon },
                { name: "Mongoose ODM", icon: mongooseIcon },
            ],
            deployment: ["Vercel"],
        },

        github: {
            frontend: "https://github.com/mehedihasan712277/quran_app",
            backend: "https://github.com/mehedihasan712277/quran_server",
            // no admin repo for this project
        },
    },
];

const Project = () => {
    return (
        <div id="projects" className="py-20">
            {/* ------------------------heading part --------------------- */}
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                    previous work
                </span>

                <p className="my-4 text-3xl font-bold tracking-wider text-foreground md:text-6xl">
                    Solutions I've Delivered
                </p>

                <p className="max-w-3xl text-xl tracking-wide text-muted-foreground">
                    Businesses where I helped improve website performance,
                    designed and built new websites, fixed bugs, and added new
                    features.
                </p>
            </div>

            <ProblemsSolvedSection projects={projects} />
        </div>
    );
};

export default Project;
