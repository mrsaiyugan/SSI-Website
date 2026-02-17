import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <div className="bg-secondary/30 pt-32 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our Story</span>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-foreground mb-6">Crafting Elegance Since 2014</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
              We believe that luxury is not just about expensive materials, but about the perfect harmony of space, light, and texture.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary" />
              {/* man in suit professional portrait */}
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" 
                alt="Rajarajan P" 
                className="w-full aspect-[4/5] object-cover grayscale"
              />
            </div>
            
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6">Meet the Founder</h2>
              <h3 className="text-xl font-medium text-primary mb-6">Rajarajan P</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over a decade of experience in high-end interior design, Rajarajan P established Sri Sai Interiors with a vision to bring world-class design aesthetics to residential and commercial spaces.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                "My philosophy is simple: Listen to the client, understand their lifestyle, and create a space that exceeds their expectations. Design is not just about how it looks, but how it feels to live in it."
              </p>
              
              <div className="space-y-4">
                {["Detail-Oriented Approach", "Quality Craftsmanship", "Timeless Aesthetics", "Client-Centric Process"].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Excellence", desc: "We strive for perfection in every detail, from concept to execution." },
              { title: "Integrity", desc: "Transparent pricing and honest communication are at the core of our business." },
              { title: "Innovation", desc: "We stay ahead of trends to bring modern, innovative solutions to your space." }
            ].map((val, i) => (
              <div key={i} className="text-center p-8 border border-white/10 hover:border-primary/50 transition-colors duration-300">
                <h3 className="font-display text-2xl mb-4 text-primary">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
