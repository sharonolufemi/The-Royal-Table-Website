import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
}
