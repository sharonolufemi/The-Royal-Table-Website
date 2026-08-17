import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />
      <About />
      <Footer />
    </div>
  );
}
