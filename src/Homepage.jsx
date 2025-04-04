import HeroMain from "./Components/HeroMain";
import AboutMe from "./Components/AboutSection";
import ToolsSection from "./Components/ToolsSection";
import { Projects } from "./Components/Projects";
import ContactSection from "./Components/Footer";
import WavyLine from "./Components/WavyLine";
import Header from "./Components/Header";
import ExtraProjectBottom from "./Components/ExtraProjectsBottom";
import { Helmet } from "react-helmet";
import BlogHome from "./Components/BlogHome";

function Homepage() {
  return (
    <div>
      <Helmet>
        <html lang="en"></html>
        <title>Yogesh Bhandari - Web Developer & Freelancer</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Experienced Full Stack Developer with 4 years of expertise in developing applications using Python, PHP, Laravel, Django, Django rest framework, React JS , tailwind, HTML, CSS, JavaScript, jQuery, MySQL. Proven track record of designing, developing, and deploying applications from scratch. Applying for the position of Backend Developer at Lavessta enterprises Pvt Ltd to leverage my technical expertise to create innovative projects."
        />
      </Helmet>

      <Header />
      <HeroMain />
      <AboutMe />
      <ToolsSection />
      <Projects />
      <ExtraProjectBottom />
      <ContactSection />
    </div>
  );
}

export default Homepage;
