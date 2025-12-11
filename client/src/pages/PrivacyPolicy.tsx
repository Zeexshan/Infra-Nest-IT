import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>When you fill out our contact form, we collect personal information including your name, email address, and phone number. We use this solely to respond to your inquiries.</p>
            </section>
            <Separator className="bg-primary/20" />
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Data</h2>
              <p>We do not sell, trade, or rent your personal identification information to others. We store this data securely and only use it for business communication regarding your project requirements.</p>
            </section>
            <Separator className="bg-primary/20" />
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Contact Us</h2>
              <p>If you have questions about this policy, please contact us at <strong>infranestit@gmail.com</strong>.</p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
