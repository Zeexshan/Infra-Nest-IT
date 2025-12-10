import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_tech_background_with_blue_and_teal_network_lines.png";
import TechScene from "@/components/3d/TechScene";

export default function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* 3D Scene Background */}
      <TechScene />

      {/* Background Image with Overlay (Optional fallback or layered) */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Innovate. Build. Scale.
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Transform Your Ideas Into <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We specialize in custom software development, turning complex challenges into 
              elegant, scalable, and high-performance digital products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => scrollTo("#contact")}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 w-full sm:w-auto"
                onClick={() => scrollTo("#technologies")}
              >
                View Technologies <Code2 className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
