import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Industries from "../components/Industries";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import {
  MonitorCog,
  BarChart3,
  ShieldCheck,
  Globe,
} from "lucide-react";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;