import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Services from "@/components/sections/Services";
import FreeConsultation from "@/components/sections/FreeConsultation";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Services />
        <FreeConsultation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
