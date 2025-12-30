import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    title: "Enterprise Network Security Upgrade",
    description: "Full-scale infrastructure overhaul for a financial firm, implementing zero-trust architecture and multi-layered firewall protection.",
    image: "https://placehold.co/600x400/1a1a1a/888888?text=Security+Project",
    tags: ["Cisco", "Firewall", "Zero-Trust", "Security"]
  },
  {
    title: "Cloud Infrastructure Migration",
    description: "Successfully migrated legacy on-premise servers to a highly available AWS environment, reducing operational costs by 35%.",
    image: "https://placehold.co/600x400/1a1a1a/888888?text=Cloud+Migration",
    tags: ["AWS", "Terraform", "Docker", "Migration"]
  },
  {
    title: "Data Center Modernization",
    description: "Implementation of high-performance computing clusters and optimized cooling systems for a large-scale data center facility.",
    image: "https://placehold.co/600x400/1a1a1a/888888?text=Data+Center",
    tags: ["Infrastructure", "Data Center", "Cooling", "HPC"]
  },
  {
    title: "Smart Office IT Integration",
    description: "Designed and deployed a comprehensive IoT-enabled office network with automated facility management and secure Wi-Fi 6 coverage.",
    image: "https://placehold.co/600x400/1a1a1a/888888?text=Smart+Office",
    tags: ["IoT", "Wi-Fi 6", "Networking", "Integration"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful infrastructure transformations and IT implementations across various industries.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
