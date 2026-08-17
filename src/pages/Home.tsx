import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import IntroPoints from "../components/IntroPoints/IntroPoints";
import Investment from "../components/Investment/Investment";
import Journey from "../components/Journey/Journey";
import Mentorship from "../components/Mentorship/Mentorship";
import NavBar from "../components/NavBar/NavBar";
import Place from "../components/Place/Place";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />
      <Hero />
      <IntroPoints />
      <Mentorship />
      <Investment />
      <Place />
      <Journey />
      <Faq />
      <Footer />
    </div>
  );
}
