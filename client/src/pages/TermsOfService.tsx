import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 md:px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the website and services of <strong>Infra Nest IT</strong>, you agree to be bound by these Terms of Service. 
                If you do not agree with any part of these terms, you are prohibited from using our services.
              </p>
            </section>

            <Separator className="bg-primary/20" />

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Offered</h2>
              <p>
                Infra Nest IT provides custom software development, web application development, API integration, and related consulting services. 
                The specific deliverables and timelines for paid projects will be outlined in separate service agreements or contracts signed by both parties.
              </p>
            </section>

            <Separator className="bg-primary/20" />

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
              <p>
                Unless otherwise stated in a specific client contract, all original code, designs, and content created by Infra Nest IT regarding our own branding and website remain the intellectual property of Infra Nest IT. 
                Client project ownership rights are determined by the specific service agreement governing that project.
              </p>
            </section>

            <Separator className="bg-primary/20" />

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
              <p>
                Infra Nest IT shall not be held liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. 
                While we strive for perfection, we do not guarantee that our code is entirely free of bugs or errors.
              </p>
            </section>

            <Separator className="bg-primary/20" />

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India, specifically within the jurisdiction of Madhya Pradesh, without regard to its conflict of law provisions.
              </p>
            </section>

            <Separator className="bg-primary/20" />

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Email: infranestit@gmail.com</li>
                <li>Phone: +91 9098635331</li>
                <li>Address: Ujjain, Madhya Pradesh 456010</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
