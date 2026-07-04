import About from "./_components/about/About";
import HeroSection from "./_components/hero/page";
import Education from "./_components/education/Education";
// import Contact from "./_components/contact/Contact";
import Experience from "./_components/experience/Experience";
import Skill from "./_components/skill/page";
import Project from "./_components/project/Project";
import Service from "./_components/service/Service";

const HomePage = () => {
    return (
        <div className="px-4 md:px-6 max-w-6xl mxl:px-4 mxl:max-w-7xl mx-auto">
            <HeroSection></HeroSection>
            <About></About>
            <Skill></Skill>
            <Experience></Experience>
            <Project></Project>
            <Service></Service>
            <Education></Education>
            {/* <Contact></Contact> */}
        </div>
    );
};

export default HomePage;
