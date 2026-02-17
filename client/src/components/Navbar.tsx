import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:9363604440" className="flex items-center hover:text-white/80 transition-colors">
              <Phone className="w-3 h-3 mr-2" />
              +91 93636 04440
            </a>
            <a href="mailto:srisaiinteriors369@gmail.com" className="flex items-center hover:text-white/80 transition-colors">
              <Mail className="w-3 h-3 mr-2" />
              srisaiinteriors369@gmail.com
            </a>
          </div>
          <div className="tracking-wider text-xs font-medium uppercase opacity-90">
            Luxury Interior Design
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 w-full ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">
              <h1 className={`font-display font-bold text-2xl md:text-3xl tracking-tight leading-none ${scrolled ? 'text-primary' : 'text-foreground'}`}>
                Sri Sai <span className="text-primary font-normal">Interiors</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={`cursor-pointer text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary relative group ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ease-out ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-background/98 backdrop-blur-xl md:hidden flex flex-col pt-10 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    className={`text-2xl font-display cursor-pointer block border-b border-border pb-4 ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <div className="pt-6 space-y-4">
                <a href="tel:9363604440" className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  +91 93636 04440
                </a>
                <a href="mailto:srisaiinteriors369@gmail.com" className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  srisaiinteriors369@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
