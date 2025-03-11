import HireHeader from "./HireComponents/HireHeader";
import HireFirst from "./HireComponents/HireFirst";
import HireTimeline from "./HireComponents/HireTimeline";
import HireFeatures from "./HireComponents/HireFeatures";
import HireNavbar from "./HireComponents/HireNavbar";
import HireBottomFeatures from "./HireComponents/HireBottomFeatures";
import WavyLine from "./Components/WavyLine";
import { Helmet } from "react-helmet";

export default function Hire() {
  return (
    <>
      <Helmet>
        <html lang="en"></html>
        <title>Yogesh Bhandari - Web Developer & Freelancer</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hi, I'm Pranav, a web developer. Let's craft your dream website together. Contact me for flawless solutions."
        />
      </Helmet>
      <HireNavbar />
      <HireHeader />
      <HireFirst />
      <HireTimeline />
      {/* <HireProsCons /> */}
      <HireFeatures />
      <HireBottomFeatures />
      <WavyLine />
    </>
  );
}
