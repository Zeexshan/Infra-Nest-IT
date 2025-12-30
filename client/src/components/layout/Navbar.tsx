import { useState, useEffect } from "react";
// 1. Import useLocation hook to check which page we are on
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/main_1764668585274.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "/projects" },
  { name: "Technologies", href: "#technologies" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. Get the current location object
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    // Check if it's a relative route (starts with /)
    if (href.startsWith("/")) {
      setIsOpen(false);
      return; // Let Wouter handle standard link navigation
    }

    e.preventDefault();
    
    // 3. Logic: If we are NOT on home, go to home. If we ARE on home, scroll.
    if (location !== "/") {
      setLocation("/");
      setIsOpen(false);
      return;
    }

    // Normal scroll logic for Homepage
    const targetId = href.replace('/', ''); // Ensure we just get the ID part
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logo} alt="Infra Nest IT" className="h-12 w-auto object-contain" />
            <span className="text-xl font-bold font-heading tracking-tight text-foreground hidden sm:block">
              Infra Nest IT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              )
            ))}
            <Button onClick={(e) => handleNavigation(e, "#contact")}>Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0 cursor-pointer"
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Button className="w-full mt-4" onClick={(e) => handleNavigation(e, "#contact")}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
