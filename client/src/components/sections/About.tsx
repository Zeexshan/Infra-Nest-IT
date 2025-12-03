import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "A dedicated team of senior developers and architects ready to tackle complex challenges."
  },
  {
    icon: Award,
    title: "Quality Delivery",
    description: "We adhere to strict code quality standards and testing protocols to ensure robust solutions."
  },
  {
    icon: Zap,
    title: "Latest Technologies",
    description: "Staying ahead of the curve with the most modern and efficient tech stacks available."
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to understand and meet your specific needs."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We Build The Future of <br />
              <span className="text-primary">Software Development</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Infra Nest IT is a premier software development company dedicated to delivering 
              cutting-edge digital solutions. We bridge the gap between complex business 
              requirements and user-friendly technical implementations.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Whether you're a startup looking to disrupt the market or an enterprise 
              optimizing operations, our team brings the expertise and passion needed to 
              succeed in today's digital landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Custom Solutions", "Agile Methodology", "24/7 Support", "Scalable Architecture"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
