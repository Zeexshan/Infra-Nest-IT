import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Clock } from "lucide-react";

export default function FreeConsultation() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 container mx-auto px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-background to-secondary border border-primary/20 p-8 md:p-12"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a free consultation and project estimate within 24 hours
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Free 30-minute consultation",
                "No obligation project estimate",
                "Tech stack recommendations",
                "Timeline & cost breakdown"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-4">
            {/* CHANGED: p-8 to p-6 md:p-8 to save space on mobile */}
            <div className="bg-background/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 w-full max-w-md text-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                // CHANGED: Added "whitespace-normal h-auto text-base sm:text-lg" 
                // Removed fixed "text-lg" to allow scaling
                className="w-full whitespace-normal h-auto text-base sm:text-lg py-6 mb-4 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 shrink-0" /> {/* Added shrink-0 to icon */}
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>Response time: Within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
