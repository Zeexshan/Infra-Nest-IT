import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Layers, 
  Database,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Custom Software Development",
    description: "Tailor-made software solutions designed to address your specific business challenges and workflows.",
    icon: Code
  },
  {
    title: "Web Application Development",
    description: "Responsive, fast, and secure web apps built with modern frameworks like React and Angular.",
    icon: Globe
  },
  {
    title: "API Development & Integration",
    description: "Robust RESTful APIs ensuring seamless communication between your systems and third-party services.",
    icon: Layers
  },
  {
    title: "Full Stack Development (MERN)",
    description: "End-to-end development using MongoDB, Express, React, and Node.js for unified architecture.",
    icon: Layers
  },
  {
    title: "Database Design & Management",
    description: "Optimized database schemas and management for high performance and data integrity.",
    icon: Database
  },
  {
    title: "System Architecture",
    description: "Scalable microservices and distributed systems design for enterprise-grade applications.",
    icon: Smartphone
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive development services to take your business to the next level.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />
              
              <service.icon className="h-12 w-12 text-primary mb-6 relative z-10" />
              
              <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 relative z-10">
                {service.description}
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
