import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  Cpu 
} from "lucide-react";

const techCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript", "Angular JS", "Bootstrap", "jQuery", "ES6+"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Python (Core/Adv)", "Django", "Java (J2EE)", "Spring Boot", "Node.js", "Express.js", "Hibernate ORM"]
  },
  {
    title: "Database Technologies",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Oracle SQL", "PostgreSQL"]
  },
  {
    title: "Programming Fundamentals",
    icon: Terminal,
    skills: ["C Programming", "C++ with OOPS", "Data Structures & Algorithms", "System Design"]
  },
  {
    title: "Architecture & Tools",
    icon: Cpu,
    skills: ["Microservices", "REST API", "MERN Stack", "Maven", "Git/GitHub", "Docker"]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-muted-foreground text-lg">
            We master the latest tools and frameworks to build robust, scalable, and future-proof applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/40 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <category.icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
