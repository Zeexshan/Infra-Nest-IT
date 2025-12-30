import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Clock, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { submitToGoogleSheets } from "@/lib/google-sheets";
import { useState } from "react";

const quickFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export default function FreeConsultation() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof quickFormSchema>>({
    resolver: zodResolver(quickFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quickFormSchema>) {
    setIsSubmitting(true);
    try {
      await submitToGoogleSheets({
        ...values,
        form_type: "Free Consultation"
      });
      toast({
        title: "Request Received!",
        description: "Thank you! Your message has been received. We'll reply to you at contact.infranestit@gmail.com within 24 hours.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send request. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
            <div className="bg-background/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 w-full max-w-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Email" {...field} className="bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full h-auto text-base sm:text-lg py-4 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Schedule Consultation
                        <ArrowRight className="ml-2 w-5 h-5 shrink-0" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-sm font-medium">
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
