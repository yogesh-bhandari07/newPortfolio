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
          content="I'm Pranav, a 16-year-old web developer & freelancer with 3M+ website views & $4K+ in funding. Explore my portfolio for my work and experience."
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
