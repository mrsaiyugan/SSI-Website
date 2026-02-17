import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, PenTool, Layout, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/use-projects";
import { useTestimonials } from "@/hooks/use-testimonials";

// Hero Section Component
const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      {/* luxury living room interior */}
      <img 
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2674&auto=format&fit=crop" 
        alt="Luxury Interior" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 z-10 relative text-center md:text-left pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl"
      >
        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white text-xs uppercase tracking-[0.2em] mb-6 bg-black/10 backdrop-blur-sm">
          Welcome to Sri Sai Interiors
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Transforming Spaces <br /> 
          <span className="italic font-normal text-primary-foreground/90">with Elegance</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
          We curate luxurious interiors that reflect your personality and elevate your lifestyle. Experience the perfect blend of functionality and sophistication.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <Link href="/portfolio">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-14 px-8 uppercase tracking-widest text-xs w-full md:w-auto">
              Explore Our Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none h-14 px-8 uppercase tracking-widest text-xs w-full md:w-auto bg-transparent">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

// Features Section
const Features = () => {
  const features = [
    { icon: PenTool, title: "Custom Design", desc: "Tailored solutions that match your unique style and requirements perfectly." },
    { icon: Layout, title: "Space Planning", desc: "Optimizing layouts to maximize functionality without compromising aesthetics." },
    { icon: Users, title: "Expert Consultation", desc: "Guidance from experienced professionals throughout your design journey." }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center p-8 border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Projects Section
const FeaturedProjects = () => {
  const { data: projects, isLoading } = useProjects();
  const featuredProjects = projects?.filter(p => p.featured).slice(0, 3) || [];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">Our Masterpieces</h2>
          </div>
          <Link href="/portfolio">
            <Button variant="link" className="text-foreground hover:text-primary p-0 h-auto group hidden md:flex items-center text-sm uppercase tracking-widest mt-4 md:mt-0">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-[3/4] bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
          <Link href="/portfolio">
            <Button className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-none uppercase tracking-widest text-xs h-12" variant="outline">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// About Preview Section
const AboutPreview = () => (
  <section className="py-24 bg-[#1a1a1a] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* founder portrait interior designer */}
          <img 
            src="https://pixabay.com/get/g38f45c8f7233194941087672be5558fa582d253d3a670adbc0605bfe94d8980e50dc52014f56efb170aa00b0dce5755952afd17bd050fca9294977b36a01a58c_1280.jpg" 
            alt="Interior Designer working" 
            className="w-full h-[500px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">About Us</span>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Designing with Passion & Precision</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Founded by Rajarajan P, Sri Sai Interiors is built on the philosophy that every space tells a story. We don't just design interiors; we curate experiences that enhance the way you live and work.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            With a keen eye for detail and a commitment to quality, we blend aesthetics with functionality to create spaces that are timeless, elegant, and uniquely yours.
          </p>
          
          <div className="flex items-center space-x-8 mb-8">
            <div>
              <h4 className="text-3xl font-display text-primary mb-1">100+</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <h4 className="text-3xl font-display text-primary mb-1">10+</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
            </div>
          </div>

          <Link href="/about">
            <Button className="bg-white text-black hover:bg-primary hover:text-white rounded-none h-12 px-8 uppercase tracking-widest text-xs transition-colors">
              Read Our Story
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const Testimonials = () => {
  const { data: testimonials } = useTestimonials();

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">Testimonials</span>
          <h2 className="font-display text-4xl font-medium">Client Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-background p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-6 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{item.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden mr-4">
                  {item.avatarUrl ? (
                    <img src={item.avatarUrl} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs font-bold bg-primary/20 text-primary">
                      {item.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-display font-medium text-foreground">{item.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProjects />
      <AboutPreview />
      <Testimonials />
      <Footer />
    </div>
  );
}
