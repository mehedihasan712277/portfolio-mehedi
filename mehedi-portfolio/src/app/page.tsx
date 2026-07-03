import About from "./_components/about/About";
import HeroSection from "./_components/hero/page";
import Education from "./_components/education/Education";
import Contact from "./_components/contact/Contact";
import Experience from "./_components/experience/Experience";
import Skill from "./_components/skill/page";
import Project from "./_components/project/Project";
import Service from "./_components/service/Service";

const HomePage = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Skill></Skill>
            <Experience></Experience>
            <Project></Project>
            <Service></Service>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;
